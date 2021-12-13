import { get, login, report } from '../../libs/common';

describe('셀럽 시리즈 ()', () => {
  const host = Cypress.env('host-api');

  const artistMemberNo = 70;
  let seriesIndex = 21192;

  before(() => {
    const req = { id: 'jonghyuck59@gmail.com', password: 'triplex59@' }; // memberNo : 70
    login(null, req);
  });

  it('아티스트별 시리즈 대상 아트워크 상품 목록(페이징)', () => {
    const url = host + '/api/v1/celeb/' + artistMemberNo + '/series/artworks';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  // it('아티스트별 시리즈 등록', () => {
  //   const url = host + '/api/v1/celeb/series';
  //   const req = {
  //     resultCode: '',
  //     resultMessage: '',
  //     saveSeriesItem: {
  //       items: [
  //         {
  //           artworkIndex: 58,
  //           primaryImageYn: 'Y',
  //         },
  //         {
  //           artworkIndex: 59,
  //           primaryImageYn: 'N',
  //         },
  //       ],
  //       seriesIndex: 0,
  //       title: '시리즈 테스트 등록',
  //     },
  //   };

  //   post(url, req).should((response) => {
  //     expect(response.status).to.eq(201); // 등록은 201로 검사
  //     const { seriesIndex } = response.body;
  //     report(url, req, response);
  //   });
  // });

  // it('아티스트별 기획전 수정', () => {
  //   const url = host + '/api/v1/celeb/series/' + seriesIndex;
  //   const req = {
  //     resultCode: '',
  //     resultMessage: '',
  //     saveSeriesItem: {
  //       items: [
  //         {
  //           artworkIndex: 58,
  //           primaryImageYn: 'N',
  //         },
  //         {
  //           artworkIndex: 59,
  //           primaryImageYn: 'Y',
  //         },
  //       ],
  //       seriesIndex: 0,
  //       title: '시리즈 테스트 수정',
  //     },
  //   };

  //   put(url, req).should((response) => {
  //     // expect(response.status).to.eq(200);
  //     const { seriesIndex } = response.body;
  //     report(url, req, response);
  //   });
  // });

  // it('아티스트별 시리즈 삭제', () => {
  //   const url = host + '/api/v1/celeb/series/' + seriesIndex;
  //   const req = null;
  //   del(url, req).should((response) => {
  //     // expect(response.status).to.eq(200);
  //     // response.body.seriesIndex 없음
  //     report(url, req, response);
  //   });
  // });

  it('아티스트별 시리즈 목록(페이징)', () => {
    const url = host + '/api/v1/celeb/' + artistMemberNo + '/registered/series';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  // it('아티스트별 시리즈 상세(페이징)', () => {
  //   const url =
  //     '/api/v1/celeb/' + artistMemberNo + '/registered/series/' + seriesIndex;
  //   const req = {};
  //   get(url, req).should((response) => {
  //     // expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });
});
