import { get, login, report } from '../../libs/common';

describe('회원 포인트', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // 회원포인트

  it('보유 포인트 조회', () => {
    const q = 0;
    const url = host + '/api/v1/point/member-hold-point';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
