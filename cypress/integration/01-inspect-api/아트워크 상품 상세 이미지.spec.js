import { get, login, prettyJSON } from '../../libs/common';

describe('아트워크 상품 상세 이미지', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  it('아트워크 상품 상세 이미지', () => {
    const q = '55';
    const url = host + '/api/v1/art-product/' + q + '/images';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
