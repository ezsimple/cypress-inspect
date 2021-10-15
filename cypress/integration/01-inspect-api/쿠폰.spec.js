import { del, get, login, post, prettyJSON, put } from '../libs/common';

describe('쿠폰', () => {
  before(() => {
    login();
  });

  // 쿠폰

  it('아트웍 상품 쿠폰 다운로드', () => {
    const q = 0;
    const url = '/api/v1/art-product/coupon/download';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('아트웍 상품 다운로드 쿠폰 리스트', () => {
    const q = 0;
    const url = '/api/v1/art-product/{artProductIndex}/download/coupon';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('셀럽 쿠폰 삭제', () => {
    const q = 0;
    const url = '/api/v1/celeb/coupon';
    const req = {};
    del(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('셀럽 쿠폰 페이징', () => {
    const q = 0;
    const url = '/api/v1/celeb/coupon';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('셀럽 쿠폰 저장', () => {
    const q = 0;
    const url = '/api/v1/celeb/coupon';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('셀럽 쿠폰 중지', () => {
    const q = 0;
    const url = '/api/v1/celeb/coupon/stop';
    const req = {};
    put(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('마이페이지 쿠폰 페이징(작업중)', () => {
    const q = 0;
    const url = '/api/v1/mypage/coupon';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
