import { get, login, report } from '../../libs/common';

describe('아트워크 상품 상세 Summary (mhlee)', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });
  const q = '28052';

  // it('아티스트 Summary', () => {
  //   const url = host + '/api/v1/art-product/' + q + '/artist/summary';
  //   const req = {};
  //   get(url, req).should((response) => {
  //     expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });

  it('아트워크 상품 요약', () => {
    const url = host + '/api/v1/art-product/' + q + '/summary';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  // it('아트워크 정보', () => {
  //   const url = host + '/api/v1/art-product/' + q + '/artwork/summary';
  //   const req = {};
  //   get(url, req).should((response) => {
  //     expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });
});
