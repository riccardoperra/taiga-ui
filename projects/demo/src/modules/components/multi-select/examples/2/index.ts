import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {Observable, of, Subject} from 'rxjs';
import {delay, filter, startWith, switchMap} from 'rxjs/operators';

import {default as avatar} from '!!file-loader!../../../../../assets/images/avatar.jpg';

class User {
    constructor(
        readonly firstName: string,
        readonly lastName: string,
        readonly avatarUrl: string | null = null,
    ) {}

    toString(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const databaseMockData: ReadonlyArray<User> = [
    new User('Roman', 'Sedov', 'http://marsibarsi.me/images/1x1small.jpg'),
    new User('Alex', 'Inkin', avatar),
    new User('Dmitriy', 'Demenskiy'),
    new User('Evgeniy', 'Mamaev'),
    new User('Ivan', 'Ishmametiev'),
    new User('Igor', 'Katsuba'),
    new User('Yulia', 'Tsareva'),
];

@Component({
    selector: 'tui-multi-select-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiMultiSelectExample2 {
    readonly search$ = new Subject<string>();

    readonly items$: Observable<ReadonlyArray<User> | null> = this.search$.pipe(
        filter(value => value !== null),
        switchMap(search =>
            this.serverRequest(search).pipe(startWith<ReadonlyArray<User> | null>(null)),
        ),
        startWith(databaseMockData),
    );

    readonly testValue = new FormControl([databaseMockData[0]]);

    onSearchChange(searchQuery: string) {
        this.search$.next(searchQuery);
    }

    /**
     * Server request emulation
     */
    private serverRequest(searchQuery: string): Observable<ReadonlyArray<User>> {
        const result = databaseMockData.filter(user =>
            user.toString().toLowerCase().includes(searchQuery.toLowerCase()),
        );

        return of(result).pipe(delay(Math.random() * 1000 + 500));
    }
}
