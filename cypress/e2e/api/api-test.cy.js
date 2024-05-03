/// <reference types="cypress" />

describe('API test sets', () => {
    context('First test set', () => {
        it('Simple API test 1', () => {
            cy.visit('https://www.saucedemo.com/')
            cy.get('[data-test="username"]').type('xxx')
            cy.log('Start API call')

            cy.wait(5000).then(()=> {
                console.log('Fetching respond')
                fetch('https://api.spacexdata.com/v3/missions')
                .then((res) => {
                    res.json().then((data) => {
                        console.log(data)
                    })
                })
            })
        })
    })

    context('Second test set', () => {
        it('Simple API test 2', () => { 
            cy.request('GET', 'https://api.spacexdata.com/v3/missions').then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).length.to.be.greaterThan(1)
                expect(response.body.length).length.to.be.equal(10)
                console.log(response)
            })
        })
    })
  })