import { get, login, post, report } from '../../libs/common';

describe('아트워크 편집기', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // 아트워크 편집기

  it('아트워크 편집기 - 원가 조회', () => {
    const q = 0;
    const url = host + '/api/v1/artwork/editor/cost';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('아트워크 편집기 - 정보 조회', () => {
    const q = 0;
    const url = host + '/api/v1/artwork/editor/{artworkIndex}';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('아트워크 편집기 - 정보 저장', () => {
    const q = 0;
    const url = host + '/api/v1/artwork/editor/{artworkIndex}';
    const req = {};
    post(url, null).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('아트워크 편집기 - 이미지 등록', () => {
    const q = 0;
    const url = host + '/api/v1/artwork/editor/{artworkIndex}/image/fileUpload';
    const req = {};
    post(url, null).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('신규 아트워크 등록', () => {
    const q = 0;
    const url = host + '/api/v1/artwork/new/fileUpload';
    const req = {};
    post(url, null).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });
});
