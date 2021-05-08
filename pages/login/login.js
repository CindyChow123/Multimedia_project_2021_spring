// pages/login/login.js
Page({
  handleGetUserInfo(e){
    console.log(e);
    const {userInfo} = e.detail;
    wx.setStorage({
      data: userInfo,
      key: 'userInfo',
    })
    wx.navigateBack({
      delta: 1,
    })
  }
})