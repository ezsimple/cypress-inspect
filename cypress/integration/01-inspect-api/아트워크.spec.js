import { get, login, report } from '../../libs/common';

describe('아트워크', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // 속도 이슈로 /artwork/summary로 통합
  // it('아트워크 기본 정보', () => {
  //   const artworkIndex = 55;
  //   const url = host + '/api/v1/artwork/' + artworkIndex + '/info';
  //   const req = {};
  //   get(url, req).should((response) => {
  //     expect(response.status).to.eq(200);
  //     report(url, response);
  //   });
  // });

  // 속도 이슈로 /artwork/summary로 통합
  // it('아트워크 좋아요 카운터', () => {
  //   const artworkIndex = 44;
  //   const url = host + '/api/v1/artwork/' + artworkIndex + '/like/count';
  //   const req = {};
  //   get(url, req).should((response) => {
  //     expect(response.status).to.eq(200);
  //     report(url, response);
  //   });
  // });

  it('(셀럽그라운드 전용) 아트워크 데이터', () => {
    const artistMemberNo = 5;
    const url =
      host + '/api/v1/celeb-ground/' + artistMemberNo + '/artwork/data';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, response);
    });
  });
});
