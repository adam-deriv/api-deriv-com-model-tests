export const derivApiMachine = (initial = 'home') => ({
  id: "current_api_deriv_com",
  initial,
  on: { CLICK_PLAYGROUND: "playground", CLICK_DOCUMENTATION: "documentation" },
  states: {
    documentation: {
      on: { ...documentationNavigationEvents },
    },
    registration: {
      on: { ...documentationNavigationEvents },
    },
    guide: {
      on: { ...documentationNavigationEvents },
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
