//当前这个模板 API进行统一管理
import requests from "./requests";
import mockAjax from "./mockAjax";

//三级联动接口
// /api/product/getBaseCategoryList
export const reqCategoryList = () => {
  // 发请求
  return requests({
    url: "/product/getBaseCategoryList",
    method: "GET",
  });
};
// export const reqGetBannerList =()=>{
//     return mockRequests({
//         url:'/banner',
//         method: 'GET',

//     })
// }
/* 获取banner */
export const reqGetBannerList = () => mockAjax.get("/banners");
/* 获取floor是数据 */
export const reqFloorList = () => mockAjax.get("/floor");

/* 获取搜索模块数据 地址：/api/list 请求方式post  参数：需要带参数*/
/* 当前这个接口，给服务器传递参数params，至少是一个空对象 */
export const reqGetSearchInfo = (params) => requests({ url: "/list", method: "post", data: params });

/**获取产品详情信息的接口，url：/api/item/{item} 请求方式是get */
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: "get" });
