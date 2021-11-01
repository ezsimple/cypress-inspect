import { get, login, report } from '../../libs/common';

describe('쇼핑몰 공지사항', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // 쇼핑몰 공지사항

  it('쇼핑몰 공지사항 페이징', () => {
    const q = 0;
    const url = host + '/api/v1/mall/notice';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, response);
    });
  });

  it('쇼핑몰 공지사항 단건', () => {
    const q = 0;
    const url = host + '/api/v1/mall/notice/{noticeIndex}';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, response);
    });
  });
});
