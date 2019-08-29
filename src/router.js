import Vue from 'vue'
import Router from 'vue-router'

// import home from './views/Home/home.vue'
// import category from './views/Category/category.vue'
// import ranking from './views/Ranking/ranking.vue'
// import personal from './views/Personal/personal.vue'

// import typeList from './components/funnyMore/typeList.vue'
// import detailed from './components/detailed/detailed.vue'

//路由懒加载
const home = ()=> import('./views/Home/home.vue');
const category = ()=> import('./views/Category/category.vue');
const ranking = ()=> import( './views/Ranking/ranking.vue');
const personal = ()=> import('./views/Personal/personal.vue');

//图片列表
const typeList = ()=> import('./components/funnyMore/typeList.vue');

//小说
const readList = ()=> import('./components/read/readList.vue');
//{小说}筛选
const screen = ()=> import('./components/read/screen.vue');
//小说详情
const arclist = ()=> import('./components/read/arclist.vue');
//小说内容
const chapterContent = ()=> import('./components/read/chapterContent.vue');

//漫画列表
const manList = ()=> import('./components/manhua/manList.vue');
//漫画筛选
const mh_screen = ()=> import('./components/manhua/screen.vue');
//漫画详情
const manarclist = ()=> import('./components/manhua/manarclist.vue');
//漫画正文
const arclistCon = ()=> import('./components/manhua/arclistCon.vue');

//视频
const homeList = ()=> import('./components/videoList/homeList.vue');
const videoList = ()=> import('./components/videoList/videoList.vue');

//资讯详情
const articleContent = ()=> import('./components/article/articleContent.vue');

// 反馈feedback
const feedback = ()=> import('./components/Personal/feedback.vue');
// 反馈feedback
const about = ()=> import('./components/Personal/about.vue');
// 登录
const login = ()=> import('./components/Personal/login.vue');
//注册
const apply = ()=> import('./components/Personal/apply.vue');
//忘记密码
const retrieve = ()=> import('./components/Personal/retrieve.vue');


//404
const error = ()=> import('./components/error.vue');

Vue.use(Router)

export default new Router({
  //mode: 'history',   //history子页出现404现象
  base: process.env.BASE_URL,

  routes: [
    {path:'/home',redirect:'/'},

    {path:'/',component:home},
    {path:'/category',component:category},
    {name:'ranking',path:'/ranking',component:ranking},
    {path:'/personal',component:personal},

    //列表
    {name:'typelist',path:'/typelist',component:typeList,meta:{scroll:true}},
    //详情x

    //小说列表
    {name:'read',path:'/read',component:readList},
    //小说筛选
    {name:'screen',path:'/screen',component:screen},
    //小说详情
    {name:'arclist',path:'/arclist',component:arclist},
    //小说正文
    {name:'chacontent',path:'/chacontent',component:chapterContent},
    
    //漫画列表
    {name:'manhua',path:'/manhua',component:manList},
    //漫画筛选
    {name:'mh_screen',path:'/mh_screen',component:mh_screen},
    //漫画详情
    {name:'manarclist',path:'/manarclist',component:manarclist,},
    //漫画正文
    {name:'arclistcon',path:'/arclistcon',component:arclistCon,meta:{isHomeFooter:false}},

    //视频列表
    {path:'/videolist',component:videoList},

    {path:'/homeList',component:homeList},

    //资讯详情
    {path:'/article',component:articleContent},

    //反馈
    {path:'/feedback',component:feedback},
    //关于
    {path:'/about',component:about},

    //登录
    {path:'/login',component:login},
    //注册
    {path:'/apply',component:apply},
    //找回密码
    {path:'/retrieve',component:retrieve},
    

    //404
    {path:'*',component:error},

  ]
})
