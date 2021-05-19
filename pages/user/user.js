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