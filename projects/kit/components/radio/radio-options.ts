import {InjectionToken, ValueProvider} from '@angular/core';
import {TuiAppearance} from '@taiga-ui/core/enums';
import {TuiSizeL} from '@taiga-ui/core/types';

export interface TuiRadioOptions {
    readonly size: TuiSizeL;
    readonly appearances: Readonly<{
        unchecked: string;
        checked: string;
    }>;
}

/**
 * @deprecated: use TuiRadioOptions instead
 * todo: remove in 3.0
 */
export type RadioOptions = TuiRadioOptions;

/** Default values for the checkbox options. */
export const TUI_RADIO_DEFAULT_OPTIONS: TuiRadioOptions = {
    size: 'm',
    appearances: {
        unchecked: TuiAppearance.Outline,
        checked: TuiAppearance.Primary,
    },
};

export const TUI_RADIO_OPTIONS = new InjectionToken<TuiRadioOptions>(
    'Default parameters for radio component',
    {
        factory: () => TUI_RADIO_DEFAULT_OPTIONS,
    },
);

export const tuiRadioOptionsProvider: (
    options: Partial<TuiRadioOptions>,
) => ValueProvider = (options: Partial<TuiRadioOptions>) => ({
    provide: TUI_RADIO_OPTIONS,
    useValue: {...TUI_RADIO_DEFAULT_OPTIONS, ...options},
});
