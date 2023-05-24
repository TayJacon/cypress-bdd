import {Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";

Given('I am on website homepage', () => {
    cy.visit('/');
});
  
When('I click on menu icon', () => {
    cy.get('.nav-button').click()
});
  
Then('I should see the following menus and submenus:', (dataTable) => {
    const expectedMenuData = dataTable.hashes();
    
    cy.get('nav.breeze-nav .nav-link')
    .then((el) => {
      expect(el).to.have.length(expectedMenuData.length)
      for (let i=0; i<el.length;i++) {
        expect(el[i]).to.have.text(expectedMenuData[i]['Menu']).and.have.attr('href', expectedMenuData[i]["Href"])
      }
    })
});
  