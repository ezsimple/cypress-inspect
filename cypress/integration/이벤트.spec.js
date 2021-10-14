import { login, get, post, put, del, prettyJSON } from '../libs/common';

describe('이벤트', () => {
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

  // 이벤트

  it('진행중인 이벤트 목록', () => {
    const q = 0;
    const url = '/api/v1/event/current';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('이벤트상세(기본형)', () => {
    const q = 0;
    const url = '/api/v1/event/current/basic/{eventIndex}';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('이벤트 댓글 등록', () => {
    const q = 0;
    const url = '/api/v1/event/current/comment';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('이벤트 댓글 삭제', () => {
    const q = 0;
    const url = '/api/v1/event/current/comment/{applyIndex}';
    const req = {};
    del(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('이벤트 댓글 수정', () => {
    const q = 0;
    const url = '/api/v1/event/current/comment/{applyIndex}';
    const req = {};
    put(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('이벤트상세(댓글형)', () => {
    const q = 0;
    const url = '/api/v1/event/current/comment/{eventIndex}';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('이벤트상세(쿠폰형)', () => {
    const q = 0;
    const url = '/api/v1/event/current/coupon/{eventIndex}';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('이벤트 응모 등록', () => {
    const q = 0;
    const url = '/api/v1/event/current/entry';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('이벤트 응모하기 조회화면', () => {
    const q = 0;
    const url = '/api/v1/event/current/entry/form/{eventIndex}';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('이벤트상세(응모형)', () => {
    const q = 0;
    const url = '/api/v1/event/current/entry/{eventIndex}';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('종료된 이벤트 목록', () => {
    const q = 0;
    const url = '/api/v1/event/old';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('이벤트 응모형 당첨자 발표', () => {
    const q = 0;
    const url = '/api/v1/event/old/entry/{eventIndex}';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
