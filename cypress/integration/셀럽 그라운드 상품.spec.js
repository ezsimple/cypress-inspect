import { login, get, post, put, del, prettyJSON } from '../libs/common';

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

  it('셀럽 그라운드 상품 삭제', () => {
    const q = 0;
    const url = '/api/v1/celeb-ground/{artistMemberNo}/product';
    const req = {};
    del(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('셀럽 그라운드 상품 목록', () => {
    const q = 0;
    const url = '/api/v1/celeb-ground/{artistMemberNo}/product';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('개인화 아트워크상품 추천', () => {
    const q = 0;
    const url = '/api/v1/celeb-ground/{artistMemberNo}/product/ai1';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('셀럽 그라운드 상품 공개여부', () => {
    const q = 0;
    const url = '/api/v1/celeb-ground/{artistMemberNo}/product/openYn/{openYn}';
    const req = {};
    put(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('셀럽 그라운드 상품 순서변경', () => {
    const q = 0;
    const url = '/api/v1/celeb-ground/{artistMemberNo}/product/sortOrder';
    const req = {};
    put(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
