import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiSizeL} from '@taiga-ui/core';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as exampleForm} from '!!raw-loader!./examples/import/declare-form.txt';
import {default as exampleOptions} from '!!raw-loader!./examples/import/define-options.txt';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';
import {AbstractExampleTuiInteractive} from '../abstract/interactive';

@Component({
    selector: 'example-tui-toggle',
    templateUrl: './toggle.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiToggleComponent),
        },
    ],
})
export class ExampleTuiToggleComponent extends AbstractExampleTuiInteractive {
    readonly exampleForm = exampleForm;
    readonly exampleModule = exampleModule;
    readonly exampleHtml = exampleHtml;
    readonly exampleOptions = exampleOptions;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    showIcons = false;

    showLoader = false;

    singleColor = false;

    readonly control = new FormControl(false);

    readonly sizeVariants: ReadonlyArray<TuiSizeL> = ['m', 'l'];

    size: TuiSizeL = this.sizeVariants[0];

    get disabled(): boolean {
        return this.control.disabled;
    }

    set disabled(value: boolean) {
        if (value) {
            this.control.disable();

            return;
        }

        this.control.enable();
    }
}
