
Cypress.Commands.add('postUser', (user) => {
  cy.api({
    url: '/users',
    method: 'POST',
    body: user,
    failOnStatusCode: false
  }).then(response => { return response })
})

Cypress.Commands.add('postSession', (user) => {
  cy.api({
    url: '/sessions',
    method: 'POST',
    body: { email: user.email, password: user.password },
    failOnStatusCode: false
  }).then(response => { return response })
})

Cypress.Commands.add('postTask', (task, token) => {
  cy.api({
    url: '/tasks',
    method: 'POST',
    body: task,
    headers: {
      Authorization: token
    },
    failOnStatusCode: false
  }).then(response => { return response })
})

Cypress.Commands.add('getTasks', (token) => {
  cy.api({
    url: '/tasks',
    method: 'GET',
    headers: {
      Authorization: token
    },
    failOnStatusCode: false
  }).then(response => { return response })
})

Cypress.Commands.add('getUniqueTask', (taskId, token) => {
  cy.api({
    url: '/tasks/' + taskId,
    method: 'GET',
    headers: {
      Authorization: token
    },
    failOnStatusCode: false
  }).then(response => { return response })
})

Cypress.Commands.add('deleteTask', (taskId, token) => {
  cy.api({
    url: '/tasks/' + taskId,
    method: 'DELETE',
    headers: {
      Authorization: token
    },
    failOnStatusCode: false
  }).then(response => { return response })
})

Cypress.Commands.add('putTaskDone', (taskId, token) => {
  cy.api({
    url: `/tasks/${taskId}/done`,
    method: 'PUT',
    headers: {
      Authorization: token
    },
    failOnStatusCode: false
  }).then(response => { return response })
})




