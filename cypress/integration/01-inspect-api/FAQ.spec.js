import { get, login, report } from '../../libs/common';

describe('FAQ', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // FAQ

  it('셀럽 FAQ 페이징', () => {
    const q = 0;
    const url = host + '/api/v1/celeb/faq';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('쇼핑몰 FAQ 페이징', () => {
    const q = 0;
    const url = host + '/api/v1/mall/faq';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

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
