(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"iK5/":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputCountModule",(function(){return se}));var o=n("An66"),a=n("3kIJ"),r=n("1VvW"),i=n("SVIu"),l=n("Qq0t"),u=n("dvRg"),m=n("Piem"),c=n("kZht"),p=n("LusI"),d=n("K/iL"),s=n("OZlg"),f=n("e0eB"),b=n("yZWP"),C=n("iyc4"),T=n("1Nkj"),x=n("okGw"),y=n("gEyt");const g=["label",$localize`:␟b159ec7c42ae077a8407364cc726a54b1adb6b12␟4517713429238727398:Step is 1 by default`],h=["label",$localize`:␟c81f9040e56ff2939bfcc8f7303ea190fc62a518␟2290251155545250605:Step is 100`],S=["label",$localize`:␟b4300d745195687ae85fb9b2cbcbdb97af131830␟2074374908429047288:Also works with negative values`];let V=(()=>{class e{constructor(){this.testForm=new a.FormGroup({testValue1:new a.FormControl(10,a.Validators.required),testValue2:new a.FormControl(10,a.Validators.required),testValue3:new a.FormControl(-10,a.Validators.required)})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-count-example-1"]],decls:11,vars:8,consts:[[1,"b-form",3,"formGroup"],["tuiLabel","",6,"label"],["formControlName","testValue1",3,"min","max"],["tuiLabel","",1,"tui-space_top-4",6,"label"],["formControlName","testValue2",3,"tuiTextfieldLabelOutside","step"],["formControlName","testValue3",3,"tuiTextfieldLabelOutside","min","max"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"form",0),c["\u0275\u0275elementStart"](1,"label",1),c["\u0275\u0275i18nAttributes"](2,g),c["\u0275\u0275elementStart"](3,"tui-input-count",2),c["\u0275\u0275text"](4," Count something "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"label",3),c["\u0275\u0275i18nAttributes"](6,h),c["\u0275\u0275element"](7,"tui-input-count",4),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](8,"label",3),c["\u0275\u0275i18nAttributes"](9,S),c["\u0275\u0275element"](10,"tui-input-count",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275property"]("formGroup",t.testForm),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("min",1)("max",200),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0)("step",100),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0)("min",-100)("max",100))},directives:[a["\u0275angular_packages_forms_forms_y"],a.NgControlStatusGroup,a.FormGroupDirective,T.a,x.a,a.NgControlStatus,a.FormControlName,y.b],encapsulation:2,changeDetection:0}),e})();var _=n("2wTY");const O=["label",$localize`:␟b159ec7c42ae077a8407364cc726a54b1adb6b12␟4517713429238727398:Step is 1 by default`],P=["label",$localize`:␟c81f9040e56ff2939bfcc8f7303ea190fc62a518␟2290251155545250605:Step is 100`];let N=(()=>{class e{constructor(){this.testForm=new a.FormGroup({testValue1:new a.FormControl(10,a.Validators.required),testValue2:new a.FormControl(10,a.Validators.required)})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-count-example-2"]],decls:7,vars:6,consts:[[1,"b-form",3,"formGroup"],["tuiLabel","",6,"label"],["formControlName","testValue1","tuiTextfieldSize","m",3,"max","tuiTextfieldLabelOutside"],["tuiLabel","",1,"tui-space_top-4",6,"label"],["formControlName","testValue2","tuiTextfieldSize","m",3,"step","max","tuiTextfieldLabelOutside"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"form",0),c["\u0275\u0275elementStart"](1,"label",1),c["\u0275\u0275i18nAttributes"](2,O),c["\u0275\u0275element"](3,"tui-input-count",2),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"label",3),c["\u0275\u0275i18nAttributes"](5,P),c["\u0275\u0275element"](6,"tui-input-count",4),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275property"]("formGroup",t.testForm),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("max",999999)("tuiTextfieldLabelOutside",!0),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("step",100)("max",999999)("tuiTextfieldLabelOutside",!0))},directives:[a["\u0275angular_packages_forms_forms_y"],a.NgControlStatusGroup,a.FormGroupDirective,T.a,x.a,a.NgControlStatus,a.FormControlName,_.b,y.b],encapsulation:2,changeDetection:0}),e})();const E=["label",$localize`:␟ca426ccdbb6cc86ab33b1135e42c32e2786d4700␟5758694726409722369:With custom options`],F=["label",$localize`:␟bf0cf1e190f62dac6e22474c00ebd6f99d2889b0␟2713636921764569690:With custom options and medium size`];let v=(()=>{class e{constructor(){this.testForm=new a.FormGroup({testValue1:new a.FormControl(10,a.Validators.required),testValue2:new a.FormControl(10,a.Validators.required)})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-count-example-3"]],features:[c["\u0275\u0275ProvidersFeature"]([{provide:u.TUI_INPUT_COUNT_OPTIONS,useValue:Object.assign(Object.assign({},u.TUI_INPUT_COUNT_DEFAULT_OPTIONS),{icons:{up:"tuiIconChevronUp",down:"tuiIconChevronDown"},appearance:"secondary",step:10,min:10,max:100})}])],decls:7,vars:3,consts:[[1,"b-form",3,"formGroup"],["tuiLabel","",6,"label"],["formControlName","testValue1",3,"tuiTextfieldLabelOutside"],["tuiLabel","",1,"tui-space_top-4",6,"label"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"form",0),c["\u0275\u0275elementStart"](1,"label",1),c["\u0275\u0275i18nAttributes"](2,E),c["\u0275\u0275element"](3,"tui-input-count",2),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"label",3),c["\u0275\u0275i18nAttributes"](5,F),c["\u0275\u0275element"](6,"tui-input-count",4),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275property"]("formGroup",t.testForm),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0))},directives:[a["\u0275angular_packages_forms_forms_y"],a.NgControlStatusGroup,a.FormGroupDirective,T.a,x.a,a.NgControlStatus,a.FormControlName,y.b,_.b],encapsulation:2,changeDetection:0}),e})();var I,w,L,U,A=n("EPR0"),G=n("yHor"),D=n("zGJC"),z=n("FSyC"),$=n("u8jZ");I=$localize`:␟b9669bf4d7cd2041365aecab26edefeae395b627␟7116640048935486801:${"\ufffd#2\ufffd"}:START_TAG_CODE:InputCount${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: is a good choice to input integer positive numbers under 999 `,w=$localize`:␟93ac744bf41984c8f980cafd646b71db909b71a3␟6434254909743697518: It allows limit value with min and max and handles such cases `,L=$localize`:␟756f0b4a649d274f59cdcd92ecebd22121a58de5␟3317726340623526124:It does not indicate validation status`,U=$localize`:␟0198de482ad16d583e51cf5d513123183dba1f58␟3089968062191477089: Number formatting can be customized by using ${"\ufffd#9\ufffd"}:START_LINK:TUI_NUMBER_FORMAT${"\ufffd/#9\ufffd"}:CLOSE_LINK:`;const M=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],k=["heading",$localize`:␟0d72ce2c862fae2cccbe564228d17758c058bc20␟7861254305604213764:Size M`],R=["heading",$localize`:␟24813b8a3e45f0b57136c18d003027262cfe2d1f␟8432562579042371182:Options`];function q(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",2),c["\u0275\u0275i18nStart"](1,I),c["\u0275\u0275element"](2,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"div",2),c["\u0275\u0275i18n"](4,w),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"p"),c["\u0275\u0275i18n"](6,L),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"p"),c["\u0275\u0275i18nStart"](8,U),c["\u0275\u0275element"](9,"a",3),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](10,"tui-doc-example",4),c["\u0275\u0275i18nAttributes"](11,M),c["\u0275\u0275element"](12,"tui-input-count-example-1"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](13,"tui-doc-example",5),c["\u0275\u0275i18nAttributes"](14,k),c["\u0275\u0275element"](15,"tui-input-count-example-2"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](16,"tui-doc-example",6),c["\u0275\u0275i18nAttributes"](17,R),c["\u0275\u0275element"](18,"tui-input-count-example-3"),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](10),c["\u0275\u0275property"]("content",e.example1),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",e.example2),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",e.example3)}}function B(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"tui-input-count",15),c["\u0275\u0275text"](1," Number of accounts "),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"](2);c["\u0275\u0275property"]("formControl",e.control)("focusable",e.focusable)("min",e.min)("max",e.max)("hideButtons",e.hideButtons)("step",e.step)("prefix",e.prefix)("postfix",e.postfix)("readOnly",e.readOnly)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)}}var j,W,H,K,J,Z,Q,Y,X,ee,te;function ne(e,t){1&e&&(c["\u0275\u0275i18nStart"](0,j),c["\u0275\u0275element"](1,"code"),c["\u0275\u0275i18nEnd"]())}function oe(e,t){1&e&&c["\u0275\u0275i18n"](0,W)}function ae(e,t){1&e&&c["\u0275\u0275i18n"](0,H)}function re(e,t){1&e&&(c["\u0275\u0275i18nStart"](0,K),c["\u0275\u0275element"](1,"code"),c["\u0275\u0275i18nEnd"]())}function ie(e,t){1&e&&c["\u0275\u0275i18n"](0,J)}function le(e,t){1&e&&c["\u0275\u0275i18n"](0,Z)}function ue(e,t){1&e&&c["\u0275\u0275i18n"](0,Q)}function me(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tui-doc-demo",7),c["\u0275\u0275template"](1,B,2,11,"ng-template"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"tui-doc-documentation"),c["\u0275\u0275template"](3,ne,2,0,"ng-template",8),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().disabled=t})),c["\u0275\u0275template"](4,oe,1,0,"ng-template",9),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().hideButtons=t})),c["\u0275\u0275template"](5,ae,1,0,"ng-template",10),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().min=t})),c["\u0275\u0275template"](6,re,2,0,"ng-template",11),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().max=t})),c["\u0275\u0275template"](7,ie,1,0,"ng-template",12),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().prefix=t})),c["\u0275\u0275template"](8,le,1,0,"ng-template",13),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().postfix=t})),c["\u0275\u0275template"](9,ue,1,0,"ng-template",14),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().step=t})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](10,"inherited-documentation")}if(2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275property"]("control",e.control),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("documentationPropertyValue",e.disabled),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.hideButtons),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.min),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.max),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.prefix),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.postfix),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.stepValues)("documentationPropertyValue",e.step)}}function ce(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"ol",16),c["\u0275\u0275elementStart"](1,"li"),c["\u0275\u0275elementStart"](2,"p"),c["\u0275\u0275i18nStart"](3,Y),c["\u0275\u0275element"](4,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](5,"tui-doc-code",17),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"li"),c["\u0275\u0275elementStart"](7,"p"),c["\u0275\u0275i18nStart"](8,X),c["\u0275\u0275element"](9,"code"),c["\u0275\u0275element"](10,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](11,"tui-doc-code",18),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](12,"li"),c["\u0275\u0275elementStart"](13,"p"),c["\u0275\u0275i18n"](14,ee),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](15,"tui-doc-code",19),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](16,"li"),c["\u0275\u0275elementStart"](17,"p"),c["\u0275\u0275i18nStart"](18,te),c["\u0275\u0275element"](19,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](20,"tui-doc-code",17),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("code",e.exampleImportModule),c["\u0275\u0275advance"](6),c["\u0275\u0275property"]("code",e.exampleDeclareForm),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("code",e.exampleInsertTemplate),c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("code",e.exampleDefineOptions)}}j=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,W=$localize`:␟ea14b95b26f0ac7cd0db32a42bd60e8ef5eb7cdc␟4295858242233154356: Hide icon buttons `,H=$localize`:␟41d4dbb03bf5617301e95d4fbce6b0e39ca47f01␟1090761179854672750: Minimum value `,K=$localize`:␟ff319fe89f5215270e87674b1c4bc8696341e90a␟4080008404588596650: Maximum value ( ${"\ufffd#1\ufffd"}:START_TAG_CODE:Infinity${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: by default) `,J=$localize`:␟658adf15e902084053811153efcee4ab1a098c01␟889438292388771446: A prefix symbol, like currency `,Z=$localize`:␟f5cf6d36f821cf714fb502d79cd966b650bfa4f7␟7436553299672149610: Some string after value `,Q=$localize`:␟95f52be4795cdd2b39ffd9707f83e9721e0e17e9␟5700630542385259856: Step for buttons `,Y=$localize`:␟4033559e8c5b3ecd794da4fd8d5d21edd63b93eb␟5253084050799099966: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputCountModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,X=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,X=c["\u0275\u0275i18nPostprocess"](X),ee=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,te=$localize`:␟73ea80ff7cf51755eaaeda82377f308e5bd9f5ac␟1877368257723241539: Optionally use the ${"\ufffd#19\ufffd"}:START_TAG_CODE:TUI_INPUT_COUNT_OPTIONS${"\ufffd/#19\ufffd"}:CLOSE_TAG_CODE: injection token to override the default options for the component. `;let pe=(()=>{class e extends p.a{constructor(){super(...arguments),this.exampleDeclareForm="import {FormControl, FormGroup} from '@angular/forms';\n\n...\n\n@Component({\n...\n})\nexport class MyComponent {\n    testForm = new FormGroup({\n        testValue: new FormControl(10)\n    });\n}\n",this.exampleImportModule="import {FormsModule, ReactiveFormsModule} from '@angular/forms';\nimport {TuiInputCountModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        FormsModule,\n        ReactiveFormsModule,\n        TuiInputCountModule\n    ],\n...\n",this.exampleInsertTemplate='<ng-container [formGroup]="testForm">\n    <tui-input-count formControlName="testValue"></tui-input-count>\n</ng-container>\n',this.exampleDefineOptions="import {TUI_INPUT_COUNT_OPTIONS, TUI_INPUT_COUNT_DEFAULT_OPTIONS} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    providers: [{\n        provide: TUI_INPUT_COUNT_OPTIONS,\n        useValue: {\n            ...TUI_INPUT_COUNT_DEFAULT_OPTIONS,\n            icons: {\n                up: 'tuiIconChevronUp',\n                down: 'tuiIconChevronDown',\n            },\n            appearance: 'secondary',\n            step: 10,\n            min: 10,\n            max: 100,\n        },\n    }],\n...\n",this.example1={HTML:'<form class="b-form" [formGroup]="testForm">\n    <label tuiLabel i18n-label label="Step is 1 by default">\n        <tui-input-count formControlName="testValue1" [min]="1" [max]="200">\n            Count something\n        </tui-input-count>\n    </label>\n\n    <label tuiLabel i18n-label label="Step is 100" class="tui-space_top-4">\n        <tui-input-count\n            formControlName="testValue2"\n            [tuiTextfieldLabelOutside]="true"\n            [step]="100"\n        ></tui-input-count>\n    </label>\n\n    <label\n        tuiLabel\n        i18n-label\n        label="Also works with negative values"\n        class="tui-space_top-4"\n    >\n        <tui-input-count\n            formControlName="testValue3"\n            [tuiTextfieldLabelOutside]="true"\n            [min]="-100"\n            [max]="100"\n        ></tui-input-count>\n    </label>\n</form>\n',TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-input-count-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputCountExample1 {\n    readonly testForm = new FormGroup({\n        testValue1: new FormControl(10, Validators.required),\n        testValue2: new FormControl(10, Validators.required),\n        testValue3: new FormControl(-10, Validators.required),\n    });\n}\n"},this.example2={HTML:'<form class="b-form" [formGroup]="testForm">\n    <label tuiLabel i18n-label label="Step is 1 by default">\n        <tui-input-count\n            formControlName="testValue1"\n            tuiTextfieldSize="m"\n            [max]="999999"\n            [tuiTextfieldLabelOutside]="true"\n        ></tui-input-count>\n    </label>\n\n    <label tuiLabel i18n-label label="Step is 100" class="tui-space_top-4">\n        <tui-input-count\n            formControlName="testValue2"\n            tuiTextfieldSize="m"\n            [step]="100"\n            [max]="999999"\n            [tuiTextfieldLabelOutside]="true"\n        ></tui-input-count>\n    </label>\n</form>\n',TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-input-count-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputCountExample2 {\n    testForm = new FormGroup({\n        testValue1: new FormControl(10, Validators.required),\n        testValue2: new FormControl(10, Validators.required),\n    });\n}\n"},this.example3={HTML:'<form class="b-form" [formGroup]="testForm">\n    <label tuiLabel i18n-label label="With custom options">\n        <tui-input-count\n            formControlName="testValue1"\n            [tuiTextfieldLabelOutside]="true"\n        ></tui-input-count>\n    </label>\n\n    <label\n        tuiLabel\n        i18n-label\n        label="With custom options and medium size"\n        class="tui-space_top-4"\n    >\n        <tui-input-count\n            formControlName="testValue2"\n            tuiTextfieldSize="m"\n            [tuiTextfieldLabelOutside]="true"\n        ></tui-input-count>\n    </label>\n</form>\n',TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {TUI_INPUT_COUNT_DEFAULT_OPTIONS, TUI_INPUT_COUNT_OPTIONS} from '@taiga-ui/kit';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-input-count-example-3',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_INPUT_COUNT_OPTIONS,\n            useValue: {\n                ...TUI_INPUT_COUNT_DEFAULT_OPTIONS,\n                icons: {\n                    up: 'tuiIconChevronUp',\n                    down: 'tuiIconChevronDown',\n                },\n                appearance: 'secondary',\n                step: 10,\n                min: 10,\n                max: 100,\n            },\n        },\n    ],\n})\nexport class TuiInputCountExample3 {\n    testForm = new FormGroup({\n        testValue1: new FormControl(10, Validators.required),\n        testValue2: new FormControl(10, Validators.required),\n    });\n}\n"},this.min=0,this.max=999,this.step=1,this.stepValues=[1,2,3,4,5],this.sizeVariants=["m","l"],this.size=this.sizeVariants[1],this.hideButtons=!1,this.control=new a.FormControl,this.prefix="",this.postfix=""}}return e.\u0275fac=function(t){return de(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-input-count"]],features:[c["\u0275\u0275ProvidersFeature"]([{provide:d.a,useExisting:Object(c.forwardRef)(()=>e)}]),c["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","InputCount","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-3"],["tuiLink","","routerLink","/utils/tokens"],["id","base",3,"content",6,"heading"],["id","medium-large",3,"content",6,"heading"],["id","options",3,"content",6,"heading"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hideButtons","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","prefix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","postfix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","step","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","focusable","min","max","hideButtons","step","prefix","postfix","readOnly","tuiTextfieldLabelOutside","tuiTextfieldSize"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275template"](1,q,19,3,"ng-template",1),c["\u0275\u0275template"](2,me,11,9,"ng-template",1),c["\u0275\u0275template"](3,ce,21,4,"ng-template",1),c["\u0275\u0275elementEnd"]())},directives:[s.a,f.a,b.a,r.e,C.a,V,N,v,A.a,G.a,D.a,z.a,x.a,a.NgControlStatus,a.FormControlDirective,y.b,_.b,$.a],encapsulation:2,changeDetection:0}),e})();const de=c["\u0275\u0275getInheritedFactory"](pe);let se=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,a.FormsModule,a.ReactiveFormsModule,u.TuiInputCountModule,l.TuiLabelModule,l.TuiLinkModule,i.h,l.TuiTextfieldControllerModule,m.a,r.f.forChild(Object(i.o)(pe))]]}),e})()}}]);