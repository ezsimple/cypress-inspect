import { login, get, post, put, del, prettyJSON } from '../libs/InspectLib';

describe('마이페이지 - 내 정보관리', () => {
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

  // 마이페이지 - 내 정보관리

  it('개인정보 수정 - 이메일 변경', () => {
    const q = 0;
    const url = '/api/v1/member/myInfo/changeEmail';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('개인정보 수정 - 이름(닉네임) 변경', () => {
    const q = 0;
    const url = '/api/v1/member/myInfo/changeName';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('개인정보 수정 - 전화번호 변경', () => {
    const q = 0;
    const url = '/api/v1/member/myInfo/changePhone';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('개인정보 수정 - 비밀번호 확인', () => {
    const q = 0;
    const url = '/api/v1/member/myInfo/checkPassword';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('사용 언어 변경', () => {
    const q = 0;
    const url = '/api/v1/member/myInfo/language';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('개인정보 수정 - 개인정보 조회', () => {
    const q = 0;
    const url = '/api/v1/member/myInfo/personalInfo';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('개인정보 수정 - 이메일 인증코드 확인', () => {
    const q = 0;
    const url = '/api/v1/member/myInfo/verify/email/confirm';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('개인정보 수정 - 이메일 인증코드 발송', () => {
    const q = 0;
    const url = '/api/v1/member/myInfo/verify/email/send';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('개인정보 수정 - 휴대전화 인증코드 발송', () => {
    const q = 0;
    const url = '/api/v1/member/myInfo/verify/phone/send';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('개인정보 수정 - 탈퇴', () => {
    const q = 0;
    const url = '/api/v1/member/myInfo/withdraw';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('비밀번호 변경', () => {
    const q = 0;
    const url = '/api/v1/member/password/change';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('배송지 - 삭제', () => {
    const q = 0;
    const url = '/api/v1/member/shipping';
    const req = {};
    del(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('배송지 - 목록', () => {
    const q = 0;
    const url = '/api/v1/member/shipping';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('배송지 - 등록', () => {
    const q = 0;
    const url = '/api/v1/member/shipping';
    const req = {};
    post(token, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('배송지 - 수정', () => {
    const q = 0;
    const url = '/api/v1/member/shipping';
    const req = {};
    put(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('배송지 - 배송지역 별 국가 조회', () => {
    const q = 0;
    const url = '/api/v1/member/shipping/nation/{shippingAreaCode}';
    const req = {};
    get(token, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
