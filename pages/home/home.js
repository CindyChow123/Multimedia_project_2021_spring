// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [
      {
        img_id:0,
        img_src:"img/swipe_ncv.png"
      },
      {
        img_id:1,
        img_src:"img/swipe_acb.png"
      },
      {
        img_id:2,
        img_src:"img/swipe_dcb.png"
      },
      {
        img_id:3,
        img_src:"img/swipe_pcb.png"
      }
    ],
    selected: 0
  },
  choose() {
    const z = this
    wx.chooseImage({
        count: 1,
        success: function (res) {
            if (res.tempFilePaths.length) {
                let path = res.tempFilePaths[0]
                // console.log(path)
                wx.getImageInfo({
                  src: path,
                  success (res) {
                    const img = res;
                    // console.log(img)
                    wx.navigateTo({
                      url: '/pages/index/index',
                      success: function(res) {
                        res.eventChannel.emit('getUrl',{path:img.path,width:img.width,height:img.height});
                      },
                      fail: function(res){
                        console.log('Choose Picture Fail!')
                      }
                    })
                  }
                })
                
            }
        },
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