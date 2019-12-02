//app.js
App({
  onLaunch: function () {},
  onShow: function () {

       swan.setPageInfo({
        title: '山西高新技术企业认定,太原商标注册',
        keywords: '山西高新技术企业认定,太原商标注册',
        description: '山西景铭科技位于太原市,专注于商标注册,高企认定,高新技术企业认定,高新认证咨询,同时是拥有专业网站制作,软件开发团队。',
        image: 'http://www.jzn360.com/shouye.jpg'
     }
    
   );
   
    },
  goContactus: function () {
    swan.setStorage({
      key: "contactus_bottom",
      data: "1",
      success: function () {
        swan.switchTab({
          url: '../contactus/contactus'
        });
      }
    });

  },

  goSbzc: function () {
    swan.setStorage({
      key: "sbzc_bottom",
      data: "2",
      success: function () {
        swan.switchTab({
          url: '../sbzc/sbzc'
        });
      }
    });
  },


   goGxrd: function () {
    swan.setStorage({
      key: "gxrd_bottom",
      data: "3",
      success: function () {
        swan.switchTab({
          url: '../gxrd/gxrd'
        });
      }
    });
  },
      goDetail: function (id) {



         swan.navigateTo({
        url: '../detail/detail?id='+id
     });
      
  },

        goMoreGxrd: function () {
       swan.redirectTo({
           url: '../gxrdlist/gxrdlist'
       });
  }

  


});