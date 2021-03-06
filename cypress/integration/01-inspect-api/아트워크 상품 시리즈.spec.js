import { get, login, report } from '../../libs/common';

describe('아트워크 상품 시리즈', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  const q = 42185;

  // 아트워크 상품 시리즈
  // it('/series', () => {
  //   const url = host + '/api/v1/art-product/' + q + '/series';
  //   const req = {};
  //   get(url, req).should((response) => {
  //     // expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });

  // 아트워크 시리즈
  it('/artist/series', () => {
    const url = host + '/api/v1/art-product/' + q + '/artist/series';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
