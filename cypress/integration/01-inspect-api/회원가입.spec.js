import { get, login, post, report } from '../../libs/common';

describe('회원가입', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // 회원가입

  it('', () => {
    const q = 0;
    const url = host + '';
    // POST /api/v1/member/check/id 아이디 중복 확인
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('', () => {
    const q = 0;
    const url = host + '';
    // POST /api/v1/member/check/name 이름 중복 확인
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('', () => {
    const q = 0;
    const url = host + '';
    // POST /api/v1/member/check/sns SNS 회원 정보 확인
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('', () => {
    const q = 0;
    const url = host + '';
    // POST /api/v1/member/join 회원 가입 요청
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('', () => {
    const q = 0;
    const url = host + '';
    // POST /api/v1/member/verify/email/confirm 이메일 인증코드 확인
    const req = {};
    get(url, req).should((response) => {
      // expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('이메일 인증코드 발송', () => {
    const q = 0;
    const url = host + '/api/v1/member/verify/email/send';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });
});
