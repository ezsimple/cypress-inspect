import { get, login, report } from '../../libs/common';

describe('아트워크 상품 상세 (mhlee)', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // it('아티스트 Summary', () => {
  //   const q = '44';
  //   const url = host + '/api/v1/art-product/' + q + '/artist/summary';
  //   const req = {};
  //   get(url, req).should((response) => {
  //     expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });

  // it('아트워크 이미지와 아트워크명 페이징', () => {
  //   const q = '44';
  //   const url = host + '/api/v1/art-product/' + q + '/artist/series';
  //   const req = {};
  //   get(url, req).should((response) => {
  //     expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });

  // it('아트워크 상품 베스트 리뷰', () => {
  //   const q = '45';
  //   const url = host + '/api/v1/art-product/' + q + '/best/reviews';
  //   const req = {};
  //   get(url, req).should((response) => {
  //     expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });

  // it('상품 배송 정보', () => {
  //   const q = '44';
  //   const url = host + '/api/v1/art-product/' + q + '/delivery/info';
  //   const req = {};
  //   get(url, req).should((response) => {
  //     expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });

  // it('아트워크 상품 편집 이미지 목록', () => {
  //   const q = '44';
  //   const url = host + '/api/v1/art-product/' + q + '/edit/images';
  //   const req = {};
  //   get(url, req).should((response) => {
  //     expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });

  // it('아트워크 상품 상세 이미지', () => {
  //   const q = '55';
  //   const url = host + '/api/v1/art-product/' + q + '/images';
  //   const req = {};
  //   get(url, req).should((response) => {
  //     expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });

  // it('상품기본정보(상품고시)', () => {
  //   const q = '44';
  //   const url = host + '/api/v1/art-product/' + q + '/notify';
  //   const req = {};
  //   get(url, req).should((response) => {
  //     expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });

  // it('사용자 선택 옵션', () => {
  //   const q = '44';
  //   const url = host + '/api/v1/art-product/' + q + '/options';
  //   const req = {};
  //   get(url, req).should((response) => {
  //     expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });

  // it('상품 인쇄 안내', () => {
  //   const q = '44';
  //   const url = host + '/api/v1/art-product/' + q + '/print/guide';
  //   const req = {};
  //   get(url, req).should((response) => {
  //     expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });

  // it('상품 seo', () => {
  //   const q = '44';
  //   const url = host + '/api/v1/art-product/' + q + '/seo';
  //   const req = {};
  //   get(url, req).should((response) => {
  //     expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });

  // it('아트워크 상품 시리즈', () => {
  //   const q = '44';
  //   const url = host + '/api/v1/art-product/' + q + '/series';
  //   const req = {};
  //   get(url, req).should((response) => {
  //     expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });

  // it('상품 배송/교환/반품 안내', () => {
  //   const q = '44';
  //   const url = host + '/api/v1/art-product/' + q + '/shipping/guide';
  //   const req = {};
  //   get(url, req).should((response) => {
  //     expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });

  // it('상품 사이즈 안내', () => {
  //   const q = '44';
  //   const url = host + '/api/v1/art-product/' + q + '/size/guide';
  //   const req = {};
  //   get(url, req).should((response) => {
  //     expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });

  // it('아트워크 상품 요약', () => {
  //   const q = '55';
  //   const url = host + '/api/v1/art-product/' + q + '/summary';
  //   const req = {};
  //   get(url, req).should((response) => {
  //     expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });

  // it('상품 세탁 및 관리', () => {
  //   const q = '44';
  //   const url = host + '/api/v1/art-product/' + q + '/wash/info';
  //   const req = {};
  //   get(url, req).should((response) => {
  //     expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });

  // it('아트워크 정보', () => {
  //   const q = '44';
  //   const url = host + '/api/v1/art-product/' + q + '/artwork/summary';
  //   const req = {};
  //   get(url, req).should((response) => {
  //     expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });

  it('아트워크 상품 좋아요 카운터', () => {
    const q = '55';
    const url = host + '/api/v1/art-product/' + q + '/like/count';
    const req = { memberNo: 5 };
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
