import { get, login, post, prettyJSON } from '../../libs/common';

describe('셀럽 그라운드 - 통계', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // 셀럽 본인 인증

  it('일간 통계', () => {
    const q = 0;
    const url = host + '/api/v1/celeb/stat/day/-7';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log('/api/v1/celeb/stat/day/-7', prettyJSON(response));
    });
  });

  // it('월간 통계', () => {
  //   const q = 0;
  //   const url = host + '/api/v1/celeb/stat/month/-1';
  //   const req = {};
  //   get(url, req).should((response) => {
  //     expect(response.status).to.eq(200);
  //     console.log('/api/v1/celeb/stat/month/-1', prettyJSON(response));
  //   });
  // });
});
