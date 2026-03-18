// pages/tvbox/tvbox.js
Page({
  data: {
    interfaces: [],
    updateTime: ''
  },

  onLoad() {
    this.loadInterfaces();
  },

  loadInterfaces() {
    const that = this;
    wx.request({
      url: 'https://raw.githubusercontent.com/ein8544407/tvbox-applets/main/data/interfaces.json',
      success(res) {
        if (res.data && res.data.interfaces) {
          that.setData({ 
            interfaces: res.data.interfaces,
            updateTime: res.data.updateTime || ''
          });
        }
      },
      fail() {
        const defaultData = [
          { name: '肥猫', url: 'http://肥猫.com/', desc: '肥猫TVBox接口' },
          { name: '饭太硬', url: 'http://www.饭太硬.com/tv', desc: '饭太硬TV接口' },
          { name: '小米', url: 'https://mpanso.me/DEMO.json', desc: '小米Demo接口' },
          { name: '王二小', url: 'http://tvbox.xn--4kq62z5rby2qupq9ub.top/', desc: '王二小TVBox接口' },
          { name: '南风', url: 'https://ghproxy.net/https://raw.githubusercontent.com/yoursmile66/TVBox/main/XC.json', desc: '南风接口' },
          { name: '菜妮丝', url: 'https://tvbox.cainisi.c', desc: '菜妮丝TVBox接口' }
        ];
        that.setData({ interfaces: defaultData });
      }
    });
  },

  copyUrl(e) {
    const url = e.currentTarget.dataset.url;
    wx.setClipboardData({
      data: url,
      success() {
        wx.showToast({
          title: '已复制',
          icon: 'success'
        });
      }
    });
  }
})
