import { get, login, report } from '../../libs/common';

describe('상품 마스터', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  it('상품 마스터 기본정보 (mhlee)', () => {
    const productCode = 1030010001;
    const url = host + '/api/v1/product/master/' + productCode + '/info';
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
