import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

import {default as example1Ts} from '!!raw-loader!./examples/1/component.ts';
import {default as example1Html} from '!!raw-loader!./examples/1/template.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/component.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/template.html';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-mapper',
    templateUrl: './mapper.template.html',
    styleUrls: ['./mapper.style.less'],
    changeDetection,
})
export class ExampleTuiMapperComponent {
    readonly exampleModule = exampleModule;
    readonly exampleHtml = exampleHtml;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };
}
