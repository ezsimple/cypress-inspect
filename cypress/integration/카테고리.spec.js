import { getToken, get, prettyJSON } from '../libs/common';

describe('카테고리', () => {
  const token = getToken();
  before(() => {
    if (!token) {
      login();
    }
  });

  // 카테고리

  it('카테고리 전체 목록 조회', () => {
    const q = 0;
    const url = '/api/v1/display/category';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('카테고리 목록 조회', () => {
    const q = 0;
    const url = '/api/v1/display/category/{categoryIndex}';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('카테고리 필터(옵션) 목록', () => {
    const q = 0;
    const url = '/api/v1/display/categoryFilter/{categoryIndex}';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
