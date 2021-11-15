import { get, login, report } from '../../libs/common';

describe('아트워크 상품 목록 (jhpark)', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // 아트워크 상품 목록

  it('아트워크 상품 목록', () => {
    const q = 0;
    const url = host + '/api/v1/art-product/productList';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
