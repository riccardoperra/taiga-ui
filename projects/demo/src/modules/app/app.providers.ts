import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {inject} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {WINDOW} from '@ng-web-apis/common';
import {
    TUI_DOC_CODE_EDITOR,
    TUI_DOC_DEFAULT_TABS,
    TUI_DOC_EXAMPLE_CONTENT_PROCESSOR,
    TUI_DOC_LOGO,
    TUI_DOC_PAGES,
    TUI_DOC_SEE_ALSO,
    TUI_DOC_SOURCE_CODE,
    TUI_DOC_TITLE,
    TuiDocSourceCodePathOptions,
} from '@taiga-ui/addon-doc';
import {isInsideIframe, TUI_DIALOG_CLOSES_ON_BACK, TUI_IS_CYPRESS} from '@taiga-ui/cdk';
import {TUI_ANIMATIONS_DURATION, TUI_SANITIZER} from '@taiga-ui/core';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import {HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import {of} from 'rxjs';

import {PROMPT_PROVIDER} from '../customization/dialogs/examples/1/prompt/prompt.service';
import {SEE_ALSO_GROUPS} from './app.const';
import {LOGO_CONTENT} from './logo/logo.component';
import {pages} from './pages';
import {StackblitzService} from './stackblitz/stackblitz.service';
import {exampleContentProcessor} from './utils';

export const DEFAULT_TABS = [
    $localize`Description and examples`,
    $localize`API`,
    $localize`Setup`,
    $localize`How to use`,
];
const TITLE_PREFIX = 'Taiga UI: ';

export const HIGHLIGHT_OPTIONS_VALUE = {
    coreLibraryLoader: () => import('highlight.js/lib/core'),
    lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
    languages: {
        typescript: () => import('highlight.js/lib/languages/typescript'),
        less: () => import('highlight.js/lib/languages/less'),
        xml: () => import('highlight.js/lib/languages/xml'),
    },
};

export const APP_PROVIDERS = [
    Title,
    PROMPT_PROVIDER,
    {
        provide: HIGHLIGHT_OPTIONS,
        useValue: HIGHLIGHT_OPTIONS_VALUE,
    },
    {
        provide: TUI_SANITIZER,
        useClass: NgDompurifySanitizer,
    },
    {
        provide: TUI_DOC_SOURCE_CODE,
        useValue: (context: TuiDocSourceCodePathOptions) => {
            const link = 'https://github.com/tinkoff/taiga-ui/tree/main/projects';

            if (!context.package) {
                return null;
            }

            if (context.type) {
                return `${link}/${context.package.toLowerCase()}/${context.type.toLowerCase()}/${(
                    context.header[0].toLowerCase() + context.header.slice(1)
                ).replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}`;
            }

            return `${link}/${context.path}`;
        },
    },
    {
        provide: LocationStrategy,
        useClass: PathLocationStrategy,
    },
    {
        provide: TUI_DOC_TITLE,
        useValue: TITLE_PREFIX,
    },
    {
        provide: TUI_DOC_PAGES,
        useValue: pages,
    },
    {
        provide: TUI_DOC_SEE_ALSO,
        useValue: SEE_ALSO_GROUPS,
    },
    {
        provide: TUI_DOC_DEFAULT_TABS,
        useValue: DEFAULT_TABS,
    },
    {
        provide: TUI_DOC_LOGO,
        useValue: LOGO_CONTENT,
    },
    {
        provide: TUI_DOC_CODE_EDITOR,
        useClass: StackblitzService,
    },
    {
        provide: TUI_DOC_EXAMPLE_CONTENT_PROCESSOR,
        useValue: exampleContentProcessor,
    },
    {
        provide: TUI_ANIMATIONS_DURATION,
        useFactory: () => (inject(TUI_IS_CYPRESS) ? 0 : 300),
    },
    {
        provide: TUI_DIALOG_CLOSES_ON_BACK,
        useFactory: () => of(!isInsideIframe(inject(WINDOW))), // for cypress tests
    },
];
