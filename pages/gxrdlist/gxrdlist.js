
var util = require('../../utils/util.js');
var network_util = require('../../utils/network_util.js');
var json_util = require('../../utils/json_util.js');
const app = getApp();
Page({
  data: {
    page: 0,
    size: 10,
    loading: false,
    allloaded: false,
    code:"123",
    list: [],
    msg:"123"
 
  },

  type:"",
  onLoad: function (options) {
      console.log(options.type);
      type=options.type;
  },
  
  onShow() {
    this.getList();
        swan.setPageInfo({
        title: '山西高新技术企业认定,太原商标注册',
        keywords: '山西高新技术企业认定,太原商标注册',
        description: '山西景铭科技位于太原市,专注于商标注册,高企认定,高新技术企业认定,高新认证咨询,同时是拥有专业网站制作,软件开发团队。',
        image: 'http://www.jzn360.com/shouye.jpg'
     }
    
   );

  },
  onUnload: function () {
       
    	swan.switchTab({
            url: '/pages/gxrd/gxrd'
        });
  },

  
      goDetail: function (e) {
 
 
      swan.navigateTo({
        url: '../detail/detail?id='+e.currentTarget.dataset.id+'&tname='+e.currentTarget.dataset.tname
     });



   
      




  },




  // 加载更多
  loadmore({
    detail
  }) {
    this.getList().then(res => {
      detail.success();
    });
  },
  // 刷新
  refresh({
    detail
  }) {
    this.setData({
      list: [],
      loading: false,
      allloaded: false,
      page: 0
    });
    this.getList().then(res => {
      detail.success();
    });
  },
  getList() {
    return new Promise((resolve, reject) => {
      if (this.data.loading || this.data.allloaded) {
        resolve();
        return;
      }
      this.setData({
        loading: true
      });
      setTimeout(() => {
  

 let map = new Map();
    // map.set('username','13261570828');
    // map.set('password','123456');
    // map.set('orgid','0010000');0010000022464

    let d = json_util.mapToJson(util.tokenAndKo(map));
  
     var url1 = 'https://www.jzn360.com/Manage/News/table1.do?limit=12&channelCode='+type+'&page='+this.data.page; 
     var that= this;
     let addList ="";
     let newList ="";
    network_util._post(url1, d, function (res) {
    addList= res.data.data;

    console.log(res.data.msg);

    newList = that.data.list.concat(addList);
  if (addList.length < that.data.size) {
          that.setData({
           code:res.data.code,
           msg:res.data.msg,
            allloaded: true
          });
        }
            
        that.setData({
        code:res.data.code,
          msg:res.data.msg,
          list: newList,
          loading: false,
          page: that.data.page + 1,
         
        });


    }, function (res) {
      console.log(res);
    });


        //let addList = resData.slice(this.data.size * this.data.page, (this.data.page + 1) * this.data.size);
  // let newList = this.data.list.concat(addList);
      
        resolve();
      }, 500);
    });
  }
});