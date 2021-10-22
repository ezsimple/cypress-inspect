import { get, login, prettyJSON } from '../../libs/common';

describe('아트워크 상품 시리즈', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // 아트워크 상품 시리즈
  it('/series', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/series';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log('/series\n', prettyJSON(response));
    });
  });

  // 아트워크 시리즈
  it('/artist/series', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/44/artist/series';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log('/artist/series\n', prettyJSON(response));
    });
  });
});
