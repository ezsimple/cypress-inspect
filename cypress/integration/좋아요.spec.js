import { login, get, post, put, del, prettyJSON } from '../libs/InspectLib';

describe('좋아요', () => {
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

  // 좋아요
  // GET /api/v1/celeb-ground/{artistMemberNo}/art-product/like 셀럽 그라운드 아트웍 상품 좋아요 페이징
  // GET /api/v1/celeb-ground/{artistMemberNo}/artwork/like 셀럽 그라운드 아트워크 좋아요 페이징
  // GET /api/v1/following/celeb 팔로우한 셀럽 페이징
  // DELETE /api/v1/like/art-product 좋아요 아트웍 상품 등록 취소
  // POST /api/v1/like/art-product 좋아요 아트웍 상품 등록
  // DELETE /api/v1/like/artwork 좋아요 아트워크 등록 취소
  // POST /api/v1/like/artwork 좋아요 아트워크 등록
  // GET /api/v1/like/sale-target 좋아요 판매 대상 페이징

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
