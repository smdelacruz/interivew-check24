/// <reference types="cypress" />

function formatString(text) {
    return text.replace('\n', '').trim();
}

describe('Check 24 UI Test', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('url'))
      cy.wait(500)
    })
    
    it("Verify first product details - title", ()=> {
        cy.get('.qa-product-tile').first().find('a h4 span')
        .invoke('text')
        .then((text1) => {
            cy.get('.qa-product-tile').first().find('a h4 span').click()
            cy.get('h1.qa-title')
            .invoke('text')
            .should((text2) => {
                expect(formatString(text2)).to.include(formatString(text1))
            })
        })

    })

    it("Verify Price show is the lowest on the offer list", ()=> {
        cy.get('.qa-product-tile').first().find('p span.product__price-price')
        .invoke('text')
        .then((price1) => {
            cy.get('.qa-product-tile').first().find('p span.product__price-price').click()
            cy.get('.qa-offer-price span:nth-child(1)').first()
            .invoke('text')
            .should((price2) => {
                expect(formatString(price2)).to.include(formatString(price1))
            })
        })
    })

   /*  it.only("Verify Price shown in details is the same as checkout", ()=> {
        cy.visit('https://haushalt.check24.de/standmixer/1a5t11ey8ve0h-wmf-kult-pro-multifunktionsmixer-30000-u-min-1200-watt-6-geschwindigkeiten-3-autoprogramme-2-mixbehaelter-2-to-go-mixflaschen-kreuzklingen-fuer-smoothies-flachklingen-zum-zerkleinern.html')
        cy.wait(500)
        cy.get('div.offer-item').first().then( productDetails => {
            cy.wrap(productDetails).find('p.qa-offer-price span')
            .invoke('text')
            .then((price1) => {
                cy.wrap(productDetails).find('[data-gtm-type="checkout"]').click()

                // cy.get('.qa-product-tile').first().find('p span.product__price-price').click()
                // cy.get('.qa-offer-price span:nth-child(1)').first()
                // .invoke('text')
                // .should((price2) => {
                //     expect(formatString(price2)).to.include(formatString(price1))
                // })
            })
            // cy.wrap(productDetails).find('[data-gtm-type="checkout"]').click()
        })
    }) */
  })
  