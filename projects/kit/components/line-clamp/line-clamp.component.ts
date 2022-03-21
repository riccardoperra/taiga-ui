import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    Input,
    NgZone,
    Renderer2,
    ViewChild,
} from '@angular/core';
import {isCurrentTarget, tuiDefaultProp, tuiPure, typedFromEvent} from '@taiga-ui/cdk';
import {PolymorpheusContent, PolymorpheusOutletComponent} from '@tinkoff/ng-polymorpheus';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {filter, mapTo, pairwise, startWith, switchMap} from 'rxjs/operators';

@Component({
    selector: 'tui-line-clamp',
    templateUrl: './line-clamp.template.html',
    styleUrls: ['./line-clamp.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiLineClampComponent implements AfterViewInit {
    @ViewChild(PolymorpheusOutletComponent, {read: ElementRef})
    private readonly outlet?: ElementRef<HTMLElement>;

    private readonly linesLimit$ = new BehaviorSubject(1);
    private initialized = false;

    @Input()
    @tuiDefaultProp()
    set linesLimit(linesLimit: number) {
        this.linesLimit$.next(linesLimit);
    }

    @Input()
    @tuiDefaultProp()
    lineHeight = 24;

    @Input()
    @tuiDefaultProp()
    content: PolymorpheusContent = '';

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(Renderer2) private readonly renderer: Renderer2,
        @Inject(ChangeDetectorRef) private readonly cd: ChangeDetectorRef,
        @Inject(NgZone) private readonly ngZone: NgZone,
    ) {
        this.skipInitialTransition();
    }

    @tuiPure
    get lineClamp$(): Observable<number> {
        return this.linesLimit$.pipe(
            startWith(1),
            pairwise(),
            switchMap(([prev, next]) =>
                next >= prev
                    ? of(next)
                    : typedFromEvent(this.elementRef.nativeElement, 'transitionend').pipe(
                          filter(isCurrentTarget),
                          mapTo(next),
                      ),
            ),
        );
    }

    get overflown(): boolean {
        if (!this.outlet) {
            return false;
        }

        const {scrollHeight, scrollWidth} = this.outlet.nativeElement;
        const {clientHeight, clientWidth} = this.elementRef.nativeElement;

        // 4px buffer for IE/Edge incorrectly rounding scrollHeight
        return scrollHeight - clientHeight > 4 || scrollWidth - clientWidth > 0;
    }

    get computedContent(): PolymorpheusContent {
        return this.overflown ? this.content : '';
    }

    get oneLine(): boolean {
        return this.linesLimit$.value === 1;
    }

    @HostBinding('style.maxHeight.px')
    get maxHeight(): number | null {
        return this.initialized ? this.lineHeight * this.linesLimit$.value : null;
    }

    @HostBinding('style.height.px')
    get height(): number | null {
        return !this.outlet ? 0 : this.outlet.nativeElement.scrollHeight + 4 || null;
    }

    updateView() {
        this.cd.detectChanges();
    }

    ngAfterViewInit() {
        this.initialized = true;
    }

    private skipInitialTransition() {
        this.ngZone.runOutsideAngular(() => {
            setTimeout(() => {
                this.renderer.addClass(this.elementRef.nativeElement, '_initialized');
                this.cd.detectChanges();
            });
        });
    }
}
