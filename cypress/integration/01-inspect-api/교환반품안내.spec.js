import { get, login, report } from '../../libs/common';

describe('상품 배송/교환/반품 안내 (mhlee)', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  const q = '21178';
  it('상품 배송/교환/반품 안내', () => {
    const url = host + '/api/v1/art-product/' + q + '/shipping/guide';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
