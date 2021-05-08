// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{}
  },
  onShow() {
    const userinfo=wx.getStorageSync('userInfo');
    this.setData({userinfo});
  }
})