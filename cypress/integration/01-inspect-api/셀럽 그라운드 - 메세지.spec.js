import { del, get, login, post, report } from '../../libs/common';

describe('셀럽 그라운드 - 메세지', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // 셀럽 그라운드 - 메세지

  it('전체 메세지 삭제', () => {
    const q = 0;
    const url = host + '/api/v1/celeb-ground/message';
    const req = {};
    del(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('전체 메세지 조회', () => {
    const q = 0;
    const url = host + '/api/v1/celeb-ground/message';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('메세지 보내기', () => {
    const q = 0;
    const url = host + '/api/v1/celeb-ground/message';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('단건 메세지 삭제', () => {
    const q = 0;
    const url = host + '/api/v1/celeb-ground/message/{artistMessageIndex}';
    const req = {};
    del(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
