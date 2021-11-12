import { createTestModel } from "./createTestModel.js";
import { derivApiMachine } from "./derivApiMachine";

const cypressStates = {
  home: () => {
    cy.contains(/deriv api/i);
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
export const testsModel = (initialState) => createTestModel(derivApiMachine(initialState), cypressStates, cypressEvents);
