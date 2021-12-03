import { get, login, post, report } from '../../libs/common';

describe('팔로워', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // 팔로워

  it('팔로우', () => {
    const q = 0;
    const url = host + '/api/v1/follow';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('팔로워 페이징', () => {
    const q = 0;
    const url = host + '/api/v1/follower';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
