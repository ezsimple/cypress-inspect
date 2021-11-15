import { del, get, login, post, report } from '../../libs/common';

describe('리뷰', () => {
  const host = Cypress.env('host-api');
  const artistMemberNo = 5;

  before(() => {
    login();
  });

  it('아트웍 상품 베스트 리뷰 페이징', () => {
    const artProductIndex = 44;
    const url =
      host + '/api/v1/art-product/' + artProductIndex + '/best-review';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('아트웍 상품 리뷰 페이징', () => {
    const artProductIndex = 44;
    const url = host + '/api/v1/art-product/' + artProductIndex + '/review';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('셀럽 그라운드 아트웍 상품 리뷰 페이징', () => {
    const url =
      '/api/v1/celeb-ground/' + artistMemberNo + '/art-product/review';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('(셀럽그라운드 전용) 아트워크 데이터', () => {
    const url =
      host + '/api/v1/celeb-ground/' + artistMemberNo + '/artwork/data';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('오라운더 주문 아이템 리뷰 등록', () => {
    const url = host + 'POST /api/v1/orounder/order-item/review';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('오라운더 리뷰 제거', () => {
    const url = host + '/api/v1/orounder/review';
    const req = {};
    del(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('오라운더 리뷰리마인드', () => {
    const url = host + '/api/v1/orounder/review-remind';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('오라운더 리뷰 작성 가능한 주문 아이템 페이징', () => {
    const url = host + '/api/v1/orounder/reviewable/order-item';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('오라운더 작성한 아트웍 상품 리뷰 페이징', () => {
    const url = host + '/api/v1/orounder/written/art-product/review';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
