import { get, login, report } from '../../libs/common';

describe('상품 배송/교환/반품 안내 (mhlee)', () => {
  const host = Cypress.env('host-api');
  before(() => {
    const req = { id: 'jonghyuck59@gmail.com', password: 'triplex59@' }; // memberNo : 70
    login(null, req);
  });

  const q = '29904';
  it('상품 배송/교환/반품 안내', () => {
    const url = host + '/api/v1/art-product/' + q + '/shipping/guide';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
