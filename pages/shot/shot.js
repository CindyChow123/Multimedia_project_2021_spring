// pages/shot/shot.js
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