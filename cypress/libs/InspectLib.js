export function prettyJSON(response) {
  return JSON.stringify(response.body, null, 2);
}

export function login(url, req) {
  let token = JSON.stringify(window.sessionStorage.getItem('x-oround-token'));
  cy.request({
    method: 'POST',
    url: url ? url : '/api/v1/login/email',
    body: req ? req : { id: 'test5@upleat.com', password: 'qwer1234' },
  }).then(({ body }) => {
    window.sessionStorage.setItem('x-oround-token', body.token.accessToken);
    token = body.token.accessToken;
  });
  return token;
}

export function get(token, url, req) {
  return cy.request({
    method: 'GET',
    url: url,
    headers: {
      'x-oround-token': token,
    },
    body: req,
  });
}

export function post(token, url, req) {
  return cy.request({
    method: 'POST',
    url: url,
    headers: {
      'x-oround-token': token,
    },
    body: req,
  });
}

export function put(token, url, req) {
  return cy.request({
    method: 'PUT',
    url: url,
    headers: {
      'x-oround-token': token,
    },
    body: req,
  });
}

export function del(token, url, req) {
  return cy.request({
    method: 'DELETE',
    url: url,
    headers: {
      'x-oround-token': token,
    },
    body: req,
  });
}

// GET /api/v1/celeb-ground/{{artistMemberNo}}/art-product/like
// GET /api/v1/celeb-ground/{{artistMemberNo}}/art-product/like
// GET /api/v1/celeb-ground/{{artistMemberNo}}/artwork/like
// GET /api/v1/celeb/faq
// GET /api/v1/event/current
// GET /api/v1/event/current/basic/{{eventIndex}}
// POST /api/v1/event/current/comment
// PUT /api/v1/event/current/comment/{{applyIndex}}
// DELETE /api/v1/event/current/comment/{{applyIndex}}
// GET /api/v1/event/current/comment/{{eventIndex}}
// GET /api/v1/event/current/coupon/{{eventIndex}}
// POST /api/v1/event/current/entry
// GET /api/v2/event/current/entry/form/{{eventIndex}}
// GET /api/v1/event/current/entry/{{eventIndex}}
// GET /api/v1/event/old
// GET /api/v1/event/old/entry/{{eventIndex}}
// GET /api/v1/exam/notice
// POST /api/v1/exam/notice
// GET /api/v1/exam/notice/{{noticeIndex}}
// PUT /api/v1/exam/notice/{{noticeIndex}}
// DELETE /api/v1/exam/notice/{{noticeIndex}}
// POST /api/v1/like/art-product
// DELETE /api/v1/like/art-product
// POST /api/v1/like/artwork
// DELETE /api/v1/like/artwork
// GET /api/v1/like/sale-target
// POST /api/v1/login/activate
// POST /api/v1/login/apple
// POST /api/v1/login/black/fileUpload
// POST /api/v1/login/black/release
// POST /api/v1/login/email
// POST /api/v1/login/google
// GET /api/v1/login/info
// POST /api/v1/login/kakao
// POST /api/v1/login/naver
// POST /api/v1/login/refresh
// POST /api/v1/login/test/all
// POST /api/v1/login/test/celebOnly
// GET /api/v1/logout
// GET /api/v1/mall/faq
// POST /api/v1/order
// POST /api/v1/order/create-order
// POST /api/v1/order/item
// GET /api/v1/order/result/{{orderNo}}
// GET /api/v1/orderCart
// PUT /api/v1/orderCart
// POST /api/v1/orderCart
// GET /api/v1/orderCart/options/{{cartIndex}}
// GET /api/v1/terms/agreement
// GET /api/v1/terms/approval
// GET /api/v1/terms/policy
// GET /api/v1/art-product/productList
// GET /api/v1/art-product/{{artProductIndex}}/summary
// GET /api/v1/art-product/{{artProductIndex}}/artist/summary
// GET /api/v1/art-product/{{artProductIndex}}/artworks
// GET /api/v1/art-product/{{artProductIndex}}/best-review
// GET /api/v1/art-product/{{artProductIndex}}/best/reviews
// GET /api/v1/art-product/{{artProductIndex}}/delivery/info
// GET /api/v1/art-product/{{artProductIndex}}/edit/images
// GET /api/v1/art-product/{{artProductIndex}}/info
// GET /api/v1/art-product/{{artProductIndex}}/like/count
// GET /api/v1/art-product/{{artProductIndex}}/notify
// GET /api/v1/art-product/{{artProductIndex}}/options
// GET /api/v1/art-product/{{artProductIndex}}/print/guide
// GET /api/v1/art-product/{{artProductIndex}}/review
// GET /api/v1/art-product/{{artProductIndex}}/review/count
// GET /api/v1/art-product/{{artProductIndex}}/seo
// GET /api/v1/art-product/{{artProductIndex}}/series
// GET /api/v1/art-product/{{artProductIndex}}/shipping/guide
// GET /api/v1/art-product/{{artProductIndex}}/size/guide
// GET /api/v1/art-product/{{artProductIndex}}/summary
// GET /api/v1/art-product/{{artProductIndex}}/wash/info

// GET /api/v1/artwork/editor/{{artworkIndex}}
// POST /api/v1/artwork/editor/{{artworkIndex}}
// POST /api/v1/artwork/editor/{{artworkIndex}}/image/fileUpload
// POST /api/v1/artwork/new/fileUpload
// GET /api/v1/artwork/{{artworkIndex}}/info
// GET /api/v1/artwork/{{artworkIndex}}/like/count
// GET /api/v1/celeb-ground/{{artistMemberNo}}/art-product/review
// GET /api/v1/celeb/notice
// GET /api/v1/celeb/notice/{{noticeIndex}}
// GET /api/v1/common-code-list/{{typeCode}}
// GET /api/v1/common-code-name/{{commonCode}}
// GET /api/v1/kisa/ipascc
// GET /api/v1/mall/notice
// GET /api/v1/mall/notice/{{noticeIndex}}
// POST /api/v1/member/check/id
// POST /api/v1/member/check/name
// POST /api/v1/member/check/sns
// POST /api/v1/member/join
// POST /api/v1/member/password/change
// POST /api/v1/member/password/temp
// POST /api/v1/member/verify/email/confirm
// POST /api/v1/member/verify/email/send
// GET /api/v1/order-shipping-info
// GET /api/v1/oround-info
// POST /api/v1/orounder/order-item/review
// DELETE /api/v1/orounder/review
// GET /api/v1/orounder/review-remind
// GET /api/v1/orounder/reviewable/order-item
// GET /api/v1/orounder/written/art-product/review
// GET /api/v1/sagawa/post/{{postCode}}
// GET /api/v1/buyer/inquiry
// POST /api/v1/buyer/inquiry
// POST /api/v1/buyer/re-inquiry
// GET /api/v1/celeb-ground/{{artistMemberNo}}/artwork/data
// POST /api/v1/celeb/exhibition
// PUT /api/v1/celeb/exhibition/{{exhibitionIndex}}
// DELETE /api/v1/celeb/exhibition/{{exhibitionIndex}}
// GET /api/v1/celeb/inquiry
// POST /api/v1/celeb/inquiry
// POST /api/v1/celeb/re-inquiry
// POST /api/v1/celeb/series
// PUT /api/v1/celeb/series/{{seriesIndex}}
// DELETE /api/v1/celeb/series/{{seriesIndex}}
// GET /api/v1/celeb/{{artistMemberNo}}/exhibition/art-products
// GET /api/v1/celeb/{{artistMemberNo}}/registered/exhibitions
// GET /api/v1/celeb/{{artistMemberNo}}/registered/series
// GET /api/v1/celeb/{{artistMemberNo}}/registered/series/{{seriesIndex}}
// GET /api/v1/celeb/{{artistMemberNo}}/series/artworks
// GET /api/v1/display/category
// GET /api/v1/display/category/{{categoryIndex}}
// GET /api/v1/display/categoryFilter/{{categoryIndex}}
// GET /api/v1/exhibition/artProduct/{{exhibitionIndex}}
// GET /api/v1/exhibition/artwork/{{exhibitionIndex}}
// GET /api/v1/exhibition/list
// POST /api/v1/follow
// GET /api/v1/follower
// GET /api/v1/following
// GET /api/v1/following/celeb
// GET /api/v1/member/info
// POST /api/v1/member/myInfo/changeEmail
// POST /api/v1/member/myInfo/changeName
// POST /api/v1/member/myInfo/changePhone
// POST /api/v1/member/myInfo/checkPassword
// POST /api/v1/member/myInfo/language
// GET /api/v1/member/myInfo/personalInfo
// POST /api/v1/member/myInfo/verify/email/confirm
// GET /api/v1/member/myInfo/verify/email/send
// GET /api/v1/member/myInfo/verify/phone/send
// POST /api/v1/member/myInfo/withdraw
// GET /api/v1/member/profile
// POST /api/v1/member/profile
// POST /api/v1/member/profile/image/fileUpload
// GET /api/v1/member/shipping
// PUT /api/v1/member/shipping
// POST /api/v1/member/shipping
// DELETE /api/v1/member/shipping
// GET /api/v1/member/shipping/nation/{{shippingAreaCode}}
// GET /api/v1/product/master/{{productCode}}/info
// GET /api/v1/type-category/{{typeCategoryCode}}/code
// POST /api/v1/unfollow
// GET /api/v1/art-product/{{artProductIndex}}/download/coupon
// GET /api/v1/banner
// POST /api/v1/celeb-ground/ground
// POST /api/v1/celeb-ground/ground/cover/fileUpload
// GET /api/v1/celeb-ground/ground/{{shopId}}
// GET /api/v1/celeb-ground/message
// POST /api/v1/celeb-ground/message
// DELETE /api/v1/celeb-ground/message
// DELETE /api/v1/celeb-ground/message/{{artistMessageIndex}}
// GET /api/v1/celeb-ground/{{artistMemberNo}}/artwork
// DELETE /api/v1/celeb-ground/{{artistMemberNo}}/artwork
// PUT /api/v1/celeb-ground/{{artistMemberNo}}/artwork/openYn/{{openYn}}
// PUT /api/v1/celeb-ground/{{artistMemberNo}}/artwork/sortOrder
// GET /api/v1/celeb-ground/{{artistMemberNo}}/product
// DELETE /api/v1/celeb-ground/{{artistMemberNo}}/product
// GET /api/v1/celeb-ground/{{artistMemberNo}}/product/ai1
// PUT /api/v1/celeb-ground/{{artistMemberNo}}/product/openYn/{{openYn}}
// PUT /api/v1/celeb-ground/{{artistMemberNo}}/product/sortOrder
// GET /api/v1/celeb/auth
// POST /api/v1/celeb/auth
// GET /api/v1/celeb/coupon
// POST /api/v1/celeb/coupon
// DELETE /api/v1/celeb/coupon
// PUT /api/v1/celeb/coupon/stop
// GET /api/v1/celeb/{{artistMemberNo}}/registered/exhibition/{{exhibitionIndex}}
// POST /api/v1/file/download
// GET /api/v1/member/message/all
// DELETE /api/v1/member/message/all
// GET /api/v1/member/message/celeb
// DELETE /api/v1/member/message/celeb
// DELETE /api/v1/member/message/{{memberMessageIndex}}
// GET /api/v1/orderHistory
// GET /api/v1/orderShipping
// POST /api/v1/orderShipping/cancel
// GET /api/v1/orderShipping/cancel/{{orderNo}}
// GET /api/v1/orderShipping/exchange/{{orderNo}}
// PUT /api/v1/orderShipping/shippingInfo
// GET /api/v1/orderShipping/{{orderNo}}
// GET /api/v1/point/member-hold-point
// GET /api/v1/popup
