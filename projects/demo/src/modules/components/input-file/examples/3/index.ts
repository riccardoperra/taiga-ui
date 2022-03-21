import {ChangeDetectorRef, Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDestroyService, watch} from '@taiga-ui/cdk';
import {TuiNotificationsService} from '@taiga-ui/core';
import {TuiFileLike} from '@taiga-ui/kit';
import {combineLatest, Observable, Subject, timer} from 'rxjs';
import {mapTo, startWith, switchMap, takeUntil} from 'rxjs/operators';

class RejectedFile {
    constructor(readonly file: TuiFileLike, readonly reason: string) {}
}

function isRejectedFile(file: any): file is RejectedFile {
    return file instanceof RejectedFile;
}

function getRemoved<T>(oldArray: ReadonlyArray<T>, newArray: ReadonlyArray<T>): T | null {
    const filtered = oldArray.filter(item => !newArray.includes(item));

    return filtered.length === 1 ? filtered[0] : null;
}

function isNarrowed<T>(oldArray: ReadonlyArray<T>, newArray: ReadonlyArray<T>): boolean {
    return newArray.every(item => oldArray.includes(item));
}

function convertRejected({file, reason}: RejectedFile): TuiFileLike {
    return {
        name: file.name,
        size: file.size,
        type: file.type,
        content: reason,
    };
}

@Component({
    selector: 'tui-input-file-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    providers: [TuiDestroyService],
    changeDetection,
    encapsulation,
})
export class TuiInputFileExample3 {
    private readonly files$ = new Subject<ReadonlyArray<TuiFileLike>>();

    files: ReadonlyArray<TuiFileLike> = [
        {
            name: 'Loading file.txt',
        },
        {
            name: 'A file with a very very long title to check that it can be cut correctly.txt',
            src: 'https://tools.ietf.org/html/rfc675',
        },
    ];

    loadingFiles: ReadonlyArray<TuiFileLike> = [this.files[0]];
    rejectedFiles: ReadonlyArray<TuiFileLike> = [
        {
            name: 'File with an error.txt',
            content: 'Something went wrong this time',
        },
    ];

    constructor(
        @Inject(TuiDestroyService) destroy$: TuiDestroyService,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TuiNotificationsService)
        private readonly notificationsService: TuiNotificationsService,
    ) {
        this.files$
            .pipe(
                takeUntil(destroy$),
                switchMap(files =>
                    combineLatest(
                        files.map(file => this.serverRequest(file).pipe(startWith(file))),
                    ),
                ),
                watch(changeDetectorRef),
            )
            .subscribe(response => {
                this.processResponse(response);
            });
    }

    onModelChange(files: ReadonlyArray<TuiFileLike>) {
        this.processNotification(files);

        if (isNarrowed(this.files, files)) {
            this.files = files;
            this.loadingFiles = this.loadingFiles.filter(file => files.includes(file));

            return;
        }

        this.files = files;
        this.loadingFiles = this.files;
        this.files$.next(this.files);
    }

    private processNotification(files: ReadonlyArray<TuiFileLike>) {
        const removed = getRemoved(this.files, files);

        if (removed) {
            this.notificationsService.show(`"${removed.name}" was removed`).subscribe();
        }
    }

    private processResponse(files: ReadonlyArray<RejectedFile | TuiFileLike | null>) {
        this.loadingFiles = this.loadingFiles.filter(file => files.includes(file));

        const newRejectedFiles = files
            .filter(isRejectedFile)
            .filter(({file}) => this.files.includes(file));

        if (newRejectedFiles.length === 0) {
            return;
        }

        this.rejectedFiles = [
            ...this.rejectedFiles,
            ...newRejectedFiles.map(convertRejected),
        ];
        this.files = this.files.filter(file =>
            newRejectedFiles.every(rejectedFile => rejectedFile.file !== file),
        );
    }

    private serverRequest(file: TuiFileLike): Observable<RejectedFile | File | null> {
        const delay = Math.round(Math.random() * 5000 + 500);
        const result =
            delay % 2
                ? null
                : new RejectedFile(file, 'Server responded for odd number of time');

        return timer(delay).pipe(mapTo(result));
    }
}
