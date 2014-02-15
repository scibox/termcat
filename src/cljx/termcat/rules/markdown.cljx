(ns termcat.rules.markdown
  (:require [termcat.rewrite :as rw]
            [termcat.term :as t]
            [termcat.util.lambda :as lambda]))

(t/defrule introduce-section-calls
           [state t1 t2]
           [_ (:or :fun [:block :lambda]) _] nil
           [_ _ [:block :h1]] [nil t1 (lambda/fun-call-head ":h1") t2]
           [_ _ [:block :h2]] [nil t1 (lambda/fun-call-head ":h2") t2]
           [_ _ [:block :h3]] [nil t1 (lambda/fun-call-head ":h3") t2]
           [_ _ [:block :h4]] [nil t1 (lambda/fun-call-head ":h4") t2]
           [_ _ [:block :h5]] [nil t1 (lambda/fun-call-head ":h5") t2]
           [_ _ [:block :h6]] [nil t1 (lambda/fun-call-head ":h6") t2])

(t/defrule introduce-blockquote-calls
           [state t1 t2]
           [_ (:or :fun [:block :lambda]) _] nil
           [_ _ [:block :indent]] [nil t1 (lambda/fun-call-head ":quotation") t2])

(t/defrule introduce-bullet-list-calls
           [state t1 t2]
           [_ [:block :bullet] _] nil
           [_ (:or :fun [:block :lambda]) _] nil
           [_ _ [:block :bullet]] [nil t1 (lambda/fun-call-head ":bullet-list") t2])

(t/defrule introduce-img-calls
           [state t1 t2 t3 t4]
           [_ _ _ _ [:block _]]
           nil

           [_ :bang [:block :bracket] [:block :parenthesis] _]
           (concat [nil]
                   (lambda/fun-call-seq ":img"
                                        (t/center t2)
                                        (t/center t3))
                   [t4]))

(t/defrule introduce-link-calls
           [state t1 t2 t3 t4]
           [_ [:block _] _ _ _]
           nil

           [_ :bang _ _ _]
           nil

           [_ _ _ _ [:block _]]
           nil

           [_ _ [:block :bracket] [:block :parenthesis] _]
           (concat [nil t1]
                   (lambda/fun-call-seq ":link"
                                        (t/center t2)
                                        (t/center t3))
                   [t4]))

(defn wrap-term [tag-name t]
  (concat
    [(t/token :html (str \< tag-name \>))]
    (if (t/block? t)
      (rw/unwrap t)
      [t])
    [(t/token :html (str "</" tag-name \>))]))

(t/defrule remove-decorators
           [state t1 t2 t3 t4 t5 t6 t7 t8 t9]
           [_ x1 x2 :underscore _ :underscore y1 y2 _ _]
           (if-not (contains? (hash-set x1 x2 y1 y2) :underscore)
             (concat [nil t1 t2]
                     (wrap-term "u" t4)
                     [t6 t7 t8 t9]))

           [_ x1 x2 :asterisk _ :asterisk y1 y2 _ _]
           (if-not (contains? (hash-set x1 x2 y1 y2) :asterisk)
             (concat [nil t1 t2]
                     (wrap-term "em" t4)
                     [t6 t7 t8 t9]))

           [_ x1 x2 :asterisk :asterisk _ :asterisk :asterisk y1 y2]
           (if-not (contains? (hash-set x1 x2 y1 y2) :asterisk)
             (concat [nil t1 t2]
                     (wrap-term "strong" t5)
                     [t8 t9])))