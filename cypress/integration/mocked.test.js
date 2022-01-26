const asteroidResponse = require('../fixtures/asteroidResponse.json');

describe('Mocked tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Check /asteroid and /mars network requests are made with the correct date', () => {
        const today = new Date();
        const date = today.toISOString().slice(0, 10);
        cy.intercept({ path: '/asteroid**' }).as('asteroidRequest');
        cy.intercept({ path: '/mars**' }).as('marsRequest');
        cy.get('.react-datepicker__today-button')
            .click();
        cy.wait('@asteroidRequest').
            its('request.url').should('contain', `?date=${date}`);
        cy.wait('@marsRequest').
            its('request.url').should('contain', `?date=${date}`);
    });

    it('Check asteroid mocked response returns the correct details', () => {
        cy.intercept({
            method: 'GET',
            path: '/asteroid**',
        }, {
            statusCode: 200,
            fixture: 'asteroidResponse.json',
        }
        ).as('asteroidRequest');
        cy.get('.react-datepicker__today-button')
            .click();
        cy.get('.asteroid')
            .should('have.length', parseInt(asteroidResponse.totalNumber));
        cy.get('.badge-danger')
            .should('have.length', parseInt(asteroidResponse.totalDangerousNumber));
        cy.get('.asteroid-text .list-group-item')
            .first()
            .should('contain', 'Distance from Earth: 24028686.19 km')
            .next()
            .should('contain', 'Speed: 36023.16 kmph')
            .next()
            .should('contain', 'Diameter: 392.23 metres');
    });
});
