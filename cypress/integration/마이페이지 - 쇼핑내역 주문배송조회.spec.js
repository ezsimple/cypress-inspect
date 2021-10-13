import { login, get, post, put, del, prettyJSON } from '../libs/InspectLib';

describe('마이페이지 - 쇼핑내역 주문배송조회', () => {
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

  // 마이페이지 - 쇼핑내역>주문배송조회

  it('주문상태 변경 이력 목록', () => {
    const q = 0;
    const url = '/api/v1/orderHistory';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('주문 목록', () => {
    const q = 0;
    const url = '/api/v1/orderShipping';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('주문취소 처리', () => {
    const q = 0;
    const url = '/api/v1/orderShipping/cancel';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('주문취소 양식', () => {
    const q = 0;
    const url = '/api/v1/orderShipping/cancel/{orderNo}';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('교환신청 처리(작업중)', () => {
    const q = 0;
    const url = '/api/v1/orderShipping/exchange';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('교환신청 양식', () => {
    const q = 0;
    const url = '/api/v1/orderShipping/exchange/{orderNo}';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('배송정보 수정', () => {
    const q = 0;
    const url = '/api/v1/orderShipping/shippingInfo';
    const req = {};
    put(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('주문상세보기', () => {
    const q = 0;
    const url = '/api/v1/orderShipping/{orderNo}';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('교환신청 사진첨부 업로드', () => {
    const q = 0;
    const url = '/api/v1/orderShippping/exchange/image/fileUpload';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('반품신청 사진첨부 업로드', () => {
    const q = 0;
    const url = '/api/v1/orderShippping/returning/image/fileUpload';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });
});
