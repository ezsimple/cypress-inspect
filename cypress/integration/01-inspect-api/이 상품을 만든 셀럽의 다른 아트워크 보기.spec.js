import { get, login, report } from '../../libs/common';

describe('이 상품을 만든 셀럽의 다른 아트워크 보기 (mhlee)', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  const q = 22098;

  it('이 상품을 만든 셀럽의 다른 아트워크 보기', () => {
    const url = host + '/api/v1/art-product/' + q + '/artist/summary';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('이 상품을 만든 셀럽의 다른 아트워크 보기 시리즈', () => {
    const url = host + '/api/v1/art-product/' + q + '/artist/series';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
