const Helper = require('../../utils/weImageFilters/weImageFiltersHelper.js')

let helper = new Helper({
    canvasId: 'pic',
    width: 320,
    height: 320
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    path: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const t=this
    const eventChannel = this.getOpenerEventChannel()
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('getTempPicUrl', function(data) {
      wx.getImageInfo({
        src: data.data,
        success (res) {
          t.setData({
            path: res.path
          })
          console.log(res.path)
          let helper = new Helper({
            canvasId: 'pic',
            width: res.width,
            height: res.height
          })
          helper.initCanvas(res.path);
        }
      })
    })
  },

  handleBack: function() {
    wx.navigateBack({
      delta: 1,
    })
  },
  
  handleForward: function(){
    const t = this
    wx.navigateTo({
      url: '/pages/index/index',
      success: function(res){
        res.eventChannel.emit('getUrl',{data:t.data.path})
      }
    })
  }
})