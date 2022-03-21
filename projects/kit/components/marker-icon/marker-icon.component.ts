import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {tuiDefaultProp, TuiDestroyService} from '@taiga-ui/cdk';
import {
    MODE_PROVIDER,
    TUI_MODE,
    TuiBrightness,
    TuiSizeXL,
    TuiSizeXS,
} from '@taiga-ui/core';
import {TuiMarkerIconModeT} from '@taiga-ui/kit/types';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'tui-marker-icon',
    templateUrl: './marker-icon.template.html',
    styleUrls: ['./marker-icon.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService, MODE_PROVIDER],
})
export class TuiMarkerIconComponent {
    private globalMode: TuiBrightness | null = null;

    @Input()
    @tuiDefaultProp()
    mode: TuiMarkerIconModeT | null = null;

    @Input()
    @HostBinding('attr.data-size')
    @tuiDefaultProp()
    size: TuiSizeXS | TuiSizeXL = 'm';

    @Input()
    @tuiDefaultProp()
    src = '';

    constructor(
        @Inject(TuiDestroyService) destroy$: Observable<unknown>,
        @Inject(TUI_MODE) mode$: Observable<TuiBrightness | null>,
    ) {
        mode$.pipe(takeUntil(destroy$)).subscribe(mode => {
            this.globalMode = mode;
        });
    }

    // TODO: Simplify
    @HostBinding('attr.data-mode')
    get computedMode(): TuiMarkerIconModeT | 'onDark' | null {
        return this.globalMode === 'onDark' && !this.mode ? 'onDark' : this.mode;
    }
}
