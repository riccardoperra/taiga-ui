(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{"+orC":function(n,t,i){"use strict";i.r(t),t.default='<tui-input-card-grouped #component [formControl]="control">\n    <tui-data-list *tuiDataList (keydown.escape)="onEsc(component)">\n        <button tuiOption size="l" (click)="onClick(component)">\n            <tui-svg src="tuiIconPlus" class="new"></tui-svg>\n            <span class="label">New card</span>\n        </button>\n        <button\n            *ngFor="let item of items; let index = index"\n            tuiOption\n            size="l"\n            [value]="item"\n        >\n            <tui-card\n                size="s"\n                class="card"\n                [cardNumber]="item.card.slice(-4)"\n            ></tui-card>\n            <label tuiLabel class="label" [label]="item.bank">\n                {{item.name}}\n            </label>\n            <span>{{item.card.slice(-5)}}</span>\n        </button>\n    </tui-data-list>\n</tui-input-card-grouped>\n'}}]);