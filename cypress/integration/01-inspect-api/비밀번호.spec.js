import { login, post, prettyJSON } from '../../libs/common';

describe('비밀번호', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // 비밀번호

  it('비밀번호 변경', () => {
    const q = 0;
    const url = host + '/api/v1/member/password/change';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('임시 비밀번호 발송', () => {
    const q = 0;
    const url = host + '/api/v1/member/password/temp';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });
});
