
var util = require('../../utils/util.js');
var network_util = require('../../utils/network_util.js');
var json_util = require('../../utils/json_util.js');


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
  

    let id=options.id;    
    let map = new Map();
    map.set('id',id);
    let d = json_util.mapToJson(util.tokenAndKo(map));
    var url1 = 'https://www.jzn360.com/getnews.do?id='+id; 
    var that= this;
  network_util._getnet(url1,d).then((res) => { 
      console.log(res) ;
        that.setData({      
    //把引入的数据根据下标对应放到detailObj中
      id:res.id,
      title:res.newsName,
      publishDateString:  res.publishDateString.substring(0,12),
      newsContent: res.newsContent,
    })
      
      }).catch((res) => { console.log(res) })


 

  },
    onReady: function() {
        // 监听页面初次渲染完成的生命周期函数
    },
    onShow: function(options) {
  

   swan.setPageInfo({
        title: options.tname,
        keywords: '山西商标注册,太原商标注册,商标代理',
        description: '山西景铭科技位于太原市,专注于商标注册,商标查询,商标代理,并提供商标申请咨询,如何申请商标,注册商标哪家好,商标注册,注册商标要多少钱的咨询。',
        image: 'http://www.jzn360.com/shouye.jpg'
     }
    
   );

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