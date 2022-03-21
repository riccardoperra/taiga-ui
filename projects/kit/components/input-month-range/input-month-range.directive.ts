import {Directive, DoCheck, forwardRef, Inject, Self} from '@angular/core';
import {
    AbstractTuiControl,
    TuiDestroyService,
    TuiHandler,
    TuiMonth,
    TuiMonthRange,
} from '@taiga-ui/cdk';
import {TUI_TEXTFIELD_HOST, TuiAbstractTextfieldHost} from '@taiga-ui/core';
import {TUI_MONTH_FORMATTER} from '@taiga-ui/kit/tokens';
import {combineLatest, Observable, Subject} from 'rxjs';
import {distinctUntilChanged, switchMap, takeUntil} from 'rxjs/operators';

import {TuiInputMonthRangeComponent} from './input-month-range.component';

@Directive({
    selector: 'tui-input-month-range',
    providers: [
        {
            provide: TUI_TEXTFIELD_HOST,
            useExisting: forwardRef(() => TuiInputMonthRangeDirective),
        },
        TuiDestroyService,
    ],
})
export class TuiInputMonthRangeDirective
    extends TuiAbstractTextfieldHost<TuiInputMonthRangeComponent>
    implements DoCheck
{
    private readonly value$ = new Subject<TuiMonthRange | null>();

    private localizedValue: [string, string] = ['', ''];

    constructor(
        @Inject(AbstractTuiControl) host: TuiInputMonthRangeComponent,
        @Inject(TUI_MONTH_FORMATTER)
        formatter: TuiHandler<TuiMonth | null, Observable<string>>,
        @Self() @Inject(TuiDestroyService) destroy$: Observable<unknown>,
    ) {
        super(host);

        this.value$
            .pipe(
                distinctUntilChanged(),
                switchMap((value: TuiMonthRange | null) =>
                    combineLatest([
                        formatter(value && value.from),
                        formatter(value && value.to),
                    ]),
                ),
                takeUntil(destroy$),
            )
            .subscribe(localizedValue => {
                this.localizedValue = localizedValue;
            });
    }

    get readOnly(): boolean {
        return true;
    }

    get value(): string {
        return this.localizedValue[0]
            ? this.host.computeValue(...this.localizedValue)
            : '';
    }

    ngDoCheck() {
        this.value$.next(this.host.value);
    }

    onValueChange(value: string) {
        this.host.onValueChange(value);
    }
}
