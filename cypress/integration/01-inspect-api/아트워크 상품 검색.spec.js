import { get, login, report } from '../../libs/common';

describe('아트워크 상품 검색', () => {
  const host = Cypress.env('host-api');
  before(() => {
    const req = { id: 'jonghyuck59@gmail.com', password: 'triplex59@' }; // memberNo : 70
    login(null, req);
  });

  it('/v1/celeb/search/artwork', () => {
    const q = '이터널스';
    const url = host + '/api/v1/celeb/search/artwork?keyWord=' + q;
    const req = {};
    get(url, req).should((response) => {
      // // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
