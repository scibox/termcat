(ns termcat.token
  (:require [clojure.core.match :refer (match)]
            [termcat.util :refer :all]))

(defn token
  ([type] (token type nil))
  ([type lexeme] [type lexeme]))

(def toktype first)

(def lexeme second)

(defn char-default-type [c]
  (condp contains? c
    #{\space} :whitespace
    #{\newline} :newline
    #{\( \[ \{} :bracket
    #{\) \] \}} :unbracket
    #{\. \,} :maybe-thunk
    #{\* \+ \-} :maybe-magic
    :default))

(defn char-default-token [c]
  (token (char-default-type c) (str c)))

(defn tokmelt [tok1 tok2]
  (assert (= (toktype tok1) (toktype tok2)))
  (token (toktype tok1)
         (str (lexeme tok1) (lexeme tok2))))

(defn melt-tokens [state result tok]
  (let [prevtok (last result)]
    (if (and (= (toktype prevtok)
                (toktype tok))
             (contains? #{:whitespace :default}
                        (toktype tok)))
      [nil 1 (tokmelt prevtok tok)]
      [nil 0 tok])))

(defn insert-indents
  ([] {:empty-line? true
       :indent-level 0
       :verified-indent-level 0})
  ([state result tok]
   (let [prevtok (last result)
         prevtype (toktype prevtok)
         newtype (toktype tok)

         prev-empty (:empty-line? state)
         prev-indent (:indent-level state)
         prev-verified-indent (:verified-indent-level state)
         [new-empty
          new-indent
          new-verified-indent] (match [newtype prev-empty]
                                      [:newline _] [true 0 prev-verified-indent]
                                      [:whitespace true] [true
                                                          (+ prev-indent (count (lexeme tok)))
                                                          prev-verified-indent]
                                      :else [false prev-indent prev-indent])

         verified-indent-diff (/ (- new-verified-indent prev-verified-indent) 2)]
     (concat [{:empty-line? new-empty
               :indent-level new-indent
               :verified-indent-level new-verified-indent}
              0]
             (for [x (range verified-indent-diff)]
               (token :indent))
             (for [x (range (- verified-indent-diff))]
               (token :unindent))
             [tok]))))

(defn subst-newlines [state result tok]
  (let [[prevprevtok prevtok] (last-n result 2)]
    (match [(toktype (last result))
            (toktype tok)]
           [:whitespace :newline] [nil 1 tok]
           [:newline :newline] [nil 1 (token :emptyline)]
           [:emptyline :whitespace] [nil 0]
           [:emptyline :newline] [nil 0]
           [:emptyline :indent] [nil 1 tok]
           [:emptyline :unindent] [nil 1 tok]
           [:newline _] [nil 1 (token :whitespace) tok]
           :else [nil 0 tok])))