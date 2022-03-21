(window.webpackJsonp=window.webpackJsonp||[]).push([[476],{"8Nn5":function(e,n,t){"use strict";t.r(n),n.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {Observable, of, Subject} from 'rxjs';\nimport {delay, startWith, switchMap} from 'rxjs/operators';\n\nconst databaseMockData: readonly string[] = [\n    'John Cleese',\n    'Eric Idle',\n    'Michael Palin',\n    'Terry Gilliam',\n    'Terry Jones',\n    'Graham Chapman',\n];\n\n@Component({\n    selector: 'tui-input-tag-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputTagExample2 {\n    private readonly search$ = new Subject<string>();\n\n    value = [];\n\n    readonly items$ = this.search$.pipe(\n        switchMap(search =>\n            this.serverRequest(search).pipe(startWith<readonly string[] | null>(null)),\n        ),\n        startWith(databaseMockData),\n    );\n\n    onSearchChange(search: string) {\n        this.search$.next(search);\n    }\n\n    /**\n     * Server request emulation\n     */\n    private serverRequest(search: string): Observable<readonly string[]> {\n        const result = databaseMockData.filter(item =>\n            item.toLowerCase().includes(search.toLowerCase()),\n        );\n\n        return of(result).pipe(delay(Math.random() * 1000 + 500));\n    }\n}\n"}}]);