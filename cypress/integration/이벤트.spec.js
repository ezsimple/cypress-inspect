import { login, get, post, put, del, prettyJSON } from '../libs/InspectLib';

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
  // GET /api/v1/event/current 진행중인 이벤트 목록
  // GET /api/v1/event/current/basic/{eventIndex} 이벤트상세(기본형)
  // POST /api/v1/event/current/comment 이벤트 댓글 등록
  // DELETE /api/v1/event/current/comment/{applyIndex} 이벤트 댓글 삭제
  // PUT /api/v1/event/current/comment/{applyIndex} 이벤트 댓글 수정
  // GET /api/v1/event/current/comment/{eventIndex} 이벤트상세(댓글형)
  // GET /api/v1/event/current/coupon/{eventIndex} 이벤트상세(쿠폰형)
  // POST /api/v1/event/current/entry 이벤트 응모 등록
  // GET /api/v1/event/current/entry/form/{eventIndex} 이벤트 응모하기 조회화면
  // GET /api/v1/event/current/entry/{eventIndex} 이벤트상세(응모형)
  // GET /api/v1/event/old 종료된 이벤트 목록
  // GET /api/v1/event/old/entry/{eventIndex} 이벤트 응모형 당첨자 발표

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
