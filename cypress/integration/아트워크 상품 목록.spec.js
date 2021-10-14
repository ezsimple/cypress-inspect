import { getToken, get, prettyJSON } from '../libs/common';

describe('아트워크 상품 목록', () => {
  const token = getToken();
  before(() => {
    login();
  });

  // 아트워크 상품 목록

  it('아트워크 상품 목록', () => {
    const q = 0;
    const url = '/api/v1/art-product/productList';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
