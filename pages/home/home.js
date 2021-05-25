// pages/home/home.js

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
  choose(e) {
    const Type = e.currentTarget.dataset.type;
    const z = this
    const userinfo=wx.getStorageSync('userInfo');
    if (Type=="diy" || Type=="help") {
      if (userinfo) {
        console.log("yes");
        z.handleImage(Type);
      }else{
        wx.showModal({
          content: '登录以使用更多功能',
          success (res) {
            // console.log(res);
            if (res.confirm==true) {
              // console.log('yes');
              wx.switchTab({
                url: '/pages/user/user'
              })
            }
          }
        })
      }
    }else{
      this.handleImage(Type);
    }
  },
  handleImage: function(Type){
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
  }

})