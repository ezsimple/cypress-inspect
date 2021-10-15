import { get, login, prettyJSON } from '../libs/common';

describe('배너', () => {
  before(() => {
    login();
  });

  // 배너

  it('배너 리스트', () => {
    const q = 0;
    const url = '/api/v1/banner';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
