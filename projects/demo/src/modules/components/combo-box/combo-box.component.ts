import {Component, forwardRef, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TUI_DEFAULT_MATCHER,
    TUI_DEFAULT_STRINGIFY,
    TUI_STRICT_MATCHER,
    TuiIdentityMatcher,
    tuiPure,
    TuiStringHandler,
    TuiStringMatcher,
} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Less} from '!!raw-loader!./examples/1/index.less';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2DatabaseMockTs} from '!!raw-loader!./examples/2/database-mock-data';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Less} from '!!raw-loader!./examples/2/index.less';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as example2ServiceTs} from '!!raw-loader!./examples/2/request.service';
import {default as example2UserTs} from '!!raw-loader!./examples/2/user';
import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';
import {default as example4Html} from '!!raw-loader!./examples/4/index.html';
import {default as example4Ts} from '!!raw-loader!./examples/4/index.ts';
import {default as example5Html} from '!!raw-loader!./examples/5/index.html';
import {default as example5Less} from '!!raw-loader!./examples/5/index.less';
import {default as example5Ts} from '!!raw-loader!./examples/5/index.ts';
import {default as exampleDeclareForm} from '!!raw-loader!./examples/import/declare-form.txt';
import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';
import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

class Account {
    constructor(readonly name: string, readonly balance: number) {}

    toString(): string {
        return `${this.name} (${this.balance})`;
    }
}

@Component({
    selector: 'example-tui-combo-box',
    templateUrl: './combo-box.template.html',
    styleUrls: ['./combo-box.style.less'],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiComboBoxComponent),
        },
    ],
})
export class ExampleTuiComboBoxComponent extends AbstractExampleTuiControl {
    @ViewChild('valueTemplateContent')
    private readonly valueTemplateRef: PolymorpheusContent = '';

    readonly exampleDeclareForm = exampleDeclareForm;
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
    };

    readonly example2 = {
        TypeScript: example2Ts,
        HTML: example2Html,
        LESS: example2Less,
        'user.ts': example2UserTs,
        'request.service.ts': example2ServiceTs,
        'database-mock-data.ts': example2DatabaseMockTs,
    };

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
    };

    readonly example4: FrontEndExample = {
        TypeScript: example4Ts,
        HTML: example4Html,
    };

    readonly example5: FrontEndExample = {
        TypeScript: example5Ts,
        HTML: example5Html,
        LESS: example5Less,
    };

    readonly items = [
        new Account('Rubles', 500),
        new Account('Dollars', 237),
        new Account('Netherlands Antillean Guilder and Falkland Islands Pound', 700),
    ];

    strict = true;

    search = '';

    valueTemplateVariants = ['', 'Template'];

    selectedValueTemplate = '';

    readonly stringifyVariants: TuiStringHandler<Account | string>[] = [
        TUI_DEFAULT_STRINGIFY,
        item => String(String(item).match(/\d+/)),
    ];

    stringify = this.stringifyVariants[0];

    readonly strictMatcherVariants: ReadonlyArray<TuiStringMatcher<
        Account | string
    > | null> = [
        TUI_STRICT_MATCHER,
        (item, search, stringify) =>
            Number.parseInt(stringify(item).match(/\d+/g)![0], 10) ===
            Number.parseInt(search, 10),
        null,
    ];

    strictMatcher = this.strictMatcherVariants[0];

    readonly identityMatcherVariants: ReadonlyArray<TuiIdentityMatcher<Account>> = [
        (item1, item2) => item1 === item2,
        (item1, item2) => item1.balance === item2.balance,
    ];

    identityMatcher = this.identityMatcherVariants[0];

    readonly control = new FormControl(null, Validators.required);

    get valueContent(): PolymorpheusContent {
        return this.valueTemplateRef && this.selectedValueTemplate
            ? this.valueTemplateRef
            : '';
    }

    @tuiPure
    filter(query: string | null): ReadonlyArray<Account> {
        return this.items.filter(item => TUI_DEFAULT_MATCHER(item, query || ''));
    }

    setValue() {
        this.control.setValue(new Account('Dollars', 237));
    }
}
