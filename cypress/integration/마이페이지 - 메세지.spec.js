import { del, get, getToken, login, prettyJSON } from '../libs/common';

describe('마이페이지 - 메세지', () => {
  const token = getToken();
  before(() => {
    if (!token) {
      login();
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
