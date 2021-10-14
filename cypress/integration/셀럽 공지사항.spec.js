import { login, getToken, get, prettyJSON } from '../libs/common';

describe('셀럽 공지사항', () => {
  const token = getToken();
  before(() => {
    login();
  });

  // 셀럽 공지사항

  it('셀럽 공지사항 페이징', () => {
    const q = 0;
    const url = '/api/v1/celeb/notice';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('셀럽 공지사항 단건', () => {
    const q = 0;
    const url = '/api/v1/celeb/notice/{noticeIndex}';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
