import { get, login, report } from '../../libs/common';

describe('아트워크 상품 SEO (mhlee)', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  const q = 29811;

  it('SEO', () => {
    const url = host + '/api/v1/art-product/' + q + '/seo';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
