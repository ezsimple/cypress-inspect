import { getToken, get, prettyJSON } from '../libs/common';

describe('유형 카테고리', () => {
  const token = getToken();
  before(() => {
    if (!token) {
      login();
    }
  });

  // 유형 카테고리

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
