import { get, login, post, prettyJSON } from '../../libs/common';

describe('팔로잉', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // 팔로잉

  it('팔로잉 페이징', () => {
    const q = 0;
    const url = host + '/api/v1/following';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('팔로우한 셀럽 페이징', () => {
    const q = 0;
    const url = host + '/api/v1/following/celeb';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('언팔로우', () => {
    const q = 0;
    const url = host + '/api/v1/unfollow';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });
});
