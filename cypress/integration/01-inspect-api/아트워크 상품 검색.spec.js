import { get, login, report } from '../../libs/common';

describe('아트워크 상품 검색', () => {
  const host = Cypress.env('host-api');
  before(() => {
    const req = { id: 'jonghyuck59@gmail.com', password: 'triplex59@' }; // memberNo : 70
    // const req = { id: 'joseok76@gmail.com', password: 'as348843!@' };
    login(null, req);
  });

  const q = 21269;
  it('/v1/celeb-ground/artwork/' + q, () => {
    const url = host + '/api/v1/celeb-ground/artwork/' + q;
    const req = {};
    get(url, req).should((response) => {
      // // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
