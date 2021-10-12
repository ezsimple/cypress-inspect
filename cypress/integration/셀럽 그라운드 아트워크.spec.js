import { login, get, post, put, del, prettyJSON } from '../libs/InspectLib';

describe('셀럽 그라운드 아트워크', () => {
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

  // 셀럽 그라운드 아트워크
  // DELETE /api/v1/celeb-ground/{artistMemberNo}/artwork 셀럽 그라운드 아트워크 삭제
  // GET /api/v1/celeb-ground/{artistMemberNo}/artwork 셀럽 그라운드 아트워크 목록
  // PUT /api/v1/celeb-ground/{artistMemberNo}/artwork/openYn/{openYn} 셀럽 그라운드 아트워크 공개여부
  // PUT /api/v1/celeb-ground/{artistMemberNo}/artwork/sortOrder 셀럽 그라운드 아트워크 순서변경

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
