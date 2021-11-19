(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{enQs:function(e,n,t){"use strict";t.r(n),t.d(n,"ExampleTuiMobileDialogModule",(function(){return D}));var o,i=t("An66"),a=t("1VvW"),l=t("SVIu"),c=t("hLNI"),r=t("Qq0t"),s=t("kZht"),d=t("OZlg"),p=t("e0eB"),m=t("iyc4"),u=t("l4xa"),b=t("TLy2"),f=t("zV1d");o=$localize`:␟a1ac22cbf3e8b8cd6fb77e5af9144ed418580c37␟1762522912961222062:Choose iPhone into DevTools to see iOS styled dialog.`;let g=(()=>{class e{constructor(e,n){this.dialogService=e,this.notifications=n}show(){const e=["No thanks","Remind me later","Rate now"];this.dialogService.open("If you like this app, please take a moment to leave a positive rating.",{label:"What do you think?",actions:e}).pipe(Object(b.a)(n=>this.notifications.show("Selected: "+e[n]))).subscribe()}}return e.\u0275fac=function(n){return new(n||e)(s["\u0275\u0275directiveInject"](c.TuiMobileDialogService),s["\u0275\u0275directiveInject"](r.TuiNotificationsService))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-mobile-dialog-example-1"]],features:[s["\u0275\u0275ProvidersFeature"]([{provide:u.TUI_IS_IOS,useValue:!1}])],decls:4,vars:0,consts:[["tuiButton","","type","button",3,"click"]],template:function(e,n){1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18n"](1,o),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"button",0),s["\u0275\u0275listener"]("click",(function(){return n.show()})),s["\u0275\u0275text"](3,"Show dialog"),s["\u0275\u0275elementEnd"]())},directives:[f.a],encapsulation:2,changeDetection:0}),e})();var h=t("u8jZ");const v=["pageTab",$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`];var S;S=$localize`:␟0ea287ef9e2531b2b580624bb586ca2ee24cde51␟1578113098698386021: Component for showing a dialog on mobile devices. It emulates appearance of native alerts on iOS and Android `;const T=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`];function x(e,n){if(1&e&&(s["\u0275\u0275elementStart"](0,"div"),s["\u0275\u0275i18n"](1,S),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"tui-doc-example",3),s["\u0275\u0275i18nAttributes"](3,T),s["\u0275\u0275element"](4,"tui-mobile-dialog-example-1"),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("content",e.example1)}}var I,y;function M(e,n){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",4),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,I),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"tui-doc-code",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"li"),s["\u0275\u0275elementStart"](7,"p"),s["\u0275\u0275i18n"](8,y),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](9,"tui-doc-code",6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("code",e.exampleImportModule),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("code",e.exampleInsertComponent)}}I=$localize`:␟10a0e0f3922e028a21c97c049f906bdafc5e9525␟5446521273393954067: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiMobileDialogModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,y=$localize`:␟406023e62926140d7e1398ca0791caa8ac93ddfd␟8851886848912378945:Use it in component`;let w=(()=>{class e{constructor(){this.example1={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {TuiMobileDialogService} from '@taiga-ui/addon-mobile';\nimport {TUI_IS_IOS} from '@taiga-ui/cdk';\nimport {TuiNotificationsService} from '@taiga-ui/core';\nimport {switchMap} from 'rxjs/operators';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-mobile-dialog-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_IS_IOS,\n            useValue: false,\n        },\n    ],\n})\nexport class TuiMobileDialogExample1 {\n    constructor(\n        @Inject(TuiMobileDialogService)\n        private readonly dialogService: TuiMobileDialogService,\n        @Inject(TuiNotificationsService)\n        private readonly notifications: TuiNotificationsService,\n    ) {}\n\n    show() {\n        const actions = ['No thanks', 'Remind me later', 'Rate now'];\n\n        this.dialogService\n            .open(\n                'If you like this app, please take a moment to leave a positive rating.',\n                {\n                    label: 'What do you think?',\n                    actions,\n                },\n            )\n            .pipe(\n                switchMap(index =>\n                    this.notifications.show(`Selected: ${actions[index]}`),\n                ),\n            )\n            .subscribe();\n    }\n}\n",HTML:'<p i18n>Choose iPhone into DevTools to see iOS styled dialog.</p>\n<button tuiButton type="button" (click)="show()">Show dialog</button>\n'},this.exampleImportModule="import {TuiMobileDialogModule} from '@taiga-ui/addon-mobile';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiMobileDialogModule\n    ],\n...\n",this.exampleInsertComponent="constructor(private readonly dialogsService: TuiMobileDialogService) {}\n\n// ...\n\nthis.dialogsService\n    .open(\n        'Text',\n        {\n            label: 'Heading',\n            actions: ['Button 1', 'Button 2'],\n            data: 'Some data'\n        },\n    )\n    .subscribe(index => {\n        // Index of clicked button\n        console.log(index);\n    });\n"}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["example-mobile-dialog"]],decls:4,vars:0,consts:[["header","MobileDialog","package","ADDON-MOBILE","type","components"],["pageTab",""],[6,"pageTab"],["id","base",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,n){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275template"](1,x,5,1,"ng-template",1),s["\u0275\u0275template"](2,M,10,2,"ng-template",2),s["\u0275\u0275i18nAttributes"](3,v),s["\u0275\u0275elementEnd"]())},directives:[d.a,p.a,m.a,g,h.a],encapsulation:2,changeDetection:0}),e})(),D=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(n){return new(n||e)},imports:[[i.c,c.TuiMobileDialogModule,r.TuiButtonModule,l.h,a.f.forChild(Object(l.o)(w))]]}),e})()}}]);