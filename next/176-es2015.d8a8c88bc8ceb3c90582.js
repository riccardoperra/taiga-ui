(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{CUSP:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiTablePaginationModule",(function(){return y}));var a=n("An66"),o=n("1VvW"),i=n("SVIu"),l=n("53zJ"),p=n("kZht"),r=n("OZlg"),c=n("e0eB"),m=n("iyc4"),s=n("o2jy");let d=(()=>{class e{constructor(){this.page=3,this.size=10}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-table-pagination-example-1"]],decls:5,vars:5,consts:[[3,"total","page","size","pageChange","sizeChange"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-table-pagination",0),p["\u0275\u0275listener"]("pageChange",(function(e){return t.page=e}))("sizeChange",(function(e){return t.size=e})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](1,"p"),p["\u0275\u0275text"](2),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"p"),p["\u0275\u0275text"](4),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275property"]("total",237)("page",t.page)("size",t.size),p["\u0275\u0275advance"](2),p["\u0275\u0275textInterpolate1"]("Current page: ",t.page,""),p["\u0275\u0275advance"](2),p["\u0275\u0275textInterpolate1"]("Items per page: ",t.size,""))},directives:[s.a],styles:[".list[_ngcontent-%COMP%]{width:12.5rem}"],changeDetection:0}),e})();var u=n("u8jZ");const g=["pageTab",$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`];var f;f=$localize`:␟6848d6df5be6ff4b71028617c374e17b8f9c36c8␟1478194324430836348:Component to show pagination in table footer`;const b=["heading",$localize`:␟45f210b96a2a6e91f52f153a4f8dc30662629f8e␟142654590491855672:Usage`];function h(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275i18n"](1,f),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](2,"tui-doc-example",3),p["\u0275\u0275i18nAttributes"](3,b),p["\u0275\u0275element"](4,"tui-table-pagination-example-1"),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("content",e.example1)}}var x,T;function C(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",4),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275elementStart"](2,"p"),p["\u0275\u0275i18nStart"](3,x),p["\u0275\u0275element"](4,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](5,"tui-doc-code",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"li"),p["\u0275\u0275elementStart"](7,"p"),p["\u0275\u0275i18n"](8,T),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](9,"tui-doc-code",6),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("code",e.exampleImportModule),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}x=$localize`:␟29846a83e0cdbad86f552b549fcde62d80c7bf90␟3424664730177588095: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiTablePaginationModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,T=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let z=(()=>{class e{constructor(){this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-table-pagination-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTablePaginationExample1 {\n    page = 3;\n    size = 10;\n}\n",HTML:'<tui-table-pagination\n    [total]="237"\n    [(page)]="page"\n    [(size)]="size"\n></tui-table-pagination>\n<p>Current page: {{page}}</p>\n<p>Items per page: {{size}}</p>\n'},this.exampleImportModule="import {TuiTablePaginationModule} from '@taiga-ui/addon-table';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiTablePaginationModule,\n    ],\n...\n",this.exampleInsertTemplate='<tui-table-pagination [total]="total" [(page)]="page" [(size)]="size"></tui-table-pagination>\n'}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-table-pagination"]],decls:4,vars:0,consts:[["header","TablePagination","package","ADDON-TABLE","type","components"],["pageTab",""],[6,"pageTab"],["id","usage",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275template"](1,h,5,1,"ng-template",1),p["\u0275\u0275template"](2,C,10,2,"ng-template",2),p["\u0275\u0275i18nAttributes"](3,g),p["\u0275\u0275elementEnd"]())},directives:[r.a,c.a,m.a,d,u.a],encapsulation:2,changeDetection:0}),e})(),y=(()=>{class e{}return e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,l.d,i.h,o.f.forChild(Object(i.o)(z))]]}),e})()}}]);