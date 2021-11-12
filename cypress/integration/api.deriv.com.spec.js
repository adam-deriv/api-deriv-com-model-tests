/// <reference types="cypress" />

import { testsModel } from "./cypressStates";
import { itTests } from "./itVisitsAndRunsPathTests";

context("Deriv API full run", () => {
  const testPlans = testsModel('home').getSimplePathPlans();
  testPlans.forEach((plan) => {
    describe(plan.description, () => {
      plan.paths.forEach(itTests('https://api.deriv.com/'));
    });
  });
});


