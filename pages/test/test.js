// pages/test/test.js
const text = '请将滑块滑至能看清数字的位置'
const ImageFilters = require('../../utils/weImageFilters/weImageFilters.js')
const Helper = require('../../utils/weImageFilters/weImageFiltersHelper.js')
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
    finish: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (result) => {
        const syswid=result.windowWidth;
        wx.getImageInfo({
          src: "icon/CBT2.jpg",
          success (res) {
            res.canvasId = 'test_pic';
            res.tempFilePath = "icon/CBT2.jpg";
            res.height=Math.floor(syswid*(res.height/res.width))
            res.width=syswid;
            console.log(res);
            helper.updateCanvasInfo(res);
            console.log(helper);
          }
        })
      },
    })
    
    // let path = "icon/colorBlindTest.jpg"
    // helper.initCanvas(path)
  },

  bindSlideChange: function(event) {
    // console.log(event)
    let imageData = helper.createImageData()
    wx.showLoading({
      title: '正在加载...',
      mask: true
    })
    // console.log("ori:",imageData.data);
    let transformed = ImageFilters.Correct(imageData,event.detail.value/100,0)
    // console.log("trans:",transformed.data);
    helper.putImageData(transformed,()=>{
      wx.hideLoading()
    })
  }
})