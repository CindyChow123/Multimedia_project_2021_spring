// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{}
  },
  handleGetUserInfo(e){
    // console.log(e);
    const {userInfo} = e.detail;
    wx.setStorage({
      data: userInfo,
      key: 'userInfo',
    })

    wx.request({
      url: 'https://kxlv.ltd:7120/polls/getUserFilterParams/'+userInfo.nickName, //仅为示例，并非真实的接口地址
      success (res) {
        console.log(userInfo.nickName)
        console.log(res.data)
        wx.setStorage({
          data: res.data,
          key: 'userFilterParams:',
        })
      }
    })
    const userinfo=wx.getStorageSync('userInfo');
    this.setData({userinfo});
  },
  handleLogout(){
    wx.removeStorage({
      key: 'userInfo',
    })
    this.setData({
      userinfo: null
    })
  }
})