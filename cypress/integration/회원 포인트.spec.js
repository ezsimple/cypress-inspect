import { get, prettyJSON } from '../libs/common';

describe('회원 포인트', () => {
  const token = getToken();
  before(() => {
    if (!token) {
      login();
    }
  });

  // 회원포인트

  it('보유 포인트 조회', () => {
    const q = 0;
    const url = '/api/v1/point/member-hold-point';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
