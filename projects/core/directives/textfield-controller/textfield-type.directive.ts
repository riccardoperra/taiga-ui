import {Directive, forwardRef, InjectionToken, Input} from '@angular/core';
import {TuiController, TuiInputTypeT} from '@taiga-ui/cdk';

export const TUI_TEXTFIELD_TYPE = new InjectionToken<TuiTextfieldTypeDirective>(
    'tuiTextfieldType',
    {
        factory: typeDirectiveFactory,
    },
);

@Directive({
    selector: '[tuiTextfieldType]',
    providers: [
        {
            provide: TUI_TEXTFIELD_TYPE,
            useExisting: forwardRef(() => TuiTextfieldTypeDirective),
        },
    ],
})
export class TuiTextfieldTypeDirective extends TuiController {
    @Input('tuiTextfieldType')
    type: TuiInputTypeT = 'text';
}

export function typeDirectiveFactory(): TuiTextfieldTypeDirective {
    return new TuiTextfieldTypeDirective();
}
