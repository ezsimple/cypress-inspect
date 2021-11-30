import { get, login, report } from '../../libs/common';

describe('아트워크 상품 옵션(★)', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // it('/bo/product/getOptionItemListByProductItem (BO)', () => {
  //   const host = Cypress.env('host-bo');
  //   const url = host + '/bo/product/getOptionItemListByProductItem';
  //   const req = {
  //     productUpperCode: '105',
  //     productMiddleCode: '001',
  //     productCode: '1050010001', // artProductIndex : 55에 해당하는 productCode 입니다.
  //     useYn: 'Y',
  //     languageId: 'KO',
  //   };
  //   get(url, req).should((response) => {
  //     expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });

  it('/options', () => {
    const indexes = new Set([28898 /*폰케이스*/]);
    indexes.forEach((o) => {
      const host = Cypress.env('host-api');
      const url = host + '/api/v1/art-product/' + o + '/options';
      const req = {};
      get(url, req).should((response) => {
        expect(response.status).to.eq(200);
        report(url, req, response);
      });
    });
  });
});
