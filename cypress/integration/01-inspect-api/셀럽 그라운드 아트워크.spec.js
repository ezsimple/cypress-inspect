import { del, get, login, prettyJSON, put } from '../libs/common';

describe('셀럽 그라운드 아트워크', () => {
  before(() => {
    login();
  });

  // 셀럽 그라운드 아트워크

  it('셀럽 그라운드 아트워크 삭제', () => {
    const q = 0;
    const url = '/api/v1/celeb-ground/{artistMemberNo}/artwork';
    const req = {};
    del(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('셀럽 그라운드 아트워크 목록', () => {
    const q = 0;
    const url = '/api/v1/celeb-ground/{artistMemberNo}/artwork';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('셀럽 그라운드 아트워크 공개여부', () => {
    const q = 0;
    const url = '/api/v1/celeb-ground/{artistMemberNo}/artwork/openYn/{openYn}';
    const req = {};
    put(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('셀럽 그라운드 아트워크 순서변경', () => {
    const q = 0;
    const url = '/api/v1/celeb-ground/{artistMemberNo}/artwork/sortOrder';
    const req = {};
    put(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
