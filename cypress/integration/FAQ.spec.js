import { login, get, post, put, del, prettyJSON } from '../libs/InspectLib';

describe('FAQ', () => {
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

  // FAQ
  // GET /api/v1/celeb/faq 셀럽 FAQ 페이징
  // GET /api/v1/mall/faq 쇼핑몰 FAQ 페이징
  // GET /api/v1/type-category/{typeCategoryCode}/code 유형 카테고리 코드 리스트
  it('', () => {
    const q = 0;
    const url = '';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
