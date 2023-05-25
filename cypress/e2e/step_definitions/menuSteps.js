import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import MenuObject from "../../support/componentObjects/menuObject";

const menuObject = new MenuObject();

When("I click on menu icon", () => {
  menuObject.openMenu();
});

Then("I should see the following menus and submenus:", (dataTable) => {
  menuObject.validateMenuOption(dataTable);
});
