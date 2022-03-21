import {Component, Inject, Injector} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {
    TuiNotification,
    TuiNotificationContentContext,
    TuiNotificationsService,
} from '@taiga-ui/core';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {switchMap} from 'rxjs/operators';

import {AlertExampleWithDataComponent} from './examples/4/alert-example-with-data/alert-example-with-data.component';

@Component({
    selector: 'example-tui-notifications',
    templateUrl: './notifications.template.html',
    styleUrls: ['./notifications.style.less'],
    changeDetection,
})
export class ExampleTuiNotificationsComponent {
    readonly method = import('!!raw-loader!./method.md');

    readonly exampleImportModuleComponent = import(
        '!!raw-loader!./examples/import/import-module-component.txt'
    );

    readonly exampleServiceUsage = import(
        '!!raw-loader!./examples/import/service-usage.txt'
    );

    readonly exampleServiceUsageComponent = import(
        '!!raw-loader!./examples/import/service-usage-component.txt'
    );

    readonly exampleCustomAlert = import(
        '!!raw-loader!./examples/import/custom-alert.txt'
    );

    readonly exampleLazyModule = import('!!raw-loader!./examples/import/lazy-module.txt');
    readonly exampleModule = import('!!raw-loader!./examples/import/module.txt');
    readonly exampleOptions = import('!!raw-loader!./examples/import/define-options.txt');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/3/index.ts'),
        HTML: import('!!raw-loader!./examples/3/index.html'),
        'alert-example/alert-example.component.ts': import(
            '!!raw-loader!./examples/3/alert-example/alert-example.component.ts'
        ),
        'alert-example/alert-example.template.html': import(
            '!!raw-loader!./examples/3/alert-example/alert-example.template.html'
        ),
        'alert-example/alert-example.module.ts': import(
            '!!raw-loader!./examples/3/alert-example/alert-example.module.ts'
        ),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/4/index.ts'),
        HTML: import('!!raw-loader!./examples/4/index.html'),
        'alert-example-with-data/alert-example-with-data.component.ts': import(
            '!!raw-loader!./examples/4/alert-example-with-data/alert-example-with-data.component.ts'
        ),
        'alert-example-with-data/alert-example-with-data.template.html': import(
            '!!raw-loader!./examples/4/alert-example-with-data/alert-example-with-data.template.html'
        ),
        'alert-example-with-data/alert-example-with-data.style.less': import(
            '!!raw-loader!./examples/4/alert-example-with-data/alert-example-with-data.style.less'
        ),
        'alert-example-with-data/alert-example-with-data.module.ts': import(
            '!!raw-loader!./examples/4/alert-example-with-data/alert-example-with-data.module'
        ),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/5/index.ts'),
        HTML: import('!!raw-loader!./examples/5/index.html'),
        'custom-label/custom-label.module.ts': import(
            '!!raw-loader!./examples/5/custom-label/custom-label.module.ts'
        ),
        'custom-label/custom-label.component.ts': import(
            '!!raw-loader!./examples/5/custom-label/custom-label.component.ts'
        ),
        'custom-label/custom-label.style.less': import(
            '!!raw-loader!./examples/5/custom-label/custom-label.style.less'
        ),
        'custom-label/custom-label.template.html': import(
            '!!raw-loader!./examples/5/custom-label/custom-label.template.html'
        ),
        'alert-example-with-custom-label/alert-example-with-custom-label.module.ts':
            import(
                '!!raw-loader!./examples/5/alert-example-with-custom-label/alert-example-with-custom-label.module.ts'
            ),
        'alert-example-with-custom-label/alert-example-with-custom-label.component.ts':
            import(
                '!!raw-loader!./examples/5/alert-example-with-custom-label/alert-example-with-custom-label.component.ts'
            ),
        'alert-example-with-custom-label/alert-example-with-custom-label.template.html':
            import(
                '!!raw-loader!./examples/5/alert-example-with-custom-label/alert-example-with-custom-label.template.html'
            ),
    };

    data = 100;

    label = 'Heading';

    readonly statusVariants: ReadonlyArray<TuiNotification> = [
        TuiNotification.Info,
        TuiNotification.Success,
        TuiNotification.Error,
        TuiNotification.Warning,
    ];

    status = this.statusVariants[0];

    readonly contentVariants = ['String', 'Component'];

    content = this.contentVariants[0];

    readonly autoCloseVariants = [true, false, 5000, 1000, 500];

    autoClose = this.autoCloseVariants[0];

    hasCloseButton = true;

    hasIcon = true;

    readonly component: PolymorpheusComponent<
        AlertExampleWithDataComponent,
        TuiNotificationContentContext<number, number>
    >;

    constructor(
        @Inject(TuiNotificationsService)
        private readonly notificationsService: TuiNotificationsService,
        @Inject(Injector) injector: Injector,
    ) {
        this.component = new PolymorpheusComponent(
            AlertExampleWithDataComponent,
            injector,
        );
    }

    get selectedContent(): PolymorpheusContent<
        TuiNotificationContentContext<number, number>
    > {
        return this.content === 'String' ? this.content : this.component;
    }

    showNotification() {
        this.notificationsService
            .show(this.selectedContent, {
                label: this.label,
                data: this.data,
                status: this.status,
                autoClose: this.autoClose,
                hasCloseButton: this.hasCloseButton,
                hasIcon: this.hasIcon,
            })
            .pipe(
                switchMap(response =>
                    this.notificationsService.show(response, {
                        label: 'Notification responded with:',
                    }),
                ),
            )
            .subscribe();
    }
}
