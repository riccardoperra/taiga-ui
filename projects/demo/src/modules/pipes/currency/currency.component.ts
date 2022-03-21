import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';

import {default as example1Html} from '!!raw-loader!./examples/1/template.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/component.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/template.html';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-currency',
    templateUrl: './currency.template.html',
    changeDetection,
})
export class ExampleTuiCurrencyComponent {
    readonly exampleModule = exampleModule;
    readonly exampleHtml = exampleHtml;

    readonly example1: FrontEndExample = {
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    readonly currencyVariants = [null, 826, 840, 'EUR', 'RUB', 'UGX', 'USD'];
    currency = this.currencyVariants[0];

    readonly control = new FormControl(6432, Validators.required);
}
