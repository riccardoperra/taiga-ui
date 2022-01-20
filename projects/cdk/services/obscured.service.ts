import {ElementRef, Inject, Injectable, NgZone, Self} from '@angular/core';
import {ANIMATION_FRAME, WINDOW} from '@ng-web-apis/common';
import {POLLING_TIME} from '@taiga-ui/cdk/constants';
import {tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {getElementObscurers} from '@taiga-ui/cdk/utils/dom';
import {fromEvent, merge, Observable} from 'rxjs';
import {
    delay,
    distinctUntilChanged,
    map,
    startWith,
    takeUntil,
    throttleTime,
} from 'rxjs/operators';

import {TuiDestroyService} from './destroy.service';
import {TuiParentsScrollService} from './parents-scroll.service';

// @bad TODO: Consider Intersection Observer with fallback to current implementation
/**
 * Service that monitors element visibility by subscribing to scrolls
 * and polling with set interval, returns either null or an array
 * of elements that overlap given element edges
 */
// Ambient type cannot be used without dynamic https://github.com/angular/angular/issues/23395
// @dynamic
@Injectable()
export class TuiObscuredService extends Observable<null | ReadonlyArray<Element>> {
    private readonly obscured$: Observable<null | ReadonlyArray<Element>>;

    constructor(
        @Inject(TuiParentsScrollService)
        @Self()
        parentsScroll$: TuiParentsScrollService,
        @Inject(ElementRef) {nativeElement}: ElementRef<Element>,
        @Inject(NgZone) ngZone: NgZone,
        @Inject(WINDOW) windowRef: Window,
        @Inject(TuiDestroyService) destroy$: Observable<void>,
        @Inject(ANIMATION_FRAME) animationFrame$: Observable<number>,
    ) {
        super(subscriber => this.obscured$.subscribe(subscriber));

        this.obscured$ = merge(
            // delay is added so it will not interfere with other listeners
            merge(parentsScroll$, fromEvent(windowRef, 'resize')).pipe(delay(0)),
            animationFrame$.pipe(throttleTime(POLLING_TIME)),
        ).pipe(
            map(() => getElementObscurers(nativeElement)),
            startWith(null),
            distinctUntilChanged(),
            tuiZoneOptimized(ngZone),
            takeUntil(destroy$),
        );
    }
}
