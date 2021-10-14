import { getToken, get, prettyJSON } from '../libs/common';

describe('약관', () => {
  const token = getToken();
  before(() => {
    login();
  });

  // 약관

  it('이용약관 조회', () => {
    const q = 0;
    const url = '/api/v1/terms/agreement';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('개인정보 수집 및 이용동의 조회', () => {
    const q = 0;
    const url = '/api/v1/terms/approval';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('결제대행 서비스 이용약관', () => {
    const q = 0;
    const url = '/api/v1/terms/payment';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('개인정보처리방침 조회', () => {
    const q = 0;
    const url = '/api/v1/terms/policy';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
