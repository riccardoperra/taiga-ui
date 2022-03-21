import {Component, forwardRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {AbstractExampleTuiHint} from '../../components/abstract/hint';
import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/inherited-documentation/abstract-props-accessor';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-pointer-hint',
    templateUrl: './pointer-hint.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiPointerHintComponent),
        },
    ],
})
export class ExampleTuiPointerHintComponent extends AbstractExampleTuiHint {
    readonly exampleModule = exampleModule;
    readonly exampleHtml = exampleHtml;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    showDelay = 0;
    hideDelay = 0;
}
