//app.js
var util = require('./utils/util.js');
var network_util = require('./utils/network_util.js');
var json_util = require('./utils/json_util.js');
App({
 
  
 
  onLaunch: function () {   },

  onShow: function () {

       swan.setPageInfo({
        title: '山西高新技术企业认定,太原商标注册,软件著作权',
        keywords: '山西高新技术企业认定,太原商标注册,山西软件著作权',
        description: '山西景铭科技位于太原市,专注于山西软件著作权申请,商标注册,高企认定,高新技术企业认定,高新认证咨询,同时是拥有专业网站制作,软件开发团队。',
        image: 'https://www.jzn360.com/sy.jpg'
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


        goMoreList: function (type) {
          
               swan.navigateTo({
                        url: '../gxrdlist/gxrdlist?type='+type
                    });``
        
       
  },
     setNbt: function (type) {
                if(type=='gqrd'){
                            swan.setNavigationBarTitle({
                                title: "山西高新技术企业认定,太原高企认证"
                            })
                    }
                        else if(type=='sbzc'){
                            swan.setNavigationBarTitle({
                                title: "山西商标注册,太原商标注册"
                            })
                    }
                        else if(type=='rjzzq'){
                            swan.setNavigationBarTitle({
                                title: "山西软件著作权,太原软件著作权,软件著作权申请,软件著作权办理"
                            })
                    }   else if(type=='all'){
                            swan.setNavigationBarTitle({
                                title: "山西高新技术企业认定,太原软件著作权,商标注册"
                            })
                    }
                    
                    else {
                            swan.setNavigationBarTitle({
                                title: "山西软件著作权,太原软件著作权,软件著作权申请,软件著作权办理"
                            })
                    }

     }


});