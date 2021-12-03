import { get, login, report } from '../../libs/common';

describe('셀럽 그라운드 - 정산 (mhlee)', () => {
  const host = Cypress.env('host-api');
  before(() => {
    const req = { id: 'test@upleat.com', password: 'asdf123!' };
    login(null, req);
  });

  const q = '2021-11-04';

  // it('정산내역', () => {
  //   const url = host + '/api/v1/celeb/settles/' + q;
  //   const req = {};
  //   get(url, req).should((response) => {
  //     // expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });

  // it('이월/보류내역', () => {
  //   const q = '2021-11-04';
  //   const url = host + '/api/v1/celeb/settle/hold/' + q;
  //   const req = {};
  //   get(url, req).should((response) => {
  //     // expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });

  it('정산 상세 내역', () => {
    const q = '2021-11-01';
    const url = host + '/api/v1/celeb/settle/detail/' + q;
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
