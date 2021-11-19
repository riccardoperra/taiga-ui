(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{W7Nq:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputMonthRangeModule",(function(){return K}));var o=n("An66"),a=n("3kIJ"),r=n("1VvW"),i=n("SVIu"),l=n("Qq0t"),m=n("dvRg"),u=n("Piem"),d=n("kZht"),s=n("l4xa"),c=n("LusI"),p=n("K/iL"),f=n("OZlg"),h=n("e0eB"),g=n("iyc4"),C=n("+GLY");let x=(()=>{class e{constructor(){this.control=new a.FormControl}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-month-range-example-1"]],decls:2,vars:1,consts:[[1,"b-form",3,"formControl"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-input-month-range",0),d["\u0275\u0275text"](1," Choose a range of months\n"),d["\u0275\u0275elementEnd"]()),2&e&&d["\u0275\u0275property"]("formControl",t.control)},directives:[C.a,a.NgControlStatus,a.FormControlDirective],encapsulation:2,changeDetection:0}),e})();var T=n("2wTY");let y=(()=>{class e{constructor(){this.testForm=new a.FormGroup({testValue:new a.FormControl(null)})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-month-range-example-2"]],decls:7,vars:1,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue","tuiTextfieldSize","s",1,"tui-space_bottom-2"],["formControlName","testValue","tuiTextfieldSize","m",1,"tui-space_vertical-4"],["formControlName","testValue"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"form",0),d["\u0275\u0275elementStart"](1,"tui-input-month-range",1),d["\u0275\u0275text"](2," Choose a range of months "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"tui-input-month-range",2),d["\u0275\u0275text"](4," Choose a range of months "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"tui-input-month-range",3),d["\u0275\u0275text"](6," Choose a range of months "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&d["\u0275\u0275property"]("formGroup",t.testForm)},directives:[a["\u0275angular_packages_forms_forms_y"],a.NgControlStatusGroup,a.FormGroupDirective,C.a,a.NgControlStatus,a.FormControlName,T.b],encapsulation:2,changeDetection:0}),e})();var b;b=$localize`:␟ad20a54aed40e22b965ffaef1e723cc460704e38␟5354868702287458657: A sample with ${"\ufffd#2\ufffd"}:START_TAG_CODE:disabledItemHandler${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: when selecting a left value of range changes available right value: a range no more than one month
`;let S=(()=>{class e{constructor(){this.testForm=new a.FormGroup({testValue:new a.FormControl(null)}),this.disabledItemHandler=(e,t)=>!!t&&!!t.value&&t.value instanceof s.TuiMonthRange&&!!t.value.isSingleMonth&&e.month<t.value.from.month+2}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-month-range-example-3"]],decls:6,vars:2,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue",1,"tui-space_bottom-2",3,"disabledItemHandler"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275i18nStart"](1,b),d["\u0275\u0275element"](2,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"form",0),d["\u0275\u0275elementStart"](4,"tui-input-month-range",1),d["\u0275\u0275text"](5," Choose a range of months "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("formGroup",t.testForm),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("disabledItemHandler",t.disabledItemHandler))},directives:[a["\u0275angular_packages_forms_forms_y"],a.NgControlStatusGroup,a.FormGroupDirective,C.a,a.NgControlStatus,a.FormControlName],encapsulation:2,changeDetection:0}),e})();var v,M=n("EPR0"),V=n("yHor"),F=n("zGJC"),E=n("FSyC"),I=n("eB8V"),_=n("gEyt"),w=n("RlDx"),P=n("u8jZ");v=$localize`:␟2f97016068f46347a787d20f1d43451ccec5ed5d␟7600412415333750041:Component to input a range of months`;const D=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],G=["heading",$localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`],H=["heading",$localize`:␟792a3526674c0e6247dd50b0d67e6f89d2580185␟8131541999290053051:With a context usage in disabledItemHandler`];function A(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275i18n"](1,v),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-doc-example",2),d["\u0275\u0275i18nAttributes"](3,D),d["\u0275\u0275element"](4,"tui-input-month-range-example-1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"tui-doc-example",3),d["\u0275\u0275i18nAttributes"](6,G),d["\u0275\u0275element"](7,"tui-input-month-range-example-2"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"tui-doc-example",4),d["\u0275\u0275i18nAttributes"](9,H),d["\u0275\u0275element"](10,"tui-input-month-range-example-3"),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",e.example1),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example2),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example3)}}function R(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-input-month-range",10),d["\u0275\u0275text"](1," Months "),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"](2);d["\u0275\u0275property"]("formControl",e.control)("min",e.min)("max",e.max)("focusable",e.focusable)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)("tuiTextfieldCleaner",e.cleaner)("readOnly",e.readOnly)("pseudoInvalid",e.pseudoInvalid)("pseudoFocused",e.pseudoFocused)("pseudoHovered",e.pseudoHovered)("pseudoPressed",e.pseudoPressed)("disabledItemHandler",e.disabledItemHandler)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintMode",e.hintMode)}}var O,N,$,z,L,k;function B(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,O),d["\u0275\u0275element"](1,"code"),d["\u0275\u0275i18nEnd"]())}function W(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,N),d["\u0275\u0275element"](1,"div"),d["\u0275\u0275element"](2,"strong"),d["\u0275\u0275i18nEnd"]())}function U(e,t){1&e&&d["\u0275\u0275i18n"](0,$)}function j(e,t){1&e&&d["\u0275\u0275i18n"](0,z)}function Y(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-doc-demo",5),d["\u0275\u0275template"](1,R,2,17,"ng-template"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-doc-documentation"),d["\u0275\u0275template"](3,B,2,0,"ng-template",6),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().disabled=t})),d["\u0275\u0275template"](4,W,3,0,"ng-template",7),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().disabledItemHandler=t})),d["\u0275\u0275template"](5,U,1,0,"ng-template",8),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().min=t})),d["\u0275\u0275template"](6,j,1,0,"ng-template",9),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().max=t})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](7,"inherited-documentation")}if(2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("control",e.control),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("documentationPropertyValue",e.disabled),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max)}}function J(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",11),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,L),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",12),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18nStart"](8,k),d["\u0275\u0275element"](9,"code"),d["\u0275\u0275element"](10,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](11,"tui-doc-code",13),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"li"),d["\u0275\u0275text"](13," Use "),d["\u0275\u0275elementStart"](14,"code"),d["\u0275\u0275text"](15,"TuiInputMonthComponent"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](16," in template: "),d["\u0275\u0275element"](17,"tui-doc-code",14),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",e.exampleImportModule),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("code",e.exampleDeclareForm),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}O=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,N=$localize`:␟c98678197ea98e1f5d179414969ee7d8dbdcefbb␟1004572627847397831:${"\ufffd#1\ufffd"}:START_TAG_DIV: A handler that gets a date and returns true if it is disabled. ${"\ufffd/#1\ufffd"}:CLOSE_TAG_DIV:${"\ufffd#2\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,$=$localize`:␟4154b59e6a74ee1968fd07ad38c2a5b5329c1a78␟228579238578588280: Minimum date `,z=$localize`:␟ce93c802f63dbda020cc57d47ed04f9f56fed31f␟2371503113949525542: Maximum date `,L=$localize`:␟68f05b078a893528095914c11e82a34e214bdf59␟7892161855673473900: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputMonthRangeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,k=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,k=d["\u0275\u0275i18nPostprocess"](k);let q=(()=>{class e extends c.a{constructor(){super(...arguments),this.exampleDeclareForm="import {FormControl, FormGroup} from '@angular/forms';\n\n...\n\n@Component({\n    ...\n})\nexport class MyComponent {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(null),\n    });\n}\n",this.exampleImportModule="import {FormsModule, ReactiveFormsModule} from '@angular/forms';\nimport {TuiInputMonthRangeModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        FormsModule,\n        ReactiveFormsModule,\n        TuiInputMonthRangeModule,\n    ],\n...\n",this.exampleInsertTemplate='<form [formGroup]="testForm">\n    <tui-input-month-range formControlName="testValue">\n        Choose a range of months\n    </tui-input-month-range>\n</form>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-input-month-range-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputMonthRangeExample1 {\n    readonly control = new FormControl();\n}\n",HTML:'<tui-input-month-range class="b-form" [formControl]="control">\n    Choose a range of months\n</tui-input-month-range>\n'},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-input-month-range-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputMonthRangeExample2 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(null),\n    });\n}\n",HTML:'<form class="b-form" [formGroup]="testForm">\n    <tui-input-month-range\n        formControlName="testValue"\n        tuiTextfieldSize="s"\n        class="tui-space_bottom-2"\n    >\n        Choose a range of months\n    </tui-input-month-range>\n    <tui-input-month-range\n        formControlName="testValue"\n        tuiTextfieldSize="m"\n        class="tui-space_vertical-4"\n    >\n        Choose a range of months\n    </tui-input-month-range>\n    <tui-input-month-range formControlName="testValue">\n        Choose a range of months\n    </tui-input-month-range>\n</form>\n'},this.example3={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {TuiMonth, TuiMonthRange} from '@taiga-ui/cdk';\nimport {TuiBooleanHandlerWithContext, TuiMonthContext} from '@taiga-ui/kit';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-input-month-range-example-3',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputMonthRangeExample3 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(null),\n    });\n\n    readonly disabledItemHandler: TuiBooleanHandlerWithContext<\n        TuiMonth,\n        TuiMonthContext\n    > = (item: TuiMonth, context?: TuiMonthContext) => {\n        return (\n            !!context &&\n            !!context.value &&\n            context.value instanceof TuiMonthRange &&\n            !!context.value.isSingleMonth &&\n            item.month < context.value.from.month + 2\n        );\n    };\n}\n",HTML:'<p i18n>\n    A sample with\n    <code>disabledItemHandler</code>\n    when selecting a left value of range changes available right value: a range\n    no more than one month\n</p>\n\n<form class="b-form" [formGroup]="testForm">\n    <tui-input-month-range\n        formControlName="testValue"\n        class="tui-space_bottom-2"\n        [disabledItemHandler]="disabledItemHandler"\n    >\n        Choose a range of months\n    </tui-input-month-range>\n</form>\n'},this.minVariants=[s.TUI_FIRST_DAY,new s.TuiMonth(2019,2),new s.TuiMonth(2007,0)],this.maxVariants=[s.TUI_LAST_DAY,new s.TuiMonth(2020,2),new s.TuiMonth(2023,0)],this.min=this.minVariants[0],this.max=this.maxVariants[0],this.disabledItemHandlerVariants=[s.ALWAYS_FALSE_HANDLER,({month:e})=>e%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.cleaner=!1,this.control=new a.FormControl(null,a.Validators.required)}}return e.\u0275fac=function(t){return Z(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-input-month-range"]],features:[d["\u0275\u0275ProvidersFeature"]([{provide:p.a,useExisting:Object(d.forwardRef)(()=>e)}]),d["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","InputMonthRange","package","KIT","type","components"],["pageTab",""],["id","base",3,"content",6,"heading"],["id","sizes",3,"content",6,"heading"],["id","context",3,"content",6,"heading"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandlerWithContext<TuiMonth, TuiMonthContext>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","min","max","focusable","tuiTextfieldCleaner","tuiTextfieldLabelOutside","tuiTextfieldSize","readOnly","pseudoInvalid","pseudoFocused","pseudoHovered","pseudoPressed","disabledItemHandler","tuiHintContent","tuiHintDirection","tuiHintMode"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275template"](1,A,11,3,"ng-template",1),d["\u0275\u0275template"](2,Y,8,8,"ng-template",1),d["\u0275\u0275template"](3,J,18,3,"ng-template",1),d["\u0275\u0275elementEnd"]())},directives:[f.a,h.a,g.a,x,y,S,M.a,V.a,F.a,E.a,C.a,a.NgControlStatus,a.FormControlDirective,I.b,_.b,T.b,w.a,P.a],encapsulation:2,changeDetection:0}),e})();const Z=d["\u0275\u0275getInheritedFactory"](q);let K=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.h,u.a,a.ReactiveFormsModule,a.FormsModule,o.c,l.TuiLinkModule,l.TuiButtonModule,m.TuiInputMonthRangeModule,l.TuiTextfieldControllerModule,l.TuiHintControllerModule,r.f.forChild(Object(i.o)(q))]]}),e})()}}]);