import { get, login, report } from '../../libs/common';

describe('팝업', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // 팝업

  it('팝업 리스트', () => {
    const q = 0;
    const url = host + '/api/v1/popup';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
