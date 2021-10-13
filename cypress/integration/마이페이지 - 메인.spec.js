import { login, get, post, put, del, prettyJSON } from '../libs/InspectLib';

describe('마이페이지 - 메인', () => {
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

  // 마이페이지 - 메인

  it('', () => {
    const q = 0;
    const url = '';
    // GET /api/v1/member/info 회원 정보 조회
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('', () => {
    const q = 0;
    const url = '';
    // GET /api/v1/member/profile 프로필 편집 정보 조회
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('', () => {
    const q = 0;
    const url = '';
    // POST /api/v1/member/profile 프로필 저장
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('', () => {
    const q = 0;
    const url = '';
    // POST /api/v1/member/profile/image/fileUpload 프로필 이미지 업로드
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
