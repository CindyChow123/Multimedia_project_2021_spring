// pages/shot/shot.js
const ImageFilters = require('../../utils/weImageFilters/weImageFilters.js')
const Helper = require('../../utils/weImageFilters/weImageFiltersHelper.js')
let helper = new Helper({
  canvasId: 'hehe',
  width: 320,
  height: 320
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    savePath:null,
    dp:'back'
  },

  onReady: function(res){
  },

  handleShot(){
    var data
    const context = wx.createCameraContext()
    context.takePhoto({
      success: (res) => {
        this.savePath = res.tempImagePath;
        console.log(this.savePath);
      },
      fail: (res)=>{
        console.log('fail');
      }
    })
    const listener = context.onCameraFrame((frame) => {
      // console.log(frame.data)
      var buffer = frame.data;
      var dataview = new DataView(buffer);
      let i = 0;
      // 第 i+1 个 点的rgba 中的 r色值
      var r = dataview.getInt8(i*4)
      var g = dataview.getInt8(i*4+1)
      var b = dataview.getInt8(i*4+2)
      data = new Uint8ClampedArray(frame.data)
      var info = {'height':frame.height,'width':frame.width,'data':data}
      // console.log(info)
      let startTime = (new Date()).getTime()
      // let imageData = helper.createImageData()
      // console.log(imageData)
      let filtered = ImageFilters.ColorTransformFilter(info, 20, 1, 1, 1, 38, 0, 0, 0)

      helper.putImageData(filtered, () => {
          wx.hideLoading()

          let endTime = (new Date()).getTime()
          let gap = (endTime - startTime)

          this.setData({
              gap
          })
      })
    })
    listener.start()
    listener.stop()
  },

  handleSwitch(){
    if (this.dp=='back') this.dp='front';
    else this.dp='back';
    console.log(this.dp);
  }
})