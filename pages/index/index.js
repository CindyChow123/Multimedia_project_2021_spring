// pages/index/index.js
const ImageFilters = require('../../utils/weImageFilters/weImageFilters.js')
const Helper = require('../../utils/weImageFilters/weImageFiltersHelper.js')
const lst1=[
    {
      img_id:0,
      img_src:"../home/img/swipe_ncv.png",
      img_name:"正常色觉"
    },
    {
      img_id:1,
      img_src:"../home/img/swipe_acb.png",
      img_name:"失色症"
    },
    {
      img_id:2,
      img_src:"../home/img/swipe_dcb.png",
      img_name:"绿色盲"
    },
    {
      img_id:3,
      img_src:"../home/img/swipe_pcb.png",
      img_name:"红色盲"
    },
    {
      img_id:4,
      img_src:"../home/img/hybrid.png",
      img_name:"红绿色盲"
    }
]
const lst2=[
    {
        img_id:0,
        img_src:"../home/img/rainbow.png",
        img_name:"色觉辅助"
    }
]
const lst3=[
    {
        img_id:0,
        img_src:"../home/img/black.png",
        img_name:"DIY"
    }
]

let helper1 = new Helper({
    canvasId: 'transform',
    width: 280,
    height: 520
})

const filters = {
    original: function (data) {
        return data
    },
    Binarize: function (data) {
        // Binarize (srcImageData, threshold)
        // threshold 0.0 <= n <= 1.0
        return ImageFilters.Binarize(data, 0.5)
    },
    BoxBlur: function (data) {
        // BoxBlur (srcImageData, hRadius, vRadius, quality)

        return ImageFilters.BoxBlur(data, 3, 3, 2)
    },
    GaussianBlur: function (data) {
        // GaussianBlur (srcImageData, strength)
        // strength 1 <= n <= 4
        return ImageFilters.GaussianBlur(data, 4)
    },
    StackBlur: function (data) {
        // StackBlur (srcImageData, radius)

        return ImageFilters.StackBlur(data, 6)
    },
    Brightness: function (data) {
        // Brightness (srcImageData, brightness)
        // brightness - 100 <= n <= 100
        return ImageFilters.Brightness(data, 100)
    },
    BrightnessContrastGimp: function (data) {
        // BrightnessContrastGimp (srcImageData, brightness, contrast)
        // brightness - 100 <= n <= 100
        // contrast - 100 <= n <= 100
        return ImageFilters.BrightnessContrastGimp(data, 26, 13)
    },
    BrightnessContrastPhotoshop: function (data) {
        // ImageFilters.BrightnessContrastPhotoshop (srcImageData, brightness, contrast)
        // brightness - 100 <= n <= 100
        // contrast - 100 <= n <= 100
        return ImageFilters.BrightnessContrastPhotoshop(data, 26, 13)
    },
    Channels: function (data) {
        // ImageFilters.Channels (srcImageData, channel)
        // channel: default is red, 2 green, 3 blue

        return ImageFilters.Channels(data, 2)
    },
    ColorTransformFilter: function (data) {
        // ImageFilters.ColorTransformFilter (srcImageData, redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier, redOffset, greenOffset, blueOffset, alphaOffset)
        // redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier: 0~5
        // redOffset, greenOffset, blueOffset, alphaOffset: 0~255
        // console.log(data)
        return ImageFilters.ColorTransformFilter(data, 20, 1, 1, 1, 38, 0, 0, 0)
    },
    Desaturate: function (data) {
        // ImageFilters.Desaturate (srcImageData)
        return ImageFilters.Desaturate(data)
    },
    Dither: function (data) {
        // ImageFilters.Dither (srcImageData, levels)
        // levels 2 <= n <= 255
        return ImageFilters.Dither(data, 2)
    },
    Edge: function (data) {
        // ImageFilters.Edge (srcImageData)
        return ImageFilters.Edge(data)
    },
    Emboss: function (data) {
        // ImageFilters.Emboss (srcImageData)
        return ImageFilters.Emboss(data)
    },
    Enrich: function (data) {
        // ImageFilters.Enrich (srcImageData)
        return ImageFilters.Enrich(data)
    },
    Flip: function (data) {
        // ImageFilters.Flip (srcImageData, vertical)
        // vertical{Boolean}
        return ImageFilters.Flip(data, 0)
    },
    Gamma: function (data) {
        // ImageFilters.Gamma (srcImageData, gamma)
        // gamma: 0~5
        return ImageFilters.Gamma(data, 5)
    },
    GrayScale: function (data) {
        // ImageFilters.GrayScale (srcImageData)
        return ImageFilters.GrayScale(data)
    },
    HSLAdjustment: function (data) {
        // ImageFilters.HSLAdjustment (srcImageData, hueDelta, satDelta, lightness)
        // hueDelta: 0~180
        // satDelta, lightness: 0~100
        return ImageFilters.HSLAdjustment(data, -23, 54, 19)
    },
    Invert: function (data) {
        // ImageFilters.Invert (srcImageData)
        return ImageFilters.Invert(data)
    },
    Mosaic: function (data) {
        // ImageFilters.Mosaic (srcImageData, blockSize)
        // blockSize > 0
        return ImageFilters.Mosaic(data, 10)
    },
    Oil: function (data) {
        // ImageFilters.Oil (srcImageData, range, levels)
        // range: 1~5
        // levels: 1~256
        return ImageFilters.Oil(data, 5, 62)
    },
    OpacityFilter: function (data) {
        // ImageFilters.OpacityFilter (srcImageData, opacity)
        // opacity: 0~255
        return ImageFilters.OpacityFilter(data, 123)
    },
    Posterize: function (data) {
        // ImageFilters.Posterize (srcImageData, levels)
        // levels: 2~32
        return ImageFilters.Posterize(data, 6)
    },
    Rescale: function (data) {
        // ImageFilters.Rescale (srcImageData, scale)
        // scale: 0~5
        return ImageFilters.Rescale(data, 3.2)
    },
    // ResizeNearestNeighbor: function (data) {
    //     // ImageFilters.ResizeNearestNeighbor (srcImageData, width, height)
    //     return ImageFilters.ResizeNearestNeighbor(data, 500, 500)
    // },
    Sepia: function (data) {
        // ImageFilters.Sepia(srcImageData)
        return ImageFilters.Sepia(data)
    },
    Sharpen: function (data) {
        // ImageFilters.Sharpen (srcImageData, factor)
        // factor: 1~10
        return ImageFilters.Sharpen(data, 9)
    },
    Solarize: function (data) {
        // ImageFilters.Solarize (srcImageData)
        return ImageFilters.Solarize(data)
    },
    Transpose: function (data) {
        // ImageFilters.Transpose (srcImageData)
        // factor: 1~10
        return ImageFilters.Transpose(data)
    },
    Twril: function (data) {
        // ImageFilters.Twril (srcImageData, centerX, centerY, radius, angle, edge, smooth)
        // centerX 0.0 <= n <= 1.0
        // centerY 0.0 <= n <= 1.0
        // radius
        // angle(degree)
        // smooth{Boolean}
        return ImageFilters.Twril(data, 0.5, 0.5, 120, 90, 0, true)
    },
}

const keys = Object.keys(filters)

Page({
    data: {
        selected: 0,
        array: [],
        index: 0,
        gap: 0,
        type: "no",
        img_lst:[]
    },
    onLoad: function (options) {
        const z = this;
        this.setData({
        })
        const eventChann = this.getOpenerEventChannel()
        eventChann.on('getUrl',function(data){
            if (data.type=="view"){
                z.setData(
                    {
                        array: keys,
                        img_lst:lst1
                    }
                )
            }else if(data.type=="help"){
                z.setData(
                    {
                        array: keys,
                        img_lst:lst2
                    }
                )
            }else{
                z.setData(
                    {
                        array: keys,
                        img_lst:lst3
                    }
                )
            }
            wx.getSystemInfo({
              success: (result) => {
                console.log("data:",data);
                helper1.initCanvas(data.path,()=>{
                    z.setData({
                        selected: 1,
                        type: data.type
                    })
                })
                // console.log("after:",z.data.type);
              },
            }) 
        })
        console.log(this);
    },
    bindPickerChange(e) {
        const z = this
        let index = e.detail.value
        this.setData({
            index
        })

        wx.showLoading({
            title: '正在加载...',
            mask: true
        })
        let startTime = (new Date()).getTime()
        let imageData = helper1.createImageData()
        let filtered = filters[keys[index]](imageData)

        helper1.putImageData(filtered, () => {
            wx.hideLoading()

            let endTime = (new Date()).getTime()
            let gap = (endTime - startTime)

            z.setData({
                gap
            })
        })
    },
    choose() {
        const z = this
        wx.chooseImage({
            count: 1,
            success: function (res) {
                if (res.tempFilePaths.length) {
                    let path = res.tempFilePaths[0]
                    console.log(path)

                    // z.getImageAspectFitSize(path)

                    helper1.initCanvas(path, () => {
                        z.setData({
                            selected: 1
                        })
                    })
                }
            },
        })
    },
    save() {
        wx.getSetting({
            success(res) {
                // console.log("get set:",res)
                wx.authorize({
                scope: 'scope.writePhotosAlbum',
                    success (res) {
                        console.log("save suc:",res)
                        helper1.getImageTempFilePath(tempFilePath => {
                            // console.log(tempFilePath);
                            // 保存到相册
                            wx.saveImageToPhotosAlbum({
                                filePath: tempFilePath,
                                success: res => {
                                    wx.showToast({
                                        title: '保存成功',
                                    })
                                },
                                fail: res => {
                                    console.log('fail:',res);
                                }
                            })
                        })
                    },
                    fail (res) {
                        wx.showModal({
                            content: '是否开放相册权限？',
                            success (res) {
                                if (res.confirm) {
                                    wx.openSetting({
                                        fail (res) {
                                            console.log('Fail to open setting!')
                                        }
                                    })
                                }
                            }
                        })
                    }
                })
                }
            }
          )        
    },
    tap() {
        for (let i = 0; i < order.length; ++i) {
          if (order[i] === this.data.toView) {
            this.setData({
              toView: order[i + 1],
              scrollTop: (i + 1) * 200
            })
            break
          }
        }
    },
    tapMove() {
        this.setData({
          scrollTop: this.data.scrollTop + 10
        })
    },
    bindImgFilter(e){
        // console.log(e);
        wx.showLoading({
            title: '正在加载...',
            mask: true
        })
        let path = e.currentTarget.dataset.src;
        let name = e.currentTarget.dataset.name;
        // wx.getImageInfo({
        //   src: path,
        //   success (res) {
        //       helper1.updateCanvasInfo({tempFilePath:path});
        //       wx.hideLoading();
        //   },
        //   fail (res) {
        //       console.log('Fail to get Image Infomation.')
        //   }
        // })
        let imageData = helper1.createImageData()
        // console.log(imageData);
        let trans = imageData;
        switch(name)
        {
            case "正常色觉":
                break;
            case "绿色盲":
                trans = ImageFilters.DeutSim(imageData,0.9)
                break;
            case "红色盲":
                trans = ImageFilters.ProtSim(imageData,0.9)
                break;
            case "红绿色盲":
                trans = ImageFilters.DPSim(imageData,0.9,0.9)
                break;
            case "失色症":
                trans = filters['GrayScale'](imageData)
                break;
            case "色觉辅助":
                let degree1,degree2;
                degree1 = wx.getStorageSync('degree0');
                degree2 = wx.getStorageSync('degree1');
                console.log(degree2)
                console.log(degree1)
                trans = ImageFilters.Correct(imageData,degree1/100.0,degree2/100.0)
                break;
            default:
                console.log('Not Found!')
        }
        // console.log(trans);
        helper1.putImageData(trans,()=>{
            wx.hideLoading()
        })
    }
})