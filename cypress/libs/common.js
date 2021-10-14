export function prettyJSON(response) {
  return JSON.stringify(response.body, null, 2);
}

export function login(url, req) {
  cy.request({
    method: 'POST',
    url: url ? url : '/api/v1/login/email',
    body: req ? req : { id: 'test5@upleat.com', password: 'qwer1234' },
  }).then(({ body }) => {
    windows.sessionStorage.setItem('x-oround-token', body.token.accessToken);
  });
  cy.waitUntil(() =>
    cy
      .window()
      .its('sessionStorage')
      .invoke('getItem', 'x-oround-token')
      .should('exist')
  );
}

export function getToken(token) {
  return token
    ? token
    : JSON.stringify(window.sessionStorage.getItem('x-oround-token'));
}

export function get(token, url, req) {
  return cy.request({
    method: 'GET',
    url: url,
    headers: {
      'x-oround-token': getToken(token),
    },
    body: req,
  });
}

export function post(token, url, req) {
  return cy.request({
    method: 'POST',
    url: url,
    headers: {
      'x-oround-token': getToken(token),
    },
    body: req,
  });
}

export function put(token, url, req) {
  return cy.request({
    method: 'PUT',
    url: url,
    headers: {
      'x-oround-token': getToken(token),
    },
    body: req,
  });
}

export function del(token, url, req) {
  return cy.request({
    method: 'DELETE',
    url: url,
    headers: {
      'x-oround-token': getToken(token),
    },
    body: req,
  });
}
