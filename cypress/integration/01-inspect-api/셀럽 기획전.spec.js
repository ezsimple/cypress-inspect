import { login } from '../../libs/common';

describe('셀럽 기획전 (mhlee)', () => {
  const host = Cypress.env('host-api');

  before(() => {
    const req = { id: 'jonghyuck59@gmail.com', password: 'triplex59@' }; // memberNo : 70
    login(null, req);
  });

  // it('아티스트별 기획전 대상 아트워크 상품 목록(페이징)', () => {
  //   const artistMemberNo = Cypress.env('memberNo');
  //   const url =
  //     host + '/api/v1/celeb/' + artistMemberNo + '/exhibition/art-products';
  //   const req = {};
  //   get(url, req).should((response) => {
  //     // expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });

  // it('아티스트별 기획전 등록', () => {
  //   const url = host + '/api/v1/celeb/exhibition';
  //   const req = {
  //     resultCode: '',
  //     resultMessage: '',
  //     saveExhibitionItem: {
  //       artProductIndexes: [20357, 20358],
  //       exhibitionIndex: 0,
  //       title: '테스트 기획전 등록',
  //     },
  //   };

  //   post(url, req).should((response) => {
  //     expect(response.status).to.eq(201); // 등록은 201로 검사
  //     const { exhibitionIndex } = response.body;
  //     report(url, req, response);
  //   });
  // });

  // it('아티스트별 기획전 수정', () => {
  //   const url = host + '/api/v1/celeb/exhibition/' + exhibitionIndex;
  //   const req = {
  //     resultCode: '',
  //     resultMessage: '',
  //     saveExhibitionItem: {
  //       artProductIndexes: [20357, 20358, 20359],
  //       exhibitionIndex: 0,
  //       title: '테스트 기획전 수정',
  //     },
  //   };

  //   put(url, req).should((response) => {
  //     // expect(response.status).to.eq(200);
  //     const { exhibitionIndex } = response.body;
  //     report(url, req, response);
  //   });
  // });

  // it('아티스트별 기획전 삭제', () => {
  //   const url = host + '/api/v1/celeb/exhibition/' + exhibitionIndex;
  //   const req = null;
  //   del(url, req).should((response) => {
  //     // expect(response.status).to.eq(200);
  //     // response.body.exhibitionIndex 없음
  //     report(url, req, response);
  //   });
  // });

  // it('아티스트별 기획전 목록(페이징)', () => {
  //   const url =
  //     host + '/api/v1/celeb/' + artistMemberNo + '/registered/exhibitions';
  //   const req = {};
  //   get(url, req).should((response) => {
  //     // expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });

  // it('아티스트별 기획전 상세(페이징)', () => {
  //   const url =
  //     '/api/v1/celeb/' +
  //     artistMemberNo +
  //     '/registered/exhibition/' +
  //     exhibitionIndex;
  //   const req = {};
  //   get(url, req).should((response) => {
  //     // expect(response.status).to.eq(200);
  //     report(url, req, response);
  //   });
  // });
});
