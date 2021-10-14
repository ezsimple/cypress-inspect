import { get, login, post, prettyJSON } from '../libs/common';

describe('팔로워', () => {
  before(() => {
    login();
  });

  // 팔로워

  it('팔로우', () => {
    const q = 0;
    const url = '/api/v1/follow';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('팔로워 페이징', () => {
    const q = 0;
    const url = '/api/v1/follower';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
