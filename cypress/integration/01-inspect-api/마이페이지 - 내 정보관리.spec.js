import { del, get, login, post, put, report } from '../../libs/common';

describe('마이페이지 - 내 정보관리', () => {
  const host = Cypress.env('host-api');
  before(() => {
    login();
  });

  // 마이페이지 - 내 정보관리

  it('개인정보 수정 - 이메일 변경', () => {
    const q = 0;
    const url = host + '/api/v1/member/myInfo/changeEmail';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('개인정보 수정 - 이름(닉네임) 변경', () => {
    const q = 0;
    const url = host + '/api/v1/member/myInfo/changeName';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('개인정보 수정 - 전화번호 변경', () => {
    const q = 0;
    const url = host + '/api/v1/member/myInfo/changePhone';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('개인정보 수정 - 비밀번호 확인', () => {
    const q = 0;
    const url = host + '/api/v1/member/myInfo/checkPassword';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('사용 언어 변경', () => {
    const q = 0;
    const url = host + '/api/v1/member/myInfo/language';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('개인정보 수정 - 개인정보 조회', () => {
    const q = 0;
    const url = host + '/api/v1/member/myInfo/personalInfo';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('개인정보 수정 - 이메일 인증코드 확인', () => {
    const q = 0;
    const url = host + '/api/v1/member/myInfo/verify/email/confirm';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('개인정보 수정 - 이메일 인증코드 발송', () => {
    const q = 0;
    const url = host + '/api/v1/member/myInfo/verify/email/send';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('개인정보 수정 - 휴대전화 인증코드 발송', () => {
    const q = 0;
    const url = host + '/api/v1/member/myInfo/verify/phone/send';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('개인정보 수정 - 탈퇴', () => {
    const q = 0;
    const url = host + '/api/v1/member/myInfo/withdraw';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('비밀번호 변경', () => {
    const q = 0;
    const url = host + '/api/v1/member/password/change';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('배송지 - 삭제', () => {
    const q = 0;
    const url = host + '/api/v1/member/shipping';
    const req = {};
    del(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('배송지 - 목록', () => {
    const q = 0;
    const url = host + '/api/v1/member/shipping';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('배송지 - 등록', () => {
    const q = 0;
    const url = host + '/api/v1/member/shipping';
    const req = {};
    post(url, req).should((response) => {
      expect(response.status).to.eq(201);
      report(url, req, response);
    });
  });

  it('배송지 - 수정', () => {
    const q = 0;
    const url = host + '/api/v1/member/shipping';
    const req = {};
    put(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });

  it('배송지 - 배송지역 별 국가 조회', () => {
    const q = 0;
    const url = host + '/api/v1/member/shipping/nation/{shippingAreaCode}';
    const req = {};
    get(url, req).should((response) => {
      expect(response.status).to.eq(200);
      report(url, req, response);
    });
  });
});
