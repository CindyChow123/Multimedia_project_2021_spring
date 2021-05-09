// pages/shot/shot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    savePath:null,
    dp:'back'
  },

  handleShot(){
    const context = wx.createCameraContext();
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
      console.log(frame.width);
    })
  },

  handleSwitch(){
    if (this.dp=='back') this.dp='front';
    else this.dp='back';
    console.log(this.dp);
  }
})