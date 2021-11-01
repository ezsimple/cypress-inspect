import { get, login, prettyJSON } from '../../libs/common';

describe('아트워크 상품 상세', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  it('/artist/summary', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/artist/summary';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log('/artist/summary\n', prettyJSON(response));
    });
  });

  it('/artist/series', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/artist/series';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log('/artist/series\n', prettyJSON(response));
    });
  });

  it('/best/reviews', () => {
    const q = '45';
    const url = host + '/api/v1/art-product/' + q + '/best/reviews';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log('/best/reviews\n', prettyJSON(response));
    });
  });

  it('/delivery/info', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/delivery/info';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log('/delivery/info\n', prettyJSON(response));
    });
  });

  it('/edit/images', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/edit/images';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log('/edit/images\n', prettyJSON(response));
    });
  });

  it('/images', () => {
    const q = '55';
    const url = host + '/api/v1/art-product/' + q + '/images';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log('/images\n', prettyJSON(response));
    });
  });

  it('/notify', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/notify';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log('/notify\n', prettyJSON(response));
    });
  });

  it('/options', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/options';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log('/options\n', prettyJSON(response));
    });
  });

  it('/print/guide', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/print/guide';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log('/print/guide\n', prettyJSON(response));
    });
  });

  it('/seo', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/seo';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log('/seo\n', prettyJSON(response));
    });
  });

  it('/series', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/series';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log('/series\n', prettyJSON(response));
    });
  });

  it('/shipping/guide', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/shipping/guide';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log('/shipping/guide\n', prettyJSON(response));
    });
  });

  it('/size/guide', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/size/guide';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log('/size/guide\n', prettyJSON(response));
    });
  });

  it('/summary', () => {
    const q = '55';
    const url = host + '/api/v1/art-product/' + q + '/summary';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log('/summary\n', prettyJSON(response));
    });
  });

  it('/wash/info', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/wash/info';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log('/wash/info\n', prettyJSON(response));
    });
  });

  it('/artwork/summary', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/artwork/summary';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log('/artwork/summary\n', prettyJSON(response));
    });
  });
});
