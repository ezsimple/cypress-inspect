import { get, prettyJSON } from '../libs/InspectLib';

describe('아트워크 상품 상세', () => {
  let timeOut = 5000; // connection Timeout seconds
  let token = null;

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

  it('아티스트 Summary', () => {
    const q = '44';
    const url = '/api/v1/art-product/' + q + '/artist/summary';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('아트워크 이미지와 아트워크명 페이징', () => {
    const q = '44';
    const url = '/api/v1/art-product/44/artworks';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('아트워크 상품 베스트 리뷰', () => {
    const q = '44';
    const url = '/api/v1/art-product/' + q + '/best/reviews';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('상품 배송 정보', () => {
    const q = '44';
    const url = '/api/v1/art-product/' + q + '/delivery/info';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('아트워크 상품 편집 이미지 목록', () => {
    const q = '44';
    const url = '/api/v1/art-product/' + q + '/edit/images';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('아트워크 상품 정보', () => {
    const q = '44';
    const url = '/api/v1/art-product/' + q + '/info';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('아트워크 상품 좋아요 카운터', () => {
    const q = '44';
    const url = '/api/v1/art-product/' + q + '/like/count';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('상품기본정보(상품고시)', () => {
    const q = '44';
    const url = '/api/v1/art-product/' + q + '/notify';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('사용자 선택 옵션', () => {
    const q = '44';
    const url = '/api/v1/art-product/' + q + '/options';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('상품 인쇄 안내', () => {
    const q = '44';
    const url = '/api/v1/art-product/' + q + '/print/guide';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('아트워크 상품 리뷰 카운터', () => {
    const q = '44';
    const url = '/api/v1/art-product/' + q + '/review/count';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('상품 SEO', () => {
    const q = '44';
    const url = '/api/v1/art-product/' + q + '/seo';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('아트워크 상품 시리즈', () => {
    const q = '44';
    const url = '/api/v1/art-product/' + q + '/series';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('상품 배송/교환/반품 안내', () => {
    const q = '44';
    const url = '/api/v1/art-product/' + q + '/shipping/guide';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('상품 사이즈 안내', () => {
    const q = '44';
    const url = '/api/v1/art-product/' + q + '/size/guide';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('아트워크 상품 요약', () => {
    const q = '44';
    const url = '/api/v1/art-product/' + q + '/summary';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('아트워크 상품 요약', () => {
    const q = '44';
    const url = '/api/v1/art-product/' + q + '/summary';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('상품 세탁 및 관리', () => {
    const q = '44';
    const url = '/api/v1/art-product/' + q + '/wash/info';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
