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
    TuiBooleanHandler,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiHandler,
    TuiMonth,
} from '@taiga-ui/cdk';
import {
    sizeBigger,
    TUI_TEXTFIELD_SIZE,
    TuiPrimitiveTextfieldComponent,
    TuiTextfieldSizeDirective,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {TUI_MONTH_FORMATTER} from '@taiga-ui/kit/tokens';
import {Observable} from 'rxjs';

import {TUI_INPUT_MONTH_PROVIDERS} from './input-month.providers';

// @dynamic
@Component({
    selector: 'tui-input-month',
    templateUrl: './input-month.template.html',
    styleUrls: ['./input-month.style.less'],
    providers: TUI_INPUT_MONTH_PROVIDERS,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiInputMonthComponent
    extends AbstractTuiNullableControl<TuiMonth>
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
    disabledItemHandler: TuiBooleanHandler<TuiMonth> = ALWAYS_FALSE_HANDLER;

    open = false;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_TEXTFIELD_SIZE)
        private readonly textfieldSize: TuiTextfieldSizeDirective,
        @Inject(TUI_MONTH_FORMATTER)
        readonly formatter: TuiHandler<TuiMonth | null, Observable<string>>,
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

    onValueChange(value: string) {
        if (value) {
            return;
        }

        this.updateValue(null);
        this.onOpenChange(true);
    }

    onMonthClick(month: TuiMonth) {
        this.updateValue(month);
        this.close();
    }

    onHovered(hovered: boolean) {
        this.updateHovered(hovered);
    }

    onFocused(focused: boolean) {
        this.updateFocused(focused);
    }

    onOpenChange(open: boolean) {
        this.open = open;
    }

    toggle() {
        this.open = !this.open;
    }

    setDisabledState() {
        super.setDisabledState();
        this.close();
    }

    private close() {
        this.open = false;
    }
}
