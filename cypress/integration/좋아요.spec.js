import { login, get, post, put, del, prettyJSON } from '../libs/common';

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
