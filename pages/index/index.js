//index.js
//获取应用实例
const app = getApp();

Page({
  data: {},
  onLoad: function () {},
    onShow: function () {
        app.setNbt('all');

       swan.setPageInfo({
        title: '山西高新技术企业认定,太原商标注册,软件著作权',
        keywords: '山西高新技术企业认定,太原商标注册,软件著作权',
        description: '山西景铭科技位于太原市,专注于商标注册,高企认定,软件著作权,高新技术企业认定,高新认证咨询,同时是拥有专业网站制作,软件开发团队。',
        image: 'http://www.jzn360.com/shouye.jpg'
     }
    
   );
     
    },
  goContactus: function () {
    app.goContactus();
  },
  onHide: function () {

  },
  onUnload: function () {

  },
      goSbzc: function () {
    app.goSbzc();

           
  },
    goGxrd: function () {
    app.goGxrd();
  },
      goMoredGxrd: function () {
       
        app.goMoreList('gqrd');
  },
       goMoredSbzc: function () {
       
        app.goMoreList('sbzc');
  },
  onShareAppMessage: function () {
    return {
      title: '山西景铭科技有限公司',
      path: '/pages/index/index'
    };
  }

});