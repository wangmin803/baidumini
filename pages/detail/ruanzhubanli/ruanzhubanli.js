var util = require('../../../utils/util.js');
var network_util = require('../../../utils/network_util.js');
var json_util = require('../../../utils/json_util.js');

  const app = getApp();
Page({
    data: {
    id: "",
    title:  "",
    publishDateString:  "",
    newsContent:  ""
  }, 

  /**

   * 生命周期函数--监听页面加载

   */

  onLoad: function (options) {
    this.setData({
            id: options.id
        });
  },
    onReady: function() {
        // 监听页面初次渲染完成的生命周期函数
    },
    onShow: function(options) {
    let d = "";
    var url1 = 'https://www.jzn360.com/getnews.do?id='+this.data.id; 
    var that= this;
  network_util._getnet(url1,d).then((res) => { 

        that.setData({      
    //把引入的数据根据下标对应放到detailObj中
      id:res.id,
      title:res.newsName,
      publishDateString:  res.publishDateString.substring(0,12),
      newsContent: res.newsContent,
    })

      app.setNbt('rjzzq');

        swan.setPageInfo({
        title: that.data.title,
        keywords: '山西软件著作权,申请,计算机软件著作权办理,登记',
        description: '山西景铭科技位于太原市,专注山西软件著作权,申请,办理,登记,计算机软件著作权代理等的全方位咨询服务,并提供软件著作权加急,查询等服务。',
       articleTitle:that.data.title,
        image: 'http://www.jzn360.com/sy.jpg'
     }
    
   );
      }).catch((res) => { console.log(res) })

        // 监听页面显示的生命周期函数
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