import { get, login, post, prettyJSON, put } from '../libs/common';

describe('장바구니', () => {
  before(() => {
    login();
  });

  // 장바구니

  it('장바구니 목록', () => {
    const q = 0;
    const url = '/api/v1/orderCart';
    const req = {};
    get(url, req).should((response) => {
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
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('장바구니 수정', () => {
    const q = 0;
    const url = '/api/v1/orderCart';
    const req = {};
    put(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('장바구니 수정화면 상품 옵션 목록', () => {
    const cartIndex = 7;
    const url = '/api/v1/orderCart/options/' + cartIndex;
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
