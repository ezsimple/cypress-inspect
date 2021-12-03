import { get, login, report } from '../../libs/common';

describe('메인 추천 (jhpark)', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // 메인 추천(작업중)

  it('최근 본 히스토리(작업중)', () => {
    const q = 0;
    const url = host + '/api/v1/main/recentHistory';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('추천 셀럽 목록(작업중)', () => {
    const q = 0;
    const url = host + '/api/v1/main/recommendArtist';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('추천 아트워크 목록(작업중)', () => {
    const q = 0;
    const url = host + '/api/v1/main/recommendArtwork';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('추천 상품 목록(작업중)', () => {
    const q = 0;
    const url = host + '/api/v1/main/recommendProduct';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
