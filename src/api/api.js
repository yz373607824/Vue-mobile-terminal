
//-----------------漫画地址
//首页{轮播，推荐}
export const HOME_MH={
    url:'/banner/novel/recommend.json',
    type:'get',
    data:{
        responseType:'json'
    }   
}


//--------------------段子
//首页段子地址
export const HOME_DZ={ 
    url:'/gaoxiao/gaoxiao/screen/all/1',
    type:'get',
    data:{
        responseType:'json'
    }
}

// 段子地址 {添加参数 number}
export const DZ={ 
    url:'/gaoxiao/gaoxiao/screen/all/',
    type:'get',
    data:{
        responseType: 'json',
    }
}




//-----------------------视频
// 视频地址 {添加参数 number *id范围 498~90961  }
export const SP={ 
    url:'/video?id=',
    type:'get',
    data:{
        responseType: 'json',
    }
}




//----------------小说
//类别
export const XS_Novel={ 
    url:'/novel',
    type:'get',
    data:{
        responseType: 'json',
    }
}
//筛选
export const XS_SCREEN={ 
    url:'/screenApi',
    type:'get',
    data:{
        responseType: 'json',
    }
}
//列表
export const XS_LIST={ 
    url:'/xslist',
    type:'get',
    data:{
        responseType: 'json',
    }
}
//详情
export const XS_ARCLIST={ 
    url:'/arclist',
    type:'get',
    data:{
        responseType: 'json',
    }
}
//章节
export const XS_CHAPTER={ 
    url:'/chapter',
    type:'get',
    data:{
        responseType: 'json',
    }
}

//正文
export const XS_DOWN={ 
    url:'/download',
    type:'get',
    data:{
        responseType: 'txt',
    }
}


// ----------------------资讯栏目
//资讯分类
export const ZX_CAT={ 
    url:'/category',
    type:'get',
    data:{
    }
}

//资讯分类
export const ZX_LIST={ 
    url:'/zxlist',
    type:'get',
    data:{
        responseType: 'json',
    }
}

//资讯详情 xxx
export const ZX_ARTICLE={ 
    url:'/zxarticle',
    type:'get',
    data:{
    }
}

// //漫画(公用)
// export const MANHUA={ 
//     url:'/manhua',
//     type:'get',
//     data:{
//     }
// }

//首页漫画
export const MH_HOME={ 
    url:'/mhhome',
    type:'get',
    data:{
    }
}

//漫画分类
export const MH_LIST={ 
    url:'/mhlist',
    type:'get',
    data:{
    }
}

//漫画详情
export const MH_ARC={ 
    url:'/mharc',
    type:'get',
    data:{
    }
}






