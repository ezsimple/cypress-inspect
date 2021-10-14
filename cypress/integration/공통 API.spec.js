import { login, getToken, get, prettyJSON } from '../libs/common';

describe('공통 API', () => {
  const token = getToken();
  before(() => {
    if (!token) {
      login();
    }
  });

  it('공통코드 List', () => {
    const typeCode = '100';
    const url = '/api/v1/common-code-list/' + typeCode;
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('공통코드 Name', () => {
    const commonCode = '100001';
    const url = '/api/v1/common-code-name/' + commonCode;
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('IP 국가코드조회', () => {
    const url = '/api/v1/kisa/ipascc';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('배송지 조회', () => {
    const url = '/api/v1/order-shipping-info';
    const req = {
      cartIndexList: [0],
      position: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      shippingIndex: 0,
    };
    get(token, url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('오라운드 공통 기본정보 조회', () => {
    const url = '/api/v1/oround-info';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('Sagawa 우편번호조회', () => {
    const postCode = '100';
    const url = '/api/v1/sagawa/post/' + postCode;
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('아트워크 상품 검색(페이징)', () => {
    const queryString = '아트';
    const url = '/api/v1/search/art-products/' + queryString;
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('아트워크 검색(페이징)', () => {
    const queryString = '상품';
    const url = '/api/v1/search/artworks/' + queryString;
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
