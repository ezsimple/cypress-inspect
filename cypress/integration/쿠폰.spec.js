import { login, get, post, put, del, prettyJSON } from '../libs/common';

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

  it('아트웍 상품 쿠폰 다운로드', () => {
    const q = 0;
    const url = '/api/v1/art-product/coupon/download';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('아트웍 상품 다운로드 쿠폰 리스트', () => {
    const q = 0;
    const url = '/api/v1/art-product/{artProductIndex}/download/coupon';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('셀럽 쿠폰 삭제', () => {
    const q = 0;
    const url = '/api/v1/celeb/coupon';
    const req = {};
    del(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('셀럽 쿠폰 페이징', () => {
    const q = 0;
    const url = '/api/v1/celeb/coupon';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('셀럽 쿠폰 저장', () => {
    const q = 0;
    const url = '/api/v1/celeb/coupon';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('셀럽 쿠폰 중지', () => {
    const q = 0;
    const url = '/api/v1/celeb/coupon/stop';
    const req = {};
    put(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('마이페이지 쿠폰 페이징(작업중)', () => {
    const q = 0;
    const url = '/api/v1/mypage/coupon';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
