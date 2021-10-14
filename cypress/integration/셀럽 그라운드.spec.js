import { login, get, post, put, del, prettyJSON } from '../libs/common';

describe('셀럽 그라운드', () => {
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

  // 셀럽 그라운드

  it('셀럽 그라운드 편집', () => {
    const q = 0;
    const url = '/api/v1/celeb-ground/ground';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('그라운드 커버 이미지 업로드', () => {
    const q = 0;
    const url = '/api/v1/celeb-ground/ground/cover/fileUpload';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('셀럽 그라운드 정보', () => {
    const q = 0;
    const url = '/api/v1/celeb-ground/ground/{shopId}';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
