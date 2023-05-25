import {Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";

Given('I am on website homepage', () => {
    cy.visit('/');
});

Then("the {string} page should load in {int} ms", function (page, time) {
    cy.visit(page, {
      onBeforeLoad: (win) => {
        win.performance.mark("start-loading");
      },
      onLoad: (win) => {
        win.performance.mark("end-loading");
      },
    })
      .its("performance")
      .then((p) => {
        p.measure("pageLoad", "start-loading", "end-loading");
        const measure = p.getEntriesByName("pageLoad")[0];

        assert.isAtMost(measure.duration, time);
      });
  });