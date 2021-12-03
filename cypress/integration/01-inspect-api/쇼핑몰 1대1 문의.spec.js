import { get, login, post, report } from '../../libs/common';

describe('쇼핑몰 1:1문의', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // 쇼핑몰 1:1문의

  it('쇼핑몰 1:1문의 페이징', () => {
    const q = 0;
    const url = host + '/api/v1/buyer/inquiry';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('쇼핑몰 1:1문의 등록', () => {
    const q = 0;
    const url = host + '/api/v1/buyer/inquiry';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('쇼핑몰 1:1문의 재등록', () => {
    const q = 0;
    const url = host + '/api/v1/buyer/re-inquiry';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
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
