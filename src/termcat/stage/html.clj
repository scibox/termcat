(ns termcat.stage.html
  (:require [clojure.core.match :refer (match)]
            [clojure.core.reducers :as r]
            [clojure.set :as set]
            [termcat.term :refer :all]
            [termcat.rewrite :refer :all]))

(defrule introduce-typographic-dashes
  [state t1]
  tt
  block?
  [_ :dash] (case (if (string? (payload t1))
                    (count (payload t1)))
              2 [nil (token :default \–)]
              3 [nil (token :default \—)]
              nil))

(defrule introduce-typographic-quotes
  (constant-state {:in-math-tag false})
  [state t1]
  tt
  nil
  [_ :left-quote] (let [length (count (str (payload t1)))
                        doublec (int (/ length 2))
                        also-single (odd? (mod length 2))]
                    (concat [nil]
                            (repeat doublec (token :default \“))
                            (if also-single [(token :default \‘)])))
  [_ :right-quote] (let [length (count (str (payload t1)))
                         doublec (int (/ length 2))
                         also-single (odd? (mod length 2))]
                     (concat [nil]
                             (if also-single [(token :default \’)])
                             (repeat doublec (token :default \”))))
  [_ [:block _]] [nil (block (left t1)
                             (rewrite (center t1) introduce-typographic-quotes)
                             (right t1))])

(defn wrap-math-block [t props]
  (let [tag-name (condp #(contains? %2 %1) props
                   :mo "mo"
                   :mi "mi"
                   :mn "mn"
                   (assert false))]
    (concat [(token :html (str \< tag-name
                               (condp #(contains? %2 %1) props
                                 :prefix " form=prefix"
                                 :infix " form=infix"
                                 :postfix " form=postfix"
                                 nil)
                               (condp #(contains? %2 %1) props
                                 :wide-left " lspace=veryverythickmathspace"
                                 :normal-left " lspace=thickmathspace"
                                 nil)
                               (condp #(contains? %2 %1) props
                                 :wide-right " rspace=veryverythickmathspace"
                                 :normal-right " rspace=thickmathspace"
                                 nil)
                               \>))]
            (.terms (center t))
            [(token :html (str \< \/ tag-name \>))])))

(defrule introduce-math-tags
  (fn
    ([] {:in-math-tag false
         :in-math-recur false})
    ([x] {:in-math-tag (:in-math-tag x)
          :in-math-recur (:in-math-tag x)})
    ([x y] {:in-math-tag (:in-math-tag y)
            :in-math-recur (:in-math-recur x)}))
  [state t1 t2]
  tt
  block?
  [
   _
   _
   [:block (_ :guard :msup)]] (concat [(assoc state :in-math-tag true)
                                       t1]
                                      (if-not (:in-math-tag state)
                                        [(token :html "<math>")])
                                      [(token :html "<msup>")]
                                      (.terms (center t2))
                                      [(token :html "</msup>")])
  [_
   _
   [:block (x :guard :math)]] (concat [(assoc state :in-math-tag true)
                                       t1]
                                      (if-not (:in-math-tag state)
                                        [(token :html "<math>")])
                                      (wrap-math-block t2 x))
  [{:in-math-tag true
    :in-math-recur false} _ _] [{:in-math-tag false
                                 :in-math-recur false}
                                t1
                                (token :html "</math>")
                                t2])

(defn escape [s]
  (cond (string? s) (apply str (for [c s]
                                 (case c
                                   \< "&lt;"
                                   \> "&gt;"
                                   \& "&amp;"
                                   \' "&apos;"
                                   \" "&quot;" c)))
        (char? s) (escape (str s))
        :else ""))

(defrule to-html-tokens
  [state t1]
  tt
  block?
  [_ [:block _]] (concat [nil
                          (token :html (escape (payload (left t1))))]
                         (.terms (center t1))
                         [(token :html (escape (payload (right t1))))])
  [_ :error] [nil
              (token :html "<span class='termcat_error'>")
              (token :html (escape (payload t1)))
              (token :html "</span>")]
  [_ :whitespace] [nil (token :html \space)]
  [_ :html] [nil t1]
  [_ _] [nil (token :html (escape (payload t1)))])

(defrule introduce-boilerplate
  [state t1 t2]
  tt
  (constantly false)
  [_ nil _] [nil
             (token :html "<!DOCTYPE html>")
             (token :html "<html>")
             (token :html "<head>")
             (token :html "<meta charset='utf-8'>")
             (token :html "<title>")
             (token :html "A Termcat Document")
             (token :html "</title>")
             (token :html "<style>")
             (token :html ".termcat_error {")
             (token :html "background: red;")
             (token :html "color: white;")
             (token :html "margin-left: .33ex;")
             (token :html "margin-right: .33ex }")
             (token :html "</style>")
             (token :html "<script async src='http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=MML_HTMLorMML'></script>")
             (token :html "</head>")
             (token :html "<body>")
             t2]
  [_ _ nil] [nil
             t1
             (token :html "</body>")
             (token :html "</html>")])

(defn to-string [frag]
  (->> frag
       .terms
       (r/map payload)
       (r/reduce str)))