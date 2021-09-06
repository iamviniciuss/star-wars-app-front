/// <reference types="cypress" />

const baseUrl = "http://localhost:3001/";

describe('Peoples' , () => {
    const people_id = 1;

    it('devem listar os personagens' , () => { 

        cy.server({
            urlMatchingOptions: { matchBase: false, dot: true }
        });

        cy.route('GET' , '**/api/v1/peoples/?limit=10&offset=0').as('listPeople')

        cy.visit(baseUrl)

        cy.wait('@listPeople').then((xhr)=>{ 
            expect(xhr.status).be.eq(200)
            expect(xhr.response.body.length).be.eq(10)
        })
    });

    it('devem poder verificar a descrição de um personagem' , () => { 

        cy.server({
            urlMatchingOptions: { matchBase: false, dot: true }
        });

        cy.route('GET' , `**/api/v1/peoples/${people_id}`).as('people')
        cy.route('GET' , '**/api/v1/peoples/?limit=10&offset=0').as('listPeople')

        cy.visit(baseUrl)

        cy.wait('@listPeople').then((xhr)=>{ 
            cy.get(`[data-cy='${people_id}']`).click()
        })

        cy.wait('@people').then((xhr)=>{ 

            expect(xhr.status).be.eq(200)
            expect(xhr.response.body.name).be.eq("Luke Skywalker")  

            
            const phrase = "Olá! Meu nome é Luke Skywalker. Sou um humano, peso 77 Kg, nasci em Tatooine no ano 19BBY e já pilotei X-wing."
            
            cy.get(`[data-cy-people-phrase='true']`).should(($p) => {
                expect($p.text()).to.not.have.length(0  )
            })

            cy.get(`[data-cy-people-name]`).then(elem => {
                expect(elem.text()).be.eq(xhr.response.body.name)                
                cy.get('[data-cy-close-modal]').click()
            });

        });
       
    });

});