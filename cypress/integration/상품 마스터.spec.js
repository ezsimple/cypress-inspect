import { login, getToken, get, prettyJSON } from '../libs/common';

describe('상품 마스터', () => {
  const token = getToken();
  before(() => {
    login();
  });

  it('상품 마스터 기본정보', () => {
    const productCode = 1030010001;
    const url = '/api/v1/product/master/' + productCode + '/info';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
