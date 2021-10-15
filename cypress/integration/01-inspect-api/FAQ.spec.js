import { get, login, prettyJSON } from '../../libs/common';

describe('FAQ', () => {
  before(() => {
    login();
  });

  // FAQ

  it('셀럽 FAQ 페이징', () => {
    const q = 0;
    const url = '/api/v1/celeb/faq';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('쇼핑몰 FAQ 페이징', () => {
    const q = 0;
    const url = '/api/v1/mall/faq';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('유형 카테고리 코드 리스트', () => {
    const q = 0;
    const url = '/api/v1/type-category/{typeCategoryCode}/code';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
