import { get, prettyJSON } from '../libs/InspectLib';

describe('기획전', () => {
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

  it('기획전상세(상품)', () => {
    const index = 38;
    const url = '/api/v1/exhibition/artProduct/' + index;
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
      const { exhibitionIndex } = response.body.detailItem;
      expect(exhibitionIndex).to.eq(index);
    });
  });

  it('기획전상세(작품)', () => {
    const index = 38;
    const url = '/api/v1/exhibition/artwork/' + index;
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
      const { exhibitionIndex } = response.body.detailItem;
      expect(exhibitionIndex).to.eq(index);
    });
  });

  it('기획전 목록', () => {
    const url = '/api/v1/exhibition/list';
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
