export function prettyJSON(response) {
  return JSON.stringify(response.body, null, 2);
}

export function login(url, req) {
  // 토큰이 invalid할 경우 처리가 안됩니다.
  // const token = JSON.stringify(window.sessionStorage.getItem('x-oround-token'));
  // if (token) return;
  cy.request({
    method: 'POST',
    url: url ? url : '/api/v1/login/email',
    body: req ? req : { id: 'test5@upleat.com', password: 'qwer1234' },
  }).then(({ body }) => {
    const { accessToken } = body.token;
    window.sessionStorage.setItem('x-oround-token', accessToken); // 동기화 시킬수 없음
    Cypress.env('token', accessToken);
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
  return token ? token : Cypress.env('token');
  // JSON.stringify(window.sessionStorage.getItem('x-oround-token')); // 동기화 시킬수 없음
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
