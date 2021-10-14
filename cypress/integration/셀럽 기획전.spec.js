import {
  login,
  getToken,
  del,
  get,
  post,
  prettyJSON,
  put,
} from '../libs/common';

describe('셀럽 기획전', () => {
  const artistMemberNo = 5;
  let exhibitionIndex = 1;

  const token = getToken();
  before(() => {
    login();
  });

  it('아티스트별 기획전 대상 아트워크 상품 목록(페이징)', () => {
    const url = '/api/v1/celeb/' + artistMemberNo + '/exhibition/art-products';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('아티스트별 기획전 등록', () => {
    const url = '/api/v1/celeb/exhibition';
    const req = {
      resultCode: '',
      resultMessage: '',
      saveExhibitionItem: {
        artProductIndexes: [20357, 20358],
        exhibitionIndex: 0,
        title: '테스트 기획전 등록',
      },
    };

    post(token, url, req).should((response) => {
      expect(response.status).to.eq(201); // 등록은 201로 검사
      console.log(prettyJSON(response));
      exhibitionIndex = response.body.exhibitionIndex;
    });
  });

  it('아티스트별 기획전 수정', () => {
    const url = '/api/v1/celeb/exhibition/' + exhibitionIndex;
    const req = {
      resultCode: '',
      resultMessage: '',
      saveExhibitionItem: {
        artProductIndexes: [20357, 20358, 20359],
        exhibitionIndex: 0,
        title: '테스트 기획전 수정',
      },
    };

    put(token, url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
      exhibitionIndex = response.body.exhibitionIndex;
    });
  });

  it('아티스트별 기획전 삭제', () => {
    const url = '/api/v1/celeb/exhibition/' + exhibitionIndex;
    const req = null;
    del(token, url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
      // response.body.exhibitionIndex 없음
    });
  });

  it('아티스트별 기획전 목록(페이징)', () => {
    const url = '/api/v1/celeb/' + artistMemberNo + '/registered/exhibitions';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('아티스트별 기획전 상세(페이징)', () => {
    const url =
      '/api/v1/celeb/' +
      artistMemberNo +
      '/registered/exhibition/' +
      exhibitionIndex;
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
