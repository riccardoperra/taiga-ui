function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _templateObject6(){var e=_taggedTemplateLiteral([":\u241f1979da7460819153e11d2078244645d94291b69c\u241f4323470180912194028:Copy"]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral([":\u241f6dcdb49844a66f097baad6ff6e439198e1240ce8\u241f3794049220169119758:",":INTERPOLATION:"]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241f6af010fd6ea3a514326c4f853cf0281596c7177d\u241f4968650495925694320: Input icon name to highlight "]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241fd3482a2fe17d28c2051e895925c9f35d47dbcc29\u241f1035150703896968730:Search by name"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241f195b3341a44c6f24fcab864edc396cb50c4b2775\u241f295939588314003387: These icons can be used by name in ",":START_LINK:Svg",":CLOSE_LINK: component and all Taiga UI component accepting icons as input. "]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241fc51604c3bfceeac96ceabb51c1a0caee70f85aa6\u241f990341683702498937:Icons"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{xggc:function(e,t,n){"use strict";n.r(t),n.d(t,"IconsModule",(function(){return $}));var i,a,r,c,o=n("An66"),l=n("3kIJ"),u=n("1VvW"),s=n("SVIu"),d=n("Qq0t"),f=n("dvRg"),p=n("wdR4"),m=n("kZht"),g=n("l4xa"),b=n("4C5Q"),h=n("OZlg"),_=n("yZWP"),v=n("e0eB"),O=n("GdrL"),y=n("RlDx"),C=n("2wTY"),T=n("gEyt"),j=n("zV1d"),w=["header",$localize(_templateObject())];i=$localize(_templateObject2(),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),a=$localize(_templateObject3()),r=$localize(_templateObject4()),c=$localize(_templateObject5(),"\ufffd0\ufffd");var x=["title",$localize(_templateObject6())];function I(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"button",8),m["\u0275\u0275i18nAttributes"](1,x),m["\u0275\u0275listener"]("click",(function(){m["\u0275\u0275restoreView"](n);var e=t.$implicit;return m["\u0275\u0275nextContext"](3).copyPath(e)})),m["\u0275\u0275elementEnd"]()}if(2&e){var i=t.$implicit,a=m["\u0275\u0275nextContext"](3);m["\u0275\u0275classProp"]("icon_highlighted",a.getHighlight(i)),m["\u0275\u0275property"]("icon",i),m["\u0275\u0275attribute"]("aria-label",i)}}function k(e,t){if(1&e&&(m["\u0275\u0275elementContainerStart"](0),m["\u0275\u0275elementStart"](1,"h2",3),m["\u0275\u0275i18n"](2,c),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"div",6),m["\u0275\u0275template"](4,I,2,4,"button",7),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementContainerEnd"]()),2&e){var n=t.$implicit,i=m["\u0275\u0275nextContext"](2);m["\u0275\u0275advance"](2),m["\u0275\u0275i18nExp"](n),m["\u0275\u0275i18nApply"](2),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("ngForOf",i.icons[n])}}function M(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"h2",3),m["\u0275\u0275i18n"](1,a),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"tui-input",4),m["\u0275\u0275listener"]("ngModelChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().search=e})),m["\u0275\u0275i18n"](3,r),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](4,k,5,2,"ng-container",5)}if(2&e){var i=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0)("ngModel",i.search),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("ngForOf",i.keys)}}var L,S,E=["tuiIconElectron","tuiIconMaestro","tuiIconMastercard","tuiIconMir","tuiIconVisa"],P=Object.keys(b).filter((function(e){return-1===E.indexOf(e)&&"tuiCoreIcons"!==e&&"tuiKitIcons"!==e})),z={"Normal interface icons (16px)":P.filter((function(e){return!e.includes("Large")})),"Large interface icons (24px)":P.filter((function(e){return e.includes("Large")})),"Payment systems":E},F=new m.InjectionToken("Icons",{factory:function(){return z}}),N=((S=function(){function e(t,n,i){_classCallCheck(this,e),this.icons=t,this.clipboard=n,this.notifications=i,this.search="",this.keys=Object.keys(this.icons)}return _createClass(e,[{key:"copyPath",value:function(e){this.clipboard.copy(e),this.notifications.show("The name ".concat(e," copied"),{status:"success"}).subscribe()}},{key:"getHighlight",value:function(e){return this.search.length>1&&Object(g.TUI_DEFAULT_MATCHER)(e,this.search)}}]),e}()).\u0275fac=function(e){return new(e||S)(m["\u0275\u0275directiveInject"](F),m["\u0275\u0275directiveInject"](p.b),m["\u0275\u0275directiveInject"](d.TuiNotificationsService))},S.\u0275cmp=m["\u0275\u0275defineComponent"]({type:S,selectors:[["icons"]],decls:6,vars:0,consts:[[6,"header"],["tuiLink","","routerLink","/components/svg"],["pageTab",""],[1,"title"],["tuiHintContent","You can copy icon's name with a click","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside","ngModel","ngModelChange"],[4,"ngFor","ngForOf"],[1,"icons"],["tuiIconButton","","type","button","size","m","appearance","icon","class","icon",3,"icon_highlighted","icon","click",4,"ngFor","ngForOf",6,"title"],["tuiIconButton","","type","button","size","m","appearance","icon",1,"icon",3,"icon","click",6,"title"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275i18nAttributes"](1,w),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18nStart"](3,i),m["\u0275\u0275element"](4,"a",1),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](5,M,5,3,"ng-template",2),m["\u0275\u0275elementEnd"]())},directives:[h.a,_.a,u.e,v.a,O.a,y.a,C.b,T.b,l.NgControlStatus,l.NgModel,o.s,j.a],styles:[".title[_ngcontent-%COMP%]{font:var(--tui-font-heading-6);margin:1.875rem 0 .75rem}.icons[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 -.75rem}.icon[_ngcontent-%COMP%]{margin:.75rem;border-radius:0}.icon_highlighted[_ngcontent-%COMP%]{-webkit-transform:scale(1.6);transform:scale(1.6);-webkit-filter:drop-shadow(.125rem .0625rem 0 var(--tui-primary));filter:drop-shadow(.125rem .0625rem 0 var(--tui-primary))}"],changeDetection:0}),S),$=((L=function e(){_classCallCheck(this,e)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:L}),L.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||L)},imports:[[l.ReactiveFormsModule,l.FormsModule,o.c,d.TuiLinkModule,d.TuiSvgModule,f.TuiMarkerIconModule,f.TuiInputModule,d.TuiButtonModule,d.TuiTextfieldControllerModule,d.TuiHintControllerModule,s.h,u.f.forChild(Object(s.o)(N))]]}),L)}}]);