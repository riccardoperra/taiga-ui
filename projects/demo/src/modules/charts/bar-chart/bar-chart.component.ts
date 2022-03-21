import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {getCurrencySymbol, TuiCurrency} from '@taiga-ui/addon-commerce';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {formatNumber, TuiHintModeT, TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Less} from '!!raw-loader!./examples/1/index.less';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Less} from '!!raw-loader!./examples/2/index.less';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

const MONTHS: readonly string[] = [
    'Jan 2019',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

@Component({
    selector: 'example-tui-bar-chart',
    templateUrl: './bar-chart.template.html',
    styleUrls: ['./bar-chart.style.less'],
    changeDetection,
})
export class ExampleTuiBarChartComponent {
    readonly exampleModule = exampleModule;
    readonly exampleHtml = exampleHtml;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
        LESS: example2Less,
    };

    collapsed = false;

    readonly sizeVariants: ReadonlyArray<TuiSizeS | TuiSizeL> = ['s', 'm', 'l'];

    size: TuiSizeS | TuiSizeL | null = null;

    max = 0;

    readonly valueVariants = [
        [
            [30000, 20500, 12345],
            [12422, 16124, 22424],
        ],
        [
            [30, 65, 30, 80, 54],
            [98, 48, 33, 25, 11],
            [55, 10, 27, 36, 73],
        ],
    ];

    value = this.valueVariants[0];

    readonly contentVariants: ReadonlyArray<
        PolymorpheusContent<TuiContextWithImplicit<number>>
    > = [
        '',
        ({$implicit}) => this.getHint($implicit),
        ({$implicit}) => MONTHS[$implicit],
    ];

    hintContent = this.contentVariants[0];

    readonly hintModeVariants: readonly TuiHintModeT[] = ['onDark', 'error'];

    hintMode: TuiHintModeT | null = null;

    getHint(index: number): string {
        return this.value
            .reduce(
                (result, set) =>
                    `${result}${formatNumber(set[index])} ${getCurrencySymbol(
                        TuiCurrency.Ruble,
                    )}\n`,
                '',
            )
            .trim();
    }
}
