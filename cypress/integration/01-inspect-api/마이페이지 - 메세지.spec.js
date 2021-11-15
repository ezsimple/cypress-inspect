import { del, get, login, report } from '../../libs/common';

describe('마이페이지 - 메세지', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // 마이페이지 - 메세지

  it('전체 메세지 삭제', () => {
    const q = 0;
    const url = host + '/api/v1/member/message/all';
    const req = {};
    del(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('전체 메세지 조회', () => {
    const q = 0;
    const url = host + '/api/v1/member/message/all';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('셀럽 별 메세지 삭제', () => {
    const q = 0;
    const url = host + '/api/v1/member/message/celeb';
    const req = {};
    del(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('셀럽 별 메세지 조회', () => {
    const q = 0;
    const url = host + '/api/v1/member/message/celeb';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('단건 메세지 삭제', () => {
    const q = 0;
    const url = host + '/api/v1/member/message/{memberMessageIndex}';
    const req = {};
    del(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
