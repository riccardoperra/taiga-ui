import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MutationObserverModule} from '@ng-web-apis/mutation-observer';
import {
    TuiAutofilledModule,
    TuiFocusableModule,
    TuiHoveredModule,
    TuiInputModeModule,
} from '@taiga-ui/cdk';
import {TuiSvgModule} from '@taiga-ui/core/components/svg';
import {TuiTooltipModule} from '@taiga-ui/core/components/tooltip';
import {TuiDescribedByModule} from '@taiga-ui/core/directives/described-by';
import {TuiMaskAccessorModule} from '@taiga-ui/core/directives/mask-accessor';
import {TuiWrapperModule} from '@taiga-ui/core/directives/wrapper';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiPrimitiveTextfieldComponent} from './primitive-textfield.component';
import {TuiPrimitiveTextfieldDirective} from './primitive-textfield.directive';
import {TuiTextfieldComponent} from './textfield/textfield.component';
import {TuiValueDecorationComponent} from './value-decoration/value-decoration.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiMaskAccessorModule,
        TuiFocusableModule,
        TuiHoveredModule,
        TuiInputModeModule,
        PolymorpheusModule,
        TuiWrapperModule,
        TuiSvgModule,
        TuiTooltipModule,
        TuiAutofilledModule,
        TuiDescribedByModule,
        MutationObserverModule,
    ],
    declarations: [
        TuiPrimitiveTextfieldComponent,
        TuiPrimitiveTextfieldDirective,
        TuiTextfieldComponent,
        TuiValueDecorationComponent,
    ],
    exports: [
        TuiPrimitiveTextfieldComponent,
        TuiPrimitiveTextfieldDirective,
        TuiTextfieldComponent,
    ],
})
export class TuiPrimitiveTextfieldModule {}
