import { login, get, post, put, del, prettyJSON } from '../libs/InspectLib';

describe('셀럽 1:1문의', () => {
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

  // 셀럽 1:1문의
  // GET /api/v1/celeb/inquiry 셀럽 1:1문의 페이징
  // POST /api/v1/celeb/inquiry 셀럽 1:1문의 등록
  // POST /api/v1/celeb/re-inquiry 셀럽 1:1문의 재등록
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
