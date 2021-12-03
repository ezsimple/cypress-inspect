import { get, login, report } from '../../libs/common';

describe('셀럽 그라운드 상품 (jhpark)', () => {
  const host = Cypress.env('host-api');
  before(() => {
    const req = { id: 'jonghyuck59@gmail.com', password: 'triplex59@' }; // memberNo : 70
    login(null, req);
  });

  // 셀럽 그라운드 상품

  it('셀럽 그라운드 상품 목록', () => {
    const q = 0;
    const artistMemberNo = Cypress.env('memberNo');
    const url = host + '/api/v1/celeb-ground/' + artistMemberNo + '/product';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  // it('개인화 아트워크상품 추천', () => {
  //   const q = 0;
  //   const url = host + '/api/v1/celeb-ground/{artistMemberNo}/product/ai1';
  //   const req = {};
  //   get(url, req).should((response) => {
  //     // expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });

  // it('셀럽 그라운드 상품 공개여부', () => {
  //   const q = 0;
  //   const url =
  //     host + '/api/v1/celeb-ground/{artistMemberNo}/product/openYn/{openYn}';
  //   const req = {};
  //   put(url, req).should((response) => {
  //     // expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });

  // it('셀럽 그라운드 상품 순서변경', () => {
  //   const q = 0;
  //   const url =
  //     host + '/api/v1/celeb-ground/{artistMemberNo}/product/sortOrder';
  //   const req = {};
  //   put(url, req).should((response) => {
  //     // expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });

  // it('셀럽 그라운드 상품 삭제', () => {
  //   const q = 0;
  //   const url = host + '/api/v1/celeb-ground/{artistMemberNo}/product';
  //   const req = {};
  //   del(url, req).should((response) => {
  //     // expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });
});
