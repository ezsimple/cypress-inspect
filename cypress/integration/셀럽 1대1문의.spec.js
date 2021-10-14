import { getToken, get, post, prettyJSON } from '../libs/common';

describe('셀럽 1:1문의', () => {
  const token = getToken();
  before(() => {
    login();
  });

  // 셀럽 1:1문의

  it('셀럽 1:1문의 페이징', () => {
    const q = 0;
    const url = '/api/v1/celeb/inquiry';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('셀럽 1:1문의 등록', () => {
    const q = 0;
    const url = '/api/v1/celeb/inquiry';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('셀럽 1:1문의 재등록', () => {
    const q = 0;
    const url = '/api/v1/celeb/re-inquiry';
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
