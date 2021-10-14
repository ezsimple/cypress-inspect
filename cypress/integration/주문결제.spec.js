import { getToken, get, post, prettyJSON } from '../libs/common';

describe('주문/결제', () => {
  const token = getToken();
  before(() => {
    if (!token) {
      login();
    }
  });

  // 주문/결제

  it('결제하기', () => {
    const q = 0;
    const url = '/api/v1/order';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('주문서_주문상품조회', () => {
    const q = 0;
    const url = '/api/v1/order/item';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('주문저장결과', () => {
    const q = 0;
    const url = '/api/v1/order/result/{orderNo}';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
