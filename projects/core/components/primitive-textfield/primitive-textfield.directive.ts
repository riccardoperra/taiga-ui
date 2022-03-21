import {Directive, forwardRef, Inject} from '@angular/core';
import {AbstractTuiControl} from '@taiga-ui/cdk';
import {TuiAbstractTextfieldHost} from '@taiga-ui/core/abstract';
import {TUI_TEXTFIELD_HOST} from '@taiga-ui/core/tokens';

import {TuiPrimitiveTextfieldComponent} from './primitive-textfield.component';

@Directive({
    selector: 'tui-primitive-textfield',
    providers: [
        {
            provide: TUI_TEXTFIELD_HOST,
            useExisting: forwardRef(() => TuiPrimitiveTextfieldDirective),
        },
    ],
})
export class TuiPrimitiveTextfieldDirective extends TuiAbstractTextfieldHost<any> {
    constructor(
        @Inject(TuiPrimitiveTextfieldComponent)
        private readonly textfield: TuiPrimitiveTextfieldComponent,
    ) {
        /**
         * TuiPrimitiveTextfieldComponent satisfies all required parts of
         * AbstractTuiControl interface. A new interface is not introduced
         * so AbstractTuiControl is automatically injected for all other controls.
         */
        super(textfield as any as AbstractTuiControl<unknown>);
    }

    get readOnly(): boolean {
        return this.textfield.readOnly || !this.textfield.editable;
    }

    onValueChange(value: string) {
        this.textfield.onModelChange(value);
    }
}
