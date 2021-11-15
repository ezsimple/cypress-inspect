import { get, login, post, report } from '../../libs/common';

describe('셀럽 그라운드', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // 셀럽 그라운드

  it('셀럽 그라운드 편집', () => {
    const q = 0;
    const url = host + '/api/v1/celeb-ground/ground';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('그라운드 커버 이미지 업로드', () => {
    const q = 0;
    const url = host + '/api/v1/celeb-ground/ground/cover/fileUpload';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('셀럽 그라운드 정보', () => {
    const shopId = 'bavaa';
    const url = host + '/api/v1/celeb-ground/ground/' + shopId;
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
