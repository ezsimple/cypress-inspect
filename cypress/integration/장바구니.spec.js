import { login, get, post, put, del, prettyJSON } from '../libs/common';

describe('장바구니', () => {
  let timeOut = 5000; // connection Timeout seconds
  let token = null;

  before(() => {
    if (!token) {
      token = JSON.stringify(window.sessionStorage.getItem('x-oround-token'));
      cy.request({
        method: 'POST',
        url: '/api/v1/login/email',
        body: { id: 'test@upleat.com', password: 'qwer1234' },
      }).then(({ body }) => {
        window.sessionStorage.setItem('x-oround-token', body.token.accessToken);
        token = body.token.accessToken;
      });
    }
  });

  // 장바구니

  it('장바구니 목록', () => {
    const q = 0;
    const url = '/api/v1/orderCart';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('장바구니 저장', () => {
    const q = 0;
    const url = '/api/v1/orderCart';
    const req = {
      insertCartList: [
        {
          productCode: 'string',
          artProductIndex: 0,
          insertCartOptionList: [
            {
              optionMappingIndex: 0,
            },
          ],
          quantity: 0,
        },
      ],
    };
    post(token, url, req).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('장바구니 수정', () => {
    const q = 0;
    const url = '/api/v1/orderCart';
    const req = {};
    put(token, url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('장바구니 수정화면 상품 옵션 목록', () => {
    const cartIndex = 7;
    const url = '/api/v1/orderCart/options/' + cartIndex;
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
