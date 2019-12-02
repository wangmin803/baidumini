// pages/contactus/contactus.js
Page({
  callPhone: function () {
    swan.makePhoneCall({
      phoneNumber: "15935154726"
    });
  }, onShow: function () {
    swan.getStorage({
      key: "contactus_bottom",
      success: function (res) {
        if (res.data == "1") {
          swan.pageScrollTo({
            scrollTop: 800
          });
          swan.removeStorage({ key: "contactus_bottom" });
        }
      }
    });
    swan.setPageInfo({
        title: '山西高新技术企业认定,太原商标注册',
        keywords: '山西高新技术企业认定,太原商标注册',
        description: '山西景铭科技位于太原市,专注于商标注册,高企认定,高新技术企业认定,高新认证咨询,同时是拥有专业网站制作,软件开发团队。',
        image: 'http://www.jzn360.com/shouye.jpg'
    
    });

  },
  onShareAppMessage: function () {
    return {
      title: '山西景铭科技有限公司',
      path: '/pages/contactus/contactus'
    };
  }, addPhone: function () {
    swan.addPhoneContact({
      firstName: '王经理', //联系人姓名 
      weChatNumber: "mumengmeng",
      mobilePhoneNumber: '13835016858', //联系人手机号  
      addressState: "山西省",
      addressCity: "山西省太原市",
      addressStreet: "小店区国药大厦8层",
      organization: "山西景铭科技有限公司",
      email: "22982728@qq.com",
      title: "总经理"
    });
  }
});