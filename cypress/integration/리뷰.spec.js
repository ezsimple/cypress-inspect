import { login, get, post, put, del, prettyJSON } from '../libs/InspectLib';

describe('리뷰', () => {
  let timeOut = 5000; // connection Timeout seconds
  let token = null;
  const artistMemberNo = 5;

  before(() => {
    if (!token) {
      token = JSON.stringify(window.sessionStorage.getItem('x-oround-token'));
      cy.request({
        method: 'POST',
        url: '/api/v1/login/email',
        body: { id: 'test5@upleat.com', password: 'qwer1234' },
      }).then(({ body }) => {
        window.sessionStorage.setItem('x-oround-token', body.token.accessToken);
        token = body.token.accessToken;
      });
    }
  });

  it('아트웍 상품 베스트 리뷰 페이징', () => {
    const artProductIndex = 44;
    const url = '/api/v1/art-product/' + artProductIndex + '/best-review';
    const req = {};
    get(token, url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('아트웍 상품 리뷰 페이징', () => {
    const artProductIndex = 44;
    const url = '/api/v1/art-product/' + artProductIndex + '/review';
    const req = {};
    get(token, url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('셀럽 그라운드 아트웍 상품 리뷰 페이징', () => {
    const url =
      '/api/v1/celeb-ground/' + artistMemberNo + '/art-product/review';
    const req = {};
    get(token, url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('(셀럽그라운드 전용) 아트워크 데이터', () => {
    const url = '/api/v1/celeb-ground/' + artistMemberNo + '/artwork/data';
    const req = {};
    get(token, url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('오라운더 주문 아이템 리뷰 등록', () => {
    const url = 'POST /api/v1/orounder/order-item/review';
    const req = {};
    post(token, url, req).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('오라운더 리뷰 제거', () => {
    const url = '/api/v1/orounder/review';
    const req = {};
    del(token, url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('오라운더 리뷰리마인드', () => {
    const url = '/api/v1/orounder/review-remind';
    const req = {};
    get(token, url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('오라운더 리뷰 작성 가능한 주문 아이템 페이징', () => {
    const url = '/api/v1/orounder/reviewable/order-item';
    const req = {};
    get(token, url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('오라운더 작성한 아트웍 상품 리뷰 페이징', () => {
    const url = '/api/v1/orounder/written/art-product/review';
    const req = {};
    get(token, url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
