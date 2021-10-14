import { login, get, post, put, del, prettyJSON } from '../libs/common';

describe('약관', () => {
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

  // 약관

  it('이용약관 조회', () => {
    const q = 0;
    const url = '/api/v1/terms/agreement';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('개인정보 수집 및 이용동의 조회', () => {
    const q = 0;
    const url = '/api/v1/terms/approval';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('결제대행 서비스 이용약관', () => {
    const q = 0;
    const url = '/api/v1/terms/payment';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('개인정보처리방침 조회', () => {
    const q = 0;
    const url = '/api/v1/terms/policy';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
