import { get, login, report } from '../../libs/common';

describe('유형 카테고리', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // 유형 카테고리

  it('유형 카테고리 코드 리스트', () => {
    const q = 0;
    const url = host + '/api/v1/type-category/{typeCategoryCode}/code';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
