// pages/test/test.js
const text = '请将滑块滑至能看清数字的位置'
const ImageFilters = require('../../utils/weImageFilters/weImageFilters.js')
const Helper = require('../../utils/weImageFilters/weImageFiltersHelper.js')
var degree=0
var picNum=1
var nickName='test'
let helper = new Helper({
  canvasId: 'test_pic',
  width: 420,
  height: 420
})
Page({
  /**
   * 页面的初始数据
   */
  data: {
    text,
    finish: false,
    img_data:null,
    s_degree:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const z = this;
    picNum=1
    wx.getSystemInfo({
      success: (result) => {
        const syswid=result.windowWidth;
        wx.getImageInfo({
          src: "icon/CBT1.jpg",
          success (res) {
            res.canvasId = 'test_pic';
            res.tempFilePath = "icon/CBT1.jpg",
            res.height=Math.floor(syswid*(res.height/res.width))
            res.width=syswid;
            // console.log(res);
            helper.updateCanvasInfo(res);
            helper.saveImageData();
            // let idata = helper.createImageData()
            // z.setData({
            //   img_data: idata
            // })
            // console.log(helper);
          }
        })
      },
    })
    // let path = "icon/colorBlindTest.jpg"
    // helper.initCanvas(path)
  },

  refresh: function (options) {
    wx.getSystemInfo({
      success: (result) => {
        const syswid=result.windowWidth;
        wx.getImageInfo({
          src: "icon/CBT"+picNum+".jpg",
          success (res) {
            res.canvasId = 'test_pic';
            res.tempFilePath = "icon/CBT"+picNum+".jpg",
            res.height=Math.floor(syswid*(res.height/res.width))
            res.width=syswid;
            // console.log(res);
            helper.updateCanvasInfo(res);
            // console.log(helper);
          }
        })
      },
    })
    // let path = "icon/colorBlindTest.jpg"
    // helper.initCanvas(path)
  },

  bindSlideChange: function(event) {
    // console.log(helper)
    let imageData = helper.createImageData()
    wx.showLoading({
      title: '正在加载...',
      mask: true
    })
    degree=event.detail.value;
    // console.log("ori:",imageData.data);
    let transformed;
    if (picNum==1) {
      transformed = ImageFilters.Correct(imageData,degree/100.0,0)
    }else{
      transformed = ImageFilters.Correct(imageData,0,degree/100.0)
    }
    // console.log("trans:",transformed.data);
    helper.putImageData(transformed,()=>{
      wx.hideLoading()
    })
  },
  next: function name(params) {
    var storeTestDegree=new Array()
    let degree = this.data.s_degree;
    switch(picNum){
      case 1:storeTestDegree=[degree,0,0];
      case 2:storeTestDegree=[0,degree,0];
      case 3:storeTestDegree=[0,0,degree];
      case 4:storeTestDegree=[degree,degree,0];
    }
    wx.setStorage({
      data: degree,
      key: 'degree'+picNum,
    })
    wx.getStorage({
      key: 'userInfo',
      success (res) {
        nickName=res.data.nickName
      }
    })
    wx.request({
      url: 'https://10.21.106.146:7120/polls/storeTestDegree?userId='+nickName+'&testType='+picNum+'&degrees='+storeTestDegree,
      method: 'GET',
      success(res){
        console.log(res.data)
      }
    })


    if (picNum>=2){
      wx.showLoading({
        title: '正在分析',
      })
      wx.hideLoading()
      wx.showModal({
        title: '测试完成！',
      })
      wx.switchTab({
        url: '/pages/user/user'
      })
    }
    picNum+=1
    this.refresh()
    this.setData({
      s_degree:0
    })
  },

  finish: function name(params) {
    wx.switchTab({
      url: '/pages/user/user'
    })
  }
})