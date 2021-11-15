import { get, login, report } from '../../libs/common';

describe('아트워크 상품 상세 이미지', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // 서버 편집 이미지 : 0: 대표이미지, 1:연출이미지, 2: 아트워크이미지
  it('/edit/images', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/edit/images';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  // BO의 상품상세>연출부가이미지를 사용한다.
  it('/images', () => {
    const q = '55';
    const url = host + '/api/v1/art-product/' + q + '/images';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
