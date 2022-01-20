import {ElementRef, Optional, Provider} from '@angular/core';
import {TuiModeDirective} from '@taiga-ui/core/directives/mode';
import {TUI_MODE} from '@taiga-ui/core/tokens';
import {TuiBrightness} from '@taiga-ui/core/types';
import {EMPTY, Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export function modeFactory(
    mode: TuiModeDirective | null,
    {nativeElement}: ElementRef,
): Observable<TuiBrightness | null> {
    const mode$ = mode
        ? mode.change$.pipe(
              startWith(null),
              map(() => mode.mode),
          )
        : EMPTY;

    nativeElement['$.data-mode.attr'] = mode$;

    return mode$;
}

export const MODE_PROVIDER: Provider = {
    provide: TUI_MODE,
    deps: [[new Optional(), TuiModeDirective], ElementRef],
    useFactory: modeFactory,
};
