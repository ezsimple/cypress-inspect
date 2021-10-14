import { login, get, post, put, del, prettyJSON } from '../libs/common';

describe('셀럽 시리즈', () => {
  const artistMemberNo = 5;
  let seriesIndex = 1;
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

  it('아티스트별 시리즈 대상 아트워크 상품 목록(페이징)', () => {
    const url = '/api/v1/celeb/' + artistMemberNo + '/series/artworks';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('아티스트별 시리즈 등록', () => {
    const url = '/api/v1/celeb/series';
    const req = {
      resultCode: '',
      resultMessage: '',
      saveSeriesItem: {
        items: [
          {
            artworkIndex: 58,
            primaryImageYn: 'Y',
          },
          {
            artworkIndex: 59,
            primaryImageYn: 'N',
          },
        ],
        seriesIndex: 0,
        title: '시리즈 테스트 등록',
      },
    };

    post(token, url, req).should((response) => {
      expect(response.status).to.eq(201); // 등록은 201로 검사
      console.log(prettyJSON(response));
      seriesIndex = response.body.seriesIndex;
    });
  });

  it('아티스트별 기획전 수정', () => {
    const url = '/api/v1/celeb/series/' + seriesIndex;
    const req = {
      resultCode: '',
      resultMessage: '',
      saveSeriesItem: {
        items: [
          {
            artworkIndex: 58,
            primaryImageYn: 'N',
          },
          {
            artworkIndex: 59,
            primaryImageYn: 'Y',
          },
        ],
        seriesIndex: 0,
        title: '시리즈 테스트 수정',
      },
    };

    put(token, url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
      seriesIndex = response.body.seriesIndex;
    });
  });

  it('아티스트별 시리즈 삭제', () => {
    const url = '/api/v1/celeb/series/' + seriesIndex;
    const req = null;
    del(token, url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
      // response.body.seriesIndex 없음
    });
  });

  it('아티스트별 시리즈 목록(페이징)', () => {
    const url = '/api/v1/celeb/' + artistMemberNo + '/registered/series';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('아티스트별 시리즈 상세(페이징)', () => {
    const url =
      '/api/v1/celeb/' + artistMemberNo + '/registered/series/' + seriesIndex;
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
