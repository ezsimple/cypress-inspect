import { get, login, prettyJSON } from '../../libs/common';

describe('아트워크 상품 옵션(★)', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  it('사용자 선택 옵션', () => {
    const artProducts = new Set([55]);
    for (const o of artProducts) {
      const host = Cypress.env('host-api');
      const url = host + '/api/v1/art-product/' + o + '/options';
      const req = {};
      get(url, req).should((response) => {
        expect(response.status).to.eq(200);
        console.log(prettyJSON(response));
      });
    }
  });
});
