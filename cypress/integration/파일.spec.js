import { login, getToken, post, prettyJSON } from '../libs/common';

describe('파일', () => {
  const token = getToken();
  before(() => {
    login();
  });

  // 파일

  it('파일 다운로드', () => {
    const q = 0;
    const url = '/api/v1/file/download';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });
});
