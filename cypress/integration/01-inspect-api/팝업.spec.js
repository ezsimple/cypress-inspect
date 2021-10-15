import { get, login, prettyJSON } from '../libs/common';

describe('팝업', () => {
  before(() => {
    login();
  });

  // 팝업

  it('팝업 리스트', () => {
    const q = 0;
    const url = '/api/v1/popup';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
