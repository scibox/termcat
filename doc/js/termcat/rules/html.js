// Compiled by ClojureScript 0.0-2156
goog.provide('termcat.rules.html');
goog.require('cljs.core');
goog.require('termcat.term');
goog.require('termcat.util.math');
goog.require('termcat.term');
goog.require('clojure.core.reducers');
goog.require('clojure.string');
goog.require('termcat.rewrite');
goog.require('clojure.core.reducers');
goog.require('termcat.rewrite');
goog.require('termcat.util.math');
goog.require('clojure.string');
goog.require('cljs.core.match');
termcat.rules.html.text_block_QMARK_ = (function text_block_QMARK_(x){return (termcat.term.block_QMARK_(x)) && (cljs.core.not(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(cljs.core.second(termcat.term.tt(x)))));
});
/**
* 
*/
termcat.rules.html.introduce_nbsp_entities = termcat.rewrite.abstraction((function() {
var G__9197 = null;
var G__9197__0 = (function (){return null;
});
var G__9197__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9189 = cljs.core.cons(state__6468__auto__,cljs.core.take(1,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9189,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9189,1,null);var temp__4090__auto__ = (function (){var ocr_9190 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(1,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9190)) && ((cljs.core.count(ocr_9190) === 2)))
{try{var ocr_9190_1__9194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9190,1);if(cljs.core.keyword_identical_QMARK_(ocr_9190_1__9194,cljs.core.constant$keyword$44))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"&nbsp;")], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9196){if((e9196 instanceof Error))
{var e__4796__auto__ = e9196;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9196;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9195){if((e9195 instanceof Error))
{var e__4796__auto__ = e9195;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9195;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first(r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__6471__auto__),cljs.core.drop(1,input__6469__auto__))], null);
} else
{return null;
}
});
G__9197 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__9197__0.call(this);
case 2:
return G__9197__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9197;
})()
);
/**
* 
*/
termcat.rules.html.introduce_typographic_dashes = termcat.rewrite.abstraction((function() {
var G__9207 = null;
var G__9207__0 = (function (){return null;
});
var G__9207__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9198 = cljs.core.cons(state__6468__auto__,cljs.core.take(1,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9198,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9198,1,null);var temp__4090__auto__ = (function (){var ocr_9199 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(1,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9199)) && ((cljs.core.count(ocr_9199) === 2)))
{try{var ocr_9199_1__9203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9199,1);if(cljs.core.keyword_identical_QMARK_(ocr_9199_1__9203,cljs.core.constant$keyword$31))
{var G__9206 = ((typeof termcat.term.payload(t1) === 'string')?cljs.core.count(termcat.term.payload(t1)):null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(3,G__9206))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,"\u2014")], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(2,G__9206))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,"\u2013")], null);
} else
{if(cljs.core.constant$keyword$6)
{return null;
} else
{return null;
}
}
}
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9205){if((e9205 instanceof Error))
{var e__4796__auto__ = e9205;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9205;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9204){if((e9204 instanceof Error))
{var e__4796__auto__ = e9204;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9204;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first(r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__6471__auto__),cljs.core.drop(1,input__6469__auto__))], null);
} else
{return null;
}
});
G__9207 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__9207__0.call(this);
case 2:
return G__9207__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9207;
})()
);
/**
* 
*/
termcat.rules.html.introduce_typographic_quotes = termcat.rewrite.abstraction((function() {
var G__9217 = null;
var G__9217__0 = (function (){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$59,false], null);
});
var G__9217__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9208 = cljs.core.cons(state__6468__auto__,cljs.core.take(1,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9208,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9208,1,null);var temp__4090__auto__ = (function (){var ocr_9209 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(1,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9209)) && ((cljs.core.count(ocr_9209) === 2)))
{try{var ocr_9209_1__9214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9209,1);if(cljs.core.keyword_identical_QMARK_(ocr_9209_1__9214,cljs.core.constant$keyword$60))
{var length = cljs.core.count([cljs.core.str(termcat.term.payload(t1))].join(''));var doublec = ((length / 2) | 0);var also_single = cljs.core.odd_QMARK_(cljs.core.mod(length,2));return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(doublec,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,"\u201C")),cljs.core.array_seq([((also_single)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,"\u2018")], null):null)], 0));
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9209_1__9214,cljs.core.constant$keyword$35))
{var length = cljs.core.count([cljs.core.str(termcat.term.payload(t1))].join(''));var doublec = ((length / 2) | 0);var also_single = cljs.core.odd_QMARK_(cljs.core.mod(length,2));return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),((also_single)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,"\u2019")], null):null),cljs.core.array_seq([cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(doublec,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,"\u201D"))], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e9216){if((e9216 instanceof Error))
{var e__4796__auto__ = e9216;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9216;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9215){if((e9215 instanceof Error))
{var e__4796__auto__ = e9215;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9215;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first(r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__6471__auto__),cljs.core.drop(1,input__6469__auto__))], null);
} else
{return null;
}
});
G__9217 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__9217__0.call(this);
case 2:
return G__9217__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9217;
})()
);
/**
* 
*/
termcat.rules.html.introduce_typographic_full_stops = termcat.rewrite.abstraction((function() {
var G__9237 = null;
var G__9237__0 = (function (){return null;
});
var G__9237__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9218 = cljs.core.cons(state__6468__auto__,cljs.core.take(3,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9218,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9218,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9218,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9218,3,null);var temp__4090__auto__ = (function (){var ocr_9219 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(3,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9219)) && ((cljs.core.count(ocr_9219) === 4)))
{try{var ocr_9219_1__9224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9219,1);if(cljs.core.keyword_identical_QMARK_(ocr_9219_1__9224,cljs.core.constant$keyword$7))
{try{var ocr_9219_2__9225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9219,2);if(cljs.core.keyword_identical_QMARK_(ocr_9219_2__9225,cljs.core.constant$keyword$61))
{try{var ocr_9219_3__9226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9219,3);if(cljs.core.keyword_identical_QMARK_(ocr_9219_3__9226,cljs.core.constant$keyword$40))
{if(cljs.core.truth_((function (){var and__3391__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.payload(t2),".");if(and__3391__auto__)
{var or__3403__auto__ = termcat.term.block_QMARK_(t1);if(or__3403__auto__)
{return or__3403__auto__;
} else
{return cljs.core.re_matches(/[^\\.]*/,[cljs.core.str(termcat.term.payload(t1))].join(''));
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<span class='wide_punctuation_mark'>"),t2,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</span>"),t3], null);
} else
{return null;
}
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9236){if((e9236 instanceof Error))
{var e__4796__auto__ = e9236;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9236;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9235){if((e9235 instanceof Error))
{var e__4796__auto__ = e9235;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9235;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9230){if((e9230 instanceof Error))
{var e__4796__auto__ = e9230;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_9219_1__9224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9219,1);if((cljs.core.vector_QMARK_(ocr_9219_1__9224)) && ((cljs.core.count(ocr_9219_1__9224) === 2)))
{try{var ocr_9219_1__9224_0__9227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9219_1__9224,0);if(cljs.core.keyword_identical_QMARK_(ocr_9219_1__9224_0__9227,cljs.core.constant$keyword$26))
{try{var ocr_9219_2__9225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9219,2);if(cljs.core.keyword_identical_QMARK_(ocr_9219_2__9225,cljs.core.constant$keyword$61))
{try{var ocr_9219_3__9226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9219,3);if(cljs.core.keyword_identical_QMARK_(ocr_9219_3__9226,cljs.core.constant$keyword$40))
{if(cljs.core.truth_((function (){var and__3391__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(termcat.term.payload(t2),".");if(and__3391__auto__)
{var or__3403__auto__ = termcat.term.block_QMARK_(t1);if(or__3403__auto__)
{return or__3403__auto__;
} else
{return cljs.core.re_matches(/[^\\.]*/,[cljs.core.str(termcat.term.payload(t1))].join(''));
}
} else
{return and__3391__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<span class='wide_punctuation_mark'>"),t2,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</span>"),t3], null);
} else
{return null;
}
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9234){if((e9234 instanceof Error))
{var e__4796__auto____$1 = e9234;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9234;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9233){if((e9233 instanceof Error))
{var e__4796__auto____$1 = e9233;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9233;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9232){if((e9232 instanceof Error))
{var e__4796__auto____$1 = e9232;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9232;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9231){if((e9231 instanceof Error))
{var e__4796__auto____$1 = e9231;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9231;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9230;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9229){if((e9229 instanceof Error))
{var e__4796__auto__ = e9229;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9229;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first(r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__6471__auto__),cljs.core.drop(3,input__6469__auto__))], null);
} else
{return null;
}
});
G__9237 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__9237__0.call(this);
case 2:
return G__9237__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9237;
})()
);
/**
* 
*/
termcat.rules.html.introduce_typographic_colons = termcat.rewrite.abstraction((function() {
var G__9261 = null;
var G__9261__0 = (function (){return null;
});
var G__9261__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9238 = cljs.core.cons(state__6468__auto__,cljs.core.take(3,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9238,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9238,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9238,2,null);var t3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9238,3,null);var temp__4090__auto__ = (function (){var ocr_9239 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(3,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9239)) && ((cljs.core.count(ocr_9239) === 4)))
{try{var ocr_9239_1__9244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9239,1);if(cljs.core.keyword_identical_QMARK_(ocr_9239_1__9244,cljs.core.constant$keyword$7))
{try{var ocr_9239_2__9245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9239,2);if(cljs.core.keyword_identical_QMARK_(ocr_9239_2__9245,cljs.core.constant$keyword$62))
{try{var ocr_9239_3__9246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9239,3);if(cljs.core.keyword_identical_QMARK_(ocr_9239_3__9246,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<span class='wide_punctuation_mark'>"),t2,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</span>"),t3], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9258){if((e9258 instanceof Error))
{var e__4796__auto__ = e9258;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9258;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9239_2__9245,cljs.core.constant$keyword$63))
{try{var ocr_9239_3__9246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9239,3);if(cljs.core.keyword_identical_QMARK_(ocr_9239_3__9246,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<span class='wide_punctuation_mark'>"),t2,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</span>"),t3], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9259){if((e9259 instanceof Error))
{var e__4796__auto__ = e9259;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9259;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9239_2__9245,cljs.core.constant$keyword$64))
{try{var ocr_9239_3__9246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9239,3);if(cljs.core.keyword_identical_QMARK_(ocr_9239_3__9246,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<span class='wide_punctuation_mark'>"),t2,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</span>"),t3], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9260){if((e9260 instanceof Error))
{var e__4796__auto__ = e9260;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9260;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}catch (e9257){if((e9257 instanceof Error))
{var e__4796__auto__ = e9257;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9257;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9250){if((e9250 instanceof Error))
{var e__4796__auto__ = e9250;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_9239_1__9244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9239,1);if((cljs.core.vector_QMARK_(ocr_9239_1__9244)) && ((cljs.core.count(ocr_9239_1__9244) === 2)))
{try{var ocr_9239_1__9244_0__9247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9239_1__9244,0);if(cljs.core.keyword_identical_QMARK_(ocr_9239_1__9244_0__9247,cljs.core.constant$keyword$26))
{try{var ocr_9239_2__9245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9239,2);if(cljs.core.keyword_identical_QMARK_(ocr_9239_2__9245,cljs.core.constant$keyword$62))
{try{var ocr_9239_3__9246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9239,3);if(cljs.core.keyword_identical_QMARK_(ocr_9239_3__9246,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<span class='wide_punctuation_mark'>"),t2,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</span>"),t3], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9254){if((e9254 instanceof Error))
{var e__4796__auto____$1 = e9254;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9254;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9239_2__9245,cljs.core.constant$keyword$63))
{try{var ocr_9239_3__9246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9239,3);if(cljs.core.keyword_identical_QMARK_(ocr_9239_3__9246,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<span class='wide_punctuation_mark'>"),t2,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</span>"),t3], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9255){if((e9255 instanceof Error))
{var e__4796__auto____$1 = e9255;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9255;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9239_2__9245,cljs.core.constant$keyword$64))
{try{var ocr_9239_3__9246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9239,3);if(cljs.core.keyword_identical_QMARK_(ocr_9239_3__9246,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<span class='wide_punctuation_mark'>"),t2,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</span>"),t3], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9256){if((e9256 instanceof Error))
{var e__4796__auto____$1 = e9256;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9256;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}catch (e9253){if((e9253 instanceof Error))
{var e__4796__auto____$1 = e9253;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9253;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9252){if((e9252 instanceof Error))
{var e__4796__auto____$1 = e9252;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9252;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9251){if((e9251 instanceof Error))
{var e__4796__auto____$1 = e9251;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9251;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9250;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9249){if((e9249 instanceof Error))
{var e__4796__auto__ = e9249;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9249;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first(r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__6471__auto__),cljs.core.drop(3,input__6469__auto__))], null);
} else
{return null;
}
});
G__9261 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__9261__0.call(this);
case 2:
return G__9261__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9261;
})()
);
/**
* 
*/
termcat.rules.html.remove_error_tokens = termcat.rewrite.abstraction((function() {
var G__9270 = null;
var G__9270__0 = (function (){return null;
});
var G__9270__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9262 = cljs.core.cons(state__6468__auto__,cljs.core.take(1,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9262,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9262,1,null);var temp__4090__auto__ = (function (){var ocr_9263 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(1,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9263)) && ((cljs.core.count(ocr_9263) === 2)))
{try{var ocr_9263_1__9267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9263,1);if(cljs.core.keyword_identical_QMARK_(ocr_9263_1__9267,cljs.core.constant$keyword$65))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.util.math.math_block.cljs$core$IFn$_invoke$arity$variadic(termcat.term.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$7,termcat.term.payload(t1))], 0)),cljs.core.array_seq([cljs.core.constant$keyword$65], 0))], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9269){if((e9269 instanceof Error))
{var e__4796__auto__ = e9269;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9269;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9268){if((e9268 instanceof Error))
{var e__4796__auto__ = e9268;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9268;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first(r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__6471__auto__),cljs.core.drop(1,input__6469__auto__))], null);
} else
{return null;
}
});
G__9270 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__9270__0.call(this);
case 2:
return G__9270__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9270;
})()
);
termcat.rules.html.wrap_math_block = (function wrap_math_block(t,props){var tag_name = (function (){var pred__9291 = (function (p1__9272_SHARP_,p2__9271_SHARP_){return cljs.core.contains_QMARK_(p2__9271_SHARP_,p1__9272_SHARP_);
});var expr__9292 = props;if(pred__9291(cljs.core.constant$keyword$30,expr__9292))
{return "mo";
} else
{if(pred__9291(cljs.core.constant$keyword$29,expr__9292))
{return "mi";
} else
{if(pred__9291(cljs.core.constant$keyword$28,expr__9292))
{return "mn";
} else
{return null;
}
}
}
})();return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$66),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,[cljs.core.str("<"),cljs.core.str(tag_name),cljs.core.str(((cljs.core.contains_QMARK_(props,cljs.core.constant$keyword$39))?" mathvariant=script":null)),cljs.core.str((function (){var pred__9294 = (function (p1__9274_SHARP_,p2__9273_SHARP_){return cljs.core.contains_QMARK_(p2__9273_SHARP_,p1__9274_SHARP_);
});var expr__9295 = props;if(pred__9294(cljs.core.constant$keyword$32,expr__9295))
{return " form=prefix lspace=0em";
} else
{if(pred__9294(cljs.core.constant$keyword$52,expr__9295))
{return " form=infix";
} else
{if(pred__9294(cljs.core.constant$keyword$47,expr__9295))
{return " form=postfix rspace=0em";
} else
{return null;
}
}
}
})()),cljs.core.str((function (){var pred__9297 = (function (p1__9276_SHARP_,p2__9275_SHARP_){return cljs.core.contains_QMARK_(p2__9275_SHARP_,p1__9276_SHARP_);
});var expr__9298 = props;if(pred__9297(cljs.core.constant$keyword$49,expr__9298))
{return " lspace=veryverythickmathspace";
} else
{if(pred__9297(cljs.core.constant$keyword$48,expr__9298))
{return " lspace=thickmathspace";
} else
{return null;
}
}
})()),cljs.core.str((function (){var pred__9300 = (function (p1__9278_SHARP_,p2__9277_SHARP_){return cljs.core.contains_QMARK_(p2__9277_SHARP_,p1__9278_SHARP_);
});var expr__9301 = props;if(pred__9300(cljs.core.constant$keyword$46,expr__9301))
{return " rspace=veryverythickmathspace";
} else
{if(pred__9300(cljs.core.constant$keyword$45,expr__9301))
{return " rspace=thickmathspace";
} else
{return null;
}
}
})()),cljs.core.str(">")].join('')),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$67)], null),termcat.rewrite.unwrap(t),cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$68),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,[cljs.core.str("<"),cljs.core.str("/"),cljs.core.str(tag_name),cljs.core.str(">")].join('')),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$69)], null)], 0));
});
/**
* 
*/
termcat.rules.html.introduce_inner_math_tags = termcat.rewrite.abstraction((function() {
var G__9343 = null;
var G__9343__0 = (function (){return null;
});
var G__9343__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9303 = cljs.core.cons(state__6468__auto__,cljs.core.take(1,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9303,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9303,1,null);var temp__4090__auto__ = (function (){var ocr_9304 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(1,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9304)) && ((cljs.core.count(ocr_9304) === 2)))
{try{var ocr_9304_1__9322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9304,1);if((cljs.core.vector_QMARK_(ocr_9304_1__9322)) && ((cljs.core.count(ocr_9304_1__9322) === 2)))
{try{var ocr_9304_1__9322_0__9323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9304_1__9322,0);if(cljs.core.keyword_identical_QMARK_(ocr_9304_1__9322_0__9323,cljs.core.constant$keyword$26))
{try{var ocr_9304_1__9322_1__9324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9304_1__9322,1);if(cljs.core.truth_(cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(ocr_9304_1__9322_1__9324)))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9342){if((e9342 instanceof Error))
{var e__4796__auto__ = e9342;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9342;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9327){if((e9327 instanceof Error))
{var e__4796__auto__ = e9327;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_9304_1__9322_0__9323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9304_1__9322,0);if(cljs.core.keyword_identical_QMARK_(ocr_9304_1__9322_0__9323,cljs.core.constant$keyword$26))
{try{var ocr_9304_1__9322_1__9324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9304_1__9322,1);if(cljs.core.truth_(cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(ocr_9304_1__9322_1__9324)))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$66),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<merror>"),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<mtext>")], null),termcat.rewrite.unwrap(t1),cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</mtext>"),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</merror>"),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$69)], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9341){if((e9341 instanceof Error))
{var e__4796__auto____$1 = e9341;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9341;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9328){if((e9328 instanceof Error))
{var e__4796__auto____$1 = e9328;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_9304_1__9322_0__9323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9304_1__9322,0);if(cljs.core.keyword_identical_QMARK_(ocr_9304_1__9322_0__9323,cljs.core.constant$keyword$26))
{try{var ocr_9304_1__9322_1__9324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9304_1__9322,1);if(cljs.core.truth_(cljs.core.constant$keyword$54.cljs$core$IFn$_invoke$arity$1(ocr_9304_1__9322_1__9324)))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$66),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<msup>"),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$67)], null),termcat.rewrite.unwrap(t1),cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$68),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</msup>"),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$69)], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9340){if((e9340 instanceof Error))
{var e__4796__auto____$2 = e9340;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9340;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9329){if((e9329 instanceof Error))
{var e__4796__auto____$2 = e9329;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_9304_1__9322_0__9323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9304_1__9322,0);if(cljs.core.keyword_identical_QMARK_(ocr_9304_1__9322_0__9323,cljs.core.constant$keyword$26))
{try{var ocr_9304_1__9322_1__9324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9304_1__9322,1);if(cljs.core.truth_(cljs.core.constant$keyword$55.cljs$core$IFn$_invoke$arity$1(ocr_9304_1__9322_1__9324)))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$66),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<msub>"),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$67)], null),termcat.rewrite.unwrap(t1),cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$68),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</msub>"),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$69)], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9339){if((e9339 instanceof Error))
{var e__4796__auto____$3 = e9339;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9339;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9330){if((e9330 instanceof Error))
{var e__4796__auto____$3 = e9330;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{try{var ocr_9304_1__9322_0__9323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9304_1__9322,0);if(cljs.core.keyword_identical_QMARK_(ocr_9304_1__9322_0__9323,cljs.core.constant$keyword$26))
{try{var ocr_9304_1__9322_1__9324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9304_1__9322,1);if(cljs.core.truth_(cljs.core.constant$keyword$53.cljs$core$IFn$_invoke$arity$1(ocr_9304_1__9322_1__9324)))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$66),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<msubsup>"),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$67)], null),termcat.rewrite.unwrap(t1),cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$68),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</msubsup>"),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$69)], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9338){if((e9338 instanceof Error))
{var e__4796__auto____$4 = e9338;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9338;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9331){if((e9331 instanceof Error))
{var e__4796__auto____$4 = e9331;if((e__4796__auto____$4 === cljs.core.match.backtrack))
{try{var ocr_9304_1__9322_0__9323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9304_1__9322,0);if(cljs.core.keyword_identical_QMARK_(ocr_9304_1__9322_0__9323,cljs.core.constant$keyword$26))
{try{var ocr_9304_1__9322_1__9324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9304_1__9322,1);if(cljs.core.truth_(cljs.core.constant$keyword$58.cljs$core$IFn$_invoke$arity$1(ocr_9304_1__9322_1__9324)))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$66),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<mfrac>"),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$67)], null),termcat.rewrite.unwrap(t1),cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$68),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</mfrac>"),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$69)], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9337){if((e9337 instanceof Error))
{var e__4796__auto____$5 = e9337;if((e__4796__auto____$5 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$5;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9337;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9332){if((e9332 instanceof Error))
{var e__4796__auto____$5 = e9332;if((e__4796__auto____$5 === cljs.core.match.backtrack))
{try{var ocr_9304_1__9322_0__9323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9304_1__9322,0);if(cljs.core.keyword_identical_QMARK_(ocr_9304_1__9322_0__9323,cljs.core.constant$keyword$26))
{try{var ocr_9304_1__9322_1__9324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9304_1__9322,1);if(cljs.core.truth_(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(ocr_9304_1__9322_1__9324)))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$66),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<mrow>"),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$67)], null),termcat.rewrite.unwrap(t1),cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$68),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</mrow>"),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$69)], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9336){if((e9336 instanceof Error))
{var e__4796__auto____$6 = e9336;if((e__4796__auto____$6 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$6;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9336;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9333){if((e9333 instanceof Error))
{var e__4796__auto____$6 = e9333;if((e__4796__auto____$6 === cljs.core.match.backtrack))
{try{var ocr_9304_1__9322_0__9323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9304_1__9322,0);if(cljs.core.keyword_identical_QMARK_(ocr_9304_1__9322_0__9323,cljs.core.constant$keyword$26))
{try{var ocr_9304_1__9322_1__9324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9304_1__9322,1);if(cljs.core.truth_(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(ocr_9304_1__9322_1__9324)))
{var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9304_1__9322,1);return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$66)], null),termcat.rules.html.wrap_math_block(t1,x),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$69)], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9335){if((e9335 instanceof Error))
{var e__4796__auto____$7 = e9335;if((e__4796__auto____$7 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$7;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9335;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9334){if((e9334 instanceof Error))
{var e__4796__auto____$7 = e9334;if((e__4796__auto____$7 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$7;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9334;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$6;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9333;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$5;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9332;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$4;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9331;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9330;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9329;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9328;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9327;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9326){if((e9326 instanceof Error))
{var e__4796__auto__ = e9326;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9326;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9325){if((e9325 instanceof Error))
{var e__4796__auto__ = e9325;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9325;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first(r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__6471__auto__),cljs.core.drop(1,input__6469__auto__))], null);
} else
{return null;
}
});
G__9343 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__9343__0.call(this);
case 2:
return G__9343__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9343;
})()
);
/**
* 
*/
termcat.rules.html.remove_double_math_tokens = termcat.rewrite.abstraction((function() {
var G__9360 = null;
var G__9360__0 = (function (){return null;
});
var G__9360__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9344 = cljs.core.cons(state__6468__auto__,cljs.core.take(2,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9344,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9344,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9344,2,null);var temp__4090__auto__ = (function (){var ocr_9345 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(2,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9345)) && ((cljs.core.count(ocr_9345) === 3)))
{try{var ocr_9345_1__9352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9345,1);if(cljs.core.keyword_identical_QMARK_(ocr_9345_1__9352,cljs.core.constant$keyword$67))
{try{var ocr_9345_2__9353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9345,2);if(cljs.core.keyword_identical_QMARK_(ocr_9345_2__9353,cljs.core.constant$keyword$67))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9356){if((e9356 instanceof Error))
{var e__4796__auto__ = e9356;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9356;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9345_1__9352,cljs.core.constant$keyword$68))
{try{var ocr_9345_2__9353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9345,2);if(cljs.core.keyword_identical_QMARK_(ocr_9345_2__9353,cljs.core.constant$keyword$68))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9357){if((e9357 instanceof Error))
{var e__4796__auto__ = e9357;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9357;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9345_1__9352,cljs.core.constant$keyword$69))
{try{var ocr_9345_2__9353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9345,2);if(cljs.core.keyword_identical_QMARK_(ocr_9345_2__9353,cljs.core.constant$keyword$69))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9358){if((e9358 instanceof Error))
{var e__4796__auto__ = e9358;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9358;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9345_1__9352,cljs.core.constant$keyword$66))
{try{var ocr_9345_2__9353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9345,2);if(cljs.core.keyword_identical_QMARK_(ocr_9345_2__9353,cljs.core.constant$keyword$66))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9359){if((e9359 instanceof Error))
{var e__4796__auto__ = e9359;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9359;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}catch (e9355){if((e9355 instanceof Error))
{var e__4796__auto__ = e9355;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9355;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9354){if((e9354 instanceof Error))
{var e__4796__auto__ = e9354;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9354;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first(r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__6471__auto__),cljs.core.drop(2,input__6469__auto__))], null);
} else
{return null;
}
});
G__9360 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__9360__0.call(this);
case 2:
return G__9360__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9360;
})()
);
/**
* 
*/
termcat.rules.html.remove_canceling_math_tokens = termcat.rewrite.abstraction((function() {
var G__9376 = null;
var G__9376__0 = (function (){return null;
});
var G__9376__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9361 = cljs.core.cons(state__6468__auto__,cljs.core.take(2,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9361,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9361,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9361,2,null);var temp__4090__auto__ = (function (){var ocr_9362 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(2,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9362)) && ((cljs.core.count(ocr_9362) === 3)))
{try{var ocr_9362_1__9368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9362,1);if(cljs.core.keyword_identical_QMARK_(ocr_9362_1__9368,cljs.core.constant$keyword$69))
{try{var ocr_9362_2__9369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9362,2);if(cljs.core.keyword_identical_QMARK_(ocr_9362_2__9369,cljs.core.constant$keyword$66))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9374){if((e9374 instanceof Error))
{var e__4796__auto__ = e9374;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9374;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9362_1__9368,cljs.core.constant$keyword$67))
{try{var ocr_9362_2__9369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9362,2);if(cljs.core.keyword_identical_QMARK_(ocr_9362_2__9369,cljs.core.constant$keyword$66))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9375){if((e9375 instanceof Error))
{var e__4796__auto__ = e9375;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9375;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e9371){if((e9371 instanceof Error))
{var e__4796__auto__ = e9371;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_9362_1__9368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9362,1);if(cljs.core.keyword_identical_QMARK_(ocr_9362_1__9368,cljs.core.constant$keyword$69))
{try{var ocr_9362_2__9369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9362,2);if(cljs.core.keyword_identical_QMARK_(ocr_9362_2__9369,cljs.core.constant$keyword$68))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9373){if((e9373 instanceof Error))
{var e__4796__auto____$1 = e9373;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9373;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9372){if((e9372 instanceof Error))
{var e__4796__auto____$1 = e9372;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9372;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9371;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9370){if((e9370 instanceof Error))
{var e__4796__auto__ = e9370;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9370;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first(r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__6471__auto__),cljs.core.drop(2,input__6469__auto__))], null);
} else
{return null;
}
});
G__9376 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__9376__0.call(this);
case 2:
return G__9376__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9376;
})()
);
termcat.rules.html.introduce_mtext_tags = (function() {
var introduce_mtext_tags = null;
var introduce_mtext_tags__0 = (function (){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$70,0,cljs.core.constant$keyword$71,false], null);
});
var introduce_mtext_tags__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9415 = cljs.core.cons(state__6468__auto__,cljs.core.take(2,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9415,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9415,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9415,2,null);var temp__4090__auto__ = (function (){var ocr_9416 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(2,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9416)) && ((cljs.core.count(ocr_9416) === 3)))
{try{var ocr_9416_1__9427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9416,1);if(cljs.core.keyword_identical_QMARK_(ocr_9416_1__9427,cljs.core.constant$keyword$68))
{try{var ocr_9416_0__9426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9416,0);if((function (){var G__9448 = ocr_9416_0__9426;if(G__9448)
{var bit__4053__auto__ = (G__9448.cljs$lang$protocol_mask$partition0$ & 256);if((bit__4053__auto__) || (G__9448.cljs$core$ILookup$))
{return true;
} else
{if((!G__9448.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__9448);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__9448);
}
})())
{try{var ocr_9416_0__9426_in_text__9431 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_9416_0__9426,cljs.core.constant$keyword$71,cljs.core.constant$keyword$72);if((ocr_9416_0__9426_in_text__9431 === true))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$71,false),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</mtext>"),t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9449){if((e9449 instanceof Error))
{var e__4796__auto__ = e9449;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9449;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9447){if((e9447 instanceof Error))
{var e__4796__auto__ = e9447;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9447;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9416_1__9427,cljs.core.constant$keyword$66))
{try{var ocr_9416_0__9426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9416,0);if((function (){var G__9451 = ocr_9416_0__9426;if(G__9451)
{var bit__4053__auto__ = (G__9451.cljs$lang$protocol_mask$partition0$ & 256);if((bit__4053__auto__) || (G__9451.cljs$core$ILookup$))
{return true;
} else
{if((!G__9451.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__9451);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__9451);
}
})())
{try{var ocr_9416_0__9426_in_text__9434 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_9416_0__9426,cljs.core.constant$keyword$71,cljs.core.constant$keyword$72);if((ocr_9416_0__9426_in_text__9434 === true))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$71,false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70], null),cljs.core.inc),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</mtext>"),t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9452){if((e9452 instanceof Error))
{var e__4796__auto__ = e9452;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9452;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9450){if((e9450 instanceof Error))
{var e__4796__auto__ = e9450;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9450;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e9439){if((e9439 instanceof Error))
{var e__4796__auto__ = e9439;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_9416_1__9427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9416,1);if(cljs.core.keyword_identical_QMARK_(ocr_9416_1__9427,cljs.core.constant$keyword$66))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70], null),cljs.core.inc),t1,t2], null);
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9416_1__9427,cljs.core.constant$keyword$69))
{try{var ocr_9416_2__9428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9416,2);if(cljs.core.keyword_identical_QMARK_(ocr_9416_2__9428,cljs.core.constant$keyword$68))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70], null),cljs.core.dec),t1,t2], null);
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9416_2__9428,cljs.core.constant$keyword$66))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70], null),cljs.core.dec),t1,t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e9446){if((e9446 instanceof Error))
{var e__4796__auto____$1 = e9446;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9446;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e9440){if((e9440 instanceof Error))
{var e__4796__auto____$1 = e9440;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_9416_1__9427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9416,1);if(cljs.core.keyword_identical_QMARK_(ocr_9416_1__9427,cljs.core.constant$keyword$69))
{try{var ocr_9416_0__9426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9416,0);if((function (){var G__9444 = ocr_9416_0__9426;if(G__9444)
{var bit__4053__auto__ = (G__9444.cljs$lang$protocol_mask$partition0$ & 256);if((bit__4053__auto__) || (G__9444.cljs$core$ILookup$))
{return true;
} else
{if((!G__9444.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__9444);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__9444);
}
})())
{try{var ocr_9416_0__9426_count__9437 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(ocr_9416_0__9426,cljs.core.constant$keyword$70,cljs.core.constant$keyword$72);if((ocr_9416_0__9426_count__9437 === 1))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$70,0),t1,t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9445){if((e9445 instanceof Error))
{var e__4796__auto____$2 = e9445;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9445;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9443){if((e9443 instanceof Error))
{var e__4796__auto____$2 = e9443;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9443;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9441){if((e9441 instanceof Error))
{var e__4796__auto____$2 = e9441;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{try{var ocr_9416_1__9427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9416,1);if(cljs.core.keyword_identical_QMARK_(ocr_9416_1__9427,cljs.core.constant$keyword$69))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$71,true),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70], null),cljs.core.dec),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<mtext>")], null),((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$40,termcat.term.tt(t2))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t2], null):null));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9442){if((e9442 instanceof Error))
{var e__4796__auto____$3 = e9442;if((e__4796__auto____$3 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$3;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9442;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9441;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9440;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9439;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9438){if((e9438 instanceof Error))
{var e__4796__auto__ = e9438;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9438;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first(r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__6471__auto__),cljs.core.drop(2,input__6469__auto__))], null);
} else
{return null;
}
});
introduce_mtext_tags = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return introduce_mtext_tags__0.call(this);
case 2:
return introduce_mtext_tags__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
introduce_mtext_tags.cljs$core$IFn$_invoke$arity$0 = introduce_mtext_tags__0;
introduce_mtext_tags.cljs$core$IFn$_invoke$arity$2 = introduce_mtext_tags__2;
return introduce_mtext_tags;
})()
;
/**
* 
*/
termcat.rules.html.introduce_outer_math_tags = termcat.rewrite.abstraction((function() {
var G__9465 = null;
var G__9465__0 = (function (){return null;
});
var G__9465__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9453 = cljs.core.cons(state__6468__auto__,cljs.core.take(2,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9453,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9453,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9453,2,null);var temp__4090__auto__ = (function (){var ocr_9454 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(2,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9454)) && ((cljs.core.count(ocr_9454) === 3)))
{try{var ocr_9454_1__9461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9454,1);if(cljs.core.keyword_identical_QMARK_(ocr_9454_1__9461,cljs.core.constant$keyword$69))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</math>"),t2], null);
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9454_1__9461,cljs.core.constant$keyword$66))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<math>"),t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e9464){if((e9464 instanceof Error))
{var e__4796__auto__ = e9464;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9464;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9463){if((e9463 instanceof Error))
{var e__4796__auto__ = e9463;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9463;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first(r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__6471__auto__),cljs.core.drop(2,input__6469__auto__))], null);
} else
{return null;
}
});
G__9465 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__9465__0.call(this);
case 2:
return G__9465__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9465;
})()
);
termcat.rules.html.escape = (function escape__$1(s){if(typeof s === 'string')
{return clojure.string.join.cljs$core$IFn$_invoke$arity$1((function (){var iter__4120__auto__ = (function iter__9474(s__9475){return (new cljs.core.LazySeq(null,(function (){var s__9475__$1 = s__9475;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9475__$1);if(temp__4092__auto__)
{var s__9475__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9475__$2))
{var c__4118__auto__ = cljs.core.chunk_first(s__9475__$2);var size__4119__auto__ = cljs.core.count(c__4118__auto__);var b__9477 = cljs.core.chunk_buffer(size__4119__auto__);if((function (){var i__9476 = 0;while(true){
if((i__9476 < size__4119__auto__))
{var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4118__auto__,i__9476);cljs.core.chunk_append(b__9477,(function (){var G__9480 = c;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__9480))
{return "&quot;";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",G__9480))
{return "&apos;";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("&",G__9480))
{return "&amp;";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",G__9480))
{return "&gt;";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("<",G__9480))
{return "&lt;";
} else
{if(cljs.core.constant$keyword$6)
{return c;
} else
{return null;
}
}
}
}
}
}
})());
{
var G__9482 = (i__9476 + 1);
i__9476 = G__9482;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9477),iter__9474(cljs.core.chunk_rest(s__9475__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9477),null);
}
} else
{var c = cljs.core.first(s__9475__$2);return cljs.core.cons((function (){var G__9481 = c;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__9481))
{return "&quot;";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",G__9481))
{return "&apos;";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("&",G__9481))
{return "&amp;";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",G__9481))
{return "&gt;";
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("<",G__9481))
{return "&lt;";
} else
{if(cljs.core.constant$keyword$6)
{return c;
} else
{return null;
}
}
}
}
}
}
})(),iter__9474(cljs.core.rest(s__9475__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4120__auto__(s);
})());
} else
{if(cljs.core.constant$keyword$6)
{return "";
} else
{return null;
}
}
});
/**
* 
*/
termcat.rules.html.flatten = termcat.rewrite.abstraction((function() {
var G__9495 = null;
var G__9495__0 = (function (){return null;
});
var G__9495__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9483 = cljs.core.cons(state__6468__auto__,cljs.core.take(1,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9483,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9483,1,null);var temp__4090__auto__ = (function (){var ocr_9484 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(1,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9484)) && ((cljs.core.count(ocr_9484) === 2)))
{try{var ocr_9484_1__9489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9484,1);if((cljs.core.vector_QMARK_(ocr_9484_1__9489)) && ((cljs.core.count(ocr_9484_1__9489) === 2)))
{try{var ocr_9484_1__9489_0__9490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9484_1__9489,0);if(cljs.core.keyword_identical_QMARK_(ocr_9484_1__9489_0__9490,cljs.core.constant$keyword$26))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,termcat.rules.html.escape(termcat.term.payload(termcat.term.left(t1))))], null),termcat.rewrite.unwrap(t1),cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,termcat.rules.html.escape(termcat.term.payload(termcat.term.right(t1))))], null)], 0));
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9494){if((e9494 instanceof Error))
{var e__4796__auto__ = e9494;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9494;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9493){if((e9493 instanceof Error))
{var e__4796__auto__ = e9493;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9493;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9492){if((e9492 instanceof Error))
{var e__4796__auto__ = e9492;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9492;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first(r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__6471__auto__),cljs.core.drop(1,input__6469__auto__))], null);
} else
{return null;
}
});
G__9495 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__9495__0.call(this);
case 2:
return G__9495__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9495;
})()
);
termcat.rules.html.separate_head_body = (function() {
var separate_head_body = null;
var separate_head_body__0 = (function (){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,cljs.core.constant$keyword$74,cljs.core.constant$keyword$74,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$75,cljs.core.PersistentVector.EMPTY], null);
});
var separate_head_body__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9507 = cljs.core.cons(state__6468__auto__,cljs.core.take(1,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9507,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9507,1,null);var temp__4090__auto__ = (function (){var ocr_9508 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(1,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9508)) && ((cljs.core.count(ocr_9508) === 2)))
{var ocr_9515 = clojure.string.lower_case([cljs.core.str(termcat.term.payload(t1))].join(''));try{if((ocr_9515 === "<head>"))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$73,cljs.core.constant$keyword$75)], null);
} else
{if((ocr_9515 === "</head>"))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$73,cljs.core.constant$keyword$74)], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e9517){if((e9517 instanceof Error))
{var e__4796__auto__ = e9517;if((e__4796__auto__ === cljs.core.match.backtrack))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(state)], null),cljs.core.conj,t1)], null);
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9517;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9514){if((e9514 instanceof Error))
{var e__4796__auto__ = e9514;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9514;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first(r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__6471__auto__),cljs.core.drop(1,input__6469__auto__))], null);
} else
{return null;
}
});
separate_head_body = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return separate_head_body__0.call(this);
case 2:
return separate_head_body__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
separate_head_body.cljs$core$IFn$_invoke$arity$0 = separate_head_body__0;
separate_head_body.cljs$core$IFn$_invoke$arity$2 = separate_head_body__2;
return separate_head_body;
})()
;
termcat.rules.html.add_boilerplate = (function() {
var add_boilerplate = null;
var add_boilerplate__0 = (function (){return null;
});
var add_boilerplate__2 = (function (state,input){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<!DOCTYPE html>"),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<html>"),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<head>"),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<meta charset='utf-8'>")], null),cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(state),cljs.core.array_seq([new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<script type='text/x-mathjax-config'>"),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"MathJax.Hub.Config({ "),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"MathML: { useMathMLspacing: true } });"),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</script>"),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<script async src='http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=MML_HTMLorMML'></script>"),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</head>"),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<body>"),termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$76)], null),cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [termcat.term.token.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$77),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</body>"),termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"</html>")], null)], 0))], null);
});
add_boilerplate = function(state,input){
switch(arguments.length){
case 0:
return add_boilerplate__0.call(this);
case 2:
return add_boilerplate__2.call(this,state,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_boilerplate.cljs$core$IFn$_invoke$arity$0 = add_boilerplate__0;
add_boilerplate.cljs$core$IFn$_invoke$arity$2 = add_boilerplate__2;
return add_boilerplate;
})()
;
/**
* 
*/
termcat.rules.html.remove_superfluous_whitespace = termcat.rewrite.abstraction((function() {
var G__9541 = null;
var G__9541__0 = (function (){return null;
});
var G__9541__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9518 = cljs.core.cons(state__6468__auto__,cljs.core.take(2,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9518,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9518,1,null);var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9518,2,null);var temp__4090__auto__ = (function (){var ocr_9519 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(2,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9519)) && ((cljs.core.count(ocr_9519) === 3)))
{try{var ocr_9519_1__9527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9519,1);if(cljs.core.keyword_identical_QMARK_(ocr_9519_1__9527,cljs.core.constant$keyword$43))
{try{var ocr_9519_2__9528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9519,2);if(cljs.core.keyword_identical_QMARK_(ocr_9519_2__9528,cljs.core.constant$keyword$43))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9539){if((e9539 instanceof Error))
{var e__4796__auto__ = e9539;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9539;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9519_1__9527,cljs.core.constant$keyword$40))
{try{var ocr_9519_2__9528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9519,2);if(cljs.core.keyword_identical_QMARK_(ocr_9519_2__9528,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9519_2__9528,cljs.core.constant$keyword$43))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t2], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e9540){if((e9540 instanceof Error))
{var e__4796__auto__ = e9540;if((e__4796__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9540;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e9530){if((e9530 instanceof Error))
{var e__4796__auto__ = e9530;if((e__4796__auto__ === cljs.core.match.backtrack))
{try{var ocr_9519_1__9527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9519,1);if(cljs.core.keyword_identical_QMARK_(ocr_9519_1__9527,cljs.core.constant$keyword$40))
{try{var ocr_9519_2__9528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9519,2);if(cljs.core.keyword_identical_QMARK_(ocr_9519_2__9528,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9535){if((e9535 instanceof Error))
{var e__4796__auto____$1 = e9535;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9535;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9519_1__9527,cljs.core.constant$keyword$43))
{try{var ocr_9519_2__9528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9519,2);if(cljs.core.keyword_identical_QMARK_(ocr_9519_2__9528,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t1], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9536){if((e9536 instanceof Error))
{var e__4796__auto____$1 = e9536;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9536;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9519_1__9527,cljs.core.constant$keyword$76))
{try{var ocr_9519_2__9528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9519,2);if(cljs.core.keyword_identical_QMARK_(ocr_9519_2__9528,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9519_2__9528,cljs.core.constant$keyword$43))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e9537){if((e9537 instanceof Error))
{var e__4796__auto____$1 = e9537;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9537;
} else
{return null;
}
}
}} else
{if((ocr_9519_1__9527 === null))
{try{var ocr_9519_2__9528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9519,2);if(cljs.core.keyword_identical_QMARK_(ocr_9519_2__9528,cljs.core.constant$keyword$40))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9519_2__9528,cljs.core.constant$keyword$43))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e9538){if((e9538 instanceof Error))
{var e__4796__auto____$1 = e9538;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9538;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}catch (e9531){if((e9531 instanceof Error))
{var e__4796__auto____$1 = e9531;if((e__4796__auto____$1 === cljs.core.match.backtrack))
{try{var ocr_9519_1__9527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9519,1);if(cljs.core.keyword_identical_QMARK_(ocr_9519_1__9527,cljs.core.constant$keyword$40))
{try{var ocr_9519_2__9528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9519,2);if(cljs.core.keyword_identical_QMARK_(ocr_9519_2__9528,cljs.core.constant$keyword$77))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
} else
{if((ocr_9519_2__9528 === null))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e9533){if((e9533 instanceof Error))
{var e__4796__auto____$2 = e9533;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9533;
} else
{return null;
}
}
}} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9519_1__9527,cljs.core.constant$keyword$43))
{try{var ocr_9519_2__9528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9519,2);if(cljs.core.keyword_identical_QMARK_(ocr_9519_2__9528,cljs.core.constant$keyword$77))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
} else
{if((ocr_9519_2__9528 === null))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e9534){if((e9534 instanceof Error))
{var e__4796__auto____$2 = e9534;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9534;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}catch (e9532){if((e9532 instanceof Error))
{var e__4796__auto____$2 = e9532;if((e__4796__auto____$2 === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__4796__auto____$2;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9532;
} else
{return null;
}
}
}} else
{throw e__4796__auto____$1;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9531;
} else
{return null;
}
}
}} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9530;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9529){if((e9529 instanceof Error))
{var e__4796__auto__ = e9529;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9529;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first(r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__6471__auto__),cljs.core.drop(2,input__6469__auto__))], null);
} else
{return null;
}
});
G__9541 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__9541__0.call(this);
case 2:
return G__9541__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9541;
})()
);
/**
* 
*/
termcat.rules.html.to_html_tokens = termcat.rewrite.abstraction((function() {
var G__9555 = null;
var G__9555__0 = (function (){return null;
});
var G__9555__2 = (function (state__6468__auto__,input__6469__auto__){var padded_input__6470__auto__ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(input__6469__auto__,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));var vec__9542 = cljs.core.cons(state__6468__auto__,cljs.core.take(1,padded_input__6470__auto__));var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9542,0,null);var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9542,1,null);var temp__4090__auto__ = (function (){var ocr_9543 = clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__6468__auto__], null),clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2(1,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.tt,padded_input__6470__auto__)));try{if((cljs.core.vector_QMARK_(ocr_9543)) && ((cljs.core.count(ocr_9543) === 2)))
{try{var ocr_9543_1__9552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_9543,1);if(cljs.core.keyword_identical_QMARK_(ocr_9543_1__9552,cljs.core.constant$keyword$40))
{if(cljs.core.truth_(termcat.term.payload(t1)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56," ")], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
}
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9543_1__9552,cljs.core.constant$keyword$43))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,"<p>")], null);
} else
{if(cljs.core.keyword_identical_QMARK_(ocr_9543_1__9552,cljs.core.constant$keyword$56))
{return null;
} else
{if((ocr_9543_1__9552 === null))
{return null;
} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}
}
}
}catch (e9554){if((e9554 instanceof Error))
{var e__4796__auto__ = e9554;if((e__4796__auto__ === cljs.core.match.backtrack))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,termcat.term.token.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$56,termcat.rules.html.escape(termcat.term.payload(t1)))], null);
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9554;
} else
{return null;
}
}
}} else
{if(cljs.core.constant$keyword$6)
{throw cljs.core.match.backtrack;
} else
{return null;
}
}
}catch (e9553){if((e9553 instanceof Error))
{var e__4796__auto__ = e9553;if((e__4796__auto__ === cljs.core.match.backtrack))
{return null;
} else
{throw e__4796__auto__;
}
} else
{if(cljs.core.constant$keyword$6)
{throw e9553;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4090__auto__))
{var r__6471__auto__ = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3403__auto__ = cljs.core.first(r__6471__auto__);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return state__6468__auto__;
}
})(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(r__6471__auto__),cljs.core.drop(1,input__6469__auto__))], null);
} else
{return null;
}
});
G__9555 = function(state__6468__auto__,input__6469__auto__){
switch(arguments.length){
case 0:
return G__9555__0.call(this);
case 2:
return G__9555__2.call(this,state__6468__auto__,input__6469__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9555;
})()
);
termcat.rules.html.to_string = (function to_string(v){return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2(termcat.term.payload,v));
});
