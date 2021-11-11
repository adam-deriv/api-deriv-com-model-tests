/// <reference types="cypress" />

import { createTestModel } from "./createTestModel.js";

const currentMachine = (initial = 'home') => ({
  id: "cuurent_api_deriv_com",
  initial,
  on: { CLICK_PLAYGROUND: "playground", CLICK_DOCUMENTATION: "documentation" },
  states: {
    documentation: {
      on: { ...documentationNavigationEvents},
    },
    registration: {
      on: { ...documentationNavigationEvents},
    },
    guide: {
      on: { ...documentationNavigationEvents},
    },
    playground: {
      on: { CLICK_HOME: "home", CLICK_DOCUMENTATION: "documentation" },
    },
    home: {
      on: { CLICK_PLAYGROUND: "playground", CLICK_DOCUMENTATION: "documentation" },
    },
  },
});

const documentationNavigationEvents = {
  CLICK_APP_REGISTRATION: "registration",
  CLICK_GUIDE: "guide",
  CLICK_DOCUMENTATION: "documentation",
  CLICK_PLAYGROUND: "playground",
  CLICK_HOME: "home",
};

const cypressStates = {
  home: () => {
    cy.contains(/deriv api/i);
    // playwright: page.contains
    // expect()
  },
  documentation: () => {
    cy.contains(/quickstart to deriv/i);
  },
  playground: () => {
    cy.contains(/select api call/i);
  },
  registration: () => {
    cy.contains(/Authenticate your API/i);
  },
  documetnation: () => {
    cy.contains(/Quickstart to Deriv API/i);
  }
};

const cypressEvents = {
  CLICK_PLAYGROUND: function () {
    cy.contains(/playground/i).click();
    //user clicks
  },
  CLICK_HOME: function () {
    cy.contains(/home/i).click();
    
  },
  CLICK_APP_REGISTRATION: function () {
    cy.get("#sidebar > #app-registration")
      .contains(/app registration/i)
      .click();
  },
  CLICK_DOCUMENTATION: function () {
    cy.contains(/documentation/i).click();
  }
};

const testModel = (initialState) => createTestModel(currentMachine(initialState), cypressStates, cypressEvents);

const itVisitsAndRunsPathTests = (url) => (path) =>
  it(path.description, function () {
    cy.visit(url).then(path.test);
  });

const itTests = (appAddress) => itVisitsAndRunsPathTests(appAddress);

context("Deriv API From Home", () => {
  const testPlans = testModel('home').getSimplePathPlans();
  testPlans.forEach((plan) => {
    describe(plan.description, () => {
      plan.paths.forEach(itTests('https://api.deriv.com/'));
    });
  });
});

context("Deriv API from Playground", () => {
  const testPlans = testModel('playground').getSimplePathPlans();
  testPlans.forEach((plan) => {
    describe(plan.description, () => {
      plan.paths.forEach(itTests('https://api.deriv.com/playground'));
    });
  });
});
