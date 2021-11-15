import { get, login, post, report } from '../../libs/common';

describe('마이페이지 - 메인', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // 마이페이지 - 메인

  it('회원 정보 조회', () => {
    const q = 0;
    const url = host + '/api/v1/member/info';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('프로필 편집 정보 조회', () => {
    const q = 0;
    const url = host + '/api/v1/member/profile';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('프로필 저장', () => {
    const q = 0;
    const url = host + '/api/v1/member/profile';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('프로필 이미지 업로드', () => {
    const q = 0;
    const url = host + '/api/v1/member/profile/image/fileUpload';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });
});
