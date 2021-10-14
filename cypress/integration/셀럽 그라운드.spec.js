import { login, getToken, get, post, prettyJSON } from '../libs/common';

describe('셀럽 그라운드', () => {
  const token = getToken();
  before(() => {
    login();
  });

  // 셀럽 그라운드

  it('셀럽 그라운드 편집', () => {
    const q = 0;
    const url = '/api/v1/celeb-ground/ground';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('그라운드 커버 이미지 업로드', () => {
    const q = 0;
    const url = '/api/v1/celeb-ground/ground/cover/fileUpload';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('셀럽 그라운드 정보', () => {
    const q = 0;
    const url = '/api/v1/celeb-ground/ground/{shopId}';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
