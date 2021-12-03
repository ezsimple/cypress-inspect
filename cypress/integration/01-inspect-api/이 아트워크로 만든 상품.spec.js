import { get, login, report } from '../../libs/common';

describe('이 아트워크로 만든 상품 (mhlee)', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  const q = 22098;

  it('이 아트워크로 만든 상품', () => {
    const url = host + '/api/v1/art-product/' + q + '/artwork/summary';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('이 아트워크로 만든 상품 시리즈', () => {
    const url = host + '/api/v1/art-product/' + q + '/series';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
