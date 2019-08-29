module.exports = {
  devServer: {
    open: process.platform === "darwin",

    disableHostCheck: false,

    host: "127.0.0.1",  //同步本地

    port: 80,

    https: false,

    hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy

    proxy: {
      //vue3.x 设置跨域请求
      '/banner': {  //轮播之家(小说)
        target: 'http://v2.api.dmzj.com',//请求的目标地址的BaseURL
        changeOrigin: true,    //是否开启跨域
        pathRewrite: {
          '^/banner': '' //规定请求地址以什么作为开头
        }
      },
      '/gaoxiao': {  //搞笑图片
        target: 'http://www.hao123.com',//请求的目标地址的BaseURL
        changeOrigin: true,    //是否开启跨域
        pathRewrite: {
          '^/gaoxiao': '' //规定请求地址以什么作为开头
        }
      },
      '/video': {  //视频
        target: 'http://baobab.kaiyanapp.com/api/v4/video/recommend',//请求的目标地址的BaseURL
        changeOrigin: true,    //是否开启跨域
        pathRewrite: {
          '^/video': '' //规定请求地址以什么作为开头
        }
      },

      '/novel': {  //小说筛选
        target: 'http://v2.api.dmzj.com/novel/filter.json',//请求的目标地址的BaseURL
        changeOrigin: true,    //是否开启跨域
        pathRewrite: {
          '^/novel': '' //规定请求地址以什么作为开头
        }
      },
      '/screenApi': {  //小说类别
        target: 'http://v2.api.dmzj.com/1/category.json',//请求的目标地址的BaseURL
        changeOrigin: true,    //是否开启跨域
        pathRewrite: {
          '^/screenApi': '' //规定请求地址以什么作为开头
        }
      },

      '/xslist': {  //小说列表
        target: 'http://v2.api.dmzj.com/novel',//请求的目标地址的BaseURL
        changeOrigin: true,    //是否开启跨域
        pathRewrite: {
          '^/xslist': '' //规定请求地址以什么作为开头
        }
      },

      '/arclist': {  //小说详情
        target: 'http://v2.api.dmzj.com/novel',//请求的目标地址的BaseURL
        changeOrigin: true,    //是否开启跨域
        pathRewrite: {
          '^/arclist': '' //规定请求地址以什么作为开头
        }
      },

      '/chapter': {  //小说章节
        target: 'http://v2.api.dmzj.com/novel/chapter',//请求的目标地址的BaseURL
        changeOrigin: true,    //是否开启跨域
        pathRewrite: {
          '^/chapter': '' //规定请求地址以什么作为开头
        }
      },

      '/download': {  //小说正文
        target: 'http://v2.api.dmzj.com/novel/download',//请求的目标地址的BaseURL
        changeOrigin: true,    //是否开启跨域
        pathRewrite: {
          '^/download': '' //规定请求地址以什么作为开头
        }
      },


      '/category': {  //资讯分类
        target: 'http://v2.api.dmzj.com/article/category.json ',//请求的目标地址的BaseURL
        changeOrigin: true,    //是否开启跨域
        pathRewrite: {
          '^/category': '' //规定请求地址以什么作为开头
        }
      },

      '/zxlist': {  //资讯列表
        target: 'http://v2.api.dmzj.com/article/list/v2',//请求的目标地址的BaseURL
        changeOrigin: true,    //是否开启跨域
        pathRewrite: {
          '^/zxlist': '' //规定请求地址以什么作为开头
        }
      },

      '/zxarticle': {  //资讯详情 xxx 
        target: 'http://v2.api.dmzj.com/article/show/v2',//请求的目标地址的BaseURL
        changeOrigin: true,    //是否开启跨域
        pathRewrite: {
          '^/zxarticle': '' //规定请求地址以什么作为开头
        }
      },

      // '/manhua': {  //首页漫画 （动漫之家）
      //   target: 'https://m.dmzj.com',//请求的目标地址的BaseURL
      //   changeOrigin: true,    //是否开启跨域
      //   pathRewrite: {
      //     '^/manhua': '' //规定请求地址以什么作为开头
      //   }
      // },

      '/mhhome': {  //首页漫画 （看漫画）
        target: 'https://m.kanman.com/api/gettopsearch?product_id=1&search_key=',//请求的目标地址的BaseURL
        changeOrigin: true,    //是否开启跨域
        pathRewrite: {
          '^/mhhome': '' //规定请求地址以什么作为开头
        }
      },

      '/mhlist': {  //漫画分类 （看漫画）
        target: 'https://m.kanman.com/api/getsortlist/?product_id=1',//请求的目标地址的BaseURL
        changeOrigin: true,    //是否开启跨域
        pathRewrite: {
          '^/mhlist': '' //规定请求地址以什么作为开头
        }
      },
      
      '/mharc': {  //漫画详情 （看漫画）
        target: 'https://m.kanman.com/api/getcomicinfo_body?product_id=1&productname=kmh&platformname=wap&comic_id',//请求的目标地址的BaseURL
        changeOrigin: true,    //是否开启跨域
        pathRewrite: {
          '^/mharc': '' //规定请求地址以什么作为开头
        }
      },
    }




  },
}