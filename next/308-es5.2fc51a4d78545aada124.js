(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{ngzu:function(t,n,e){"use strict";e.r(n),n.default='<form class="form" [formGroup]="testForm">\n    <tui-select formControlName="testValue" [valueContent]="cardContent">\n        Choose a card\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]="cards"\n            [itemContent]="cardContent"\n        ></tui-data-list-wrapper>\n    </tui-select>\n    <tui-select\n        formControlName="testValue"\n        class="tui-space_vertical-5"\n        [tuiTextfieldLabelOutside]="true"\n        [valueContent]="cardContent"\n    >\n        Choose a card\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]="cards"\n            [itemContent]="cardContent"\n        ></tui-data-list-wrapper>\n    </tui-select>\n    <tui-select\n        formControlName="accounts"\n        itemSize="l"\n        [tuiTextfieldLabelOutside]="true"\n        [valueContent]="accountContent"\n    >\n        Choose an account\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]="accounts"\n            [itemContent]="accountContent"\n        ></tui-data-list-wrapper>\n    </tui-select>\n    <ng-template #cardContent let-item>\n        <div class="card-item">\n            <tui-card\n                size="s"\n                paymentSystem="mastercard"\n                class="card"\n                [cardNumber]="item.cardNumber.slice(1)"\n            ></tui-card>\n            <span class="card-name">{{item.cardName}}</span>\n            <span class="card-number">{{item.cardNumber}}</span>\n        </div>\n    </ng-template>\n    <ng-template #accountContent let-account>\n        <div class="account">\n            {{account.name}}\n            <tui-money [value]="account.amount"></tui-money>\n        </div>\n    </ng-template>\n</form>\n'}}]);