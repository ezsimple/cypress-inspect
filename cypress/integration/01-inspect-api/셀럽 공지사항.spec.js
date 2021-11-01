import { get, login, report } from '../../libs/common';

describe('셀럽 공지사항', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // 셀럽 공지사항

  it('셀럽 공지사항 페이징', () => {
    const q = 0;
    const url = host + '/api/v1/celeb/notice';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, response);
    });
  });

  it('셀럽 공지사항 단건', () => {
    const q = 0;
    const url = host + '/api/v1/celeb/notice/{noticeIndex}';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, response);
    });
  });
});
