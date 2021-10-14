import { login, getToken, get, post, prettyJSON } from '../libs/common';

describe('마이페이지 - 메인', () => {
  const token = getToken();
  before(() => {
    login();
  });

  // 마이페이지 - 메인

  it('회원 정보 조회', () => {
    const q = 0;
    const url = '/api/v1/member/info';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('프로필 편집 정보 조회', () => {
    const q = 0;
    const url = '/api/v1/member/profile';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('프로필 저장', () => {
    const q = 0;
    const url = '/api/v1/member/profile';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('프로필 이미지 업로드', () => {
    const q = 0;
    const url = '/api/v1/member/profile/image/fileUpload';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });
});
