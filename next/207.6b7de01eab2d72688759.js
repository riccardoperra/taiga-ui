(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{SYde:function(e,n){var t={exports:{}};function i(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(n){var t=e[n];"object"!=typeof t||Object.isFrozen(t)||i(t)})),e}t.exports=i,t.exports.default=i;var o=t.exports;class r{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function s(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function a(e,...n){const t=Object.create(null);for(const i in e)t[i]=e[i];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}const c=e=>!!e.kind;class l{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=s(e)}openNode(e){if(!c(e))return;let n=e.kind;n=e.sublanguage?"language-"+n:((e,{prefix:n})=>{if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map((e,n)=>`${e}${"_".repeat(n+1)}`)].join(" ")}return`${n}${e}`})(n,{prefix:this.classPrefix}),this.span(n)}closeNode(e){c(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class u{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach(n=>this._walk(e,n)),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every(e=>"string"==typeof e)?e.children=[e.children.join("")]:e.children.forEach(e=>{u._collapse(e)}))}}class g extends u{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new l(this,this.options).value()}finalize(){return!0}}function d(e){return e?"string"==typeof e?e:e.source:null}function h(e){return b("(?=",e,")")}function f(e){return b("(?:",e,")*")}function p(e){return b("(?:",e,")?")}function b(...e){return e.map(e=>d(e)).join("")}function m(...e){return"("+(function(e){const n=e[e.length-1];return"object"==typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}(e).capture?"":"?:")+e.map(e=>d(e)).join("|")+")"}function w(e){return new RegExp(e.toString()+"|").exec("").length-1}const E=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function x(e,{joinWith:n}){let t=0;return e.map(e=>{t+=1;const n=t;let i=d(e),o="";for(;i.length>0;){const e=E.exec(i);if(!e){o+=i;break}o+=i.substring(0,e.index),i=i.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?o+="\\"+String(Number(e[1])+n):(o+=e[0],"("===e[0]&&t++)}return o}).map(e=>`(${e})`).join(n)}const y="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",_={begin:"\\\\[\\s\\S]",relevance:0},k={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[_]},O={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[_]},v=function(e,n,t={}){const i=a({scope:"comment",begin:e,end:n,contains:[]},t);i.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const o=m("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return i.contains.push({begin:b(/[ ]+/,"(",o,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),i},N=v("//","$"),S=v("/\\*","\\*/"),M=v("#","$");var R=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:"[a-zA-Z]\\w*",UNDERSCORE_IDENT_RE:"[a-zA-Z_]\\w*",NUMBER_RE:"\\b\\d+(\\.\\d+)?",C_NUMBER_RE:y,BINARY_NUMBER_RE:"\\b(0b[01]+)",RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=b(n,/.*\b/,e.binary,/\b.*/)),a({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:_,APOS_STRING_MODE:k,QUOTE_STRING_MODE:O,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT:v,C_LINE_COMMENT_MODE:N,C_BLOCK_COMMENT_MODE:S,HASH_COMMENT_MODE:M,NUMBER_MODE:{scope:"number",begin:"\\b\\d+(\\.\\d+)?",relevance:0},C_NUMBER_MODE:{scope:"number",begin:y,relevance:0},BINARY_NUMBER_MODE:{scope:"number",begin:"\\b(0b[01]+)",relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[_,{begin:/\[/,end:/\]/,relevance:0,contains:[_]}]}]},TITLE_MODE:{scope:"title",begin:"[a-zA-Z]\\w*",relevance:0},UNDERSCORE_TITLE_MODE:{scope:"title",begin:"[a-zA-Z_]\\w*",relevance:0},METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});function A(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}function j(e,n){void 0!==e.className&&(e.scope=e.className,delete e.className)}function I(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=A,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function T(e,n){Array.isArray(e.illegal)&&(e.illegal=m(...e.illegal))}function L(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function B(e,n){void 0===e.relevance&&(e.relevance=1)}const H=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach(n=>{delete e[n]}),e.keywords=t.keywords,e.begin=b(t.beforeMatch,h(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},D=["of","and","for","in","not","or","if","then","parent","list","value"];function P(e,n){return n?Number(n):function(e){return D.includes(e.toLowerCase())}(e)?0:1}const C={},$=e=>{console.error(e)},U=(e,...n)=>{console.log("WARN: "+e,...n)},z=(e,n)=>{C[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),C[`${e}/${n}`]=!0)},K=new Error;function W(e,n,{key:t}){let i=0;const o=e[t],r={},s={};for(let a=1;a<=n.length;a++)s[a+i]=o[a],r[a+i]=!0,i+=w(n[a-1]);e[t]=s,e[t]._emit=r,e[t]._multi=!0}function X(e){!function(e){e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)}(e),"string"==typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope}),function(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw $("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),K;if("object"!=typeof e.beginScope||null===e.beginScope)throw $("beginScope must be object"),K;W(e,e.begin,{key:"beginScope"}),e.begin=x(e.begin,{joinWith:""})}}(e),function(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw $("skip, excludeEnd, returnEnd not compatible with endScope: {}"),K;if("object"!=typeof e.endScope||null===e.endScope)throw $("endScope must be object"),K;W(e,e.end,{key:"endScope"}),e.end=x(e.end,{joinWith:""})}}(e)}class Z extends Error{constructor(e,n){super(e),this.name="HTMLInjectionError",this.html=n}}const G=s,F=a,J=Symbol("nomatch");var V=function(e){const n=Object.create(null),t=Object.create(null),i=[];let s=!0;const c="Could not find the language '{}', did you forget to load/include a language module?",l={disableAutodetect:!0,name:"Plain text",contains:[]};let u={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:g};function E(e){return u.noHighlightRe.test(e)}function y(e,n,t){let i="",o="";"object"==typeof n?(i=e,t=n.ignoreIllegals,o=n.language):(z("10.7.0","highlight(lang, code, ...args) has been deprecated."),z("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),o=e,i=n),void 0===t&&(t=!0);const r={code:i,language:o};D("before:highlight",r);const s=r.result?r.result:_(r.language,r.code,t);return s.code=r.code,D("after:highlight",s),s}function _(e,t,i,o){const l=Object.create(null);function g(){if(!N.keywords)return void R.addText(A);let e=0;N.keywordPatternRe.lastIndex=0;let n=N.keywordPatternRe.exec(A),t="";for(;n;){t+=A.substring(e,n.index);const i=y.case_insensitive?n[0].toLowerCase():n[0],o=N.keywords[i];if(o){const[e,r]=o;R.addText(t),t="",l[i]=(l[i]||0)+1,l[i]<=7&&(D+=r),e.startsWith("_")?t+=n[0]:R.addKeyword(n[0],y.classNameAliases[e]||e)}else t+=n[0];e=N.keywordPatternRe.lastIndex,n=N.keywordPatternRe.exec(A)}t+=A.substr(e),R.addText(t)}function h(){null!=N.subLanguage?function(){if(""===A)return;let e=null;if("string"==typeof N.subLanguage){if(!n[N.subLanguage])return void R.addText(A);e=_(N.subLanguage,A,!0,M[N.subLanguage]),M[N.subLanguage]=e._top}else e=k(A,N.subLanguage.length?N.subLanguage:null);N.relevance>0&&(D+=e.relevance),R.addSublanguage(e._emitter,e.language)}():g(),A=""}function f(e,n){let t=1;for(;void 0!==n[t];){if(!e._emit[t]){t++;continue}const i=y.classNameAliases[e[t]]||e[t],o=n[t];i?R.addKeyword(o,i):(A=o,g(),A=""),t++}}function p(e,n){return e.scope&&"string"==typeof e.scope&&R.openNode(y.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(R.addKeyword(A,y.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),A=""):e.beginScope._multi&&(f(e.beginScope,n),A="")),N=Object.create(e,{parent:{value:N}}),N}function b(e){return 0===N.matcher.regexIndex?(A+=e[0],1):(z=!0,0)}let m={};function E(n,o){const a=o&&o[0];if(A+=n,null==a)return h(),0;if("begin"===m.type&&"end"===o.type&&m.index===o.index&&""===a){if(A+=t.slice(o.index,o.index+1),!s){const n=new Error(`0 width match regex (${e})`);throw n.languageName=e,n.badRule=m.rule,n}return 1}if(m=o,"begin"===o.type)return function(e){const n=e[0],t=e.rule,i=new r(t),o=[t.__beforeBegin,t["on:begin"]];for(const r of o)if(r&&(r(e,i),i.isMatchIgnored))return b(n);return t.skip?A+=n:(t.excludeBegin&&(A+=n),h(),t.returnBegin||t.excludeBegin||(A=n)),p(t,e),t.returnBegin?0:n.length}(o);if("illegal"===o.type&&!i){const e=new Error('Illegal lexeme "'+a+'" for mode "'+(N.scope||"<unnamed>")+'"');throw e.mode=N,e}if("end"===o.type){const e=function(e){const n=e[0],i=t.substr(e.index),o=function e(n,t,i){let o=function(e,n){const t=e&&e.exec(n);return t&&0===t.index}(n.endRe,i);if(o){if(n["on:end"]){const e=new r(n);n["on:end"](t,e),e.isMatchIgnored&&(o=!1)}if(o){for(;n.endsParent&&n.parent;)n=n.parent;return n}}if(n.endsWithParent)return e(n.parent,t,i)}(N,e,i);if(!o)return J;const s=N;N.endScope&&N.endScope._wrap?(h(),R.addKeyword(n,N.endScope._wrap)):N.endScope&&N.endScope._multi?(h(),f(N.endScope,e)):s.skip?A+=n:(s.returnEnd||s.excludeEnd||(A+=n),h(),s.excludeEnd&&(A=n));do{N.scope&&R.closeNode(),N.skip||N.subLanguage||(D+=N.relevance),N=N.parent}while(N!==o.parent);return o.starts&&p(o.starts,e),s.returnEnd?0:n.length}(o);if(e!==J)return e}if("illegal"===o.type&&""===a)return 1;if(U>1e5&&U>3*o.index)throw new Error("potential infinite loop, way more iterations than matches");return A+=a,a.length}const y=S(e);if(!y)throw $(c.replace("{}",e)),new Error('Unknown language: "'+e+'"');const O=function(e){function n(n,t){return new RegExp(d(n),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=w(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map(e=>e[1]);this.matcherRe=n(x(e,{joinWith:"|"}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex((e,n)=>n>0&&void 0!==e),i=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,i)}}class i{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach(([e,t])=>n.addRule(e,t)),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=a(e.classNameAliases||{}),function t(o,r){const s=o;if(o.isCompiled)return s;[j,L,X,H].forEach(e=>e(o,r)),e.compilerExtensions.forEach(e=>e(o,r)),o.__beforeBegin=null,[I,T,B].forEach(e=>e(o,r)),o.isCompiled=!0;let c=null;return"object"==typeof o.keywords&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),c=o.keywords.$pattern,delete o.keywords.$pattern),c=c||/\w+/,o.keywords&&(o.keywords=function e(n,t,i="keyword"){const o=Object.create(null);return"string"==typeof n?r(i,n.split(" ")):Array.isArray(n)?r(i,n):Object.keys(n).forEach((function(i){Object.assign(o,e(n[i],t,i))})),o;function r(e,n){t&&(n=n.map(e=>e.toLowerCase())),n.forEach((function(n){const t=n.split("|");o[t[0]]=[e,P(t[0],t[1])]}))}}(o.keywords,e.case_insensitive)),s.keywordPatternRe=n(c,!0),r&&(o.begin||(o.begin=/\B|\b/),s.beginRe=n(s.begin),o.end||o.endsWithParent||(o.end=/\B|\b/),o.end&&(s.endRe=n(s.end)),s.terminatorEnd=d(s.end)||"",o.endsWithParent&&r.terminatorEnd&&(s.terminatorEnd+=(o.end?"|":"")+r.terminatorEnd)),o.illegal&&(s.illegalRe=n(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map((function(e){return function(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(n){return a(e,{variants:null},n)}))),e.cachedVariants?e.cachedVariants:function e(n){return!!n&&(n.endsWithParent||e(n.starts))}(e)?a(e,{starts:e.starts?a(e.starts):null}):Object.isFrozen(e)?a(e):e}("self"===e?o:e)}))),o.contains.forEach((function(e){t(e,s)})),o.starts&&t(o.starts,r),s.matcher=function(e){const n=new i;return e.contains.forEach(e=>n.addRule(e.begin,{rule:e,type:"begin"})),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(s),s}(e)}(y);let v="",N=o||O;const M={},R=new u.__emitter(u);!function(){const e=[];for(let n=N;n!==y;n=n.parent)n.scope&&e.unshift(n.scope);e.forEach(e=>R.openNode(e))}();let A="",D=0,C=0,U=0,z=!1;try{for(N.matcher.considerAll();;){U++,z?z=!1:N.matcher.considerAll(),N.matcher.lastIndex=C;const e=N.matcher.exec(t);if(!e)break;const n=E(t.substring(C,e.index),e);C=e.index+n}return E(t.substr(C)),R.closeAllNodes(),R.finalize(),v=R.toHTML(),{language:e,value:v,relevance:D,illegal:!1,_emitter:R,_top:N}}catch(K){if(K.message&&K.message.includes("Illegal"))return{language:e,value:G(t),illegal:!0,relevance:0,_illegalBy:{message:K.message,index:C,context:t.slice(C-100,C+100),mode:K.mode,resultSoFar:v},_emitter:R};if(s)return{language:e,value:G(t),illegal:!1,relevance:0,errorRaised:K,_emitter:R,_top:N};throw K}}function k(e,t){t=t||u.languages||Object.keys(n);const i=function(e){const n={value:G(e),illegal:!1,relevance:0,_top:l,_emitter:new u.__emitter(u)};return n._emitter.addText(e),n}(e),o=t.filter(S).filter(A).map(n=>_(n,e,!1));o.unshift(i);const r=o.sort((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(S(e.language).supersetOf===n.language)return 1;if(S(n.language).supersetOf===e.language)return-1}return 0}),[s,a]=r,c=s;return c.secondBest=a,c}function O(e){let n=null;const i=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=u.languageDetectRe.exec(n);if(t){const n=S(t[1]);return n||(U(c.replace("{}",t[1])),U("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find(e=>E(e)||S(e))}(e);if(E(i))return;if(D("before:highlightElement",{el:e,language:i}),e.children.length>0&&(u.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(e)),u.throwUnescapedHTML))throw new Z("One of your code blocks includes unescaped HTML.",e.innerHTML);n=e;const o=n.textContent,r=i?y(o,{language:i,ignoreIllegals:!0}):k(o);e.innerHTML=r.value,function(e,n,i){const o=n&&t[n]||i;e.classList.add("hljs"),e.classList.add("language-"+o)}(e,i,r.language),e.result={language:r.language,re:r.relevance,relevance:r.relevance},r.secondBest&&(e.secondBest={language:r.secondBest.language,relevance:r.secondBest.relevance}),D("after:highlightElement",{el:e,result:r,text:o})}let v=!1;function N(){"loading"!==document.readyState?document.querySelectorAll(u.cssSelector).forEach(O):v=!0}function S(e){return e=(e||"").toLowerCase(),n[e]||n[t[e]]}function M(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach(e=>{t[e.toLowerCase()]=n})}function A(e){const n=S(e);return n&&!n.disableAutodetect}function D(e,n){const t=e;i.forEach((function(e){e[t]&&e[t](n)}))}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(function(){v&&N()}),!1),Object.assign(e,{highlight:y,highlightAuto:k,highlightAll:N,highlightElement:O,highlightBlock:function(e){return z("10.7.0","highlightBlock will be removed entirely in v12.0"),z("10.7.0","Please use highlightElement now."),O(e)},configure:function(e){u=F(u,e)},initHighlighting:()=>{N(),z("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function(){N(),z("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function(t,i){let o=null;try{o=i(e)}catch(r){if($("Language definition for '{}' could not be registered.".replace("{}",t)),!s)throw r;$(r),o=l}o.name||(o.name=t),n[t]=o,o.rawDefinition=i.bind(null,e),o.aliases&&M(o.aliases,{languageName:t})},unregisterLanguage:function(e){delete n[e];for(const n of Object.keys(t))t[n]===e&&delete t[n]},listLanguages:function(){return Object.keys(n)},getLanguage:S,registerAliases:M,autoDetection:A,inherit:F,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=n=>{e["before:highlightBlock"](Object.assign({block:n.el},n))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=n=>{e["after:highlightBlock"](Object.assign({block:n.el},n))})}(e),i.push(e)}}),e.debugMode=function(){s=!1},e.safeMode=function(){s=!0},e.versionString="11.4.0",e.regex={concat:b,lookahead:h,either:m,optional:p,anyNumberOfTimes:f};for(const r in R)"object"==typeof R[r]&&o(R[r]);return Object.assign(e,R),e}({});e.exports=V,V.HighlightJS=V,V.default=V}}]);