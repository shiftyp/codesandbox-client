// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --

const convertStoryPathToId = path => {
  const parts = path.split('/');
  let ret = '';

  for (let i = 0; i < parts.length; i++) {
    for (let j = 0; j < i; j++) {
      ret += '-';
    }
    ret += parts[i].replace(/\s/g, '-');
  }

  return ret;
};
Cypress.Commands.overwrite('visit', (originalFn, storyPath) => {
  return originalFn(`iframe.html?id=${convertStoryPathToId(storyPath)}`);
});
