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
    onShow: function() {
        // 监听页面显示的生命周期函数
              swan.setPageInfo({
        title: '山西注册商标,太原商标注册',
        keywords: '山西注册商标,太原商标注册',
        description: '山西景铭科技位于太原市,是专业的商标局备案机构,专注于商标注册,注册商标,商标查询服务',
        image: 'http://www.jzn360.com/sbzc.jpg'
    
    });
    },
    
    goMoredSbzc: function () {
    app.goMoreList('sbzc');
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