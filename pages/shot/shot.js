// pages/shot/shot.js
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
    savePath:null,
    dp:'back',
    no: true
  },

  onReady: function(res){
  },

  handleShot(){
    const context = wx.createCameraContext()
    context.takePhoto({
      success: (res) => {
        var Path = res.tempImagePath;
        // console.log(this.savePath);
        wx.navigateTo({
          url: '/pages/confirm/confirm',
          success: function(res) {
            res.eventChannel.emit('getTempPicUrl',{data:Path});
          },
          fail: function(res){
            console.log('Take Picture Fail!')
          }
        })
        
      },
      fail: (res)=>{
        console.log('fail');
      }
    })
  },

  handleSwitch(){
    if (this.dp=='back') this.dp='front';
    else this.dp='back';
    console.log(this.dp);
  }
})