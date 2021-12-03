import { get, login, report } from '../../libs/common';

describe('아트워크 상품 설명 (mhlee)', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  const q = 21178;

  it('상품설명', () => {
    const url = host + '/api/v1/art-product/' + q + '/summary';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('상품기본정보', () => {
    const url = host + '/api/v1/art-product/' + q + '/notify';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('인쇄안내', () => {
    const url = host + '/api/v1/art-product/' + q + '/print/guide';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('SEO', () => {
    const url = host + '/api/v1/art-product/' + q + '/seo';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('배송/교환/반품 안내', () => {
    const url = host + '/api/v1/art-product/' + q + '/shipping/guide';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('사이즈 안내', () => {
    const url = host + '/api/v1/art-product/' + q + '/size/guide';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('세탁 및 관리', () => {
    const url = host + '/api/v1/art-product/' + q + '/wash/info';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
