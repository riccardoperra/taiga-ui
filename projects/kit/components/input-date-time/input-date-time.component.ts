import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    forwardRef,
    HostListener,
    Inject,
    Input,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    ALWAYS_FALSE_HANDLER,
    changeDateSeparator,
    clamp,
    DATE_FILLER_LENGTH,
    nullableSame,
    TUI_DATE_FORMAT,
    TUI_DATE_SEPARATOR,
    TUI_FIRST_DAY,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TUI_LAST_DAY,
    TuiBooleanHandler,
    TuiControlValueTransformer,
    TuiDateMode,
    TuiDay,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiMonth,
    tuiPure,
    TuiTime,
    TuiTimeMode,
} from '@taiga-ui/cdk';
import {
    sizeBigger,
    TUI_TEXTFIELD_SIZE,
    TuiPrimitiveTextfieldComponent,
    TuiTextfieldSizeDirective,
    TuiTextMaskOptions,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {DATE_TIME_SEPARATOR} from '@taiga-ui/kit/constants';
import {LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';
import {
    TUI_CALENDAR_DATA_STREAM,
    TUI_DATE_TEXTS,
    TUI_DATE_TIME_VALUE_TRANSFORMER,
    TUI_TIME_TEXTS,
} from '@taiga-ui/kit/tokens';
import {
    tuiCreateAutoCorrectedDateTimePipe,
    tuiCreateDateMask,
    tuiCreateTimeMask,
} from '@taiga-ui/kit/utils/mask';
import {TuiReplayControlValueChangesFactory} from '@taiga-ui/kit/utils/miscellaneous';
import {combineLatest, Observable} from 'rxjs';
import {map, pluck} from 'rxjs/operators';

// TODO: remove in ivy compilation
export const TIME_STREAM_FACTORY = (
    control: NgControl | null,
    valueTransformer: TuiControlValueTransformer<[TuiDay | null, TuiTime | null]>,
) => TuiReplayControlValueChangesFactory(control, valueTransformer);

// @dynamic
@Component({
    selector: 'tui-input-date-time',
    templateUrl: './input-date-time.template.html',
    styleUrls: ['./input-date-time.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiInputDateTimeComponent),
        },
        {
            provide: TUI_CALENDAR_DATA_STREAM,
            deps: [
                [new Optional(), new Self(), NgControl],
                [new Optional(), forwardRef(() => TUI_DATE_TIME_VALUE_TRANSFORMER)],
            ],
            useFactory: TIME_STREAM_FACTORY,
        },
        LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER,
    ],
})
export class TuiInputDateTimeComponent
    extends AbstractTuiControl<[TuiDay | null, TuiTime | null]>
    implements
        TuiWithOptionalMinMax<TuiDay | [TuiDay, TuiTime]>,
        TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private month: TuiMonth | null = null;

    @Input()
    @tuiDefaultProp()
    min = TUI_FIRST_DAY;

    @Input()
    @tuiDefaultProp()
    max = TUI_LAST_DAY;

    @Input()
    @tuiDefaultProp()
    disabledItemHandler: TuiBooleanHandler<TuiDay> = ALWAYS_FALSE_HANDLER;

    @Input()
    @tuiDefaultProp()
    defaultActiveYearMonth = TuiMonth.currentLocal();

    @Input()
    @tuiDefaultProp()
    timeMode: TuiTimeMode = 'HH:MM';

    open = false;
    readonly filler$ = combineLatest([
        this.dateTexts$.pipe(
            map(dateTexts =>
                changeDateSeparator(dateTexts[this.dateFormat], this.dateSeparator),
            ),
        ),
        this.timeTexts$.pipe(pluck(this.timeMode)),
    ]).pipe(map(fillers => this.getDateTimeString(...fillers)));

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_TEXTFIELD_SIZE)
        private readonly textfieldSize: TuiTextfieldSizeDirective,
        @Inject(TUI_DATE_FORMAT) readonly dateFormat: TuiDateMode,
        @Inject(TUI_DATE_SEPARATOR) readonly dateSeparator: string,
        @Inject(TUI_TIME_TEXTS)
        readonly timeTexts$: Observable<Record<TuiTimeMode, string>>,
        @Inject(TUI_DATE_TEXTS)
        readonly dateTexts$: Observable<Record<TuiDateMode, string>>,
        @Optional()
        @Inject(TUI_DATE_TIME_VALUE_TRANSFORMER)
        readonly valueTransformer: TuiControlValueTransformer<
            [TuiDay | null, TuiTime | null]
        > | null,
    ) {
        super(control, changeDetectorRef, valueTransformer);
    }

    get fillerLength(): number {
        return DATE_FILLER_LENGTH + DATE_TIME_SEPARATOR.length + this.timeMode.length;
    }

    get textMaskOptions(): TuiTextMaskOptions {
        return this.calculateMask(
            this.value[0],
            this.calendarMinDay,
            this.calendarMaxDay,
            this.timeMode,
            this.dateFormat,
            this.dateSeparator,
        );
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

    get computedValue(): string {
        const {value, nativeValue, timeMode} = this;
        const [date, time] = value;
        const hasTimeInputChars = nativeValue.length > DATE_FILLER_LENGTH;

        if (!date || (!time && hasTimeInputChars)) {
            return nativeValue;
        }

        return this.getDateTimeString(date, time, timeMode);
    }

    get calendarValue(): TuiDay | null {
        return this.value[0];
    }

    get calendarMinDay(): TuiDay {
        return Array.isArray(this.min) ? this.min[0] : this.min;
    }

    get calendarMaxDay(): TuiDay {
        return Array.isArray(this.max) ? this.max[0] : this.max;
    }

    get computedActiveYearMonth(): TuiMonth {
        return this.month || this.value[0] || this.defaultActiveYearMonth;
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

    get canOpen(): boolean {
        return !this.computedDisabled && !this.readOnly;
    }

    @HostListener('click')
    onClick() {
        this.open = !this.open;
    }

    onValueChange(value: string) {
        if (!value) {
            this.onOpenChange(true);
        }

        if (value.length < DATE_FILLER_LENGTH) {
            this.updateValue([null, null]);

            return;
        }

        const [date, time] = value.split(DATE_TIME_SEPARATOR);

        const parsedDate = TuiDay.normalizeParse(date, this.dateFormat);
        const parsedTime =
            time && time.length === this.timeMode.length
                ? this.clampTime(TuiTime.fromString(time), parsedDate)
                : null;

        this.open = false;
        this.updateValue([parsedDate, parsedTime]);
    }

    onDayClick(day: TuiDay) {
        const modifiedTime = this.value[1] && this.clampTime(this.value[1], day);

        this.updateValue([day, modifiedTime]);
        this.updateNativeValue(day);
        this.open = false;
    }

    onHovered(hovered: boolean) {
        this.updateHovered(hovered);
    }

    onMonthChange(month: TuiMonth) {
        this.month = month;
    }

    onOpenChange(open: boolean) {
        this.open = open;
    }

    onFocused(focused: boolean) {
        this.updateFocused(focused);

        if (
            focused ||
            this.value[0] === null ||
            this.value[1] !== null ||
            this.nativeValue.length <= this.fillerLength + DATE_TIME_SEPARATOR.length ||
            this.timeMode === 'HH:MM'
        ) {
            return;
        }

        const [, time] = this.nativeValue.split(DATE_TIME_SEPARATOR);

        if (!time) {
            return;
        }

        const parsedTime = TuiTime.fromString(time);

        this.updateValue([this.value[0], parsedTime]);

        setTimeout(() => {
            if (this.nativeValue.endsWith('.') || this.nativeValue.endsWith(':')) {
                this.nativeValue = this.nativeValue.slice(0, -1);
            }
        });
    }

    setDisabledState() {
        super.setDisabledState();
        this.open = false;
    }

    writeValue(value: [TuiDay | null, TuiTime | null] | null) {
        super.writeValue(value);

        this.nativeValue = value && (value[0] || value[1]) ? this.computedValue : '';
    }

    protected getFallbackValue(): [TuiDay | null, TuiTime | null] {
        return [null, null];
    }

    protected valueIdenticalComparator(
        oldValue: [TuiDay | null, TuiTime | null],
        newValue: [TuiDay | null, TuiTime | null],
    ): boolean {
        return (
            nullableSame(oldValue[0], newValue[0], (a, b) => a.daySame(b)) &&
            nullableSame(
                oldValue[1],
                newValue[1],
                (a, b) => a.toString() === b.toString(),
            )
        );
    }

    @tuiPure
    private calculateMask(
        day: TuiDay | null,
        min: TuiDay,
        max: TuiDay,
        timeMode: TuiTimeMode,
        dateFormat: TuiDateMode,
        dateSeparator: string,
    ): TuiTextMaskOptions {
        return {
            mask: [
                ...tuiCreateDateMask(dateFormat, dateSeparator),
                ',',
                ' ',
                ...tuiCreateTimeMask(timeMode),
            ],
            pipe: tuiCreateAutoCorrectedDateTimePipe({
                value: day,
                min,
                max,
                dateFormat,
                dateSeparator,
                timeMode,
            }),
            guide: false,
        };
    }

    @tuiPure
    private getDateTimeString(
        date: TuiDay | string,
        time: TuiTime | string | null,
        timeMode: TuiTimeMode = 'HH:MM',
    ): string {
        const dateString =
            date instanceof TuiDay
                ? date.toString(this.dateFormat, this.dateSeparator)
                : date;
        const timeString = time instanceof TuiTime ? time.toString(timeMode) : time || '';

        return `${dateString}${DATE_TIME_SEPARATOR}${timeString}`;
    }

    private updateNativeValue(day: TuiDay) {
        const time = this.nativeValue.split(DATE_TIME_SEPARATOR)[1] || '';

        this.nativeValue = this.getDateTimeString(day, time);
    }

    private clampTime(time: TuiTime, day: TuiDay): TuiTime {
        const ms = time.toAbsoluteMilliseconds();
        const min =
            Array.isArray(this.min) && day.daySame(this.calendarMinDay)
                ? this.min[1].toAbsoluteMilliseconds()
                : -Infinity;
        const max =
            Array.isArray(this.max) && day.daySame(this.calendarMaxDay)
                ? this.max[1].toAbsoluteMilliseconds()
                : Infinity;

        return TuiTime.fromAbsoluteMilliseconds(clamp(ms, min, max));
    }
}
