//app.js
App({
    globalData: {
  userInfo: null,
},
  onLaunch: function () {   },
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
     swan.switchTab({
          url: '../contactus/contactus'
        });

  },

  goSbzc: function () {
       swan.switchTab({
          url: '../sbzc/sbzc'
        });
  },


   goGxrd: function () {
      swan.switchTab({
          url: '../gxrd/gxrd'
        });
  },
      goDetail: function (id,tname) {



         swan.navigateTo({
        url: '../detail/detail?id='+id+'&tname='+tname
     });
      
  },

        goMoreList: function (type) {
            if(type=='gxrd'){
               swan.navigateTo({
                        url: '../gxrdlist/gxrdlist?type=gqrd'
                    });``
            }
              if(type=='sbzc'){
               swan.navigateTo({
                        url: '../gxrdlist/gxrdlist?type=sbzc'
                    });``
            }
       
  }

  


});