import { get, login, prettyJSON } from '../../libs/common';

describe('아트워크 상품 요약', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  it('/summary', () => {
    const q = '55';
    const url = host + '/api/v1/art-product/' + q + '/summary';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log('/summary\n', prettyJSON(response));
    });
  });

  it('/artwork/summary', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/artwork/summary';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log('/artwork/summary\n', prettyJSON(response));
    });
  });

  it('/artist/summary', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/artist/summary';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log('/artist/summary\n', prettyJSON(response));
    });
  });
});
