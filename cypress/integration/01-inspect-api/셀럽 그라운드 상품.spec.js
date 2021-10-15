import { del, get, login, prettyJSON, put } from '../../libs/common';

describe('셀럽 그라운드 상품', () => {
  before(() => {
    login();
  });

  // 셀럽 그라운드 상품

  it('셀럽 그라운드 상품 삭제', () => {
    const q = 0;
    const url = '/api/v1/celeb-ground/{artistMemberNo}/product';
    const req = {};
    del(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('셀럽 그라운드 상품 목록', () => {
    const q = 0;
    const url = '/api/v1/celeb-ground/{artistMemberNo}/product';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('개인화 아트워크상품 추천', () => {
    const q = 0;
    const url = '/api/v1/celeb-ground/{artistMemberNo}/product/ai1';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('셀럽 그라운드 상품 공개여부', () => {
    const q = 0;
    const url = '/api/v1/celeb-ground/{artistMemberNo}/product/openYn/{openYn}';
    const req = {};
    put(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('셀럽 그라운드 상품 순서변경', () => {
    const q = 0;
    const url = '/api/v1/celeb-ground/{artistMemberNo}/product/sortOrder';
    const req = {};
    put(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
