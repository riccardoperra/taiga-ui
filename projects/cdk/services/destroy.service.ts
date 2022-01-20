import {Injectable, OnDestroy} from '@angular/core';
import {ReplaySubject} from 'rxjs';

/**
 * Observable abstraction over ngOnDestroy to use with takeUntil
 */
@Injectable()
export class TuiDestroyService extends ReplaySubject<void> implements OnDestroy {
    constructor() {
        super(1);
    }

    ngOnDestroy() {
        this.next();
        this.complete();
    }
}
