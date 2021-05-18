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
    // wx.getImageInfo({
    //   src: "icon/colorBlindTest.jpg",
    //   success (res) {
    //     res.canvasId = 'test_pic';
    //     res.tempFilePath = "icon/colorBlindTest.jpg";
    //     console.log(res);
    //     helper.updateCanvasInfo(res);
    //     console.log(helper);
    //   }
    // })
    // let path = "icon/colorBlindTest.jpg"
    // helper.initCanvas(path)
  },

  slide_change: function(event) {
    console.log(event)
  }
})