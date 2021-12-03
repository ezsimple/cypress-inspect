import { get, login, report } from '../../libs/common';

describe('배너', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // 배너

  it('배너 리스트', () => {
    const q = 0;
    const url = host + '/api/v1/banner';
    const req = { displayAreaCode: 165003 };
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
