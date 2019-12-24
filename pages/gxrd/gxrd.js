  const app = getApp();
Page({
  
    data: {

    },
    onLoad: function () {
        // 监听页面加载的生命周期函数
    },
    onReady: function() {
        // 监听页面初次渲染完成的生命周期函数
    },
    onShow: function() {
        // 监听页面显示的生命周期函数
               swan.setPageInfo({
        title: '山西高新技术企业认定,太原高新认定',
        keywords: '山西高新技术企业认定,太原高新认定',
        description: '山西景铭科技位于太原市,是专业的高新认定辅导咨询机构,免费提供高新技术企业的认定工作',
        image: 'http://www.jzn360.com/gxrd.jpg'
        });
           swan.setNavigationBarTitle({
          title: "山西高新技术企业认定,太原高新认定"
      })
    },
    onHide: function() {
        // 监听页面隐藏的生命周期函数
    },
    onUnload: function() {
        // 监听页面卸载的生命周期函数
    },
    onPullDownRefresh: function() {
        // 监听用户下拉动作
    },
     goContactus: function () {
    app.goContactus();
  },
    onReachBottom: function() {
        // 页面上拉触底事件的处理函数
    },
    onShareAppMessage: function () {
        // 用户点击右上角转发
    },
    goMoredGxrd: function () {
       
        app.goMoreList('gxrd');
  }

});