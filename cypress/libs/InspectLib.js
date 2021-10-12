export function prettyJSON(response) {
  return JSON.stringify(response.body, null, 2);
}

export function login(url, req) {
  let token = JSON.stringify(window.sessionStorage.getItem('x-oround-token'));
  cy.request({
    method: 'POST',
    url: url ? url : '/api/v1/login/email',
    body: req ? req : { id: 'test5@upleat.com', password: 'qwer1234' },
  }).then(({ body }) => {
    window.sessionStorage.setItem('x-oround-token', body.token.accessToken);
    token = body.token.accessToken;
  });
  return token;
}

export function get(token, url, req) {
  return cy.request({
    method: 'GET',
    url: url,
    headers: {
      'x-oround-token': token,
    },
    body: req,
  });
}

export function post(token, url, req) {
  return cy.request({
    method: 'POST',
    url: url,
    headers: {
      'x-oround-token': token,
    },
    body: req,
  });
}

export function put(token, url, req) {
  return cy.request({
    method: 'PUT',
    url: url,
    headers: {
      'x-oround-token': token,
    },
    body: req,
  });
}

export function del(token, url, req) {
  return cy.request({
    method: 'DELETE',
    url: url,
    headers: {
      'x-oround-token': token,
    },
    body: req,
  });
}
