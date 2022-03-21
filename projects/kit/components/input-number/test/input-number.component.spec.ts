import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {
    TuiDecimalT,
    TuiHintControllerModule,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {configureTestSuite, NativeInputPO, PageObject} from '@taiga-ui/testing';

import {TuiInputNumberComponent} from '../input-number.component';
import {TuiInputNumberModule} from '../input-number.module';

describe('InputNumber', () => {
    @Component({
        template: `
            <ng-container [formGroup]="form">
                <tui-input-number
                    *ngIf="!defaultValues"
                    formControlName="control"
                    [readOnly]="readOnly"
                    [decimal]="decimal"
                    [tuiTextfieldCleaner]="cleaner"
                    [tuiTextfieldSize]="size"
                    [tuiTextfieldExampleText]="exampleText"
                    [tuiHintContent]="hintContent"
                >
                    Enter the amount
                </tui-input-number>
                <tui-input-number
                    *ngIf="defaultValues"
                    formControlName="control"
                ></tui-input-number>
            </ng-container>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputNumberComponent)
        component!: TuiInputNumberComponent;

        control = new FormControl(12345.0);
        form = new FormGroup({
            control: this.control,
        });

        readOnly = false;
        decimal: TuiDecimalT = 'never';
        cleaner = true;
        defaultValues = false;
        size: TuiSizeS | TuiSizeL = 'm';
        hintContent: string | null = 'prompt';
        exampleText = 'placeholder';
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiInputNumberComponent;
    let pageObject: PageObject<TestComponent>;
    let inputPO: NativeInputPO;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule,
                TuiInputNumberModule,
                ReactiveFormsModule,
                TuiTextfieldControllerModule,
                TuiHintControllerModule,
            ],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        component = testComponent.component;

        inputPO = new NativeInputPO(fixture, `tui-primitive-textfield__native-input`);
    });

    describe('Default values:', () => {
        beforeEach(() => {
            testComponent.defaultValues = true;
            fixture.detectChanges();
        });

        it('Zero pennies are not shown', done => {
            testComponent.control.setValue(1234.0);
            fixture.detectChanges();

            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(getNativeInput()!.nativeElement.value).toBe(
                    `1${CHAR_NO_BREAK_SPACE}234`,
                );
                done();
            });
        });

        it('Non-zero pennies are shown', done => {
            testComponent.control.setValue(12.345);
            fixture.detectChanges();

            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(getNativeInput()!.nativeElement.value).toBe('12,34');
                done();
            });
        });
    });

    it(`Non-zero pennies are not shown when decimal = 'never'`, done => {
        testComponent.control.setValue(12.3);
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(getNativeInput()!.nativeElement.value).toBe('12');
            done();
        });
    });

    it('There is no minus sign for negative values with min> = 0', done => {
        testComponent.component.min = 0;
        testComponent.control.setValue(-12345);
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(getNativeInput()!.nativeElement.value).toBe(
                `12${CHAR_NO_BREAK_SPACE}345`,
            );
            done();
        });
    });

    it('No minus sign for non-negative min', done => {
        testComponent.component.min = 10;
        testComponent.control.setValue(-12345);
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(getNativeInput()!.nativeElement!.value).toBe(
                `12${CHAR_NO_BREAK_SPACE}345`,
            );
            done();
        });
    });

    describe('onValueChange | updating form values', () => {
        describe('An incomplete value is passed to the form null', () => {
            it(`Value ''`, () => {
                component.onValueChange('');

                expect(testComponent.control.value).toBe(null);
            });

            it(`Value '-'`, () => {
                component.onValueChange('-');

                expect(testComponent.control.value).toBe(null);
            });

            it(`Value ','`, () => {
                component.onValueChange(',');

                expect(testComponent.control.value).toBe(null);
            });

            it(`Value '-,'`, () => {
                component.onValueChange('-,');

                expect(testComponent.control.value).toBe(null);
            });

            it(`Value does not depend on the separator`, () => {
                component.onValueChange('123456,50');
                expect(testComponent.control.value).toBe(123456.5);

                component.onValueChange('123456.50');
                expect(testComponent.control.value).toBe(123456.5);
            });
        });

        describe('The min and max properties', () => {
            beforeEach(() => {
                inputPO.sendText('');
                testComponent.control.setValue(null);
            });

            it('A value less than positive min does not update the control', () => {
                testComponent.component.min = 15;
                component.onValueChange(`10`);

                expect(testComponent.control.value).toBe(null);
            });

            it('A value greater than max is clipped to max', () => {
                const savedMax = 25;

                testComponent.component.max = savedMax;
                component.onValueChange(`50`);

                expect(testComponent.control.value).toBe(savedMax);
            });

            it('A value greater than negative max does not update the control', () => {
                testComponent.component.max = -15;
                component.onValueChange(`-10`);

                expect(testComponent.control.value).toBe(null);
            });

            it('A value less than negative min is truncated to min', () => {
                const savedMin = -25;

                testComponent.component.min = savedMin;
                component.onValueChange(`-50`);

                expect(testComponent.control.value).toBe(savedMin);
            });
        });

        it(`The correctly filled value is passed to the form number`, () => {
            component.onValueChange(`-12${CHAR_NO_BREAK_SPACE}345,67`);

            expect(testComponent.control.value).toBe(-12345.67);
        });
    });

    describe('computedValue | value to display', () => {
        it(`The given value from the form is correctly converted to a string`, () => {
            testComponent.control.setValue(-12345.67);

            expect(component.computedValue).toBe(`-12${CHAR_NO_BREAK_SPACE}345,67`);
        });

        it(`The given value from the form is correctly converted to a string with 0's at start`, () => {
            inputPO.sendText('00 002 025');

            expect(component.computedValue).toBe(`2${CHAR_NO_BREAK_SPACE}025`);

            inputPO.sendText(' 005');

            expect(component.computedValue).toBe(`5`);
        });

        it(`The given value from the form is correctly converted to a string with 0`, () => {
            inputPO.sendText('0');

            expect(component.computedValue).toBe(`0`);
        });

        it(`Doesn't trim zeros if the input is focused`, () => {
            component.decimal = 'not-zero';

            inputPO.focus();
            inputPO.sendText('10,07');
            inputPO.sendText('10,0');

            expect(component.computedValue).toBe('10,0');
        });

        it(`formats a value if the element is out of focus`, () => {
            component.decimal = 'not-zero';

            inputPO.sendText('10,0');

            expect(component.computedValue).toBe('10');
        });
    });

    describe('Format value when element lose focus with precision > 6', () => {
        beforeEach(() => {
            component.decimal = 'always';
            component.precision = 10;
            inputPO.sendText('');
            inputPO.focus();
        });

        it('Positive value', () => {
            inputPO.sendText('0,0000000001');
            component.onFocused(false);
            fixture.detectChanges();

            expect(component.computedValue).toBe(`0,0000000001`);
        });

        it('Negative value', () => {
            inputPO.sendText('-0,0000000001');
            component.onFocused(false);
            fixture.detectChanges();

            expect(component.computedValue).toBe(`-0,0000000001`);
        });

        it('Value with precision less than 10', () => {
            inputPO.sendText('-0,00000052');
            component.onFocused(false);
            fixture.detectChanges();

            expect(component.computedValue).toBe(`-0,0000005200`);
        });
    });

    it('maxlength is set to 23 by default (18 digits + 5 default separators)', () => {
        const nativeInput = getNativeInput()!.nativeElement;

        expect(nativeInput.getAttribute('maxlength')).toBe('23');
    });

    describe('When decimal === always', () => {
        it(`Adds the number of zeros specified by the precision property when updating Value with an integer`, () => {
            const value = '123';
            const precision = 2;

            component.decimal = 'always';
            component.precision = precision;
            component.onValueChange(value);

            expect(component.computedValue).toBe(`${value},00`);
        });

        it(`Adds the number of zeros specified by the precision property when updating Value with an integer`, () => {
            const value = '0';
            const precision = 2;

            component.decimal = 'always';
            component.precision = precision;
            component.onValueChange(value);

            expect(component.computedValue).toBe(`${value},00`);
        });
    });

    function getNativeInput(): DebugElement | null {
        return pageObject.getByAutomationId('tui-primitive-textfield__native-input');
    }
});
