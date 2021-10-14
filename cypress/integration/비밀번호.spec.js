import { getToken, login, post, prettyJSON } from '../libs/common';

describe('비밀번호', () => {
  const token = getToken();
  before(() => {
    if (!token) {
      login();
    }
  });

  // 비밀번호

  it('비밀번호 변경', () => {
    const q = 0;
    const url = '/api/v1/member/password/change';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('임시 비밀번호 발송', () => {
    const q = 0;
    const url = '/api/v1/member/password/temp';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });
});
