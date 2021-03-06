(ns termcat.rules.ast
  #+cljs (:require-macros [termcat.core-macros-cljs :refer (defrule)])
  (:require #+clj [termcat.core-macros :refer (defrule)]
            [termcat.rewrite :as rw]
            [termcat.term :as t]))

(defn- pop-n [coll n]
  (subvec coll 0 (- (count coll) n)))

(defn- last-n [coll n]
  (subvec coll (- (count coll) n)))

(defn abstract-blocks
  ([] {:distance 0 :stack nil})
  ([[state result] tok]
   (cond
     (nil? tok) [state result]
     (t/ldelim? tok) [{:distance 1
                       :stack (conj (:stack state)
                                    (inc (:distance state)))}
                      (conj result tok)]
     (t/rdelim? tok) (let [ldelim (get result (- (count result)
                                                 (:distance state)))]
                       (cond (t/delim-pair? ldelim tok)
                             [{:distance (peek (:stack state))
                               :stack (pop (:stack state))}
                              (conj (pop-n result (:distance state))
                                    (t/block ldelim
                                             (t/fragmentcat (last-n result
                                                                    (dec (:distance state))))
                                             tok))]

                             (contains? #{[:rdelim :indent]
                                          [:rdelim :bullet]} (t/tt tok))
                             (recur [{:distance (+ (:distance state)
                                                   -1
                                                   (peek (:stack state)))
                                      :stack (pop (:stack state))}
                                     result]
                                    tok)

                             :else
                             [(update-in state [:distance] inc)
                              (conj result tok)]))
     :else [(update-in state [:distance] inc)
            (conj result tok)])))

(defrule introduce-delim-errors
  [state t1]
  [_ [(:or :ldelim :rdelim) _]] [nil (t/token :error (t/payload t1))])

(defn- merge-blocks [b1 t b2]
  (assert (t/block? b1))
  (assert (t/block? b2))
  (t/block (t/left b1)
           (t/fragmentcat (rw/unwrap b1)
                          [t]
                          (rw/unwrap b2))
           (t/right b1)))

(defrule remove-superfluous-whitespace
  [state t1 t2]
  [_ (:or nil
          :emptyline
          [:block :indent]
          [:block :bullet]) (:or :whitespace
                                 :newline)]
  [nil t1]

  [_ (:or :whitespace
          :newline) (:or nil
                         :emptyline
                         [:block :indent]
                         [:block :bullet])]
  [nil t2])

(defrule convert-newlines-to-whitespace
  [state t1]
  [_ :newline] [nil (t/token :whitespace \newline)])

(defrule fix-bullet-continuations
  [state t1 t2 t3]
  [_ [:block :bullet] (:or :emptyline :newline) [:block :indent]]
  [nil (merge-blocks t1 t2 t3)])