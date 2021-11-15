import { get, login, post, put, report } from '../../libs/common';

describe('셀럽 그라운드 - 통계 (mhlee)', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  it('판매 트랜드(기간중 종합)', () => {
    const q = 0;
    const url = host + '/api/v1/celeb/stat/sell_trend/2021-07-07/2021-07-18';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('방문 트랜드(기간중 집계)', () => {
    const q = 0;
    const url =
      host + '/api/v1/celeb/stat/visit_trend/summary/2021-10-01/2021-10-31';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('방문 트랜드(기간중 일자별)', () => {
    const q = 0;
    const url = host + '/api/v1/celeb/stat/visit_trend/2021-10-01/2021-10-31';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('좋아요 트랜드(기간중 좋아요)', () => {
    const q = 0;
    const url = host + '/api/v1/celeb/stat/like_trend/2021-10-20/2021-10-27';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('리뷰 트랜드(기간중 좋아요)', () => {
    const q = 0;
    const url = host + '/api/v1/celeb/stat/review_trend/2021-10-21/2021-10-28';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('리뷰(기간중 리뷰)', () => {
    const q = 0;
    const url = host + '/api/v1/celeb/stat/reviews/2021-10-21/2021-10-28';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('구글 애널리틱스(등록)', () => {
    const url = host + '/api/v1/celeb/stat/goole_analytics';
    const req = { gaId: 'GAKey1' };
    post(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('구글 애널리틱스(수정)', () => {
    const url = host + '/api/v1/celeb/stat/goole_analytics';
    const req = { gaId: 'GAKey2' };
    put(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
