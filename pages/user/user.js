// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{}
  },
  onLoad(){
    let temp = wx.getStorageSync('userInfo');
    if (temp) {
      this.setData({
        userinfo:temp
      })
    }
  },
  handleGetUserInfo(e){
    // console.log(e);
    const {userInfo} = e.detail;
    wx.setStorage({
      data: userInfo,
      key: 'userInfo',
    })

    wx.request({
      url: 'https://example.com/polls/getUserFilterParams?userId='+userInfo.nickName, //仅为示例，并非真实的接口地址
      success (res) {
        console.log(userInfo.nickName)
        console.log(res.data)
        wx.setStorage({
          data: res.data.userFilterParams[0].degreeA,
          key: 'degree1',
        })
        wx.setStorage({
          data: res.data.userFilterParams[1].degreeB,
          key: 'degree2',
        })
        wx.setStorage({
          data: res.data.userFilterParams[2].degreeB,
          key: 'degree3',
        })
        wx.setStorage({
          data: res.data.userFilterParams[3].degreeB,
          key: 'degree4',
        })
      }
    })
    const userinfo=wx.getStorageSync('userInfo');
    this.setData({userinfo});
  },
  handleLogout(){
    const z = this;
    wx.clearStorage({
      success: (res) => {
        z.setData({
          userinfo: null
        })
      },
    })
  }
})