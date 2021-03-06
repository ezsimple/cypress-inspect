import { get, post, report } from '../../libs/common';

describe('기획전', () => {
  const host = Cypress.env('host-api');

  it('휴면계정 해제', () => {
    const url = host + '/api/v1/login/activate';
    const req = {
      id: 'test4@upleat.com',
      resultCode: '',
      resultMessage: '',
    };
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('Apple 로그인', () => {
    const url = host + '/api/v1/login/apple';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('서비스 이용 제한 해제 - 첨부파일 업로드', () => {
    const url = host + '/api/v1/login/black/fileUpload';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('서비스 이용 제한 해제 신청', () => {
    const url = host + '/api/v1/login/black/release';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('이메일 로그인', () => {
    const url = host + '/api/v1/login/email';
    const req = {
      id: 'test5@upleat.com',
      password: 'qwer1234',
    };
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('Google 로그인', () => {
    const url = host + '/api/v1/login/google';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('SNS 로그인 정보 조회', () => {
    const url = host + '/api/v1/login/info';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('Kakao 로그인', () => {
    const url = host + '/api/v1/login/kakao';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('Naver 로그인', () => {
    const url = host + '/api/v1/login/naver';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('인증 토큰 갱신', () => {
    const url = host + '/api/v1/login/refresh';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('로그아웃', () => {
    const url = host + '/api/v1/logout';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('오라운더 리뷰리마인드', () => {
    const url = host + '/api/v1/orounder/review-remind';
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
