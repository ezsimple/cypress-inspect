import { login, get, post, put, del, prettyJSON } from '../libs/InspectLib';

describe('마이페이지 - 내 정보관리', () => {
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

  // 마이페이지 - 내 정보관리
  // POST /api/v1/member/myInfo/changeEmail
  // POST /api/v1/member/myInfo/changeName
  // POST /api/v1/member/myInfo/changePhone
  // POST /api/v1/member/myInfo/checkPassword
  // POST /api/v1/member/myInfo/language
  // GET /api/v1/member/myInfo/personalInfo
  // POST /api/v1/member/myInfo/verify/email/confirm
  // GET /api/v1/member/myInfo/verify/email/send
  // GET /api/v1/member/myInfo/verify/phone/send
  // POST /api/v1/member/myInfo/withdraw
  // POST /api/v1/member/password/change
  // DELETE /api/v1/member/shipping
  // GET /api/v1/member/shipping
  // POST /api/v1/member/shipping
  // PUT /api/v1/member/shipping
  // GET /api/v1/member/shipping/nation/{{shippingAreaCode}}

  it('', () => {
    const q = 0;
    const url = '';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
