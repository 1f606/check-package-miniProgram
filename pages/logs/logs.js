//接口购买地址：https://market.aliyun.com/products/56928004/cmapi021863.html

Page({
  data:{
    order_id:'',
    detailList:[],
    toastText:"加载中",
    expName: '',
    company: '',
  },
  onLoad: function(options){
    let order_id = options.order_id;
    let company = options.company;
    // console.log(company)
    order_id && this.getData(order_id);
  },
  getData: function(order_id){
    let url = 'https://wuliu.market.alicloudapi.com/kdi';
    let company = this.data.company;
    wx.request({
      header:{
        "Authorization": "APPCODE (appcodes)"
      },
      url: url,
      data: {
        type: company,
        no: order_id
      },
      success:(res)=>{
        if(res.data.status == 0){
          this.setData({
            detailList:res.data.result.list,
            order_id:order_id,
            expName:res.data.result.expName
          })
          console.log(this.data.detailList)
        }else{
          this.setData({
            toastText:res.data.msg
          })
        }
      },
      fail: (err) => {
        console.log(err)
        this.setData({
          toastText: '网络发生错误'
        })
      }
    })
  }
})
