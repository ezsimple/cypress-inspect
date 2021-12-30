import { get, login, report } from '../../libs/common';

describe('셀럽 그라운드 - 정산 (mhlee)', () => {
  const host = Cypress.env('host-api');
  before(() => {
    // const req = { id: 'joseok76@gmail.com', password: 'as348843!@' };
    const req = { id: 'jonghyuck59@gmail.com', password: 'triplex59@' }; // memberNo : 70
    login(null, req);
  });

  const q = '2021-12-01';

  it('정산내역', () => {
    const url = host + '/api/v1/celeb/settles/' + q;
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  // it('이월/보류내역', () => {
  //   const url = host + '/api/v1/celeb/settle/hold/' + q;
  //   const req = {};
  //   get(url, req).should((response) => {
  //     // expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });

  // it('정산 상세 내역', () => {
  //   const url = host + '/api/v1/celeb/settle/detail/' + q;
  //   const req = {};
  //   get(url, req).should((response) => {
  //     // expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });
});
