import { login, getToken, get, prettyJSON } from '../libs/InspectLib';

describe('아트워크', () => {
  const token = getToken();
  before(() => {
    login();
  });

  it('아트워크 기본 정보', () => {
    const artworkIndex = 44;
    const url = '/api/v1/artwork/' + artworkIndex + '/info';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('아트워크 좋아요 카운터', () => {
    const artworkIndex = 44;
    const url = '/api/v1/artwork/' + artworkIndex + '/like/count';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('(셀럽그라운드 전용) 아트워크 데이터', () => {
    const artistMemberNo = 5;
    const url = '/api/v1/celeb-ground/' + artistMemberNo + '/artwork/data';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
