import { get, login, prettyJSON } from '../../libs/common';

describe('아트워크 상품 옵션(★)', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  it('사용자 선택 옵션(BO)', () => {
    const host = Cypress.env('host-bo');
    const url = host + '/bo/product/getOptionItemListByProductItem';
    const req = {
      productUpperCode: '105',
      productMiddleCode: '001',
      productCode: '1050010001', // artProductIndex : 55에 해당하는 productCode 입니다.
      useYn: 'Y',
      languageId: 'KO',
    };
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('사용자 선택 옵션(API)', () => {
    const artProducts = new Set([55]);
    for (const o of artProducts) {
      const host = Cypress.env('host-api');
      const url = host + '/api/v1/art-product/' + o + '/options';
      const req = {};
      get(url, req).should((response) => {
        expect(response.status).to.eq(200);
        console.log(prettyJSON(response));
      });
    }
  });
});
