import { getToken, del, get, post, prettyJSON } from '../libs/common';

describe('좋아요', () => {
  const token = getToken();
  before(() => {
    login();
  });

  // 좋아요

  it('셀럽 그라운드 아트웍 상품 좋아요 페이징', () => {
    const q = 0;
    const url = '/api/v1/celeb-ground/{artistMemberNo}/art-product/like';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('셀럽 그라운드 아트워크 좋아요 페이징', () => {
    const q = 0;
    const url = '/api/v1/celeb-ground/{artistMemberNo}/artwork/like';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('팔로우한 셀럽 페이징', () => {
    const q = 0;
    const url = '/api/v1/following/celeb';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('좋아요 아트웍 상품 등록 취소', () => {
    const q = 0;
    const url = '/api/v1/like/art-product';
    const req = {};
    del(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('좋아요 아트웍 상품 등록', () => {
    const q = 0;
    const url = '/api/v1/like/art-product';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('좋아요 아트워크 등록 취소', () => {
    const q = 0;
    const url = '/api/v1/like/artwork';
    const req = {};
    del(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('좋아요 아트워크 등록', () => {
    const q = 0;
    const url = '/api/v1/like/artwork';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('좋아요 판매 대상 페이징', () => {
    const q = 0;
    const url = '/api/v1/like/sale-target';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
