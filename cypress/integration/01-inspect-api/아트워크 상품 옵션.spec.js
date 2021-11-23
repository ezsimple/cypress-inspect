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

  it('/options (24214)', () => {
    const o = 24214;
    const host = Cypress.env('host-api');
    const url = host + '/api/v1/art-product/' + o + '/options';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
  it('/options (21716)', () => {
    const o = 21716;
    const host = Cypress.env('host-api');
    const url = host + '/api/v1/art-product/' + o + '/options';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
  it('/options (21246)', () => {
    const o = 21246;
    const host = Cypress.env('host-api');
    const url = host + '/api/v1/art-product/' + o + '/options';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
  it('/options (21190)', () => {
    const o = 21190;
    const host = Cypress.env('host-api');
    const url = host + '/api/v1/art-product/' + o + '/options';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
  it('/options (21246)', () => {
    const o = 21246;
    const host = Cypress.env('host-api');
    const url = host + '/api/v1/art-product/' + o + '/options';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
  it('/options (24655)', () => {
    const o = 24655;
    const host = Cypress.env('host-api');
    const url = host + '/api/v1/art-product/' + o + '/options';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
  it('/options (22129)', () => {
    const o = 22129;
    const host = Cypress.env('host-api');
    const url = host + '/api/v1/art-product/' + o + '/options';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
