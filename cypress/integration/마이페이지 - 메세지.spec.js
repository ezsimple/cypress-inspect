import { login, get, post, put, del, prettyJSON } from '../libs/common';

describe('마이페이지 - 메세지', () => {
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

  // 마이페이지 - 메세지

  it('전체 메세지 삭제', () => {
    const q = 0;
    const url = '/api/v1/member/message/all';
    const req = {};
    del(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('전체 메세지 조회', () => {
    const q = 0;
    const url = '/api/v1/member/message/all';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('셀럽 별 메세지 삭제', () => {
    const q = 0;
    const url = '/api/v1/member/message/celeb';
    const req = {};
    del(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('셀럽 별 메세지 조회', () => {
    const q = 0;
    const url = '/api/v1/member/message/celeb';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('단건 메세지 삭제', () => {
    const q = 0;
    const url = '/api/v1/member/message/{memberMessageIndex}';
    const req = {};
    del(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
