// Compiled by ClojureScript 0.0-2156
goog.provide('termcat.rules.tokenize');
goog.require('cljs.core');
goog.require('termcat.term');
goog.require('termcat.term');
goog.require('cljs.core.match');
termcat.rules.tokenize.letters = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 52, ["A",null,"a",null,"B",null,"b",null,"C",null,"c",null,"D",null,"d",null,"E",null,"e",null,"F",null,"f",null,"G",null,"g",null,"H",null,"h",null,"I",null,"i",null,"J",null,"j",null,"K",null,"k",null,"L",null,"l",null,"M",null,"m",null,"N",null,"n",null,"O",null,"o",null,"P",null,"p",null,"Q",null,"q",null,"R",null,"r",null,"S",null,"s",null,"T",null,"t",null,"U",null,"u",null,"V",null,"v",null,"W",null,"w",null,"X",null,"x",null,"Y",null,"y",null,"Z",null,"z",null], null), null);
termcat.rules.tokenize.letter_QMARK_ = (function letter_QMARK_(x){return cljs.core.contains_QMARK_.call(null,termcat.rules.tokenize.letters,x);
});
termcat.rules.tokenize.digit_QMARK_ = (function digit_QMARK_(x){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["0",null,"1",null,"2",null,"3",null,"4",null,"5",null,"6",null,"7",null,"8",null,"9",null], null), null),x);
});
termcat.rules.tokenize.hexdigit_QMARK_ = (function hexdigit_QMARK_(x){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 20, ["A",null,"a",null,"B",null,"b",null,"C",null,"c",null,"D",null,"d",null,"E",null,"e",null,"0",null,"1",null,"2",null,"3",null,"4",null,"5",null,"6",null,"7",null,"8",null,"9",null], null), null),x);
});
termcat.rules.tokenize.escape_html = (function() {
var escape_html = null;
var escape_html__0 = (function (){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"acc","acc",1014000627),cljs.core.PersistentVector.EMPTY], null);
});
var escape_html__2 = (function (p__10042,tok){var vec__10105 = p__10042;var state = cljs.core.nth.call(null,vec__10105,0,null);var result = cljs.core.nth.call(null,vec__10105,1,null);var segue = (function segue(new_stage){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stage","stage",1123661424),new_stage,new cljs.core.Keyword(null,"acc","acc",1014000627),cljs.core.conj.call(null,new cljs.core.Keyword(null,"acc","acc",1014000627).cljs$core$IFn$_invoke$arity$1(state),tok)], null),result], null);
});
var accept = (function accept(whitespace_QMARK_){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"acc","acc",1014000627),cljs.core.PersistentVector.EMPTY], null),(function (){var r = cljs.core.map.call(null,cljs.core.partial.call(null,termcat.term.token,new cljs.core.Keyword(null,"html","html",1017117469)),cljs.core.reduce.call(null,cljs.core.str,cljs.core.map.call(null,termcat.term.payload,cljs.core.conj.call(null,new cljs.core.Keyword(null,"acc","acc",1014000627).cljs$core$IFn$_invoke$arity$1(state),tok))));if(cljs.core.truth_(whitespace_QMARK_))
{return cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.conj.call(null,result,termcat.term.token.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983))),r),termcat.term.token.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)));
} else
{return cljs.core.into.call(null,result,r);
}
})()], null);
});
var reject = (function reject(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"acc","acc",1014000627),cljs.core.PersistentVector.EMPTY], null),cljs.core.conj.call(null,cljs.core.into.call(null,result,new cljs.core.Keyword(null,"acc","acc",1014000627).cljs$core$IFn$_invoke$arity$1(state)),tok)], null);
});
var ocr_10106 = new cljs.core.Keyword(null,"stage","stage",1123661424).cljs$core$IFn$_invoke$arity$1(state);var ocr_10107 = termcat.term.payload.call(null,tok);try{if((ocr_10106 === null))
{try{if(cljs.core._EQ_.call(null,ocr_10107,"\\"))
{return segue.call(null,new cljs.core.Keyword(null,"escape","escape",4014699507));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10166){if((e10166 instanceof Error))
{var e__4796__auto__ = e10166;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10166;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"escape","escape",4014699507)))
{return reject.call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e10118){if((e10118 instanceof Error))
{var e__4796__auto__ = e10118;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{if((ocr_10106 === null))
{try{if(cljs.core._EQ_.call(null,ocr_10107,"&"))
{return segue.call(null,new cljs.core.Keyword(null,"entity","entity",4010596181));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10163){if((e10163 instanceof Error))
{var e__4796__auto____$1 = e10163;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10163;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"entity","entity",4010596181)))
{try{if(termcat.rules.tokenize.letter_QMARK_.call(null,ocr_10107))
{return segue.call(null,new cljs.core.Keyword(null,"named-entity","named-entity",4475095145));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10164){if((e10164 instanceof Error))
{var e__4796__auto____$1 = e10164;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10164;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"named-entity","named-entity",4475095145)))
{try{if(termcat.rules.tokenize.letter_QMARK_.call(null,ocr_10107))
{return segue.call(null,new cljs.core.Keyword(null,"named-entity","named-entity",4475095145));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10165){if((e10165 instanceof Error))
{var e__4796__auto____$1 = e10165;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10165;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}catch (e10119){if((e10119 instanceof Error))
{var e__4796__auto____$1 = e10119;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"entity","entity",4010596181)))
{try{if(cljs.core._EQ_.call(null,ocr_10107,"#"))
{return segue.call(null,new cljs.core.Keyword(null,"maybe-num-entity","maybe-num-entity",2378162689));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10161){if((e10161 instanceof Error))
{var e__4796__auto____$2 = e10161;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10161;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"maybe-num-entity","maybe-num-entity",2378162689)))
{try{if(cljs.core._EQ_.call(null,ocr_10107,"x"))
{return segue.call(null,new cljs.core.Keyword(null,"maybe-hex-num-entity","maybe-hex-num-entity",4128211315));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10162){if((e10162 instanceof Error))
{var e__4796__auto____$2 = e10162;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10162;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e10120){if((e10120 instanceof Error))
{var e__4796__auto____$2 = e10120;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"maybe-num-entity","maybe-num-entity",2378162689)))
{try{if(termcat.rules.tokenize.digit_QMARK_.call(null,ocr_10107))
{return segue.call(null,new cljs.core.Keyword(null,"dec-num-entity","dec-num-entity",2876597799));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10156){if((e10156 instanceof Error))
{var e__4796__auto____$3 = e10156;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10156;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"dec-num-entity","dec-num-entity",2876597799)))
{try{if(termcat.rules.tokenize.digit_QMARK_.call(null,ocr_10107))
{return segue.call(null,new cljs.core.Keyword(null,"dec-num-entity","dec-num-entity",2876597799));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10157){if((e10157 instanceof Error))
{var e__4796__auto____$3 = e10157;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10157;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"maybe-hex-num-entity","maybe-hex-num-entity",4128211315)))
{try{if(termcat.rules.tokenize.hexdigit_QMARK_.call(null,ocr_10107))
{return segue.call(null,new cljs.core.Keyword(null,"hex-num-entity","hex-num-entity",3565100398));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10158){if((e10158 instanceof Error))
{var e__4796__auto____$3 = e10158;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10158;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"hex-num-entity","hex-num-entity",3565100398)))
{try{if(termcat.rules.tokenize.hexdigit_QMARK_.call(null,ocr_10107))
{return segue.call(null,new cljs.core.Keyword(null,"hex-num-entity","hex-num-entity",3565100398));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10159){if((e10159 instanceof Error))
{var e__4796__auto____$3 = e10159;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10159;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"named-entity","named-entity",4475095145)))
{try{if(cljs.core._EQ_.call(null,ocr_10107,";"))
{return accept.call(null,false);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10160){if((e10160 instanceof Error))
{var e__4796__auto____$3 = e10160;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10160;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}
}catch (e10121){if((e10121 instanceof Error))
{var e__4796__auto____$3 = e10121;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"dec-num-entity","dec-num-entity",2876597799)))
{try{if(cljs.core._EQ_.call(null,ocr_10107,";"))
{return accept.call(null,false);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10152){if((e10152 instanceof Error))
{var e__4796__auto____$4 = e10152;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10152;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"hex-num-entity","hex-num-entity",3565100398)))
{try{if(cljs.core._EQ_.call(null,ocr_10107,";"))
{return accept.call(null,false);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10153){if((e10153 instanceof Error))
{var e__4796__auto____$4 = e10153;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10153;
} else
{return null;
}
}
}} else
{if((ocr_10106 === null))
{try{if(cljs.core._EQ_.call(null,ocr_10107,"<"))
{return segue.call(null,new cljs.core.Keyword(null,"before-tag-name","before-tag-name",2880946910));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10154){if((e10154 instanceof Error))
{var e__4796__auto____$4 = e10154;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10154;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"before-tag-name","before-tag-name",2880946910)))
{try{if(cljs.core._EQ_.call(null,ocr_10107,"/"))
{return segue.call(null,new cljs.core.Keyword(null,"maybe-in-tag-name","maybe-in-tag-name",1504219667));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10155){if((e10155 instanceof Error))
{var e__4796__auto____$4 = e10155;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10155;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}catch (e10122){if((e10122 instanceof Error))
{var e__4796__auto____$4 = e10122;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"before-tag-name","before-tag-name",2880946910)))
{try{if(termcat.rules.tokenize.letter_QMARK_.call(null,ocr_10107))
{return segue.call(null,new cljs.core.Keyword(null,"in-tag-name","in-tag-name",629665784));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10149){if((e10149 instanceof Error))
{var e__4796__auto____$5 = e10149;if((e__4796__auto____$5 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$5;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10149;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"maybe-in-tag-name","maybe-in-tag-name",1504219667)))
{try{if(termcat.rules.tokenize.letter_QMARK_.call(null,ocr_10107))
{return segue.call(null,new cljs.core.Keyword(null,"in-tag-name","in-tag-name",629665784));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10150){if((e10150 instanceof Error))
{var e__4796__auto____$5 = e10150;if((e__4796__auto____$5 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$5;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10150;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"in-tag-name","in-tag-name",629665784)))
{try{if(termcat.rules.tokenize.letter_QMARK_.call(null,ocr_10107))
{return segue.call(null,new cljs.core.Keyword(null,"in-tag-name","in-tag-name",629665784));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10151){if((e10151 instanceof Error))
{var e__4796__auto____$5 = e10151;if((e__4796__auto____$5 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$5;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10151;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}catch (e10123){if((e10123 instanceof Error))
{var e__4796__auto____$5 = e10123;if((e__4796__auto____$5 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"in-tag-name","in-tag-name",629665784)))
{try{if(cljs.core._EQ_.call(null,ocr_10107,"-"))
{return segue.call(null,new cljs.core.Keyword(null,"maybe-in-tag-name","maybe-in-tag-name",1504219667));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10148){if((e10148 instanceof Error))
{var e__4796__auto____$6 = e10148;if((e__4796__auto____$6 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$6;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10148;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10124){if((e10124 instanceof Error))
{var e__4796__auto____$6 = e10124;if((e__4796__auto____$6 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"in-tag-name","in-tag-name",629665784)))
{try{if(cljs.core._EQ_.call(null,ocr_10107," "))
{return segue.call(null,new cljs.core.Keyword(null,"after-tag-name","after-tag-name",3168261409));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10145){if((e10145 instanceof Error))
{var e__4796__auto____$7 = e10145;if((e__4796__auto____$7 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$7;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10145;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"after-tag-name","after-tag-name",3168261409)))
{try{if(cljs.core._EQ_.call(null,ocr_10107," "))
{return segue.call(null,new cljs.core.Keyword(null,"after-tag-name","after-tag-name",3168261409));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10146){if((e10146 instanceof Error))
{var e__4796__auto____$7 = e10146;if((e__4796__auto____$7 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$7;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10146;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"after-val","after-val",2032002850)))
{try{if(cljs.core._EQ_.call(null,ocr_10107," "))
{return segue.call(null,new cljs.core.Keyword(null,"after-tag-name","after-tag-name",3168261409));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10147){if((e10147 instanceof Error))
{var e__4796__auto____$7 = e10147;if((e__4796__auto____$7 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$7;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10147;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}catch (e10125){if((e10125 instanceof Error))
{var e__4796__auto____$7 = e10125;if((e__4796__auto____$7 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"after-tag-name","after-tag-name",3168261409)))
{try{if(termcat.rules.tokenize.letter_QMARK_.call(null,ocr_10107))
{return segue.call(null,new cljs.core.Keyword(null,"in-attr-name","in-attr-name",1291372977));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10142){if((e10142 instanceof Error))
{var e__4796__auto____$8 = e10142;if((e__4796__auto____$8 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$8;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10142;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"maybe-in-attr-name","maybe-in-attr-name",2632739574)))
{try{if(termcat.rules.tokenize.letter_QMARK_.call(null,ocr_10107))
{return segue.call(null,new cljs.core.Keyword(null,"in-attr-name","in-attr-name",1291372977));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10143){if((e10143 instanceof Error))
{var e__4796__auto____$8 = e10143;if((e__4796__auto____$8 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$8;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10143;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"in-attr-name","in-attr-name",1291372977)))
{try{if(termcat.rules.tokenize.letter_QMARK_.call(null,ocr_10107))
{return segue.call(null,new cljs.core.Keyword(null,"in-attr-name","in-attr-name",1291372977));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10144){if((e10144 instanceof Error))
{var e__4796__auto____$8 = e10144;if((e__4796__auto____$8 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$8;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10144;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}catch (e10126){if((e10126 instanceof Error))
{var e__4796__auto____$8 = e10126;if((e__4796__auto____$8 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"in-attr-name","in-attr-name",1291372977)))
{try{if(cljs.core._EQ_.call(null,ocr_10107,"-"))
{return segue.call(null,new cljs.core.Keyword(null,"maybe-in-attr-name","maybe-in-attr-name",2632739574));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10141){if((e10141 instanceof Error))
{var e__4796__auto____$9 = e10141;if((e__4796__auto____$9 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$9;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10141;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10127){if((e10127 instanceof Error))
{var e__4796__auto____$9 = e10127;if((e__4796__auto____$9 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"in-attr-name","in-attr-name",1291372977)))
{try{if(cljs.core._EQ_.call(null,ocr_10107,"="))
{return segue.call(null,new cljs.core.Keyword(null,"before-val","before-val",1531287365));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10137){if((e10137 instanceof Error))
{var e__4796__auto____$10 = e10137;if((e__4796__auto____$10 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$10;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10137;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"before-val","before-val",1531287365)))
{try{if(termcat.rules.tokenize.letter_QMARK_.call(null,ocr_10107))
{return segue.call(null,new cljs.core.Keyword(null,"in-val","in-val",4123009515));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10138){if((e10138 instanceof Error))
{var e__4796__auto____$10 = e10138;if((e__4796__auto____$10 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$10;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10138;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"maybe-in-val","maybe-in-val",675502832)))
{try{if(termcat.rules.tokenize.letter_QMARK_.call(null,ocr_10107))
{return segue.call(null,new cljs.core.Keyword(null,"in-val","in-val",4123009515));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10139){if((e10139 instanceof Error))
{var e__4796__auto____$10 = e10139;if((e__4796__auto____$10 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$10;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10139;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"in-val","in-val",4123009515)))
{try{if(termcat.rules.tokenize.letter_QMARK_.call(null,ocr_10107))
{return segue.call(null,new cljs.core.Keyword(null,"in-val","in-val",4123009515));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10140){if((e10140 instanceof Error))
{var e__4796__auto____$10 = e10140;if((e__4796__auto____$10 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$10;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10140;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}catch (e10128){if((e10128 instanceof Error))
{var e__4796__auto____$10 = e10128;if((e__4796__auto____$10 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"in-val","in-val",4123009515)))
{try{if(cljs.core._EQ_.call(null,ocr_10107,"-"))
{return segue.call(null,new cljs.core.Keyword(null,"maybe-in-val","maybe-in-val",675502832));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10134){if((e10134 instanceof Error))
{var e__4796__auto____$11 = e10134;if((e__4796__auto____$11 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$11;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10134;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"before-val","before-val",1531287365)))
{try{if(cljs.core._EQ_.call(null,ocr_10107,"\""))
{return segue.call(null,new cljs.core.Keyword(null,"in-double-quotes","in-double-quotes",3221606333));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10135){if((e10135 instanceof Error))
{var e__4796__auto____$11 = e10135;if((e__4796__auto____$11 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$11;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10135;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"in-double-quotes","in-double-quotes",3221606333)))
{try{if(cljs.core._EQ_.call(null,ocr_10107,"\""))
{return segue.call(null,new cljs.core.Keyword(null,"after-val","after-val",2032002850));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10136){if((e10136 instanceof Error))
{var e__4796__auto____$11 = e10136;if((e__4796__auto____$11 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$11;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10136;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}catch (e10129){if((e10129 instanceof Error))
{var e__4796__auto____$11 = e10129;if((e__4796__auto____$11 === cljs.core.match.backtrack))
{try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"in-double-quotes","in-double-quotes",3221606333)))
{return segue.call(null,new cljs.core.Keyword(null,"in-double-quotes","in-double-quotes",3221606333));
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"in-tag-name","in-tag-name",629665784)))
{try{if(cljs.core._EQ_.call(null,ocr_10107,">"))
{return accept.call(null,true);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10131){if((e10131 instanceof Error))
{var e__4796__auto____$12 = e10131;if((e__4796__auto____$12 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$12;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10131;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"in-val","in-val",4123009515)))
{try{if(cljs.core._EQ_.call(null,ocr_10107,">"))
{return accept.call(null,true);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10132){if((e10132 instanceof Error))
{var e__4796__auto____$12 = e10132;if((e__4796__auto____$12 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$12;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10132;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10106,new cljs.core.Keyword(null,"after-val","after-val",2032002850)))
{try{if(cljs.core._EQ_.call(null,ocr_10107,">"))
{return accept.call(null,true);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10133){if((e10133 instanceof Error))
{var e__4796__auto____$12 = e10133;if((e__4796__auto____$12 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$12;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10133;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}catch (e10130){if((e10130 instanceof Error))
{var e__4796__auto____$12 = e10130;if((e__4796__auto____$12 === cljs.core.match.backtrack))
{return reject.call(null);
} else
{throw e__4796__auto____$12;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10130;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$11;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10129;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$10;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10128;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$9;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10127;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$8;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10126;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$7;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10125;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$6;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10124;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$5;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10123;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$4;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10122;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$3;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10121;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10120;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10119;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10118;
} else
{return null;
}
}
}});
escape_html = function(p__10042,tok){
switch(arguments.length){
case 0:
return escape_html__0.call(this);
case 2:
return escape_html__2.call(this,p__10042,tok);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
escape_html.cljs$core$IFn$_invoke$arity$0 = escape_html__0;
escape_html.cljs$core$IFn$_invoke$arity$2 = escape_html__2;
return escape_html;
})()
;
/**
* 
*/
termcat.rules.tokenize.remove_escape_tokens = termcat.rewrite.abstraction.call(null,(function() {
var G__10177 = null;
var G__10177__0 = (function (){return null;
});
var G__10177__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.call(null,input__6469__auto__,cljs.core.repeat.call(null,null));var vec__10167 = cljs.core.cons.call(null,state__6468__auto__,cljs.core.take.call(null,2,padded_input__6470__auto__));var state = cljs.core.nth.call(null,vec__10167,0,null);var t1 = cljs.core.nth.call(null,vec__10167,1,null);var t2 = cljs.core.nth.call(null,vec__10167,2,null);var temp__4090__auto__ = (function (){var ocr_10168 = clojure.core.reducers.reduce.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.call(null,2,clojure.core.reducers.map.call(null,termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_.call(null,ocr_10168)) && ((cljs.core.count.call(null,ocr_10168) === 3)))
{try{var ocr_10168_1__10173 = cljs.core.nth.call(null,ocr_10168,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10168_1__10173,new cljs.core.Keyword(null,"escape","escape",4014699507)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.call(null,new cljs.core.Keyword(null,"default","default",2558708147),termcat.term.payload.call(null,t2))], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10176){if((e10176 instanceof Error))
{var e__4796__auto__ = e10176;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10176;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10175){if((e10175 instanceof Error))
{var e__4796__auto__ = e10175;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10175;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first.call(null,r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.call(null,cljs.core.next.call(null,r__6471__auto__),cljs.core.drop.call(null,2,input__6469__auto__))], null);
} else
{return null;
}
});
G__10177 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__10177__0.call(this);
case 2:
return G__10177__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10177;
})()
);
/**
* 
*/
termcat.rules.tokenize.remove_annotated_tokens = termcat.rewrite.abstraction.call(null,(function() {
var G__10206 = null;
var G__10206__0 = (function (){return null;
});
var G__10206__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.call(null,input__6469__auto__,cljs.core.repeat.call(null,null));var vec__10178 = cljs.core.cons.call(null,state__6468__auto__,cljs.core.take.call(null,2,padded_input__6470__auto__));var state = cljs.core.nth.call(null,vec__10178,0,null);var t1 = cljs.core.nth.call(null,vec__10178,1,null);var t2 = cljs.core.nth.call(null,vec__10178,2,null);var temp__4090__auto__ = (function (){var ocr_10179 = clojure.core.reducers.reduce.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.call(null,2,clojure.core.reducers.map.call(null,termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_.call(null,ocr_10179)) && ((cljs.core.count.call(null,ocr_10179) === 3)))
{try{var ocr_10179_1__10191 = cljs.core.nth.call(null,ocr_10179,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10179_1__10191,new cljs.core.Keyword(null,"tilde","tilde",1124267722)))
{try{var ocr_10179_2__10192 = cljs.core.nth.call(null,ocr_10179,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10179_2__10192,new cljs.core.Keyword(null,"tilde","tilde",1124267722)))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10205){if((e10205 instanceof Error))
{var e__4796__auto__ = e10205;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10205;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10194){if((e10194 instanceof Error))
{var e__4796__auto__ = e10194;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_10179_1__10191 = cljs.core.nth.call(null,ocr_10179,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10179_1__10191,new cljs.core.Keyword(null,"tilde","tilde",1124267722)))
{try{var ocr_10179_2__10192 = cljs.core.nth.call(null,ocr_10179,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10179_2__10192,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)))
{return null;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10179_2__10192,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{return null;
} else
{if((ocr_10179_2__10192 === null))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}catch (e10201){if((e10201 instanceof Error))
{var e__4796__auto____$1 = e10201;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10201;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10179_1__10191,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)))
{try{var ocr_10179_2__10192 = cljs.core.nth.call(null,ocr_10179,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10179_2__10192,new cljs.core.Keyword(null,"tilde","tilde",1124267722)))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10202){if((e10202 instanceof Error))
{var e__4796__auto____$1 = e10202;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10202;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10179_1__10191,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{try{var ocr_10179_2__10192 = cljs.core.nth.call(null,ocr_10179,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10179_2__10192,new cljs.core.Keyword(null,"tilde","tilde",1124267722)))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10203){if((e10203 instanceof Error))
{var e__4796__auto____$1 = e10203;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10203;
} else
{return null;
}
}
}} else
{if((ocr_10179_1__10191 === null))
{try{var ocr_10179_2__10192 = cljs.core.nth.call(null,ocr_10179,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10179_2__10192,new cljs.core.Keyword(null,"tilde","tilde",1124267722)))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10204){if((e10204 instanceof Error))
{var e__4796__auto____$1 = e10204;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10204;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}catch (e10195){if((e10195 instanceof Error))
{var e__4796__auto____$1 = e10195;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_10179_1__10191 = cljs.core.nth.call(null,ocr_10179,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10179_1__10191,new cljs.core.Keyword(null,"tilde","tilde",1124267722)))
{try{var ocr_10179_2__10192 = cljs.core.nth.call(null,ocr_10179,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10179_2__10192,new cljs.core.Keyword(null,"greater-than","greater-than",3888014086)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.term.token.call(null,new cljs.core.Keyword(null,"default","default",2558708147),"\u27E9")], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10199){if((e10199 instanceof Error))
{var e__4796__auto____$2 = e10199;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10199;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10179_1__10191,new cljs.core.Keyword(null,"less-than","less-than",1333713095)))
{try{var ocr_10179_2__10192 = cljs.core.nth.call(null,ocr_10179,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10179_2__10192,new cljs.core.Keyword(null,"tilde","tilde",1124267722)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.call(null,new cljs.core.Keyword(null,"default","default",2558708147),"\u27E8"),t2], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10200){if((e10200 instanceof Error))
{var e__4796__auto____$2 = e10200;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10200;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e10196){if((e10196 instanceof Error))
{var e__4796__auto____$2 = e10196;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_10179_1__10191 = cljs.core.nth.call(null,ocr_10179,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10179_1__10191,new cljs.core.Keyword(null,"tilde","tilde",1124267722)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.term.token.call(null,new cljs.core.Keyword(null,"default","default",2558708147),termcat.term.payload.call(null,t2))], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10197){if((e10197 instanceof Error))
{var e__4796__auto____$3 = e10197;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{try{var ocr_10179_2__10192 = cljs.core.nth.call(null,ocr_10179,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10179_2__10192,new cljs.core.Keyword(null,"tilde","tilde",1124267722)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.call(null,new cljs.core.Keyword(null,"default","default",2558708147),termcat.term.payload.call(null,t1)),t2], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10198){if((e10198 instanceof Error))
{var e__4796__auto____$4 = e10198;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10198;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$3;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10197;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10196;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10195;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10194;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10193){if((e10193 instanceof Error))
{var e__4796__auto__ = e10193;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10193;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first.call(null,r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.call(null,cljs.core.next.call(null,r__6471__auto__),cljs.core.drop.call(null,2,input__6469__auto__))], null);
} else
{return null;
}
});
G__10206 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__10206__0.call(this);
case 2:
return G__10206__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10206;
})()
);
/**
* 
*/
termcat.rules.tokenize.merge_tokens = termcat.rewrite.abstraction.call(null,(function() {
var G__10217 = null;
var G__10217__0 = (function (){return null;
});
var G__10217__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.call(null,input__6469__auto__,cljs.core.repeat.call(null,null));var vec__10207 = cljs.core.cons.call(null,state__6468__auto__,cljs.core.take.call(null,2,padded_input__6470__auto__));var state = cljs.core.nth.call(null,vec__10207,0,null);var t1 = cljs.core.nth.call(null,vec__10207,1,null);var t2 = cljs.core.nth.call(null,vec__10207,2,null);var temp__4090__auto__ = (function (){var ocr_10208 = clojure.core.reducers.reduce.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.call(null,2,clojure.core.reducers.map.call(null,termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_.call(null,ocr_10208)) && ((cljs.core.count.call(null,ocr_10208) === 3)))
{try{var ocr_10208_2__10214 = cljs.core.nth.call(null,ocr_10208,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10208_2__10214,new cljs.core.Keyword(null,"default","default",2558708147)))
{if(cljs.core._EQ_.call(null,termcat.term.tt.call(null,t1),termcat.term.tt.call(null,t2)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.with_meta.call(null,termcat.term.token.call(null,termcat.term.tt.call(null,t1),((cljs.core.not.call(null,termcat.term.payload.call(null,t1)))?termcat.term.payload.call(null,t2):((cljs.core.not.call(null,termcat.term.payload.call(null,t2)))?termcat.term.payload.call(null,t1):((new cljs.core.Keyword(null,"else","else",1017020587))?[cljs.core.str(termcat.term.payload.call(null,t1)),cljs.core.str(termcat.term.payload.call(null,t2))].join(''):null)))),cljs.core.assoc.call(null,cljs.core.meta.call(null,t1),new cljs.core.Keyword(null,"rpos","rpos",1017411604),new cljs.core.Keyword(null,"rpos","rpos",1017411604).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,t2))))], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10208_2__10214,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)))
{if(cljs.core._EQ_.call(null,termcat.term.tt.call(null,t1),termcat.term.tt.call(null,t2)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.with_meta.call(null,termcat.term.token.call(null,termcat.term.tt.call(null,t1),((cljs.core.not.call(null,termcat.term.payload.call(null,t1)))?termcat.term.payload.call(null,t2):((cljs.core.not.call(null,termcat.term.payload.call(null,t2)))?termcat.term.payload.call(null,t1):((new cljs.core.Keyword(null,"else","else",1017020587))?[cljs.core.str(termcat.term.payload.call(null,t1)),cljs.core.str(termcat.term.payload.call(null,t2))].join(''):null)))),cljs.core.assoc.call(null,cljs.core.meta.call(null,t1),new cljs.core.Keyword(null,"rpos","rpos",1017411604),new cljs.core.Keyword(null,"rpos","rpos",1017411604).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,t2))))], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10208_2__10214,new cljs.core.Keyword(null,"tilde","tilde",1124267722)))
{if(cljs.core._EQ_.call(null,termcat.term.tt.call(null,t1),termcat.term.tt.call(null,t2)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.with_meta.call(null,termcat.term.token.call(null,termcat.term.tt.call(null,t1),((cljs.core.not.call(null,termcat.term.payload.call(null,t1)))?termcat.term.payload.call(null,t2):((cljs.core.not.call(null,termcat.term.payload.call(null,t2)))?termcat.term.payload.call(null,t1):((new cljs.core.Keyword(null,"else","else",1017020587))?[cljs.core.str(termcat.term.payload.call(null,t1)),cljs.core.str(termcat.term.payload.call(null,t2))].join(''):null)))),cljs.core.assoc.call(null,cljs.core.meta.call(null,t1),new cljs.core.Keyword(null,"rpos","rpos",1017411604),new cljs.core.Keyword(null,"rpos","rpos",1017411604).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,t2))))], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10208_2__10214,new cljs.core.Keyword(null,"dash","dash",1016980228)))
{if(cljs.core._EQ_.call(null,termcat.term.tt.call(null,t1),termcat.term.tt.call(null,t2)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.with_meta.call(null,termcat.term.token.call(null,termcat.term.tt.call(null,t1),((cljs.core.not.call(null,termcat.term.payload.call(null,t1)))?termcat.term.payload.call(null,t2):((cljs.core.not.call(null,termcat.term.payload.call(null,t2)))?termcat.term.payload.call(null,t1):((new cljs.core.Keyword(null,"else","else",1017020587))?[cljs.core.str(termcat.term.payload.call(null,t1)),cljs.core.str(termcat.term.payload.call(null,t2))].join(''):null)))),cljs.core.assoc.call(null,cljs.core.meta.call(null,t1),new cljs.core.Keyword(null,"rpos","rpos",1017411604),new cljs.core.Keyword(null,"rpos","rpos",1017411604).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,t2))))], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10208_2__10214,new cljs.core.Keyword(null,"left-quote","left-quote",2041480360)))
{if(cljs.core._EQ_.call(null,termcat.term.tt.call(null,t1),termcat.term.tt.call(null,t2)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.with_meta.call(null,termcat.term.token.call(null,termcat.term.tt.call(null,t1),((cljs.core.not.call(null,termcat.term.payload.call(null,t1)))?termcat.term.payload.call(null,t2):((cljs.core.not.call(null,termcat.term.payload.call(null,t2)))?termcat.term.payload.call(null,t1):((new cljs.core.Keyword(null,"else","else",1017020587))?[cljs.core.str(termcat.term.payload.call(null,t1)),cljs.core.str(termcat.term.payload.call(null,t2))].join(''):null)))),cljs.core.assoc.call(null,cljs.core.meta.call(null,t1),new cljs.core.Keyword(null,"rpos","rpos",1017411604),new cljs.core.Keyword(null,"rpos","rpos",1017411604).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,t2))))], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10208_2__10214,new cljs.core.Keyword(null,"right-quote","right-quote",3807707901)))
{if(cljs.core._EQ_.call(null,termcat.term.tt.call(null,t1),termcat.term.tt.call(null,t2)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.with_meta.call(null,termcat.term.token.call(null,termcat.term.tt.call(null,t1),((cljs.core.not.call(null,termcat.term.payload.call(null,t1)))?termcat.term.payload.call(null,t2):((cljs.core.not.call(null,termcat.term.payload.call(null,t2)))?termcat.term.payload.call(null,t1):((new cljs.core.Keyword(null,"else","else",1017020587))?[cljs.core.str(termcat.term.payload.call(null,t1)),cljs.core.str(termcat.term.payload.call(null,t2))].join(''):null)))),cljs.core.assoc.call(null,cljs.core.meta.call(null,t1),new cljs.core.Keyword(null,"rpos","rpos",1017411604),new cljs.core.Keyword(null,"rpos","rpos",1017411604).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,t2))))], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10208_2__10214,new cljs.core.Keyword(null,"hash","hash",1017099392)))
{if(cljs.core._EQ_.call(null,termcat.term.tt.call(null,t1),termcat.term.tt.call(null,t2)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.with_meta.call(null,termcat.term.token.call(null,termcat.term.tt.call(null,t1),((cljs.core.not.call(null,termcat.term.payload.call(null,t1)))?termcat.term.payload.call(null,t2):((cljs.core.not.call(null,termcat.term.payload.call(null,t2)))?termcat.term.payload.call(null,t1):((new cljs.core.Keyword(null,"else","else",1017020587))?[cljs.core.str(termcat.term.payload.call(null,t1)),cljs.core.str(termcat.term.payload.call(null,t2))].join(''):null)))),cljs.core.assoc.call(null,cljs.core.meta.call(null,t1),new cljs.core.Keyword(null,"rpos","rpos",1017411604),new cljs.core.Keyword(null,"rpos","rpos",1017411604).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,t2))))], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10208_2__10214,new cljs.core.Keyword(null,"html","html",1017117469)))
{if(cljs.core._EQ_.call(null,termcat.term.tt.call(null,t1),termcat.term.tt.call(null,t2)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.with_meta.call(null,termcat.term.token.call(null,termcat.term.tt.call(null,t1),((cljs.core.not.call(null,termcat.term.payload.call(null,t1)))?termcat.term.payload.call(null,t2):((cljs.core.not.call(null,termcat.term.payload.call(null,t2)))?termcat.term.payload.call(null,t1):((new cljs.core.Keyword(null,"else","else",1017020587))?[cljs.core.str(termcat.term.payload.call(null,t1)),cljs.core.str(termcat.term.payload.call(null,t2))].join(''):null)))),cljs.core.assoc.call(null,cljs.core.meta.call(null,t1),new cljs.core.Keyword(null,"rpos","rpos",1017411604),new cljs.core.Keyword(null,"rpos","rpos",1017411604).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,t2))))], null);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}
}
}
}
}catch (e10216){if((e10216 instanceof Error))
{var e__4796__auto__ = e10216;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10216;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10215){if((e10215 instanceof Error))
{var e__4796__auto__ = e10215;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10215;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first.call(null,r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.call(null,cljs.core.next.call(null,r__6471__auto__),cljs.core.drop.call(null,2,input__6469__auto__))], null);
} else
{return null;
}
});
G__10217 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__10217__0.call(this);
case 2:
return G__10217__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10217;
})()
);
/**
* 
*/
termcat.rules.tokenize.remove_magic_tokens = termcat.rewrite.abstraction.call(null,(function() {
var G__10242 = null;
var G__10242__0 = (function (){return null;
});
var G__10242__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.call(null,input__6469__auto__,cljs.core.repeat.call(null,null));var vec__10218 = cljs.core.cons.call(null,state__6468__auto__,cljs.core.take.call(null,3,padded_input__6470__auto__));var state = cljs.core.nth.call(null,vec__10218,0,null);var t1 = cljs.core.nth.call(null,vec__10218,1,null);var t2 = cljs.core.nth.call(null,vec__10218,2,null);var t3 = cljs.core.nth.call(null,vec__10218,3,null);var temp__4090__auto__ = (function (){var ocr_10219 = clojure.core.reducers.reduce.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.call(null,3,clojure.core.reducers.map.call(null,termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_.call(null,ocr_10219)) && ((cljs.core.count.call(null,ocr_10219) === 4)))
{try{var ocr_10219_2__10231 = cljs.core.nth.call(null,ocr_10219,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10219_2__10231,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)))
{return null;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10219_2__10231,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{return null;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10219_2__10231,new cljs.core.Keyword(null,"emptyline","emptyline",3889609267)))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}catch (e10236){if((e10236 instanceof Error))
{var e__4796__auto__ = e10236;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_10219_2__10231 = cljs.core.nth.call(null,ocr_10219,2);if((cljs.core.vector_QMARK_.call(null,ocr_10219_2__10231)) && ((cljs.core.count.call(null,ocr_10219_2__10231) === 2)))
{try{var ocr_10219_2__10231_0__10233 = cljs.core.nth.call(null,ocr_10219_2__10231,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10219_2__10231_0__10233,new cljs.core.Keyword(null,"block","block",1107736575)))
{return null;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10219_2__10231_0__10233,new cljs.core.Keyword(null,"ldelim","ldelim",4201320693)))
{return null;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10219_2__10231_0__10233,new cljs.core.Keyword(null,"rdelim","rdelim",4373095599)))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}catch (e10241){if((e10241 instanceof Error))
{var e__4796__auto____$1 = e10241;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10241;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10237){if((e10237 instanceof Error))
{var e__4796__auto____$1 = e10237;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_10219_2__10231 = cljs.core.nth.call(null,ocr_10219,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10219_2__10231,new cljs.core.Keyword(null,"percent","percent",4629944247)))
{return null;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10219_2__10231,new cljs.core.Keyword(null,"circumflex","circumflex",4463600090)))
{return null;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10219_2__10231,new cljs.core.Keyword(null,"underscore","underscore",3544053292)))
{return null;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10219_2__10231,new cljs.core.Keyword(null,"tilde","tilde",1124267722)))
{return null;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10219_2__10231,new cljs.core.Keyword(null,"left-quote","left-quote",2041480360)))
{return null;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10219_2__10231,new cljs.core.Keyword(null,"right-quote","right-quote",3807707901)))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}
}
}catch (e10238){if((e10238 instanceof Error))
{var e__4796__auto____$2 = e10238;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_10219_1__10230 = cljs.core.nth.call(null,ocr_10219,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10219_1__10230,new cljs.core.Keyword(null,"default","default",2558708147)))
{try{var ocr_10219_3__10232 = cljs.core.nth.call(null,ocr_10219,3);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10219_3__10232,new cljs.core.Keyword(null,"default","default",2558708147)))
{if(!((cljs.core._EQ_.call(null,termcat.term.tt.call(null,t2),new cljs.core.Keyword(null,"dash","dash",1016980228))) && (typeof termcat.term.payload.call(null,t2) === 'string')))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.call(null,new cljs.core.Keyword(null,"default","default",2558708147),[cljs.core.str(termcat.term.payload.call(null,t1)),cljs.core.str(termcat.term.payload.call(null,t2)),cljs.core.str(termcat.term.payload.call(null,t3))].join(''))], null);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10240){if((e10240 instanceof Error))
{var e__4796__auto____$3 = e10240;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10240;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10239){if((e10239 instanceof Error))
{var e__4796__auto____$3 = e10239;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10239;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10238;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10237;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10236;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10235){if((e10235 instanceof Error))
{var e__4796__auto__ = e10235;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10235;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first.call(null,r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.call(null,cljs.core.next.call(null,r__6471__auto__),cljs.core.drop.call(null,3,input__6469__auto__))], null);
} else
{return null;
}
});
G__10242 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__10242__0.call(this);
case 2:
return G__10242__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10242;
})()
);
termcat.rules.tokenize.css_length_QMARK_ = (function css_length_QMARK_(s){var and__3391__auto__ = typeof s === 'string';if(and__3391__auto__)
{return cljs.core.re_matches.call(null,/[0-9]*\.?[0-9]+(?:px|em|ex|pt)/,s);
} else
{return and__3391__auto__;
}
});
/**
* 
*/
termcat.rules.tokenize.introduce_emptyline_tokens = termcat.rewrite.abstraction.call(null,(function() {
var G__10255 = null;
var G__10255__0 = (function (){return null;
});
var G__10255__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.call(null,input__6469__auto__,cljs.core.repeat.call(null,null));var vec__10243 = cljs.core.cons.call(null,state__6468__auto__,cljs.core.take.call(null,2,padded_input__6470__auto__));var state = cljs.core.nth.call(null,vec__10243,0,null);var t1 = cljs.core.nth.call(null,vec__10243,1,null);var t2 = cljs.core.nth.call(null,vec__10243,2,null);var temp__4090__auto__ = (function (){var ocr_10244 = clojure.core.reducers.reduce.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.call(null,2,clojure.core.reducers.map.call(null,termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_.call(null,ocr_10244)) && ((cljs.core.count.call(null,ocr_10244) === 3)))
{try{var ocr_10244_1__10249 = cljs.core.nth.call(null,ocr_10244,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10244_1__10249,new cljs.core.Keyword(null,"emptyline","emptyline",3889609267)))
{try{var ocr_10244_2__10250 = cljs.core.nth.call(null,ocr_10244,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10244_2__10250,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10253){if((e10253 instanceof Error))
{var e__4796__auto__ = e10253;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10253;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10244_1__10249,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{try{var ocr_10244_2__10250 = cljs.core.nth.call(null,ocr_10244,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10244_2__10250,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.with_meta.call(null,termcat.term.token.call(null,new cljs.core.Keyword(null,"emptyline","emptyline",3889609267)),cljs.core.meta.call(null,t1))], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10254){if((e10254 instanceof Error))
{var e__4796__auto__ = e10254;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10254;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e10252){if((e10252 instanceof Error))
{var e__4796__auto__ = e10252;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10252;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10251){if((e10251 instanceof Error))
{var e__4796__auto__ = e10251;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10251;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first.call(null,r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.call(null,cljs.core.next.call(null,r__6471__auto__),cljs.core.drop.call(null,2,input__6469__auto__))], null);
} else
{return null;
}
});
G__10255 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__10255__0.call(this);
case 2:
return G__10255__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10255;
})()
);
/**
* 
*/
termcat.rules.tokenize.introduce_indent_tokens = termcat.rewrite.abstraction.call(null,(function() {
var G__10290 = null;
var G__10290__0 = (function (){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent","indent",4124632094),0], null);
});
var G__10290__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.call(null,input__6469__auto__,cljs.core.repeat.call(null,null));var vec__10256 = cljs.core.cons.call(null,state__6468__auto__,cljs.core.take.call(null,2,padded_input__6470__auto__));var state = cljs.core.nth.call(null,vec__10256,0,null);var t1 = cljs.core.nth.call(null,vec__10256,1,null);var t2 = cljs.core.nth.call(null,vec__10256,2,null);var temp__4090__auto__ = (function (){var ocr_10257 = clojure.core.reducers.reduce.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.call(null,2,clojure.core.reducers.map.call(null,termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_.call(null,ocr_10257)) && ((cljs.core.count.call(null,ocr_10257) === 3)))
{try{var ocr_10257_1__10262 = cljs.core.nth.call(null,ocr_10257,1);if((ocr_10257_1__10262 === null))
{var indent = (((cljs.core._EQ_.call(null,termcat.term.tt.call(null,t2),new cljs.core.Keyword(null,"whitespace","whitespace",1290815983))) && (typeof termcat.term.payload.call(null,t2) === 'string'))?((cljs.core.count.call(null,termcat.term.payload.call(null,t2)) / 2) | 0):0);var diff = (indent - new cljs.core.Keyword(null,"indent","indent",4124632094).cljs$core$IFn$_invoke$arity$1(state));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent","indent",4124632094),indent], null)], null),(function (){var iter__4120__auto__ = ((function (indent,diff,ocr_10257_1__10262,ocr_10257){
return (function iter__10266(s__10267){return (new cljs.core.LazySeq(null,((function (indent,diff,ocr_10257_1__10262,ocr_10257){
return (function (){var s__10267__$1 = s__10267;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10267__$1);if(temp__4092__auto__)
{var s__10267__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10267__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__10267__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__10269 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__10268 = 0;while(true){
if((i__10268 < size__4119__auto__))
{var x = cljs.core._nth.call(null,c__4118__auto__,i__10268);cljs.core.chunk_append.call(null,b__10269,cljs.core.with_meta.call(null,termcat.term.rdelim.call(null,new cljs.core.Keyword(null,"indent","indent",4124632094)),cljs.core.meta.call(null,t1)));
{
var G__10291 = (i__10268 + 1);
i__10268 = G__10291;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10269),iter__10266.call(null,cljs.core.chunk_rest.call(null,s__10267__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10269),null);
}
} else
{var x = cljs.core.first.call(null,s__10267__$2);return cljs.core.cons.call(null,cljs.core.with_meta.call(null,termcat.term.rdelim.call(null,new cljs.core.Keyword(null,"indent","indent",4124632094)),cljs.core.meta.call(null,t1)),iter__10266.call(null,cljs.core.rest.call(null,s__10267__$2)));
}
} else
{return null;
}
break;
}
});})(indent,diff,ocr_10257_1__10262,ocr_10257))
,null,null));
});})(indent,diff,ocr_10257_1__10262,ocr_10257))
;return iter__4120__auto__.call(null,cljs.core.range.call(null,(- diff)));
})(),(cljs.core.truth_(t1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t1], null):null),(function (){var iter__4120__auto__ = ((function (indent,diff,ocr_10257_1__10262,ocr_10257){
return (function iter__10270(s__10271){return (new cljs.core.LazySeq(null,((function (indent,diff,ocr_10257_1__10262,ocr_10257){
return (function (){var s__10271__$1 = s__10271;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10271__$1);if(temp__4092__auto__)
{var s__10271__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10271__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__10271__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__10273 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__10272 = 0;while(true){
if((i__10272 < size__4119__auto__))
{var x = cljs.core._nth.call(null,c__4118__auto__,i__10272);cljs.core.chunk_append.call(null,b__10273,cljs.core.with_meta.call(null,termcat.term.ldelim.call(null,new cljs.core.Keyword(null,"indent","indent",4124632094)),cljs.core.meta.call(null,t1)));
{
var G__10292 = (i__10272 + 1);
i__10272 = G__10292;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10273),iter__10270.call(null,cljs.core.chunk_rest.call(null,s__10271__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10273),null);
}
} else
{var x = cljs.core.first.call(null,s__10271__$2);return cljs.core.cons.call(null,cljs.core.with_meta.call(null,termcat.term.ldelim.call(null,new cljs.core.Keyword(null,"indent","indent",4124632094)),cljs.core.meta.call(null,t1)),iter__10270.call(null,cljs.core.rest.call(null,s__10271__$2)));
}
} else
{return null;
}
break;
}
});})(indent,diff,ocr_10257_1__10262,ocr_10257))
,null,null));
});})(indent,diff,ocr_10257_1__10262,ocr_10257))
;return iter__4120__auto__.call(null,cljs.core.range.call(null,diff));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t2], null));
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10257_1__10262,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{var indent = (((cljs.core._EQ_.call(null,termcat.term.tt.call(null,t2),new cljs.core.Keyword(null,"whitespace","whitespace",1290815983))) && (typeof termcat.term.payload.call(null,t2) === 'string'))?((cljs.core.count.call(null,termcat.term.payload.call(null,t2)) / 2) | 0):0);var diff = (indent - new cljs.core.Keyword(null,"indent","indent",4124632094).cljs$core$IFn$_invoke$arity$1(state));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent","indent",4124632094),indent], null)], null),(function (){var iter__4120__auto__ = ((function (indent,diff,ocr_10257_1__10262,ocr_10257){
return (function iter__10274(s__10275){return (new cljs.core.LazySeq(null,((function (indent,diff,ocr_10257_1__10262,ocr_10257){
return (function (){var s__10275__$1 = s__10275;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10275__$1);if(temp__4092__auto__)
{var s__10275__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10275__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__10275__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__10277 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__10276 = 0;while(true){
if((i__10276 < size__4119__auto__))
{var x = cljs.core._nth.call(null,c__4118__auto__,i__10276);cljs.core.chunk_append.call(null,b__10277,cljs.core.with_meta.call(null,termcat.term.rdelim.call(null,new cljs.core.Keyword(null,"indent","indent",4124632094)),cljs.core.meta.call(null,t1)));
{
var G__10293 = (i__10276 + 1);
i__10276 = G__10293;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10277),iter__10274.call(null,cljs.core.chunk_rest.call(null,s__10275__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10277),null);
}
} else
{var x = cljs.core.first.call(null,s__10275__$2);return cljs.core.cons.call(null,cljs.core.with_meta.call(null,termcat.term.rdelim.call(null,new cljs.core.Keyword(null,"indent","indent",4124632094)),cljs.core.meta.call(null,t1)),iter__10274.call(null,cljs.core.rest.call(null,s__10275__$2)));
}
} else
{return null;
}
break;
}
});})(indent,diff,ocr_10257_1__10262,ocr_10257))
,null,null));
});})(indent,diff,ocr_10257_1__10262,ocr_10257))
;return iter__4120__auto__.call(null,cljs.core.range.call(null,(- diff)));
})(),(cljs.core.truth_(t1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t1], null):null),(function (){var iter__4120__auto__ = ((function (indent,diff,ocr_10257_1__10262,ocr_10257){
return (function iter__10278(s__10279){return (new cljs.core.LazySeq(null,((function (indent,diff,ocr_10257_1__10262,ocr_10257){
return (function (){var s__10279__$1 = s__10279;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10279__$1);if(temp__4092__auto__)
{var s__10279__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10279__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__10279__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__10281 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__10280 = 0;while(true){
if((i__10280 < size__4119__auto__))
{var x = cljs.core._nth.call(null,c__4118__auto__,i__10280);cljs.core.chunk_append.call(null,b__10281,cljs.core.with_meta.call(null,termcat.term.ldelim.call(null,new cljs.core.Keyword(null,"indent","indent",4124632094)),cljs.core.meta.call(null,t1)));
{
var G__10294 = (i__10280 + 1);
i__10280 = G__10294;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10281),iter__10278.call(null,cljs.core.chunk_rest.call(null,s__10279__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10281),null);
}
} else
{var x = cljs.core.first.call(null,s__10279__$2);return cljs.core.cons.call(null,cljs.core.with_meta.call(null,termcat.term.ldelim.call(null,new cljs.core.Keyword(null,"indent","indent",4124632094)),cljs.core.meta.call(null,t1)),iter__10278.call(null,cljs.core.rest.call(null,s__10279__$2)));
}
} else
{return null;
}
break;
}
});})(indent,diff,ocr_10257_1__10262,ocr_10257))
,null,null));
});})(indent,diff,ocr_10257_1__10262,ocr_10257))
;return iter__4120__auto__.call(null,cljs.core.range.call(null,diff));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t2], null));
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10257_1__10262,new cljs.core.Keyword(null,"emptyline","emptyline",3889609267)))
{var indent = (((cljs.core._EQ_.call(null,termcat.term.tt.call(null,t2),new cljs.core.Keyword(null,"whitespace","whitespace",1290815983))) && (typeof termcat.term.payload.call(null,t2) === 'string'))?((cljs.core.count.call(null,termcat.term.payload.call(null,t2)) / 2) | 0):0);var diff = (indent - new cljs.core.Keyword(null,"indent","indent",4124632094).cljs$core$IFn$_invoke$arity$1(state));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent","indent",4124632094),indent], null)], null),(function (){var iter__4120__auto__ = ((function (indent,diff,ocr_10257_1__10262,ocr_10257){
return (function iter__10282(s__10283){return (new cljs.core.LazySeq(null,((function (indent,diff,ocr_10257_1__10262,ocr_10257){
return (function (){var s__10283__$1 = s__10283;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10283__$1);if(temp__4092__auto__)
{var s__10283__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10283__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__10283__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__10285 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__10284 = 0;while(true){
if((i__10284 < size__4119__auto__))
{var x = cljs.core._nth.call(null,c__4118__auto__,i__10284);cljs.core.chunk_append.call(null,b__10285,cljs.core.with_meta.call(null,termcat.term.rdelim.call(null,new cljs.core.Keyword(null,"indent","indent",4124632094)),cljs.core.meta.call(null,t1)));
{
var G__10295 = (i__10284 + 1);
i__10284 = G__10295;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10285),iter__10282.call(null,cljs.core.chunk_rest.call(null,s__10283__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10285),null);
}
} else
{var x = cljs.core.first.call(null,s__10283__$2);return cljs.core.cons.call(null,cljs.core.with_meta.call(null,termcat.term.rdelim.call(null,new cljs.core.Keyword(null,"indent","indent",4124632094)),cljs.core.meta.call(null,t1)),iter__10282.call(null,cljs.core.rest.call(null,s__10283__$2)));
}
} else
{return null;
}
break;
}
});})(indent,diff,ocr_10257_1__10262,ocr_10257))
,null,null));
});})(indent,diff,ocr_10257_1__10262,ocr_10257))
;return iter__4120__auto__.call(null,cljs.core.range.call(null,(- diff)));
})(),(cljs.core.truth_(t1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t1], null):null),(function (){var iter__4120__auto__ = ((function (indent,diff,ocr_10257_1__10262,ocr_10257){
return (function iter__10286(s__10287){return (new cljs.core.LazySeq(null,((function (indent,diff,ocr_10257_1__10262,ocr_10257){
return (function (){var s__10287__$1 = s__10287;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10287__$1);if(temp__4092__auto__)
{var s__10287__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10287__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__10287__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__10289 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__10288 = 0;while(true){
if((i__10288 < size__4119__auto__))
{var x = cljs.core._nth.call(null,c__4118__auto__,i__10288);cljs.core.chunk_append.call(null,b__10289,cljs.core.with_meta.call(null,termcat.term.ldelim.call(null,new cljs.core.Keyword(null,"indent","indent",4124632094)),cljs.core.meta.call(null,t1)));
{
var G__10296 = (i__10288 + 1);
i__10288 = G__10296;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10289),iter__10286.call(null,cljs.core.chunk_rest.call(null,s__10287__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10289),null);
}
} else
{var x = cljs.core.first.call(null,s__10287__$2);return cljs.core.cons.call(null,cljs.core.with_meta.call(null,termcat.term.ldelim.call(null,new cljs.core.Keyword(null,"indent","indent",4124632094)),cljs.core.meta.call(null,t1)),iter__10286.call(null,cljs.core.rest.call(null,s__10287__$2)));
}
} else
{return null;
}
break;
}
});})(indent,diff,ocr_10257_1__10262,ocr_10257))
,null,null));
});})(indent,diff,ocr_10257_1__10262,ocr_10257))
;return iter__4120__auto__.call(null,cljs.core.range.call(null,diff));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t2], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}catch (e10265){if((e10265 instanceof Error))
{var e__4796__auto__ = e10265;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10265;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10264){if((e10264 instanceof Error))
{var e__4796__auto__ = e10264;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10264;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first.call(null,r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.call(null,cljs.core.next.call(null,r__6471__auto__),cljs.core.drop.call(null,2,input__6469__auto__))], null);
} else
{return null;
}
});
G__10290 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__10290__0.call(this);
case 2:
return G__10290__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10290;
})()
);
/**
* 
*/
termcat.rules.tokenize.remove_superfluous_whitespace = termcat.rewrite.abstraction.call(null,(function() {
var G__10324 = null;
var G__10324__0 = (function (){return null;
});
var G__10324__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.call(null,input__6469__auto__,cljs.core.repeat.call(null,null));var vec__10297 = cljs.core.cons.call(null,state__6468__auto__,cljs.core.take.call(null,2,padded_input__6470__auto__));var state = cljs.core.nth.call(null,vec__10297,0,null);var t1 = cljs.core.nth.call(null,vec__10297,1,null);var t2 = cljs.core.nth.call(null,vec__10297,2,null);var temp__4090__auto__ = (function (){var ocr_10298 = clojure.core.reducers.reduce.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.call(null,2,clojure.core.reducers.map.call(null,termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_.call(null,ocr_10298)) && ((cljs.core.count.call(null,ocr_10298) === 3)))
{try{var ocr_10298_1__10303 = cljs.core.nth.call(null,ocr_10298,1);if((cljs.core.vector_QMARK_.call(null,ocr_10298_1__10303)) && ((cljs.core.count.call(null,ocr_10298_1__10303) === 2)))
{try{var ocr_10298_1__10303_0__10305 = cljs.core.nth.call(null,ocr_10298_1__10303,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10298_1__10303_0__10305,new cljs.core.Keyword(null,"ldelim","ldelim",4201320693)))
{try{var ocr_10298_1__10303_1__10306 = cljs.core.nth.call(null,ocr_10298_1__10303,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10298_1__10303_1__10306,new cljs.core.Keyword(null,"indent","indent",4124632094)))
{try{var ocr_10298_2__10304 = cljs.core.nth.call(null,ocr_10298,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10298_2__10304,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10321){if((e10321 instanceof Error))
{var e__4796__auto__ = e10321;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10321;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10320){if((e10320 instanceof Error))
{var e__4796__auto__ = e10320;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10320;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10298_1__10303_0__10305,new cljs.core.Keyword(null,"rdelim","rdelim",4373095599)))
{try{var ocr_10298_1__10303_1__10306 = cljs.core.nth.call(null,ocr_10298_1__10303,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10298_1__10303_1__10306,new cljs.core.Keyword(null,"indent","indent",4124632094)))
{try{var ocr_10298_2__10304 = cljs.core.nth.call(null,ocr_10298,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10298_2__10304,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10323){if((e10323 instanceof Error))
{var e__4796__auto__ = e10323;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10323;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10322){if((e10322 instanceof Error))
{var e__4796__auto__ = e10322;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10322;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e10319){if((e10319 instanceof Error))
{var e__4796__auto__ = e10319;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10319;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10310){if((e10310 instanceof Error))
{var e__4796__auto__ = e10310;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_10298_1__10303 = cljs.core.nth.call(null,ocr_10298,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10298_1__10303,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{try{var ocr_10298_2__10304 = cljs.core.nth.call(null,ocr_10298,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10298_2__10304,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10312){if((e10312 instanceof Error))
{var e__4796__auto____$1 = e10312;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10312;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10298_1__10303,new cljs.core.Keyword(null,"emptyline","emptyline",3889609267)))
{try{var ocr_10298_2__10304 = cljs.core.nth.call(null,ocr_10298,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10298_2__10304,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10313){if((e10313 instanceof Error))
{var e__4796__auto____$1 = e10313;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10313;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10298_1__10303,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)))
{try{var ocr_10298_2__10304 = cljs.core.nth.call(null,ocr_10298,2);if((cljs.core.vector_QMARK_.call(null,ocr_10298_2__10304)) && ((cljs.core.count.call(null,ocr_10298_2__10304) === 2)))
{try{var ocr_10298_2__10304_0__10307 = cljs.core.nth.call(null,ocr_10298_2__10304,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10298_2__10304_0__10307,new cljs.core.Keyword(null,"ldelim","ldelim",4201320693)))
{try{var ocr_10298_2__10304_1__10308 = cljs.core.nth.call(null,ocr_10298_2__10304,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10298_2__10304_1__10308,new cljs.core.Keyword(null,"indent","indent",4124632094)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10317){if((e10317 instanceof Error))
{var e__4796__auto____$1 = e10317;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10317;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10298_2__10304_0__10307,new cljs.core.Keyword(null,"rdelim","rdelim",4373095599)))
{try{var ocr_10298_2__10304_1__10308 = cljs.core.nth.call(null,ocr_10298_2__10304,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10298_2__10304_1__10308,new cljs.core.Keyword(null,"indent","indent",4124632094)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10318){if((e10318 instanceof Error))
{var e__4796__auto____$1 = e10318;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10318;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e10316){if((e10316 instanceof Error))
{var e__4796__auto____$1 = e10316;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10316;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10314){if((e10314 instanceof Error))
{var e__4796__auto____$1 = e10314;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_10298_2__10304 = cljs.core.nth.call(null,ocr_10298,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10298_2__10304,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10298_2__10304,new cljs.core.Keyword(null,"emptyline","emptyline",3889609267)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e10315){if((e10315 instanceof Error))
{var e__4796__auto____$2 = e10315;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10315;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10314;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}catch (e10311){if((e10311 instanceof Error))
{var e__4796__auto____$1 = e10311;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10311;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10310;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10309){if((e10309 instanceof Error))
{var e__4796__auto__ = e10309;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10309;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first.call(null,r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.call(null,cljs.core.next.call(null,r__6471__auto__),cljs.core.drop.call(null,2,input__6469__auto__))], null);
} else
{return null;
}
});
G__10324 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__10324__0.call(this);
case 2:
return G__10324__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10324;
})()
);
termcat.rules.tokenize.item_type = (function item_type(tok){var G__10326 = termcat.term.payload.call(null,tok);if(cljs.core._EQ_.call(null,"######",G__10326))
{return new cljs.core.Keyword(null,"h6","h6",1013907520);
} else
{if(cljs.core._EQ_.call(null,"#####",G__10326))
{return new cljs.core.Keyword(null,"h5","h5",1013907519);
} else
{if(cljs.core._EQ_.call(null,"####",G__10326))
{return new cljs.core.Keyword(null,"h4","h4",1013907518);
} else
{if(cljs.core._EQ_.call(null,"###",G__10326))
{return new cljs.core.Keyword(null,"h3","h3",1013907517);
} else
{if(cljs.core._EQ_.call(null,"##",G__10326))
{return new cljs.core.Keyword(null,"h2","h2",1013907516);
} else
{if(cljs.core._EQ_.call(null,"#",G__10326))
{return new cljs.core.Keyword(null,"h1","h1",1013907515);
} else
{if(cljs.core._EQ_.call(null,"-",G__10326))
{return new cljs.core.Keyword(null,"bullet","bullet",3930937460);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
});
/**
* 
*/
termcat.rules.tokenize.introduce_item_tokens = termcat.rewrite.abstraction.call(null,(function() {
var G__10403 = null;
var G__10403__0 = (function (){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),false,new cljs.core.Keyword(null,"item-type","item-type",3121552678),null,new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),null], null);
});
var G__10403__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.call(null,input__6469__auto__,cljs.core.repeat.call(null,null));var vec__10327 = cljs.core.cons.call(null,state__6468__auto__,cljs.core.take.call(null,3,padded_input__6470__auto__));var state = cljs.core.nth.call(null,vec__10327,0,null);var t1 = cljs.core.nth.call(null,vec__10327,1,null);var t2 = cljs.core.nth.call(null,vec__10327,2,null);var t3 = cljs.core.nth.call(null,vec__10327,3,null);var temp__4090__auto__ = (function (){var ocr_10328 = clojure.core.reducers.reduce.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.call(null,3,clojure.core.reducers.map.call(null,termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_.call(null,ocr_10328)) && ((cljs.core.count.call(null,ocr_10328) === 4)))
{try{var ocr_10328_1__10341 = cljs.core.nth.call(null,ocr_10328,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_1__10341,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{try{var ocr_10328_0__10340 = cljs.core.nth.call(null,ocr_10328,0);if((function (){var G__10398 = ocr_10328_0__10340;if(G__10398)
{var bit__4053__auto__ = (G__10398.cljs$lang$protocol_mask$partition0$ & 256);if((bit__4053__auto__) || (G__10398.cljs$core$ILookup$))
{return true;
} else
{if((!G__10398.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__10398);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__10398);
}
})())
{try{var ocr_10328_0__10340_in_bullet__10346 = cljs.core.get.call(null,ocr_10328_0__10340,new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if((ocr_10328_0__10340_in_bullet__10346 === true))
{try{var ocr_10328_2__10342 = cljs.core.nth.call(null,ocr_10328,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_2__10342,new cljs.core.Keyword(null,"dash","dash",1016980228)))
{try{var ocr_10328_3__10343 = cljs.core.nth.call(null,ocr_10328,3);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)))
{if(cljs.core.truth_(termcat.rules.tokenize.item_type.call(null,t2)))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2)),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),new cljs.core.Keyword(null,"item-type","item-type",3121552678).cljs$core$IFn$_invoke$arity$1(state)], null)),termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{if(cljs.core.truth_(termcat.rules.tokenize.item_type.call(null,t2)))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2)),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),new cljs.core.Keyword(null,"item-type","item-type",3121552678).cljs$core$IFn$_invoke$arity$1(state)], null)),termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"emptyline","emptyline",3889609267)))
{if(cljs.core.truth_(termcat.rules.tokenize.item_type.call(null,t2)))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2)),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),new cljs.core.Keyword(null,"item-type","item-type",3121552678).cljs$core$IFn$_invoke$arity$1(state)], null)),termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if((ocr_10328_3__10343 === null))
{if(cljs.core.truth_(termcat.rules.tokenize.item_type.call(null,t2)))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2)),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),new cljs.core.Keyword(null,"item-type","item-type",3121552678).cljs$core$IFn$_invoke$arity$1(state)], null)),termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}catch (e10401){if((e10401 instanceof Error))
{var e__4796__auto__ = e10401;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10401;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_2__10342,new cljs.core.Keyword(null,"hash","hash",1017099392)))
{try{var ocr_10328_3__10343 = cljs.core.nth.call(null,ocr_10328,3);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)))
{if(cljs.core.truth_(termcat.rules.tokenize.item_type.call(null,t2)))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2)),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),new cljs.core.Keyword(null,"item-type","item-type",3121552678).cljs$core$IFn$_invoke$arity$1(state)], null)),termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{if(cljs.core.truth_(termcat.rules.tokenize.item_type.call(null,t2)))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2)),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),new cljs.core.Keyword(null,"item-type","item-type",3121552678).cljs$core$IFn$_invoke$arity$1(state)], null)),termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"emptyline","emptyline",3889609267)))
{if(cljs.core.truth_(termcat.rules.tokenize.item_type.call(null,t2)))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2)),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),new cljs.core.Keyword(null,"item-type","item-type",3121552678).cljs$core$IFn$_invoke$arity$1(state)], null)),termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if((ocr_10328_3__10343 === null))
{if(cljs.core.truth_(termcat.rules.tokenize.item_type.call(null,t2)))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2)),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),new cljs.core.Keyword(null,"item-type","item-type",3121552678).cljs$core$IFn$_invoke$arity$1(state)], null)),termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}catch (e10402){if((e10402 instanceof Error))
{var e__4796__auto__ = e10402;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10402;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e10400){if((e10400 instanceof Error))
{var e__4796__auto__ = e10400;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10400;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10399){if((e10399 instanceof Error))
{var e__4796__auto__ = e10399;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10399;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10397){if((e10397 instanceof Error))
{var e__4796__auto__ = e10397;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10397;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10361){if((e10361 instanceof Error))
{var e__4796__auto__ = e10361;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_10328_1__10341 = cljs.core.nth.call(null,ocr_10328,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_1__10341,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{try{var ocr_10328_0__10340 = cljs.core.nth.call(null,ocr_10328,0);if((function (){var G__10392 = ocr_10328_0__10340;if(G__10392)
{var bit__4053__auto__ = (G__10392.cljs$lang$protocol_mask$partition0$ & 256);if((bit__4053__auto__) || (G__10392.cljs$core$ILookup$))
{return true;
} else
{if((!G__10392.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__10392);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__10392);
}
})())
{try{var ocr_10328_0__10340_in_bullet__10349 = cljs.core.get.call(null,ocr_10328_0__10340,new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if((ocr_10328_0__10340_in_bullet__10349 === true))
{if(!(cljs.core._EQ_.call(null,termcat.term.tt.call(null,t2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),new cljs.core.Keyword(null,"item-type","item-type",3121552678).cljs$core$IFn$_invoke$arity$1(state)], null))))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prev-state","prev-state",3562322921).cljs$core$IFn$_invoke$arity$1(state),termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),new cljs.core.Keyword(null,"item-type","item-type",3121552678).cljs$core$IFn$_invoke$arity$1(state)], null)),t1,t2,t3], null);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10393){if((e10393 instanceof Error))
{var e__4796__auto____$1 = e10393;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10393;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10391){if((e10391 instanceof Error))
{var e__4796__auto____$1 = e10391;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10391;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_1__10341,new cljs.core.Keyword(null,"emptyline","emptyline",3889609267)))
{try{var ocr_10328_0__10340 = cljs.core.nth.call(null,ocr_10328,0);if((function (){var G__10395 = ocr_10328_0__10340;if(G__10395)
{var bit__4053__auto__ = (G__10395.cljs$lang$protocol_mask$partition0$ & 256);if((bit__4053__auto__) || (G__10395.cljs$core$ILookup$))
{return true;
} else
{if((!G__10395.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__10395);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__10395);
}
})())
{try{var ocr_10328_0__10340_in_bullet__10352 = cljs.core.get.call(null,ocr_10328_0__10340,new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if((ocr_10328_0__10340_in_bullet__10352 === true))
{if(!(cljs.core._EQ_.call(null,termcat.term.tt.call(null,t2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),new cljs.core.Keyword(null,"item-type","item-type",3121552678).cljs$core$IFn$_invoke$arity$1(state)], null))))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prev-state","prev-state",3562322921).cljs$core$IFn$_invoke$arity$1(state),termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),new cljs.core.Keyword(null,"item-type","item-type",3121552678).cljs$core$IFn$_invoke$arity$1(state)], null)),t1,t2,t3], null);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10396){if((e10396 instanceof Error))
{var e__4796__auto____$1 = e10396;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10396;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10394){if((e10394 instanceof Error))
{var e__4796__auto____$1 = e10394;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10394;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e10362){if((e10362 instanceof Error))
{var e__4796__auto____$1 = e10362;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_10328_1__10341 = cljs.core.nth.call(null,ocr_10328,1);if((cljs.core.vector_QMARK_.call(null,ocr_10328_1__10341)) && ((cljs.core.count.call(null,ocr_10328_1__10341) === 2)))
{try{var ocr_10328_1__10341_0__10353 = cljs.core.nth.call(null,ocr_10328_1__10341,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_1__10341_0__10353,new cljs.core.Keyword(null,"rdelim","rdelim",4373095599)))
{try{var ocr_10328_1__10341_1__10354 = cljs.core.nth.call(null,ocr_10328_1__10341,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_1__10341_1__10354,new cljs.core.Keyword(null,"indent","indent",4124632094)))
{try{var ocr_10328_0__10340 = cljs.core.nth.call(null,ocr_10328,0);if((function (){var G__10389 = ocr_10328_0__10340;if(G__10389)
{var bit__4053__auto__ = (G__10389.cljs$lang$protocol_mask$partition0$ & 256);if((bit__4053__auto__) || (G__10389.cljs$core$ILookup$))
{return true;
} else
{if((!G__10389.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__10389);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__10389);
}
})())
{try{var ocr_10328_0__10340_in_bullet__10357 = cljs.core.get.call(null,ocr_10328_0__10340,new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",594371962));if((ocr_10328_0__10340_in_bullet__10357 === true))
{if(!(cljs.core._EQ_.call(null,termcat.term.tt.call(null,t2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),new cljs.core.Keyword(null,"item-type","item-type",3121552678).cljs$core$IFn$_invoke$arity$1(state)], null))))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prev-state","prev-state",3562322921).cljs$core$IFn$_invoke$arity$1(state),termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),new cljs.core.Keyword(null,"item-type","item-type",3121552678).cljs$core$IFn$_invoke$arity$1(state)], null)),t1,t2,t3], null);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10390){if((e10390 instanceof Error))
{var e__4796__auto____$2 = e10390;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10390;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10388){if((e10388 instanceof Error))
{var e__4796__auto____$2 = e10388;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10388;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10387){if((e10387 instanceof Error))
{var e__4796__auto____$2 = e10387;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10387;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10386){if((e10386 instanceof Error))
{var e__4796__auto____$2 = e10386;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10386;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10363){if((e10363 instanceof Error))
{var e__4796__auto____$2 = e10363;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_10328_1__10341 = cljs.core.nth.call(null,ocr_10328,1);if((ocr_10328_1__10341 === null))
{try{var ocr_10328_2__10342 = cljs.core.nth.call(null,ocr_10328,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_2__10342,new cljs.core.Keyword(null,"hash","hash",1017099392)))
{try{var ocr_10328_3__10343 = cljs.core.nth.call(null,ocr_10328,3);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"emptyline","emptyline",3889609267)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if((ocr_10328_3__10343 === null))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}catch (e10378){if((e10378 instanceof Error))
{var e__4796__auto____$3 = e10378;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10378;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_2__10342,new cljs.core.Keyword(null,"dash","dash",1016980228)))
{try{var ocr_10328_3__10343 = cljs.core.nth.call(null,ocr_10328,3);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"emptyline","emptyline",3889609267)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if((ocr_10328_3__10343 === null))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}catch (e10379){if((e10379 instanceof Error))
{var e__4796__auto____$3 = e10379;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10379;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e10377){if((e10377 instanceof Error))
{var e__4796__auto____$3 = e10377;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10377;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_1__10341,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{try{var ocr_10328_2__10342 = cljs.core.nth.call(null,ocr_10328,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_2__10342,new cljs.core.Keyword(null,"hash","hash",1017099392)))
{try{var ocr_10328_3__10343 = cljs.core.nth.call(null,ocr_10328,3);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"emptyline","emptyline",3889609267)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if((ocr_10328_3__10343 === null))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}catch (e10381){if((e10381 instanceof Error))
{var e__4796__auto____$3 = e10381;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10381;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_2__10342,new cljs.core.Keyword(null,"dash","dash",1016980228)))
{try{var ocr_10328_3__10343 = cljs.core.nth.call(null,ocr_10328,3);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"emptyline","emptyline",3889609267)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if((ocr_10328_3__10343 === null))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}catch (e10382){if((e10382 instanceof Error))
{var e__4796__auto____$3 = e10382;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10382;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e10380){if((e10380 instanceof Error))
{var e__4796__auto____$3 = e10380;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10380;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_1__10341,new cljs.core.Keyword(null,"emptyline","emptyline",3889609267)))
{try{var ocr_10328_2__10342 = cljs.core.nth.call(null,ocr_10328,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_2__10342,new cljs.core.Keyword(null,"hash","hash",1017099392)))
{try{var ocr_10328_3__10343 = cljs.core.nth.call(null,ocr_10328,3);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"emptyline","emptyline",3889609267)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if((ocr_10328_3__10343 === null))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}catch (e10384){if((e10384 instanceof Error))
{var e__4796__auto____$3 = e10384;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10384;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_2__10342,new cljs.core.Keyword(null,"dash","dash",1016980228)))
{try{var ocr_10328_3__10343 = cljs.core.nth.call(null,ocr_10328,3);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"emptyline","emptyline",3889609267)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if((ocr_10328_3__10343 === null))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}catch (e10385){if((e10385 instanceof Error))
{var e__4796__auto____$3 = e10385;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10385;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e10383){if((e10383 instanceof Error))
{var e__4796__auto____$3 = e10383;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10383;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}catch (e10364){if((e10364 instanceof Error))
{var e__4796__auto____$3 = e10364;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{try{var ocr_10328_1__10341 = cljs.core.nth.call(null,ocr_10328,1);if((cljs.core.vector_QMARK_.call(null,ocr_10328_1__10341)) && ((cljs.core.count.call(null,ocr_10328_1__10341) === 2)))
{try{var ocr_10328_1__10341_0__10358 = cljs.core.nth.call(null,ocr_10328_1__10341,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_1__10341_0__10358,new cljs.core.Keyword(null,"ldelim","ldelim",4201320693)))
{try{var ocr_10328_1__10341_1__10359 = cljs.core.nth.call(null,ocr_10328_1__10341,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_1__10341_1__10359,new cljs.core.Keyword(null,"indent","indent",4124632094)))
{try{var ocr_10328_2__10342 = cljs.core.nth.call(null,ocr_10328,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_2__10342,new cljs.core.Keyword(null,"hash","hash",1017099392)))
{try{var ocr_10328_3__10343 = cljs.core.nth.call(null,ocr_10328,3);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"emptyline","emptyline",3889609267)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if((ocr_10328_3__10343 === null))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}catch (e10372){if((e10372 instanceof Error))
{var e__4796__auto____$4 = e10372;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10372;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_2__10342,new cljs.core.Keyword(null,"dash","dash",1016980228)))
{try{var ocr_10328_3__10343 = cljs.core.nth.call(null,ocr_10328,3);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"emptyline","emptyline",3889609267)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if((ocr_10328_3__10343 === null))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}catch (e10373){if((e10373 instanceof Error))
{var e__4796__auto____$4 = e10373;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10373;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e10371){if((e10371 instanceof Error))
{var e__4796__auto____$4 = e10371;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10371;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10370){if((e10370 instanceof Error))
{var e__4796__auto____$4 = e10370;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10370;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_1__10341_0__10358,new cljs.core.Keyword(null,"rdelim","rdelim",4373095599)))
{try{var ocr_10328_2__10342 = cljs.core.nth.call(null,ocr_10328,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_2__10342,new cljs.core.Keyword(null,"hash","hash",1017099392)))
{try{var ocr_10328_3__10343 = cljs.core.nth.call(null,ocr_10328,3);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"emptyline","emptyline",3889609267)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if((ocr_10328_3__10343 === null))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}catch (e10375){if((e10375 instanceof Error))
{var e__4796__auto____$4 = e10375;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10375;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_2__10342,new cljs.core.Keyword(null,"dash","dash",1016980228)))
{try{var ocr_10328_3__10343 = cljs.core.nth.call(null,ocr_10328,3);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_3__10343,new cljs.core.Keyword(null,"emptyline","emptyline",3889609267)))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if((ocr_10328_3__10343 === null))
{if(cljs.core.truth_((function (){var and__3391__auto__ = (function (){var or__3403__auto__ = cljs.core.complement.call(null,termcat.term.rdelim_QMARK_).call(null,t1);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return termcat.rules.tokenize.item_type.call(null,t1);
}
})();if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = termcat.rules.tokenize.item_type.call(null,t2);if(cljs.core.truth_(and__3391__auto____$1))
{return cljs.core.not_EQ_.call(null,termcat.term.tt.call(null,t1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rdelim","rdelim",4373095599),termcat.rules.tokenize.item_type.call(null,t2)], null));
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),true,new cljs.core.Keyword(null,"item-type","item-type",3121552678),termcat.rules.tokenize.item_type.call(null,t2),new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,termcat.term.token.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ldelim","ldelim",4201320693),termcat.rules.tokenize.item_type.call(null,t2)], null),termcat.term.payload.call(null,t2)),t3], null);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}catch (e10376){if((e10376 instanceof Error))
{var e__4796__auto____$4 = e10376;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10376;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e10374){if((e10374 instanceof Error))
{var e__4796__auto____$4 = e10374;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10374;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e10366){if((e10366 instanceof Error))
{var e__4796__auto____$4 = e10366;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{try{var ocr_10328_1__10341_0__10358 = cljs.core.nth.call(null,ocr_10328_1__10341,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_1__10341_0__10358,new cljs.core.Keyword(null,"ldelim","ldelim",4201320693)))
{try{var ocr_10328_1__10341_1__10359 = cljs.core.nth.call(null,ocr_10328_1__10341,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_1__10341_1__10359,new cljs.core.Keyword(null,"indent","indent",4124632094)))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in-bullet","in-bullet",2845348380),false,new cljs.core.Keyword(null,"prev-state","prev-state",3562322921),state], null),t1,t2,t3], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10368){if((e10368 instanceof Error))
{var e__4796__auto____$5 = e10368;if((e__4796__auto____$5 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$5;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10368;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_1__10341_0__10358,new cljs.core.Keyword(null,"rdelim","rdelim",4373095599)))
{try{var ocr_10328_1__10341_1__10359 = cljs.core.nth.call(null,ocr_10328_1__10341,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10328_1__10341_1__10359,new cljs.core.Keyword(null,"indent","indent",4124632094)))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prev-state","prev-state",3562322921).cljs$core$IFn$_invoke$arity$1(state),t1,t2,t3], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10369){if((e10369 instanceof Error))
{var e__4796__auto____$5 = e10369;if((e__4796__auto____$5 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$5;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10369;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e10367){if((e10367 instanceof Error))
{var e__4796__auto____$5 = e10367;if((e__4796__auto____$5 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$5;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10367;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$4;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10366;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10365){if((e10365 instanceof Error))
{var e__4796__auto____$4 = e10365;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10365;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$3;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10364;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10363;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10362;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10361;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10360){if((e10360 instanceof Error))
{var e__4796__auto__ = e10360;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10360;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first.call(null,r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.call(null,cljs.core.next.call(null,r__6471__auto__),cljs.core.drop.call(null,3,input__6469__auto__))], null);
} else
{return null;
}
});
G__10403 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__10403__0.call(this);
case 2:
return G__10403__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10403;
})()
);
/**
* 
*/
termcat.rules.tokenize.remove_percent_tokens = termcat.rewrite.abstraction.call(null,(function() {
var G__10457 = null;
var G__10457__0 = (function (){return null;
});
var G__10457__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.call(null,input__6469__auto__,cljs.core.repeat.call(null,null));var vec__10404 = cljs.core.cons.call(null,state__6468__auto__,cljs.core.take.call(null,3,padded_input__6470__auto__));var state = cljs.core.nth.call(null,vec__10404,0,null);var t1 = cljs.core.nth.call(null,vec__10404,1,null);var t2 = cljs.core.nth.call(null,vec__10404,2,null);var t3 = cljs.core.nth.call(null,vec__10404,3,null);var temp__4090__auto__ = (function (){var ocr_10405 = clojure.core.reducers.reduce.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.call(null,3,clojure.core.reducers.map.call(null,termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_.call(null,ocr_10405)) && ((cljs.core.count.call(null,ocr_10405) === 4)))
{try{var ocr_10405_1__10417 = cljs.core.nth.call(null,ocr_10405,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10405_1__10417,new cljs.core.Keyword(null,"percent","percent",4629944247)))
{try{var ocr_10405_2__10418 = cljs.core.nth.call(null,ocr_10405,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10405_2__10418,new cljs.core.Keyword(null,"percent","percent",4629944247)))
{try{var ocr_10405_3__10419 = cljs.core.nth.call(null,ocr_10405,3);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10405_3__10419,new cljs.core.Keyword(null,"newline","newline",2859826438)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t3], null);
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10405_3__10419,new cljs.core.Keyword(null,"emptyline","emptyline",3889609267)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t3], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e10448){if((e10448 instanceof Error))
{var e__4796__auto__ = e10448;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_10405_3__10419 = cljs.core.nth.call(null,ocr_10405,3);if((cljs.core.vector_QMARK_.call(null,ocr_10405_3__10419)) && ((cljs.core.count.call(null,ocr_10405_3__10419) === 2)))
{try{var ocr_10405_3__10419_0__10420 = cljs.core.nth.call(null,ocr_10405_3__10419,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10405_3__10419_0__10420,new cljs.core.Keyword(null,"ldelim","ldelim",4201320693)))
{try{var ocr_10405_3__10419_1__10421 = cljs.core.nth.call(null,ocr_10405_3__10419,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10405_3__10419_1__10421,new cljs.core.Keyword(null,"indent","indent",4124632094)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t3], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10455){if((e10455 instanceof Error))
{var e__4796__auto____$1 = e10455;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10455;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10405_3__10419_0__10420,new cljs.core.Keyword(null,"rdelim","rdelim",4373095599)))
{try{var ocr_10405_3__10419_1__10421 = cljs.core.nth.call(null,ocr_10405_3__10419,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10405_3__10419_1__10421,new cljs.core.Keyword(null,"indent","indent",4124632094)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t3], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10456){if((e10456 instanceof Error))
{var e__4796__auto____$1 = e10456;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10456;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e10451){if((e10451 instanceof Error))
{var e__4796__auto____$1 = e10451;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_10405_3__10419_0__10420 = cljs.core.nth.call(null,ocr_10405_3__10419,0);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10405_3__10419_0__10420,new cljs.core.Keyword(null,"ldelim","ldelim",4201320693)))
{try{var ocr_10405_3__10419_1__10421 = cljs.core.nth.call(null,ocr_10405_3__10419,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10405_3__10419_1__10421,new cljs.core.Keyword(null,"bullet","bullet",3930937460)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t3], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10453){if((e10453 instanceof Error))
{var e__4796__auto____$2 = e10453;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10453;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10405_3__10419_0__10420,new cljs.core.Keyword(null,"rdelim","rdelim",4373095599)))
{try{var ocr_10405_3__10419_1__10421 = cljs.core.nth.call(null,ocr_10405_3__10419,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10405_3__10419_1__10421,new cljs.core.Keyword(null,"bullet","bullet",3930937460)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t3], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10454){if((e10454 instanceof Error))
{var e__4796__auto____$2 = e10454;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10454;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e10452){if((e10452 instanceof Error))
{var e__4796__auto____$2 = e10452;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10452;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10451;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10449){if((e10449 instanceof Error))
{var e__4796__auto____$1 = e10449;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_10405_3__10419 = cljs.core.nth.call(null,ocr_10405,3);if((ocr_10405_3__10419 === null))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t3], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10450){if((e10450 instanceof Error))
{var e__4796__auto____$2 = e10450;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10450;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10449;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10448;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10447){if((e10447 instanceof Error))
{var e__4796__auto__ = e10447;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10447;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10423){if((e10423 instanceof Error))
{var e__4796__auto__ = e10423;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_10405_1__10417 = cljs.core.nth.call(null,ocr_10405,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10405_1__10417,new cljs.core.Keyword(null,"percent","percent",4629944247)))
{try{var ocr_10405_2__10418 = cljs.core.nth.call(null,ocr_10405,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10405_2__10418,new cljs.core.Keyword(null,"percent","percent",4629944247)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,t2], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10446){if((e10446 instanceof Error))
{var e__4796__auto____$1 = e10446;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10446;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10424){if((e10424 instanceof Error))
{var e__4796__auto____$1 = e10424;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_10405_1__10417 = cljs.core.nth.call(null,ocr_10405,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10405_1__10417,new cljs.core.Keyword(null,"percent","percent",4629944247)))
{try{var ocr_10405_2__10418 = cljs.core.nth.call(null,ocr_10405,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10405_2__10418,new cljs.core.Keyword(null,"plus","plus",1017348364)))
{try{var ocr_10405_3__10419 = cljs.core.nth.call(null,ocr_10405,3);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10405_3__10419,new cljs.core.Keyword(null,"default","default",2558708147)))
{if(cljs.core.truth_(termcat.rules.tokenize.css_length_QMARK_.call(null,termcat.term.payload.call(null,t3))))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.call(null,new cljs.core.Keyword(null,"html","html",1017117469),"<span style='"),termcat.term.token.call(null,new cljs.core.Keyword(null,"html","html",1017117469),(function (){var G__10441 = termcat.term.payload.call(null,t2);if(cljs.core._EQ_.call(null,"_",G__10441))
{return "display: inline-block; width: ";
} else
{if(cljs.core._EQ_.call(null,"-",G__10441))
{return "margin-left: -";
} else
{if(cljs.core._EQ_.call(null,"+",G__10441))
{return "margin-left: ";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(termcat.term.payload.call(null,t2))].join('')));
} else
{return null;
}
}
}
}
})()),t3,((cljs.core._EQ_.call(null,termcat.term.tt.call(null,t2),new cljs.core.Keyword(null,"underscore","underscore",3544053292)))?termcat.term.token.call(null,new cljs.core.Keyword(null,"html","html",1017117469),"'> </span>"):termcat.term.token.call(null,new cljs.core.Keyword(null,"html","html",1017117469),"'></span>"))], null);
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)),t2,t3], null);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10440){if((e10440 instanceof Error))
{var e__4796__auto____$2 = e10440;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10440;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10405_2__10418,new cljs.core.Keyword(null,"underscore","underscore",3544053292)))
{try{var ocr_10405_3__10419 = cljs.core.nth.call(null,ocr_10405,3);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10405_3__10419,new cljs.core.Keyword(null,"default","default",2558708147)))
{if(cljs.core.truth_(termcat.rules.tokenize.css_length_QMARK_.call(null,termcat.term.payload.call(null,t3))))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.call(null,new cljs.core.Keyword(null,"html","html",1017117469),"<span style='"),termcat.term.token.call(null,new cljs.core.Keyword(null,"html","html",1017117469),(function (){var G__10443 = termcat.term.payload.call(null,t2);if(cljs.core._EQ_.call(null,"_",G__10443))
{return "display: inline-block; width: ";
} else
{if(cljs.core._EQ_.call(null,"-",G__10443))
{return "margin-left: -";
} else
{if(cljs.core._EQ_.call(null,"+",G__10443))
{return "margin-left: ";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(termcat.term.payload.call(null,t2))].join('')));
} else
{return null;
}
}
}
}
})()),t3,((cljs.core._EQ_.call(null,termcat.term.tt.call(null,t2),new cljs.core.Keyword(null,"underscore","underscore",3544053292)))?termcat.term.token.call(null,new cljs.core.Keyword(null,"html","html",1017117469),"'> </span>"):termcat.term.token.call(null,new cljs.core.Keyword(null,"html","html",1017117469),"'></span>"))], null);
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)),t2,t3], null);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10442){if((e10442 instanceof Error))
{var e__4796__auto____$2 = e10442;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10442;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10405_2__10418,new cljs.core.Keyword(null,"dash","dash",1016980228)))
{try{var ocr_10405_3__10419 = cljs.core.nth.call(null,ocr_10405,3);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10405_3__10419,new cljs.core.Keyword(null,"default","default",2558708147)))
{if(cljs.core.truth_(termcat.rules.tokenize.css_length_QMARK_.call(null,termcat.term.payload.call(null,t3))))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.call(null,new cljs.core.Keyword(null,"html","html",1017117469),"<span style='"),termcat.term.token.call(null,new cljs.core.Keyword(null,"html","html",1017117469),(function (){var G__10445 = termcat.term.payload.call(null,t2);if(cljs.core._EQ_.call(null,"_",G__10445))
{return "display: inline-block; width: ";
} else
{if(cljs.core._EQ_.call(null,"-",G__10445))
{return "margin-left: -";
} else
{if(cljs.core._EQ_.call(null,"+",G__10445))
{return "margin-left: ";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(termcat.term.payload.call(null,t2))].join('')));
} else
{return null;
}
}
}
}
})()),t3,((cljs.core._EQ_.call(null,termcat.term.tt.call(null,t2),new cljs.core.Keyword(null,"underscore","underscore",3544053292)))?termcat.term.token.call(null,new cljs.core.Keyword(null,"html","html",1017117469),"'> </span>"):termcat.term.token.call(null,new cljs.core.Keyword(null,"html","html",1017117469),"'></span>"))], null);
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)),t2,t3], null);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10444){if((e10444 instanceof Error))
{var e__4796__auto____$2 = e10444;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10444;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}catch (e10439){if((e10439 instanceof Error))
{var e__4796__auto____$2 = e10439;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10439;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10425){if((e10425 instanceof Error))
{var e__4796__auto____$2 = e10425;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_10405_1__10417 = cljs.core.nth.call(null,ocr_10405,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10405_1__10417,new cljs.core.Keyword(null,"percent","percent",4629944247)))
{try{var ocr_10405_2__10418 = cljs.core.nth.call(null,ocr_10405,2);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10405_2__10418,new cljs.core.Keyword(null,"left-quote","left-quote",2041480360)))
{var vec__10429 = (((cljs.core._EQ_.call(null,termcat.term.tt.call(null,t2),new cljs.core.Keyword(null,"default","default",2558708147))) && (typeof termcat.term.payload.call(null,t2) === 'string'))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,termcat.term.payload.call(null,t2)),cljs.core.subs.call(null,termcat.term.payload.call(null,t2),1),t3], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.payload.call(null,t2),[cljs.core.str(termcat.term.payload.call(null,t3))].join(''),null], null));var c = cljs.core.nth.call(null,vec__10429,0,null);var r = cljs.core.nth.call(null,vec__10429,1,null);var t = cljs.core.nth.call(null,vec__10429,2,null);var temp__4090__auto__ = (function (){var G__10430 = c;if(cljs.core._EQ_.call(null,"3",G__10430))
{return cljs.core.char$.call(null,780);
} else
{if(cljs.core._EQ_.call(null,"\"",G__10430))
{return cljs.core.char$.call(null,776);
} else
{if(cljs.core._EQ_.call(null,"1",G__10430))
{return cljs.core.char$.call(null,772);
} else
{if(cljs.core._EQ_.call(null,"^",G__10430))
{return cljs.core.char$.call(null,770);
} else
{if(cljs.core._EQ_.call(null,"2",G__10430))
{return cljs.core.char$.call(null,769);
} else
{if(cljs.core._EQ_.call(null,"'",G__10430))
{return cljs.core.char$.call(null,769);
} else
{if(cljs.core._EQ_.call(null,"4",G__10430))
{return cljs.core.char$.call(null,768);
} else
{if(cljs.core._EQ_.call(null,"`",G__10430))
{return cljs.core.char$.call(null,768);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var diacritic = temp__4090__auto__;return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.call(null,new cljs.core.Keyword(null,"default","default",2558708147),[cljs.core.str(cljs.core.first.call(null,r)),cljs.core.str(diacritic),cljs.core.str(cljs.core.subs.call(null,r,1))].join(''))], null),t);
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)),t2,t3], null);
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10405_2__10418,new cljs.core.Keyword(null,"right-quote","right-quote",3807707901)))
{var vec__10431 = (((cljs.core._EQ_.call(null,termcat.term.tt.call(null,t2),new cljs.core.Keyword(null,"default","default",2558708147))) && (typeof termcat.term.payload.call(null,t2) === 'string'))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,termcat.term.payload.call(null,t2)),cljs.core.subs.call(null,termcat.term.payload.call(null,t2),1),t3], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.payload.call(null,t2),[cljs.core.str(termcat.term.payload.call(null,t3))].join(''),null], null));var c = cljs.core.nth.call(null,vec__10431,0,null);var r = cljs.core.nth.call(null,vec__10431,1,null);var t = cljs.core.nth.call(null,vec__10431,2,null);var temp__4090__auto__ = (function (){var G__10432 = c;if(cljs.core._EQ_.call(null,"3",G__10432))
{return cljs.core.char$.call(null,780);
} else
{if(cljs.core._EQ_.call(null,"\"",G__10432))
{return cljs.core.char$.call(null,776);
} else
{if(cljs.core._EQ_.call(null,"1",G__10432))
{return cljs.core.char$.call(null,772);
} else
{if(cljs.core._EQ_.call(null,"^",G__10432))
{return cljs.core.char$.call(null,770);
} else
{if(cljs.core._EQ_.call(null,"2",G__10432))
{return cljs.core.char$.call(null,769);
} else
{if(cljs.core._EQ_.call(null,"'",G__10432))
{return cljs.core.char$.call(null,769);
} else
{if(cljs.core._EQ_.call(null,"4",G__10432))
{return cljs.core.char$.call(null,768);
} else
{if(cljs.core._EQ_.call(null,"`",G__10432))
{return cljs.core.char$.call(null,768);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var diacritic = temp__4090__auto__;return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.call(null,new cljs.core.Keyword(null,"default","default",2558708147),[cljs.core.str(cljs.core.first.call(null,r)),cljs.core.str(diacritic),cljs.core.str(cljs.core.subs.call(null,r,1))].join(''))], null),t);
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)),t2,t3], null);
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10405_2__10418,new cljs.core.Keyword(null,"double-quote","double-quote",969793778)))
{var vec__10433 = (((cljs.core._EQ_.call(null,termcat.term.tt.call(null,t2),new cljs.core.Keyword(null,"default","default",2558708147))) && (typeof termcat.term.payload.call(null,t2) === 'string'))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,termcat.term.payload.call(null,t2)),cljs.core.subs.call(null,termcat.term.payload.call(null,t2),1),t3], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.payload.call(null,t2),[cljs.core.str(termcat.term.payload.call(null,t3))].join(''),null], null));var c = cljs.core.nth.call(null,vec__10433,0,null);var r = cljs.core.nth.call(null,vec__10433,1,null);var t = cljs.core.nth.call(null,vec__10433,2,null);var temp__4090__auto__ = (function (){var G__10434 = c;if(cljs.core._EQ_.call(null,"3",G__10434))
{return cljs.core.char$.call(null,780);
} else
{if(cljs.core._EQ_.call(null,"\"",G__10434))
{return cljs.core.char$.call(null,776);
} else
{if(cljs.core._EQ_.call(null,"1",G__10434))
{return cljs.core.char$.call(null,772);
} else
{if(cljs.core._EQ_.call(null,"^",G__10434))
{return cljs.core.char$.call(null,770);
} else
{if(cljs.core._EQ_.call(null,"2",G__10434))
{return cljs.core.char$.call(null,769);
} else
{if(cljs.core._EQ_.call(null,"'",G__10434))
{return cljs.core.char$.call(null,769);
} else
{if(cljs.core._EQ_.call(null,"4",G__10434))
{return cljs.core.char$.call(null,768);
} else
{if(cljs.core._EQ_.call(null,"`",G__10434))
{return cljs.core.char$.call(null,768);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var diacritic = temp__4090__auto__;return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.call(null,new cljs.core.Keyword(null,"default","default",2558708147),[cljs.core.str(cljs.core.first.call(null,r)),cljs.core.str(diacritic),cljs.core.str(cljs.core.subs.call(null,r,1))].join(''))], null),t);
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)),t2,t3], null);
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10405_2__10418,new cljs.core.Keyword(null,"circumflex","circumflex",4463600090)))
{var vec__10435 = (((cljs.core._EQ_.call(null,termcat.term.tt.call(null,t2),new cljs.core.Keyword(null,"default","default",2558708147))) && (typeof termcat.term.payload.call(null,t2) === 'string'))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,termcat.term.payload.call(null,t2)),cljs.core.subs.call(null,termcat.term.payload.call(null,t2),1),t3], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.payload.call(null,t2),[cljs.core.str(termcat.term.payload.call(null,t3))].join(''),null], null));var c = cljs.core.nth.call(null,vec__10435,0,null);var r = cljs.core.nth.call(null,vec__10435,1,null);var t = cljs.core.nth.call(null,vec__10435,2,null);var temp__4090__auto__ = (function (){var G__10436 = c;if(cljs.core._EQ_.call(null,"3",G__10436))
{return cljs.core.char$.call(null,780);
} else
{if(cljs.core._EQ_.call(null,"\"",G__10436))
{return cljs.core.char$.call(null,776);
} else
{if(cljs.core._EQ_.call(null,"1",G__10436))
{return cljs.core.char$.call(null,772);
} else
{if(cljs.core._EQ_.call(null,"^",G__10436))
{return cljs.core.char$.call(null,770);
} else
{if(cljs.core._EQ_.call(null,"2",G__10436))
{return cljs.core.char$.call(null,769);
} else
{if(cljs.core._EQ_.call(null,"'",G__10436))
{return cljs.core.char$.call(null,769);
} else
{if(cljs.core._EQ_.call(null,"4",G__10436))
{return cljs.core.char$.call(null,768);
} else
{if(cljs.core._EQ_.call(null,"`",G__10436))
{return cljs.core.char$.call(null,768);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var diacritic = temp__4090__auto__;return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.call(null,new cljs.core.Keyword(null,"default","default",2558708147),[cljs.core.str(cljs.core.first.call(null,r)),cljs.core.str(diacritic),cljs.core.str(cljs.core.subs.call(null,r,1))].join(''))], null),t);
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)),t2,t3], null);
}
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10405_2__10418,new cljs.core.Keyword(null,"default","default",2558708147)))
{var vec__10437 = (((cljs.core._EQ_.call(null,termcat.term.tt.call(null,t2),new cljs.core.Keyword(null,"default","default",2558708147))) && (typeof termcat.term.payload.call(null,t2) === 'string'))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,termcat.term.payload.call(null,t2)),cljs.core.subs.call(null,termcat.term.payload.call(null,t2),1),t3], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.payload.call(null,t2),[cljs.core.str(termcat.term.payload.call(null,t3))].join(''),null], null));var c = cljs.core.nth.call(null,vec__10437,0,null);var r = cljs.core.nth.call(null,vec__10437,1,null);var t = cljs.core.nth.call(null,vec__10437,2,null);var temp__4090__auto__ = (function (){var G__10438 = c;if(cljs.core._EQ_.call(null,"3",G__10438))
{return cljs.core.char$.call(null,780);
} else
{if(cljs.core._EQ_.call(null,"\"",G__10438))
{return cljs.core.char$.call(null,776);
} else
{if(cljs.core._EQ_.call(null,"1",G__10438))
{return cljs.core.char$.call(null,772);
} else
{if(cljs.core._EQ_.call(null,"^",G__10438))
{return cljs.core.char$.call(null,770);
} else
{if(cljs.core._EQ_.call(null,"2",G__10438))
{return cljs.core.char$.call(null,769);
} else
{if(cljs.core._EQ_.call(null,"'",G__10438))
{return cljs.core.char$.call(null,769);
} else
{if(cljs.core._EQ_.call(null,"4",G__10438))
{return cljs.core.char$.call(null,768);
} else
{if(cljs.core._EQ_.call(null,"`",G__10438))
{return cljs.core.char$.call(null,768);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var diacritic = temp__4090__auto__;return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.call(null,new cljs.core.Keyword(null,"default","default",2558708147),[cljs.core.str(cljs.core.first.call(null,r)),cljs.core.str(diacritic),cljs.core.str(cljs.core.subs.call(null,r,1))].join(''))], null),t);
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)),t2,t3], null);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}
}catch (e10428){if((e10428 instanceof Error))
{var e__4796__auto____$3 = e10428;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10428;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10426){if((e10426 instanceof Error))
{var e__4796__auto____$3 = e10426;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{try{var ocr_10405_1__10417 = cljs.core.nth.call(null,ocr_10405,1);if(cljs.core.keyword_identical_QMARK_.call(null,ocr_10405_1__10417,new cljs.core.Keyword(null,"percent","percent",4629944247)))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.call(null,new cljs.core.Keyword(null,"whitespace","whitespace",1290815983)),t2,t3], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10427){if((e10427 instanceof Error))
{var e__4796__auto____$4 = e10427;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10427;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$3;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10426;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10425;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10424;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10423;
} else
{return null;
}
}
}} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e10422){if((e10422 instanceof Error))
{var e__4796__auto__ = e10422;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10422;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first.call(null,r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.call(null,cljs.core.next.call(null,r__6471__auto__),cljs.core.drop.call(null,3,input__6469__auto__))], null);
} else
{return null;
}
});
G__10457 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__10457__0.call(this);
case 2:
return G__10457__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10457;
})()
);
