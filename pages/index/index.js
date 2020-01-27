Page({
  data: {
    value: '',
    array: ['中通', '百世快递', '圆通', 'EMS','申通','顺丰', '韵达'],
    index: 0,
    objectArray: [
      { id: 0, name: 'ZTO'},
      { id: 1, name: 'HTKY'},
      { id: 2, name: 'YTO'},
      { id: 3, name: 'EMS'},
      { id: 4, name:'STO'},
      { id: 5, name:'SFEXPRESS'},
      { id: 6, name: 'YUNDA'}
    ],
    company:""
  },
  handleChange: function (event) {
    console.log(event)
    let value = event.detail.value;
    this.setData({ value })
  },
  bindPickerChange: function(event) {
    let index = event.detail.value;
    let company = this.data.objectArray[index].name;
    let value = this.data.value;
    if (!value) {
      wx.showToast({
        icon: 'none',
        title: '请输入快递号'
      })
    } else {
      let url = `/pages/logs/logs?order_id=${value}&company=${company}`;
      wx.navigateTo({ url });
    }
  },
  handleScancode: function () {
    wx.scanCode({
      success(res) {
        console.log(res)
        let order_id = res.result;
        let company = this.data.company;
        order_id = order_id.trim();
        let url = `/pages/logs/logs?order_id=${order_id}&company=${company}`;
        wx.navigateTo({ url });
      }
    })
  }
})