(ns termcat.core
  (:require [termcat.rewrite :refer :all]
            [termcat.term :refer :all]
            [termcat.stage.pretokenize :as pretok]
            [termcat.stage.tokenize :as tok]
            [termcat.stage.ast :as ast]
            [termcat.stage.sugar :as sugar]))

(defn print-fragment
  ([frag] (print-fragment frag ""))
  ([frag indent]
   (assert (fragment? frag))
   (letfn [(token-to-string [t]
             (assert (token? t))
             (str [(tt t) (payload t)]))]
     (doseq [t (.terms frag)]
        (if (block? t)
          (let [new-indent (str indent "  ")]
            (println indent \> (token-to-string (left t)))
            (print-fragment (center t) new-indent)
            (println indent \< (token-to-string (right t))))
          (println indent (token-to-string t)))))))

(-> (pretok/load-termcat-file "hello.tc")
    (rewrite tok/remove-escape-tokens)
    (rewrite tok/merge-tokens)
    (rewrite tok/introduce-emptyline-tokens)
    (rewrite tok/introduce-indent-tokens)
    (rewrite tok/remove-superfluous-whitespace)
    (rewrite tok/introduce-item-tokens)
    (ast/s-reduce ast/abstract-blocks)
    (rewrite ast/fix-bullet-continuations)
    (rewrite ast/convert-newlines-to-whitespace)
    (rewrite ast/remove-superfluous-whitespace)
    (rewrite sugar/introduce-par-calls)
    (rewrite sugar/introduce-section-calls)
    (rewrite sugar/introduce-bullet-list-calls)
    (rewrite sugar/introduce-decorator-calls)
    print-fragment
    )

; (->> (slurp "hello.tc")
;      (r/map tok/char-default-token)
;      (s-reduce tok/subst-escapes)
;      (s-reduce tok/melt-tokens)
;      (s-reduce tok/abstract-emptylines)
;      (s-reduce tok/abstract-indents)
;      (s-reduce tok/subst-whitespace)
;      (s-reduce tok/abstract-bullets)
;      ; TODO add :emptyline at start and end
;      (s-reduce br/abstract-brackets)
;      (rs-reduce sugar/subst-hashlines bracketed-rf)
;      ; TODO remove first and last :emptyline
;      (rs-reduce sugar/subst-emptylines bracketed-rf)
;      (rs-reduce sugar/subst-bullet-continuations bracketed-rf)
;      (rs-reduce sugar/subst-bullets bracketed-rf)
;      (rs-reduce sugar/subst-indents bracketed-rf)
;      (rs-reduce sugar/subst-decorators bracketed-rf)
;      (rs-reduce lam/abstract-funs bracketed-rf)
;      (rs-reduce lam/apply-funs bracketed-rf)
;      (rs-reduce html/to-html bracketed-rf)
;      (html/prettier)
;      (apply str)
;      println)