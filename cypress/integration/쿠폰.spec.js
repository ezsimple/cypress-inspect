import { login, get, post, put, del, prettyJSON } from '../libs/InspectLib';

describe('쿠폰', () => {
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

  // 쿠폰

  it('', () => {
    const q = 0;
    const url = '';
    // POST /api/v1/art-product/coupon/download 아트웍 상품 쿠폰 다운로드
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('', () => {
    const q = 0;
    const url = '';
    // GET /api/v1/art-product/{artProductIndex}/download/coupon 아트웍 상품 다운로드 쿠폰 리스트
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('', () => {
    const q = 0;
    const url = '';
    // DELETE /api/v1/celeb/coupon 셀럽 쿠폰 삭제
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('', () => {
    const q = 0;
    const url = '';
    // GET /api/v1/celeb/coupon 셀럽 쿠폰 페이징
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('', () => {
    const q = 0;
    const url = '';
    // POST /api/v1/celeb/coupon 셀럽 쿠폰 저장
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('', () => {
    const q = 0;
    const url = '';
    // PUT /api/v1/celeb/coupon/stop 셀럽 쿠폰 중지
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('', () => {
    const q = 0;
    const url = '';
    // GET /api/v1/mypage/coupon 마이페이지 쿠폰 페이징(작업중)
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
