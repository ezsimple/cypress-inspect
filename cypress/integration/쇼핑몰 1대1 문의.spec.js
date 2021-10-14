import { login, getToken, get, post, prettyJSON } from '../libs/common';

describe('쇼핑몰 1:1문의', () => {
  const token = getToken();
  before(() => {
    login();
  });

  // 쇼핑몰 1:1문의

  it('쇼핑몰 1:1문의 페이징', () => {
    const q = 0;
    const url = '/api/v1/buyer/inquiry';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('쇼핑몰 1:1문의 등록', () => {
    const q = 0;
    const url = '/api/v1/buyer/inquiry';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('쇼핑몰 1:1문의 재등록', () => {
    const q = 0;
    const url = '/api/v1/buyer/re-inquiry';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('유형 카테고리 코드 리스트', () => {
    const q = 0;
    const url = '/api/v1/type-category/{typeCategoryCode}/code';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
