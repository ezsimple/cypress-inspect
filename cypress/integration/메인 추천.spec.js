import { login, get, post, put, del, prettyJSON } from '../libs/InspectLib';

describe('메인 추천', () => {
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

  // 메인 추천(작업중)
  // GET /api/v1/main/recentHistory 최근 본 히스토리(작업중)
  // GET /api/v1/main/recommendArtist 추천 셀럽 목록(작업중)
  // GET /api/v1/main/recommendArtwork 추천 아트워크 목록(작업중)
  // GET /api/v1/main/recommendProduct 추천 상품 목록(작업중)

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
