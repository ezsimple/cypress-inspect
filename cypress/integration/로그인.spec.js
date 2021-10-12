import { get, post, prettyJSON } from '../libs/InspectLib';

describe('기획전', () => {
  let timeOut = 5000; // connection Timeout seconds
  let accessToken = null;
  let refreshToken = null;

  it('휴면계정 해제', () => {
    const url = '/api/v1/login/activate';
    const req = {
      id: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
    post(accessToken, url, req).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('Apple 로그인', () => {
    const url = '/api/v1/login/apple';
    const req = {};
    post(accessToken, url, req).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('서비스 이용 제한 해제 - 첨부파일 업로드', () => {
    const url = '/api/v1/login/black/fileUpload';
    const req = {};
    post(accessToken, url, req).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('서비스 이용 제한 해제 신청', () => {
    const url = '/api/v1/login/black/release';
    const req = {};
    post(accessToken, url, null).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('이메일 로그인', () => {
    const url = '/api/v1/login/email';
    const req = {};
    post(accessToken, url, req).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('Google 로그인', () => {
    const url = '/api/v1/login/google';
    const req = {};
    post(accessToken, url, req).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('SNS 로그인 정보 조회', () => {
    const url = '/api/v1/login/info';
    get(accessToken, url, null).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('Kakao 로그인', () => {
    const url = '/api/v1/login/kakao';
    const req = {};
    post(accessToken, url, req).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('Naver 로그인', () => {
    const url = '/api/v1/login/naver';
    const req = {};
    post(accessToken, url, req).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('인증 토큰 갱신', () => {
    const url = '/api/v1/login/refresh';
    const req = {};
    post(accessToken, url, req).should((response) => {
      expect(response.status).to.eq(201);
      console.log(prettyJSON(response));
    });
  });

  it('로그아웃', () => {
    const url = '/api/v1/logout';
    const req = {};
    get(accessToken, url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });

  it('오라운더 리뷰리마인드', () => {
    const url = '/api/v1/orounder/review-remind';
    const req = {};
    get(accessToken, url, req).should((response) => {
      expect(response.status).to.eq(200);
      console.log(prettyJSON(response));
    });
  });
});
