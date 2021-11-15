import { get, login, report } from '../../libs/common';

describe('카테고리 (jhpark)', () => {
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
      report(url, req, response);
      const { categorylist } = response.body;
      let categories = [];
      categorylist.forEach((element) => {
        const { categoryIndex } = element;
        categories.push(categoryIndex);
      });
      Cypress.env('categories', categories);
    });
  });

  it('카테고리 목록 조회', () => {
    const categories = Cypress.env('categories');
    categories.forEach((categoryIndex) => {
      const url = host + '/api/v1/display/category/' + categoryIndex;
      const req = {};
      get(url, req).should((response) => {
        expect(response.status).to.eq(200);
        report(url, req, response);
      });
    });
  });

  it('카테고리 필터(옵션) 목록', () => {
    const categories = [2]; // 이게 뭐지??
    categories.forEach((categoryIndex) => {
      const url = host + '/api/v1/display/categoryFilter/' + categoryIndex;
      const req = {};
      get(url, req).should((response) => {
        expect(response.status).to.eq(200);
        report(url, req, response);
      });
    });
  });

  it('셀럽 카테고리 전체 목록 조회', () => {
    const artistMemberNo = 5;
    const url =
      host + '/api/v1/display/category/celeb-ground/' + artistMemberNo;
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
