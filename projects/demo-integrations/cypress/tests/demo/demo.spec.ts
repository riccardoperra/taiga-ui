import {DEMO_PATHS} from '../../support/demo-paths';
import {excluded} from '../../support/exclusions';
import {EXAMPLE_ID} from '../../support/shared.entities';

describe('Demo', () => {
    for (const path of DEMO_PATHS) {
        it(path, () => {
            cy.goToDemoPage(path);
            cy.hideHeader();

            cy.get('tui-doc-example').each((example, index) => {
                cy.wrap(example)
                    .find('.t-example')
                    .scrollIntoView()
                    .findByAutomationId(EXAMPLE_ID)
                    .should('be.visible')
                    .as('example');

                return excluded(path, index + 1)
                    ? cy.get('@example')
                    : cy.get('@example').matchImageSnapshot(`${path}/${index + 1}`);
            });
        });
    }
});
