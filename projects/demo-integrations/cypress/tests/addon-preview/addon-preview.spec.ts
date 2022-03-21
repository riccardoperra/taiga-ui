describe('Addon preview', () => {
    beforeEach(() => {
        cy.goToDemoPage('components/preview');
        cy.hideHeader();
    });

    it('Full preview scrolled', () => {
        cy.get(`tui-preview-example-1 button`).first().click();
        cy.waitKitDialog('tui-preview');
        cy.get('tui-preview')
            .wait(350)
            .get('tui-preview section')
            .first()
            .trigger('wheel', 'center', {deltaY: -50});
        cy.get('tui-preview').matchImageSnapshot('preview scroll', {
            capture: 'viewport',
            blackout: ['tui-doc-navigation'],
        });
    });

    it('No preview avaliable', () => {
        cy.get(`tui-preview-example-3 button`).first().click();
        cy.waitKitDialog('tui-preview');
        cy.get('tui-preview')
            .wait(350)
            .matchImageSnapshot('preview-unavailable', {
                capture: 'viewport',
                blackout: ['tui-doc-navigation'],
            });
    });
});
