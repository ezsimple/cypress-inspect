import { get, login, report } from '../../libs/common';

describe('아트워크 상품 상세 (mhlee)', () => {
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
      report(url, response);
    });
  });

  it('/artist/series', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/artist/series';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, response);
    });
  });

  it('/best/reviews', () => {
    const q = '45';
    const url = host + '/api/v1/art-product/' + q + '/best/reviews';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, response);
    });
  });

  it('/delivery/info', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/delivery/info';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, response);
    });
  });

  it('/edit/images', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/edit/images';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, response);
    });
  });

  it('/images', () => {
    const q = '55';
    const url = host + '/api/v1/art-product/' + q + '/images';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, response);
    });
  });

  it('/notify', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/notify';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, response);
    });
  });

  it('/options', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/options';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, response);
    });
  });

  it('/print/guide', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/print/guide';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, response);
    });
  });

  it('/seo', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/seo';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, response);
    });
  });

  it('/series', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/series';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, response);
    });
  });

  it('/shipping/guide', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/shipping/guide';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, response);
    });
  });

  it('/size/guide', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/size/guide';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, response);
    });
  });

  it('/summary', () => {
    const q = '55';
    const url = host + '/api/v1/art-product/' + q + '/summary';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, response);
    });
  });

  it('/wash/info', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/wash/info';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, response);
    });
  });

  it('/artwork/summary', () => {
    const q = '44';
    const url = host + '/api/v1/art-product/' + q + '/artwork/summary';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, response);
    });
  });
});
