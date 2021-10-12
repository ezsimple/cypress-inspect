import { login, get, post, put, del, prettyJSON } from '../libs/InspectLib';

describe('셀럽 그라운드 상품', () => {
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

  // 셀럽 그라운드 상품
  // DELETE /api/v1/celeb-ground/{artistMemberNo}/product 셀럽 그라운드 상품 삭제
  // GET /api/v1/celeb-ground/{artistMemberNo}/product 셀럽 그라운드 상품 목록
  // GET /api/v1/celeb-ground/{artistMemberNo}/product/ai1 개인화 아트워크상품 추천
  // PUT /api/v1/celeb-ground/{artistMemberNo}/product/openYn/{openYn} 셀럽 그라운드 상품 공개여부
  // PUT /api/v1/celeb-ground/{artistMemberNo}/product/sortOrder 셀럽 그라운드 상품 순서변경

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
