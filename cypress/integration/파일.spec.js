import { login, get, post, put, del, prettyJSON } from '../libs/InspectLib';

describe('파일', () => {
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

  // 파일

  it('', () => {
    const q = 0;
    const url = '';
    // POST /api/v1/file/download fileDownload
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
