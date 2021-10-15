import { get, login, prettyJSON } from '../../libs/common';

describe('기획전', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  it('기획전상세(상품)', () => {
    const index = 38;
    const url = host + '/api/v1/exhibition/artProduct/' + index;
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
      const { exhibitionIndex } = response.body.detailItem;
      expect(exhibitionIndex).to.eq(index);
    });
  });

  it('기획전상세(작품)', () => {
    const index = 38;
    const url = host + '/api/v1/exhibition/artwork/' + index;
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
      const { exhibitionIndex } = response.body.detailItem;
      expect(exhibitionIndex).to.eq(index);
    });
  });

  it('기획전 목록', () => {
    const url = host + '/api/v1/exhibition/list';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
