import { login, get, post, put, del, prettyJSON } from '../libs/common';

describe('아트워크 상품 옵션(★)', () => {
  let timeOut = 5000; // connection Timeout seconds
  let token = null;

  before(() => {
    if (!token) {
      token = JSON.stringify(window.sessionStorage.getItem('x-oround-token'));
      cy.request({
        method: 'POST',
        url: '/api/v1/login/email',
        body: { id: 'test5@upleat.com', password: 'qwer1234' },
      }).then(({ body }) => {
        window.sessionStorage.setItem('x-oround-token', body.token.accessToken);
        token = body.token.accessToken;
      });
    }
  });

  it('사용자 선택 옵션', () => {
    const artProducts = new Set([44, 50, 52]);
    for (const o of artProducts) {
      const url = '/api/v1/art-product/' + o + '/options';
      get(token, url, null).should((response) => {
        expect(response.status).to.eq(200);
        console.log(prettyJSON(response));
      });
    }
  });
});
