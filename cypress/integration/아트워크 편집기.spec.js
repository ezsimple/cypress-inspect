import { login, get, post, put, del, prettyJSON } from '../libs/common';

describe('아트워크 편집기', () => {
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

  // 아트워크 편집기

  it('아트워크 편집기 - 원가 조회', () => {
    const q = 0;
    const url = '/api/v1/artwork/editor/cost';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('아트워크 편집기 - 정보 조회', () => {
    const q = 0;
    const url = '/api/v1/artwork/editor/{artworkIndex}';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('아트워크 편집기 - 정보 저장', () => {
    const q = 0;
    const url = '/api/v1/artwork/editor/{artworkIndex}';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('아트워크 편집기 - 이미지 등록', () => {
    const q = 0;
    const url = '/api/v1/artwork/editor/{artworkIndex}/image/fileUpload';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('신규 아트워크 등록', () => {
    const q = 0;
    const url = '/api/v1/artwork/new/fileUpload';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });
});
