import {DEFAULT_TIMEOUT_BEFORE_ACTION} from '../../../support/shared.entities';

describe('Calendars', () => {
    beforeEach(() => {
        cy.viewport(720, 700);
    });
    it('Calendar', () => {
        cy.goToDemoPage(
            'components/calendar/API?tuiMode=null&value$=2&maxViewedMonth$=1&max$=0',
        );
        cy.hideHeader();

        cy.get('tui-calendar')
            .first()
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .matchImageSnapshot('calendar');
    });

    it('Month', () => {
        cy.goToDemoPage('components/calendar-month/API?tuiMode=null&year$=1&value$=2');
        cy.hideHeader();

        cy.get('tui-calendar-month')
            .first()
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .matchImageSnapshot('month');
    });
});
