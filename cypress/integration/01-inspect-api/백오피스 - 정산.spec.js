import { post, report } from '../../libs/common';

describe('BO - 정산 (mhlee)', () => {
  const host = Cypress.env('host-bo');
  before(() => {
    // adminLogin();
  });

  it('정산확정 내역', () => {
    const url = host + '/bo/settleComplete/info';
    const req = {
      shopId: null,
      memberId: 'test@upleat.com',
      payAccountType: null,
    };
    post(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
