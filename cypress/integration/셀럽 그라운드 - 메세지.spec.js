import { getToken, del, get, post, prettyJSON } from '../libs/common';

describe('셀럽 그라운드 - 메세지', () => {
  const token = getToken();
  before(() => {
    if (!token) {
      login();
    }
  });

  // 셀럽 그라운드 - 메세지

  it('전체 메세지 삭제', () => {
    const q = 0;
    const url = '/api/v1/celeb-ground/message';
    const req = {};
    del(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('전체 메세지 조회', () => {
    const q = 0;
    const url = '/api/v1/celeb-ground/message';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('메세지 보내기', () => {
    const q = 0;
    const url = '/api/v1/celeb-ground/message';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('단건 메세지 삭제', () => {
    const q = 0;
    const url = '/api/v1/celeb-ground/message/{artistMessageIndex}';
    const req = {};
    del(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
