import { login, get, post, put, del, prettyJSON } from '../libs/InspectLib';

describe('아트워크', () => {
  let timeOut = 5000; // connection Timeout seconds
  let token = null;

  before(() => {
    if (!token) {
      token = JSON.stringify(window.sessionStorage.getItem('x-oround-token'));
      cy.request({
        method: 'POST',
        url: '/api/v1/login/email',
        body: { id: 'test5@upleat.com', password: 'qwer1234' },
      }).then(({ body }) => {
        window.sessionStorage.setItem('x-oround-token', body.token.accessToken);
        token = body.token.accessToken;
      });
    }
  });

  it('아트워크 기본 정보', () => {
    const artworkIndex = 44;
    const url = '/api/v1/artwork/' + artworkIndex + '/info';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  // it('아트워크 좋아요 카운터', () => {
  //   const artworkIndex = 44;
  //   const url = '/api/v1/artwork/' + artworkIndex + '/like/count';
  //   get(token, url, null).should((response) => {
  //     expect(response.status).to.eq(200);
  //     console.log(prettyJSON(response));
  //   });
  // });

  // it('(셀럽그라운드 전용) 아트워크 데이터', () => {
  //   const artistMemberNo = 5;
  //   const url = '/api/v1/celeb-ground/' + artistMemberNo + '/artwork/data';
  //   get(token, url, null).should((response) => {
  //     expect(response.status).to.eq(200);
  //     console.log(prettyJSON(response));
  //   });
  // });
});
