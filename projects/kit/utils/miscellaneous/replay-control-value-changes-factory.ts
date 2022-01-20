import {NgControl} from '@angular/forms';
import {
    TuiControlValueTransformer,
    TuiDay,
    TuiDayRange,
    tuiReplayedValueChangesFrom,
    TuiTime,
} from '@taiga-ui/cdk';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

/**
 * @internal
 * TODO: rename function in 3.0. The name should be shorter and start with lowercase letter.
 */
export function TuiReplayControlValueChangesFactory<
    T extends TuiDayRange | TuiDay | [TuiDay | null, TuiTime | null],
>(
    control: NgControl | null,
    valueTransformer?: TuiControlValueTransformer<T> | null,
): Observable<T | null> | null {
    return control
        ? tuiReplayedValueChangesFrom(control).pipe(
              map(value =>
                  valueTransformer
                      ? valueTransformer.fromControlValue(value)
                      : (value as T),
              ),
          )
        : of(null);
}
