/// <reference types="Cypress" />
import MenuElements from "../elements/menuElements";

export default class MenuObject {
  constructor() {
    this.elements = new MenuElements();
  }

  openMenu() {
    cy.get(this.elements.menuIcon).click();
  }

  validateMenuOption(dataTable) {
    const expectedMenuData = dataTable.hashes();

    cy.get(this.elements.links).then((el) => {
      expect(el).to.have.length(expectedMenuData.length);
      for (let i = 0; i < el.length; i++) {
        expect(el[i])
          .to.have.text(expectedMenuData[i]["Menu"])
          .and.have.attr("href", expectedMenuData[i]["Href"]);
      }
    });
  }
}
