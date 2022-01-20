(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{CpUQ:function(n,e,t){"use strict";t.r(e),e.default="import {Component, Input} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {EMPTY_ARRAY, setNativeFocused, TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';\nimport {isEditingKey, TuiDataListComponent} from '@taiga-ui/core';\n\ninterface Items<T> {\n    readonly name: string;\n    readonly items: ReadonlyArray<T>;\n}\n\n@Component({\n    selector: 'custom-list',\n    templateUrl: './custom-list.template.html',\n    changeDetection,\n})\nexport class CustomListComponent<T> {\n    @Input()\n    items: ReadonlyArray<Items<T>> = [];\n\n    value = '';\n\n    readonly all = EMPTY_ARRAY;\n\n    readonly filter = TUI_DEFAULT_MATCHER;\n\n    onArrowDown(list: TuiDataListComponent<string>, input: HTMLElement) {\n        list.onFocus(input, true);\n    }\n\n    onKeyDown(key: string, element: HTMLElement | null) {\n        if (element && isEditingKey(key)) {\n            setNativeFocused(element, true, true);\n        }\n    }\n}\n"}}]);