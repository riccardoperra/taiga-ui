import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Inject,
    Input,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiNullableControl,
    ALWAYS_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiHandler,
    TuiMonth,
    TuiMonthRange,
} from '@taiga-ui/cdk';
import {
    sizeBigger,
    TUI_TEXTFIELD_SIZE,
    TuiPrimitiveTextfieldComponent,
    TuiTextfieldSizeDirective,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {TuiMonthContext} from '@taiga-ui/kit/interfaces';
import {TUI_MONTH_FORMATTER} from '@taiga-ui/kit/tokens';
import {TuiBooleanHandlerWithContext} from '@taiga-ui/kit/types';
import {Observable} from 'rxjs';

import {TUI_INPUT_MONTH_RANGE_PROVIDERS} from './input-month-range.providers';

// @dynamic
@Component({
    selector: 'tui-input-month-range',
    templateUrl: './input-month-range.template.html',
    styleUrls: ['./input-month-range.style.less'],
    providers: TUI_INPUT_MONTH_RANGE_PROVIDERS,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiInputMonthRangeComponent
    extends AbstractTuiNullableControl<TuiMonthRange>
    implements TuiWithOptionalMinMax<TuiMonth>, TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    @Input()
    @tuiDefaultProp()
    min: TuiMonth = TUI_FIRST_DAY;

    @Input()
    @tuiDefaultProp()
    max: TuiMonth = TUI_LAST_DAY;

    @Input()
    @tuiDefaultProp()
    disabledItemHandler: TuiBooleanHandlerWithContext<TuiMonth, TuiMonthContext> =
        ALWAYS_FALSE_HANDLER;

    open = false;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_MONTH_FORMATTER)
        readonly formatter: TuiHandler<TuiMonth | null, Observable<string>>,
        @Inject(TUI_TEXTFIELD_SIZE)
        private readonly textfieldSize: TuiTextfieldSizeDirective,
    ) {
        super(control, changeDetectorRef);
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield ? this.textfield.nativeFocusableElement : null;
    }

    get focused(): boolean {
        return !!this.textfield && this.textfield.focused;
    }

    get calendarIcon(): string {
        return sizeBigger(this.textfieldSize.size)
            ? 'tuiIconCalendarLarge'
            : 'tuiIconCalendar';
    }

    computeValue(from: string | null, to: string | null): string {
        const formattedTo = from === to && this.focused ? '' : to;

        return `${from} — ${formattedTo}`;
    }

    onValueChange(value: string) {
        if (value) {
            return;
        }

        this.updateValue(null);
        this.onOpenChange(true);
    }

    onMonthClick(month: TuiMonth) {
        if (this.value === null || !this.value.isSingleMonth) {
            this.writeValue(new TuiMonthRange(month, month));

            return;
        }

        this.updateValue(TuiMonthRange.sort(this.value.from, month));
        this.close();
    }

    onHovered(hovered: boolean) {
        this.updateHovered(hovered);
    }

    onOpenChange(open: boolean) {
        this.open = open;
    }

    onActiveZone(focused: boolean) {
        this.updateFocused(focused);

        if (focused) {
            return;
        }

        if (this.value && this.value.isSingleMonth) {
            this.updateValue(new TuiMonthRange(this.value.from, this.value.from));
        }
    }

    setDisabledState() {
        super.setDisabledState();
        this.close();
    }

    private close() {
        this.open = false;
    }
}
