import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {sum, tuiPure} from '@taiga-ui/cdk';
import {formatNumber, TuiNotificationsService} from '@taiga-ui/core';

@Component({
    selector: 'tui-legend-item-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiLegendItemExample2 {
    private enabled = Array(5).fill(true);

    readonly data = [13769, 12367, 10172, 3018, 2592];
    readonly sum = sum(...this.data);
    readonly labels = ['Axes', 'Faxes', 'Taxes', 'Saxes', 'Other'];

    constructor(
        @Inject(TuiNotificationsService)
        private readonly notifications: TuiNotificationsService,
    ) {}

    get value(): readonly number[] {
        return this.getValue(this.data, this.enabled);
    }

    isEnabled(index: number): boolean {
        return this.enabled[index];
    }

    toggle(index: number) {
        this.enabled = this.enabled.map((value, i) => (i === index ? !value : value));
    }

    onClick(index: number) {
        if (this.isEnabled(index)) {
            this.notifications
                .show(`Category spendings: ${formatNumber(this.data[index])} ₽`, {
                    label: this.labels[index],
                })
                .subscribe();
        } else {
            this.toggle(index);
        }
    }

    getColor(index: number): string {
        return `var(--tui-chart-${index})`;
    }

    @tuiPure
    private getValue(
        data: readonly number[],
        enabled: readonly number[],
    ): readonly number[] {
        return data.map((value, index) => (enabled[index] ? value : 0));
    }
}
