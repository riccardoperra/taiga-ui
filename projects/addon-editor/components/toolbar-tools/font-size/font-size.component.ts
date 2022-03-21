import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import {TuiEditorFontOption} from '@taiga-ui/addon-editor/interfaces';
import {
    TUI_EDITOR_FONT_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
} from '@taiga-ui/addon-editor/tokens';
import {LanguageEditor} from '@taiga-ui/i18n';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'tui-font-size',
    templateUrl: './font-size.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiFontSizeComponent {
    readonly fontsOptions$: Observable<ReadonlyArray<Partial<TuiEditorFontOption>>> =
        this.fontOptionsTexts$.pipe(
            map(texts => [
                {
                    px: 15,
                    name: texts.normal,
                },
                {
                    px: 24,
                    family: 'var(--tui-font-heading)',
                    name: texts.subtitle,
                    headingLevel: 2,
                },
                {
                    px: 30,
                    family: 'var(--tui-font-heading)',
                    name: texts.title,
                    headingLevel: 1,
                },
            ]),
        );

    readonly fontText$ = this.texts$.pipe(map(texts => texts.font));

    constructor(
        @Inject(TuiTiptapEditorService) readonly editor: TuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<LanguageEditor['toolbarTools']>,
        @Inject(TUI_EDITOR_FONT_OPTIONS)
        private readonly fontOptionsTexts$: Observable<
            LanguageEditor['editorFontOptions']
        >,
    ) {}

    onClick({headingLevel}: Partial<TuiEditorFontOption>) {
        if (headingLevel) {
            this.editor.setHeading(headingLevel);
        } else {
            this.editor.setParagraph();
        }
    }
}
