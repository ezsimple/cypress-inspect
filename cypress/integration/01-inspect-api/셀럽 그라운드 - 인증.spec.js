import { get, login, post, prettyJSON } from '../../libs/common';

describe('셀럽 본인인증', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // 셀럽 본인 인증

  it('인증 정보 조회', () => {
    const q = 0;
    const url = host + '/api/v1/celeb/auth';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  // it('본인인증 완료', () => {
  //   const q = 0;
  //   const url = host + '/api/v1/celeb/auth';
  //   const req = {};
  //   post(url, req).should((response) => {
  //     expect(response.status).to.eq(201);
  //     console.log(prettyJSON(response));
  //   });
  // });
});
