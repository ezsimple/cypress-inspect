import { get, login, report } from '../../libs/common';

describe('카테고리', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // 카테고리

  it('카테고리 전체 목록 조회', () => {
    const q = 0;
    const url = host + '/api/v1/display/category';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, response);
    });
  });

  // it('카테고리 목록 조회', () => {
  //   const q = 0;
  //   const url = host + '/api/v1/display/category/{categoryIndex}';
  //   const req = {};
  //   get(url, req).should((response) => {
  //     expect(response.status).to.eq(200);
  //     report(url, response);
  //   });
  // });

  // it('카테고리 필터(옵션) 목록', () => {
  //   const q = 0;
  //   const url = host + '/api/v1/display/categoryFilter/{categoryIndex}';
  //   const req = {};
  //   get(url, req).should((response) => {
  //     expect(response.status).to.eq(200);
  //     report(url, response);
  //   });
  // });
});
