import 'cypress-wait-until';

export function prettyJSON(response) {
  return JSON.stringify(response.body, null, 2);
}

export function report(url, response) {
  const host = Cypress.env('host-api');
  const uri = url.replace(host, '');
  const runningTime =
    '(' + getRunningTime() + ')' + (response == null ? '' : '\n');
  console.log(uri, runningTime, response != null ? prettyJSON(response) : '');
}

export function login(url, req) {
  // 토큰이 invalid할 경우 처리가 안됩니다.
  // const token = JSON.stringify(window.sessionStorage.getItem('x-oround-token'));
  // if (token) return;
  const _url = url ? url : '/api/v1/login/email';
  const startTime = performance.now();
  cy.request({
    method: 'POST',
    url: _url,
    body: req ? req : { id: 'test5@upleat.com', password: 'qwer1234!@#' },
  })
    .then(({ body }) => {
      const { accessToken } = body.token;
      window.sessionStorage.setItem('x-oround-token', accessToken); // 동기화 시킬수 없음
      Cypress.env('token', accessToken);
      const endTime = performance.now();
      Cypress.env('runningTime', (endTime - startTime).toFixed(0));
    })
    .should((response) => {
      report(_url, null);
    });
  cy.waitUntil(() =>
    cy
      .window()
      .its('sessionStorage')
      .invoke('getItem', 'x-oround-token')
      .should('exist')
  );
}

export function getToken() {
  return Cypress.env('token');
  // JSON.stringify(window.sessionStorage.getItem('x-oround-token')); // 동기화 시킬수 없음
}

// 실행 시간 측정
export function getRunningTime() {
  return Cypress.env('runningTime') + ' ms';
}

export function get(url, req) {
  const startTime = performance.now();
  return cy
    .request({
      method: 'GET',
      url: url,
      headers: {
        'x-oround-token': getToken(),
      },
      body: req,
    })
    .then(({ body }) => {
      const endTime = performance.now();
      Cypress.env('runningTime', (endTime - startTime).toFixed(0));
    });
}

export function post(url, req) {
  const startTime = performance.now();
  return cy
    .request({
      method: 'POST',
      url: url,
      headers: {
        'x-oround-token': getToken(),
      },
      body: req,
    })
    .then(({ body }) => {
      const endTime = performance.now();
      Cypress.env('runningTime', (endTime - startTime).toFixed(0));
    });
}

export function put(url, req) {
  const startTime = performance.now();
  return cy
    .request({
      method: 'PUT',
      url: url,
      headers: {
        'x-oround-token': getToken(),
      },
      body: req,
    })
    .then(({ body }) => {
      const endTime = performance.now();
      Cypress.env('runningTime', (endTime - startTime).toFixed(0));
    });
}

export function del(url, req) {
  const startTime = performance.now();
  return cy
    .request({
      method: 'DELETE',
      url: url,
      headers: {
        'x-oround-token': getToken(),
      },
      body: req,
    })
    .then(({ body }) => {
      const endTime = performance.now();
      Cypress.env('runningTime', (endTime - startTime).toFixed(0));
    });
}
