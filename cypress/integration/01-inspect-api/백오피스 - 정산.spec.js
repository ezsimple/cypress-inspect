import { post, report } from '../../libs/common';

describe('BO - 정산 (mhlee)', () => {
  const host = Cypress.env('host-bo');
  before(() => {
    // adminLogin();
  });

  // it('정산대기 Summary(mhlee)', () => {
  //   const url = host + '/bo/settleWait/summary';
  //   const req = {};
  //   post(url, req).should((response) => {
  //     // expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });

  it('정산대기 List(mhlee)', () => {
    const url = host + '/bo/settleWait/list';
    const req = {};
    post(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
