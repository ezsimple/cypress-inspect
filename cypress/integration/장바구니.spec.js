import { get, login, post, prettyJSON, put } from '../libs/common';

describe('장바구니', () => {
  const token = getToken();
  before(() => {
    if (!token) {
      login();
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
