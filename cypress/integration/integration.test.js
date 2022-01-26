describe('Integration tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Selecting today date returns default Mars image', () => {
        cy.get('.react-datepicker__today-button')
            .click();
        cy.get('#mars')
            .contains('No image found')
        cy.get('#mars-photo')
            .should('have.attr', 'alt')
            .then(altText => {
                expect(altText).to.equal('Cartoon martian')
            });
    });

    it('The number of asteroids are calculated correctly', () => {
        cy.get('.react-datepicker__day--001')
            .first()
            .click();

            // TODO fails to find this sometimes - fix
        cy.get('#asteroid-info p').then((text) => {
            const txt = text.text();
            const count = txt.split(' ')[0];
            cy.wrap(count).as('numberOfAsteroids');
        });
        cy.get('@numberOfAsteroids').then(numberOfAsteroids => {
            cy.get('.asteroid')
                .should('have.length', parseInt(numberOfAsteroids));
        });
    });

    it('The number of dangerous asteroids are calculated correctly', () => {
        cy.get('.react-datepicker__day--002')
            .first()
            .click();

        cy.get('#asteroid-info p').then((text) => {
            const txt = text.text();
            var dangerousCount = txt.substring(
                txt.indexOf('(') + 1,
                txt.lastIndexOf(' potentially')
            );
            cy.wrap(dangerousCount).as('numberOfDangerousAsteroids');
        });
        cy.get('@numberOfDangerousAsteroids').then(numberOfDangerousAsteroids => {
            cy.get('.badge-danger')
                .should('have.length', parseInt(numberOfDangerousAsteroids));
        });
    });

    it('Check valid response code is returned from /asteroid and /mars APIs', () => {
        cy.intercept({ path: '/asteroid**' }).as('asteroidRequest');
        cy.intercept({ path: '/mars**' }).as('marsRequest');
        cy.get('.react-datepicker__today-button')
            .click();
        cy.wait('@asteroidRequest').
            its('response.statusCode').should('eq', 200);
        cy.wait('@marsRequest').
            its('response.statusCode').should('eq', 200);
    });
});
