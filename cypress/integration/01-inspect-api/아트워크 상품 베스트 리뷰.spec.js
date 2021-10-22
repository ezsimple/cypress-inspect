import { get, login, prettyJSON } from '../../libs/common';

describe('아트워크 상품 베스트 리뷰', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  it('/best/reviews', () => {
    const q = '45';
    const url = host + '/api/v1/art-product/' + q + '/best/reviews';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log('/best/reviews\n', prettyJSON(response));
    });
  });
});
