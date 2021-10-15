import { get, login, prettyJSON } from '../libs/common';

describe('아트워크 상품 옵션(★)', () => {
  before(() => {
    login();
  });

  it('사용자 선택 옵션', () => {
    const artProducts = new Set([44, 50, 53]);
    for (const o of artProducts) {
      const url = '/api/v1/art-product/' + o + '/options';
      const req = {};
      get(url, req).should((response) => {
        expect(response.status).to.eq(200);
        console.log(prettyJSON(response));
      });
    }
  });
});
