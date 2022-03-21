import {
    ChangeDetectorRef,
    Component,
    HostListener,
    Inject,
    Injector,
    Input,
    Optional,
    Self,
    Type,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiNullableControl,
    ALWAYS_FALSE_HANDLER,
    changeDateSeparator,
    DATE_FILLER_LENGTH,
    DATE_RANGE_FILLER_LENGTH,
    nullableSame,
    RANGE_SEPARATOR_CHAR,
    setNativeFocused,
    TUI_DATE_FORMAT,
    TUI_DATE_SEPARATOR,
    TUI_FIRST_DAY,
    TUI_IS_MOBILE,
    TUI_LAST_DAY,
    TuiBooleanHandler,
    TuiControlValueTransformer,
    TuiDateMode,
    TuiDay,
    TuiDayLike,
    TuiDayRange,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiMapper,
    TuiMonth,
} from '@taiga-ui/cdk';
import {
    sizeBigger,
    TUI_DEFAULT_MARKER_HANDLER,
    TUI_TEXTFIELD_EXAMPLE_TEXT,
    TUI_TEXTFIELD_SIZE,
    TuiDialogService,
    TuiMarkerHandler,
    TuiPrimitiveTextfieldComponent,
    TuiTextfieldExampleTextDirective,
    TuiTextfieldSizeDirective,
    TuiTextMaskOptions,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {TuiDayRangePeriod} from '@taiga-ui/kit/classes';
import {EMPTY_MASK, MAX_DAY_RANGE_LENGTH_MAPPER} from '@taiga-ui/kit/constants';
import {
    TUI_DATE_RANGE_VALUE_TRANSFORMER,
    TUI_DATE_TEXTS,
    TUI_MOBILE_CALENDAR,
} from '@taiga-ui/kit/tokens';
import {
    tuiCreateAutoCorrectedDateRangePipe,
    tuiCreateDateRangeMask,
} from '@taiga-ui/kit/utils/mask';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {TextMaskConfig} from 'angular2-text-mask';
import {Observable} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';

import {TUI_INPUT_DATE_RANGE_PROVIDERS} from './input-date-range.providers';

// @dynamic
@Component({
    selector: 'tui-input-date-range',
    templateUrl: './input-date-range.template.html',
    styleUrls: ['./input-date-range.style.less'],
    providers: TUI_INPUT_DATE_RANGE_PROVIDERS,
})
export class TuiInputDateRangeComponent
    extends AbstractTuiNullableControl<TuiDayRange>
    implements TuiWithOptionalMinMax<TuiDay>, TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private readonly textMaskOptions: TuiTextMaskOptions = {
        mask: tuiCreateDateRangeMask(this.dateFormat, this.dateSeparator),
        pipe: tuiCreateAutoCorrectedDateRangePipe(this),
        guide: false,
    };

    @Input()
    @tuiDefaultProp()
    disabledItemHandler: TuiBooleanHandler<TuiDay> = ALWAYS_FALSE_HANDLER;

    @Input()
    @tuiDefaultProp()
    markerHandler: TuiMarkerHandler = TUI_DEFAULT_MARKER_HANDLER;

    @Input()
    @tuiDefaultProp()
    defaultViewedMonth = TuiMonth.currentLocal();

    @Input()
    @tuiDefaultProp()
    items: ReadonlyArray<TuiDayRangePeriod> = [];

    @Input()
    @tuiDefaultProp()
    min = TUI_FIRST_DAY;

    @Input()
    @tuiDefaultProp()
    max = TUI_LAST_DAY;

    @Input()
    @tuiDefaultProp()
    minLength: TuiDayLike | null = null;

    @Input()
    @tuiDefaultProp()
    maxLength: TuiDayLike | null = null;

    open = false;

    readonly maxLengthMapper: TuiMapper<TuiDay, TuiDay> = MAX_DAY_RANGE_LENGTH_MAPPER;
    readonly dateFiller$ = this.dateTexts$.pipe(
        map(dateTexts =>
            changeDateSeparator(dateTexts[this.dateFormat], this.dateSeparator),
        ),
    );

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(Injector) private readonly injector: Injector,
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
        @Optional()
        @Inject(TUI_MOBILE_CALENDAR)
        private readonly mobileCalendar: Type<any> | null,
        @Inject(TUI_TEXTFIELD_SIZE)
        private readonly textfieldSize: TuiTextfieldSizeDirective,
        @Inject(TUI_TEXTFIELD_EXAMPLE_TEXT)
        private readonly textfieldExampleText: TuiTextfieldExampleTextDirective,
        @Inject(TUI_DATE_FORMAT) readonly dateFormat: TuiDateMode,
        @Inject(TUI_DATE_SEPARATOR) readonly dateSeparator: string,
        @Inject(TUI_DATE_TEXTS)
        readonly dateTexts$: Observable<Record<TuiDateMode, string>>,
        @Optional()
        @Inject(TUI_DATE_RANGE_VALUE_TRANSFORMER)
        readonly valueTransformer: TuiControlValueTransformer<TuiDayRange | null> | null,
    ) {
        super(control, changeDetectorRef, valueTransformer);
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield ? this.textfield.nativeFocusableElement : null;
    }

    get focused(): boolean {
        return !!this.textfield && this.textfield.focused;
    }

    get computedMobile(): boolean {
        return this.isMobile && !!this.mobileCalendar;
    }

    get calendarIcon(): string {
        return sizeBigger(this.textfieldSize.size)
            ? 'tuiIconCalendarLarge'
            : 'tuiIconCalendar';
    }

    get canOpen(): boolean {
        return this.interactive && !this.computedMobile;
    }

    get computedExampleText(): string {
        return this.items.length ? this.textfieldExampleText.exampleText : '';
    }

    get computedMask(): TextMaskConfig {
        return (this.activePeriod
            ? EMPTY_MASK
            : this.textMaskOptions) as TuiTextMaskOptions as unknown as TextMaskConfig;
    }

    get activePeriod(): TuiDayRangePeriod | null {
        return (
            this.items.find(item =>
                nullableSame(
                    this.value,
                    item.range,
                    (a, b) =>
                        a.from.daySame(b.from.dayLimit(this.min, this.max)) &&
                        a.to.daySame(b.to.dayLimit(this.min, this.max)),
                ),
            ) || null
        );
    }

    get computedValue(): string {
        const {value, nativeValue, activePeriod} = this;

        if (activePeriod) {
            return String(activePeriod);
        }

        return value
            ? value.getFormattedDayRange(this.dateFormat, this.dateSeparator)
            : nativeValue;
    }

    get innerPseudoFocused(): boolean | null {
        if (this.pseudoFocused === false) {
            return false;
        }

        if (this.open || this.computedFocused) {
            return true;
        }

        return null;
    }

    get nativeValue(): string {
        return this.nativeFocusableElement ? this.nativeFocusableElement.value : '';
    }

    set nativeValue(value: string) {
        if (!this.nativeFocusableElement) {
            return;
        }

        this.nativeFocusableElement.value = value;
    }

    @HostListener('click')
    onClick() {
        if (!this.isMobile) {
            this.toggle();
        }
    }

    getComputedRangeFiller(dateFiller: string): string {
        return this.activePeriod ? '' : this.getDateRangeFiller(dateFiller);
    }

    onMobileClick() {
        if (!this.mobileCalendar) {
            this.toggle();

            return;
        }

        this.dialogService
            .open<TuiDayRange>(
                new PolymorpheusComponent(this.mobileCalendar, this.injector),
                {
                    size: 'fullscreen',
                    closeable: false,
                    data: {
                        single: false,
                        min: this.maxLengthMapper(
                            this.min,
                            this.value,
                            this.maxLength,
                            true,
                        ),
                        max: this.maxLengthMapper(
                            this.max,
                            this.value,
                            this.maxLength,
                            false,
                        ),
                        disabledItemHandler: this.disabledItemHandler,
                    },
                },
            )
            .pipe(takeUntil(this.destroy$))
            .subscribe(value => {
                this.updateValue(value);
            });
    }

    onOpenChange(open: boolean) {
        this.open = open;
    }

    onValueChange(value: string) {
        if (this.control) {
            this.control.updateValueAndValidity({emitEvent: false});
        }

        if (!value) {
            this.onOpenChange(true);
        }

        if (value.length !== DATE_RANGE_FILLER_LENGTH) {
            this.updateValue(null);

            return;
        }

        const parsedValue = TuiDayRange.normalizeParse(value, this.dateFormat);

        this.updateValue(
            !this.minLength && !this.maxLength
                ? parsedValue
                : this.clampValue(parsedValue),
        );
    }

    onRangeChange(range: TuiDayRange | null) {
        this.toggle();
        this.focusInput();

        if (!range) {
            this.nativeValue = '';
        }

        if (!nullableSame<TuiDayRange>(this.value, range, (a, b) => a.daySame(b))) {
            this.updateValue(range);
        }
    }

    onItemSelect(item: string | TuiDayRangePeriod) {
        this.toggle();
        this.focusInput();

        if (typeof item !== 'string') {
            this.updateValue(item.range.dayLimit(this.min, this.max));

            return;
        }

        if (this.activePeriod !== null) {
            this.updateValue(null);
            this.nativeValue = '';
        }
    }

    onHovered(hovered: boolean) {
        this.updateHovered(hovered);
    }

    onPressed(pressed: boolean) {
        this.updatePressed(pressed);
    }

    onActiveZone(focused: boolean) {
        this.updateFocused(focused);

        if (
            !focused &&
            !this.itemSelected &&
            (this.nativeValue.length === DATE_FILLER_LENGTH ||
                this.nativeValue.length ===
                    DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length)
        ) {
            this.updateValue(
                TuiDayRange.normalizeParse(this.nativeValue, this.dateFormat),
            );
        }
    }

    writeValue(value: TuiDayRange | null) {
        super.writeValue(value);
        this.nativeValue = value ? this.computedValue : '';
    }

    private get itemSelected(): boolean {
        return this.items.findIndex(item => String(item) === this.nativeValue) !== -1;
    }

    private toggle() {
        this.open = !this.open;
    }

    private focusInput(preventScroll: boolean = false) {
        if (this.nativeFocusableElement) {
            setNativeFocused(this.nativeFocusableElement, true, preventScroll);
        }
    }

    private clampValue(value: TuiDayRange): TuiDayRange {
        const clampedBottom =
            this.minLength && value.from.append(this.minLength).dayAfter(value.to)
                ? new TuiDayRange(
                      value.from,
                      value.from.append(this.minLength).append({day: -1}),
                  )
                : value;

        const availableMax = this.maxLength
            ? clampedBottom.from.append(this.maxLength).append({day: -1})
            : this.max;

        return clampedBottom.to.dayAfter(availableMax)
            ? new TuiDayRange(clampedBottom.from, availableMax)
            : clampedBottom;
    }

    private getDateRangeFiller(dateFiller: string): string {
        return `${dateFiller}${RANGE_SEPARATOR_CHAR}${dateFiller}`;
    }
}
