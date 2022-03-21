import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    forwardRef,
    HostBinding,
    Inject,
    Input,
    Optional,
    QueryList,
    Self,
    ViewChildren,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiNullableControl,
    ALWAYS_FALSE_HANDLER,
    EMPTY_QUERY,
    isNativeFocusedIn,
    TUI_DEFAULT_IDENTITY_MATCHER,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiBooleanHandler,
    tuiDefaultProp,
    TuiIdentityMatcher,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {TuiOrientationT, TuiSizeL, TuiValueContentContext} from '@taiga-ui/core';
import {TuiRadioLabeledComponent} from '@taiga-ui/kit/components/radio-labeled';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'tui-radio-list',
    templateUrl: './radio-list.template.html',
    styleUrls: ['./radio-list.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiRadioListComponent),
        },
    ],
})
export class TuiRadioListComponent<T> extends AbstractTuiNullableControl<T> {
    @ViewChildren(TuiRadioLabeledComponent)
    private readonly radioButtons: QueryList<TuiRadioLabeledComponent<{}>> = EMPTY_QUERY;

    @Input()
    @tuiDefaultProp()
    items: ReadonlyArray<T> = [];

    @Input()
    @HostBinding('attr.data-size')
    @tuiDefaultProp()
    size: TuiSizeL = 'm';

    @Input()
    @tuiDefaultProp()
    identityMatcher: TuiIdentityMatcher<T> = TUI_DEFAULT_IDENTITY_MATCHER;

    @Input()
    @HostBinding('attr.data-tui-host-orientation')
    @tuiDefaultProp()
    orientation: TuiOrientationT = 'vertical';

    @Input()
    @tuiDefaultProp()
    disabledItemHandler: TuiBooleanHandler<T> = ALWAYS_FALSE_HANDLER;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    ) {
        super(control, changeDetectorRef);
    }

    // @bad TODO: Remove & { index: number }
    @Input()
    @tuiDefaultProp()
    itemContent: PolymorpheusContent<TuiValueContentContext<T> & {index: number}> = ({
        $implicit,
    }) => String($implicit);

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        const focusableRadioButton = this.radioButtons.find(
            radioButton => radioButton.nativeFocusableElement !== null,
        );

        return focusableRadioButton ? focusableRadioButton.nativeFocusableElement : null;
    }

    get focused(): boolean {
        return isNativeFocusedIn(this.elementRef.nativeElement);
    }

    computeId(index: number): string {
        return `${this.id}-${index}`;
    }

    itemIsDisabled(item: T): boolean {
        return this.disabledItemHandler(item);
    }

    getContentContext(
        item: T,
        index: number,
        active: boolean,
    ): TuiValueContentContext<T> & {index: number} {
        return {$implicit: item, index, active};
    }

    onModelChange(value: T) {
        this.updateValue(value);
    }

    itemIsActive(item: T): boolean {
        return this.value === null
            ? item === null
            : this.identityMatcher(this.value, item);
    }
}
