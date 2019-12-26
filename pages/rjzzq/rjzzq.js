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
    onHide: function() {
        // 监听页面初次渲染完成的生命周期函数
    },
     goContactus: function () {
    app.goContactus();
  },
    onShow: function() {
        app.setNbt('rjzzq');
        // 监听页面显示的生命周期函数
              swan.setPageInfo({
        title: '山西软件著作权,太原软件著作权,软件著作权申请,软件著作权办理',
        keywords: '山西软件著作权,太原软件著作权,软件著作权申请,软件著作权办理',
        description: '山西景铭科技位于太原市,专注于山西软件著作权,太原软件著作权,软件著作权申请,软件著作权办理,软件著作权所需资料及流程等的查询',
        image: 'http://www.jzn360.com/rjzzq.jpg'
    
    });
   
    },
    
    goMoredRjzzq: function () {
    app.goMoreList('rjzzq');
  },

   ruanzhubanli: function () {
    app.goMoreList('ruanzhubanli');
  },
     ruanzhudaiban: function () {
    app.goMoreList('ruanzhudaiban');
  },
     ruanzhushenqing: function () {
    app.goMoreList('ruanzhushenqing');
  },
     ruanzhujiaji: function () {
    app.goMoreList('ruanzhujiaji');
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
    onReachBottom: function() {
        // 页面上拉触底事件的处理函数
    },
    onShareAppMessage: function () {
        // 用户点击右上角转发
    }
});