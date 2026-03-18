// pages/index/index.js
Page({
  onLoad() {
    console.log('白夜的工具箱启动');
  },

  goToTool(e) {
    const url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url
    });
  }
})
