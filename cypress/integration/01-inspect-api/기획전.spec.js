import { get, login, report } from '../../libs/common';

describe('기획전', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  const index = 66;

  // it('기획전상세(상품)', () => {
  //   const url = host + '/api/v1/exhibition/artProduct/' + index;
  //   const req = {};
  //   get(url, req).should((response) => {
  //     // expect(response.status).to.eq(200);
  //     // const { exhibitionIndex } = response.body.detailItem;
  //     // expect(exhibitionIndex).to.eq(index);
  //     report(url, req, response);
  //   });
  // });

  // it('기획전상세(작품)', () => {
  //   const url = host + '/api/v1/exhibition/artwork/' + index;
  //   const req = {};
  //   get(url, req).should((response) => {
  //     // expect(response.status).to.eq(200);
  //     // const { exhibitionIndex } = response.body.detailItem;
  //     // expect(exhibitionIndex).to.eq(index);
  //     report(url, req, response);
  //   });
  // });

  it('기획전 목록', () => {
    const url = host + '/api/v1/exhibition/list?pageNo=1&pageSize=10';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
