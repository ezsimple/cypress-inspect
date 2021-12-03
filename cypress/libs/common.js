import 'cypress-wait-until';

export function prettyJSON(response) {
  return JSON.stringify(response.body, null, 2);
}

export function report(url, req, response) {
  const host = Cypress.config().baseUrl;
  const uri = url.replace(host, '');
  const runningTime =
    '(' + getRunningTime() + ')' + (response == null ? '' : '\n');
  console.log(uri, runningTime, response != null ? prettyJSON(response) : '');
}

export function adminLogin(url, req) {
  const host = Cypress.env('host-bo');
  const _url = url ? url : host + '/bo/adminLoginOut/loginProc';
  const startTime = performance.now();
  Cypress.env('startTime', startTime);
  cy.request({
    method: 'POST',
    url: _url,
    body: req ? req : { adminId: 'administrator', adminPassword: '1q2w3e4r' },
  })
    .then(({ body }) => {
      console.log(body);
      const endTime = performance.now();
      Cypress.env(
        'runningTime',
        (endTime - Cypress.env('startTime')).toFixed(0)
      );
    })
    .should((response) => {
      report(_url, null);
    });
}

export function login(url, req) {
  // 토큰이 invalid할 경우 처리가 안됩니다.
  // const token = JSON.stringify(window.sessionStorage.getItem('x-oround-token'));
  // if (token) return;

  // 서버 개발, 프론트 개발 모두 테스트 사용자 아래로 사용하시기 바랍니다.
  // 강제사항 입니다.
  // ktest01@gmail.com / qwer1234!@# --> 오라운더(가입지역 한국)
  // jtest01@gmail.com / qwer1234!@# --> 오라운더(가입지역 일본)
  // etest01@gmail.com / qwer1234!@# --> 오라운더(가입지역 기타해외)
  // celeb01@gmail.com / qwer1234!@# --> 셀럽(가입지역 한국)

  const _url = url ? url : '/api/v1/login/email';
  Cypress.env('startTime', performance.now());
  cy.request({
    method: 'POST',
    url: _url,
    // body: req ? req : { id: 'test5@upleat.com', password: 'qwerasdf123!' },
    body: req ? req : { id: 'ktest01@gmail.com', password: 'qwer1234!@#' },
  })
    .then(({ body }) => {
      const { accessToken } = body.token;
      window.sessionStorage.setItem('x-oround-token', accessToken); // 동기화 시킬수 없음
      Cypress.env('token', accessToken);
      const endTime = performance.now();
      Cypress.env(
        'runningTime',
        (endTime - Cypress.env('startTime')).toFixed(0)
      );
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
  Cypress.env('startTime', performance.now());
  const urlParameters = Object.entries(req)
    .map((e) => e.join('='))
    .join('&');
  if (urlParameters) url += '?' + urlParameters;
  return cy
    .request({
      method: 'GET',
      url: url,
      headers: {
        'x-oround-token': getToken(),
      },
      failOnStatusCode: false,
    })
    .then(({ body }) => {
      const endTime = performance.now();
      Cypress.env(
        'runningTime',
        (endTime - Cypress.env('startTime')).toFixed(0)
      );
    });
}

export function post(url, req) {
  Cypress.env('startTime', performance.now());
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
      Cypress.env(
        'runningTime',
        (endTime - Cypress.env('startTime')).toFixed(0)
      );
    });
}

export function put(url, req) {
  Cypress.env('startTime', performance.now());
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
      Cypress.env(
        'runningTime',
        (endTime - Cypress.env('startTime')).toFixed(0)
      );
    });
}

export function del(url, req) {
  Cypress.env('startTime', performance.now());
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
      Cypress.env(
        'runningTime',
        (endTime - Cypress.env('startTime')).toFixed(0)
      );
    });
}
