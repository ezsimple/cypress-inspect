import { get, login, report } from '../../libs/common';

describe('메인 추천 (jhpark)', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  it('이 아트워크와 함께 구매한 상품(작업중)', () => {
    const q = 0;
    const url = host + '/etc/recommendProductAssoc';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, response);
    });
  });

  it('이 아트워크와 유사해요(작업중)', () => {
    const q = 0;
    const url = host + '/etc/recommendArtworkDesign';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, response);
    });
  });
});
