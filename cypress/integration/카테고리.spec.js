import { login, get, post, put, del, prettyJSON } from '../libs/InspectLib';

describe('카테고리', () => {
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

  // 카테고리
  // GET /api/v1/display/category 카테고리 전체 목록 조회
  // GET /api/v1/display/category/{categoryIndex} 카테고리 목록 조회
  // GET /api/v1/display/categoryFilter/{categoryIndex} 카테고리 필터(옵션) 목록

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
