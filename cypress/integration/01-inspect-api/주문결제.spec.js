import { get, login, post, report } from '../../libs/common';

describe('주문/결제', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // 주문/결제

  it('결제하기', () => {
    const q = 0;
    const url = host + '/api/v1/order';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('주문서_주문상품조회', () => {
    const q = 0;
    const url = host + '/api/v1/order/item';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('주문저장결과', () => {
    const q = 0;
    const url = host + '/api/v1/order/result/{orderNo}';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
