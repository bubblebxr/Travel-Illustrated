Page({
  data:{
    unlog:true,
    anhui:false,
    aomen:false,
    chongqing:false,
    beijing:false,
    fujian:false,
    gansu:false,
    guangdong:false,
    guangxi:false,
    guizhou:false,
    hainan:false,
    hebei:false,
    henan:false,
    heilongjiang:false,
    hubei:false,
    hunan:false,
    jilin:false,
    jiangsu:false,
    jiangxi:false,
    liaoning:false,
    neimenggu:false,
    ningxia:false,
    qinghai:false,
    shandong:false,
    shanxi:false,
    shanxi3:false,
    shanghai:false,
    sichuan:false,
    taiwan:false,
    tianjin:false,
    xizang:false,
    xianggang:false,
    xinjiang:false,
    yunnan:false,
    zhejiang:false,
  },
  onShow(){
    let user = wx.getStorageSync('user')
    // console.log("user=",user)
    if(user!=null){
      this.setData({
        unlog:false
      })
    }
    // console.log("unlog=",this.data.unlog)
    let city=wx.getStorageSync('anhui')
    if(city!=""&city.shoucang==true){
      this.setData({
        anhui:true
      })
    }
    city=wx.getStorageSync('aomen')
    if(city!=""&city.shoucang==true){
      this.setData({
        aomen:true
      })
    }
    console.log("aomen=",this.data.anmen)
    city=wx.getStorageSync('beijing')
    if(city!=""&city.shoucang==true){
      this.setData({
        beijing:true
      })
    }
    city=wx.getStorageSync('chongqing')
    if(city!=""&city.shoucang==true){
      this.setData({
        chongqing:true
      })
    }
    city=wx.getStorageSync('fujian')
    if(city!=""&city.shoucang==true){
      this.setData({
        fujian:true
      })
    }
    city=wx.getStorageSync('gansu')
    if(city!=""&city.shoucang==true){
      this.setData({
        gansu:true
      })
    }
    city=wx.getStorageSync('guangdong')
    if(city!=""&city.shoucang==true){
      this.setData({
        guangdong:true
      })
    }
    city=wx.getStorageSync('guangxi')
    if(city!=""&city.shoucang==true){
      this.setData({
        guangxi:true
      })
    }
    city=wx.getStorageSync('guizhou')
    if(city!=""&city.shoucang==true){
      this.setData({
        guizhou:true
      })
    }
    city=wx.getStorageSync('hainan')
    if(city!=""&city.shoucang==true){
      this.setData({
        hainan:true
      })
    }
    city=wx.getStorageSync('hebei')
    if(city!=""&city.shoucang==true){
      this.setData({
        hebei:true
      })
    }
    city=wx.getStorageSync('henan')
    if(city!=""&city.shoucang==true){
      this.setData({
        henan:true
      })
    }
    city=wx.getStorageSync('heilongjiang')
    if(city!=""&city.shoucang==true){
      this.setData({
        heilongjiang:true
      })
    }
    city=wx.getStorageSync('hubei')
    if(city!=""&city.shoucang==true){
      this.setData({
        hubei:true
      })
    }
    city=wx.getStorageSync('hunan')
    if(city!=""&city.shoucang==true){
      this.setData({
        hunan:true
      })
    }
    city=wx.getStorageSync('jilin')
    if(city!=""&city.shoucang==true){
      this.setData({
        jilin:true
      })
    }
    city=wx.getStorageSync('jiangsu')
    if(city!=""&city.shoucang==true){
      this.setData({
        jiangsu:true
      })
    }
    city=wx.getStorageSync('jiangxi')
    if(city!=""&city.shoucang==true){
      this.setData({
        jiangxi:true
      })
    }
    city=wx.getStorageSync('liaoning')
    if(city!=""&city.shoucang==true){
      this.setData({
        liaoning:true
      })
    }
    city=wx.getStorageSync('neimenggu')
    if(city!=""&city.shoucang==true){
      this.setData({
        neimenggu:true
      })
    }
    city=wx.getStorageSync('ningxia')
    if(city!=""&city.shoucang==true){
      this.setData({
        ningxia:true
      })
    }
    city=wx.getStorageSync('qinghai')
    if(city!=""&city.shoucang==true){
      this.setData({
        qinghai:true
      })
    }
    city=wx.getStorageSync('shandong')
    if(city!=""&city.shoucang==true){
      this.setData({
        shandong:true
      })
    }
    city=wx.getStorageSync('shanxi')
    if(city!=""&city.shoucang==true){
      this.setData({
        shanxi:true
      })
    }
    city=wx.getStorageSync('shanxi3')
    if(city!=""&city.shoucang==true){
      this.setData({
        shanxi3:true
      })
    }
    city=wx.getStorageSync('shanghai')
    if(city!=""&city.shoucang==true){
      this.setData({
        shanghai:true
      })
    }
    city=wx.getStorageSync('sichuan')
    if(city!=""&city.shoucang==true){
      this.setData({
        sichuan:true
      })
    }
    city=wx.getStorageSync('taiwan')
    if(city!=""&city.shoucang==true){
      this.setData({
        taiwan:true
      })
    }
    city=wx.getStorageSync('tianjin')
    if(city!=""&city.shoucang==true){
      this.setData({
        tianjin:true
      })
    }
    city=wx.getStorageSync('xizang')
    if(city!=""&city.shoucang==true){
      this.setData({
        xizang:true
      })
    }
    city=wx.getStorageSync('xianggang')
    if(city!=""&city.shoucang==true){
      this.setData({
        xianggang:true
      })
    }
    city=wx.getStorageSync('xinjiang')
    if(city!=""&city.shoucang==true){
      this.setData({
        xinjiang:true
      })
    }
    city=wx.getStorageSync('yunnan')
    if(city!=""&city.shoucang==true){
      this.setData({
        yunnan:true
      })
    }
    city=wx.getStorageSync('zhejiang')
    if(city!=""&city.shoucang==true){
      this.setData({
        zhejiang:true
      })
    }
  }
})