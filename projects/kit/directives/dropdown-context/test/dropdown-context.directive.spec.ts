import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiRootModule} from '@taiga-ui/core';
import {TuiDropdownContextModule} from '@taiga-ui/kit/directives';
import {configureTestSuite} from '@taiga-ui/testing';

describe('TuiDropdownContext directive', () => {
    @Component({
        template: `
            <tui-root>
                <p id="root" [tuiDropdownContext]="ref">Some dumb text</p>

                <ng-template #ref>
                    <p id="insideDropdown">Text inside dropdown</p>
                </ng-template>
            </tui-root>
        `,
    })
    class TestComponent {}

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, TuiRootModule, TuiDropdownContextModule],
            declarations: [TestComponent],
        });
    });

    const rightClickEvent = new MouseEvent('contextmenu');
    const escButtonEvent = new KeyboardEvent('keydown', {key: 'escape'});
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
    });

    it('does not show dropdown if NO right-click was made', () =>
        fixture.whenStable().then(() => {
            expect(getTextInsideDropdown()).toBeNull();
        }));

    it('does not show dropdown if left-click was made', () => {
        getRootBlock()?.click();

        return fixture.whenStable().then(() => {
            expect(getTextInsideDropdown()).toBeNull();
        });
    });

    it('shows dropdown if right-click was made', () => {
        dispatchEventFromRoot(rightClickEvent);

        expect(getTextInsideDropdown()).toBe('Text inside dropdown');
    });

    it('closes dropdown on esc button', () => {
        dispatchEventFromRoot(rightClickEvent);
        fixture.detectChanges();

        expect(getTextInsideDropdown()).toBe('Text inside dropdown');
        document.dispatchEvent(escButtonEvent);
        fixture.detectChanges();

        return fixture.whenStable().then(() => {
            expect(getTextInsideDropdown()).toBeNull();
        });
    });

    it('does not close dropdown on left click inside', () => {
        dispatchEventFromRoot(rightClickEvent);
        fixture.detectChanges();

        expect(getTextInsideDropdown()).not.toBeFalsy();
        get$Dropdown()?.click();
        fixture.detectChanges();

        return fixture.whenStable().then(() => {
            expect(getTextInsideDropdown()).not.toBeFalsy();
        });
    });

    it('closes dropdown on left click outside', () => {
        dispatchEventFromRoot(rightClickEvent);
        fixture.detectChanges();

        expect(getTextInsideDropdown()).not.toBeFalsy();
        getRootBlock()?.click();
        fixture.detectChanges();

        return fixture.whenStable().then(() => {
            expect(getTextInsideDropdown()).toBeFalsy();
        });
    });

    function get$Dropdown(): HTMLElement | null {
        return (
            fixture.debugElement.query(By.css('#insideDropdown'))?.nativeElement || null
        );
    }

    function getTextInsideDropdown(): string | null {
        return get$Dropdown()?.textContent || null;
    }

    function getRootBlock(): HTMLElement | null {
        return fixture.debugElement.query(By.css('#root'))?.nativeElement || null;
    }

    function dispatchEventFromRoot(event: Event): void {
        getRootBlock()?.dispatchEvent(event);
        fixture.detectChanges();
    }
});
