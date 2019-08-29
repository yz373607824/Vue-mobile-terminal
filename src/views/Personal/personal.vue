<template>
  <div>
    <headerTop>
      <div slot="left" class="top-return">
        <i class="default return" @click="rouBack"></i>
        <h3 class="h3">{{title}}</h3>
      </div>
    </headerTop>

    <article class="main under-top-bar">
      <section class="mod-top">
        <div class="top-link">
          <ul>
            <li class="link-his">
              <a href="/bookshelf/index?type=his" class="link-a" data-reportstr="his">
                <i class="link-his-icon">[历史]</i>
                <span>我的历史</span>
              </a>
            </li>
            <li class="link-fav">
              <a href="/bookshelf/index?type=fav" class="link-a" data-reportstr="fav">
                <i class="link-fav-icon">[收藏]</i>
                <span>我的收藏</span>
              </a>
            </li>
            <li class="link-pay">
              <a href="/home/buyList" class="link-a" data-reportstr="pay">
                <i class="link-pay-icon">[购买]</i>
                <span>我的购买</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="top-user">
          <div class="top-user-head">
            <img src="https://thirdqq.qlogo.cn/g?b=sdk&amp;k=u8drkxln0UYMoXIKOUVZCw&amp;s=640&amp;t=1557881068" alt="">
          </div>
          <div class="top-user-name ">
            <span>华企-技术-小杨</span>
          </div>
        </div>
      </section>

      <!-- 选项 -->
      <section class="my-center-actions">
        <div class="action-item" v-for="(item,index) in column" :key="index">
          <router-link class="f-cb" :to="item.url">
            <i class="iconfont sprite-app" v-html="item.icon"></i>{{item.name}}
          </router-link>
        </div>

      </section>

      <div class="Sign">
        <router-link to="/home">
          <van-button class="Sign_out" type="danger" size="small">退出登录</van-button>
        </router-link>
      </div>

      <!-- 提示 -->
      <div id="j-favorites-main-wrap" class="favorites-wrap f-pr">
        <div class="comic-items--standard" id="j-favorites-block" role="main">
          <div>
            <div class="nodata"><img width="180" src="../../assets/images/favorite-nodata@2x.png" srcset="../../assets/images/favorite-nodata@2x.png">
              <p>收藏漫画追番更方便哟(ﾉ&gt;ω&lt;)ﾉ</p>
            </div>
          </div>
        </div>
      </div>

    </article>

  </div>
</template>

<script>
import headerTop from '../../components/header.vue'


export default {
  data() {
    return {
      title: "我的",
      column: [
        { name: '我的VIP室', url: '', icon: '&#xe688;' },
        { name: '意见反馈', url: '/feedback', icon: '&#xe6e5;' },
        { name: '关于我们', url: '/about', icon: '&#xe649;' },
      ],
    }
  },
  components: {
    headerTop
  },
  methods: {
    rouBack() {
      this.$router.go(-1);
    }
  },
}

</script>

<style lang="less" scoped>
.under-top-bar {
  margin-top: 3.5rem;
}

.mod-top {
  background-image: url(../../assets/images/bg-banner_02.jpg);
  background-size: 100% auto;
  background-position: center top;
  height: 13rem;
  background-repeat: no-repeat;
}

.mod-top .top-link ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.mod-top .top-link ul li {
  width: 33.3%;
  display: block;
}

.mod-top .top-link ul li a {
  display: block;
}

.mod-top .top-link ul li i {
  display: block;
  width: 1rem;
  height: 1rem;
  background-repeat: no-repeat;
  text-indent: -1000em;
  margin: 1.75rem auto 0.4rem;
}


.mod-top .top-link ul li span {
  font-size: 0.7rem;
  color: #535252;
  display: block;
  text-align: center;
}

.mod-top .top-user {
  text-align: center;
}

.mod-top .top-user .top-user-head {
  padding: 0.075rem;
  background-color: #ff9a6c;
  border: 0.15rem solid white;
  border-radius: 50%;
  display: inline-block;
  margin-top: 1.5rem;
}

.mod-top .top-user .top-user-head img {
  display: block;
  width: 3.35rem;
  height: 3.35rem;
  border-radius: 50%;
}

.mod-top .top-user .top-user-name {
  text-align: center;
}

.mod-top .top-user .top-user-name span {
  display: inline-block;
  font-size: 1rem;
  color: #535252;
}

.mod-content {
  padding-bottom: 1.6rem;
}

.mod-top .top-link ul li i.link-his-icon {
  background: url(../../assets/images/sc_img_home.png) no-repeat;
  background-size: 7.5rem 6.1rem;
  background-position: -4.9rem 0rem;
  width: 2.5rem;
  height: 2.5rem;
}

.mod-top .top-link ul li i.link-fav-icon {
  background: url(../../assets/images/sc_img_home.png) no-repeat 0rem -3.6rem;
  background-size: 7.5rem 6.1rem;
  width: 2.5rem;
  height: 2.5rem;
}

.mod-top .top-link ul li i.link-pay-icon {
  background: url(../../assets/images/sc_img_home.png) no-repeat -3.5rem -3.6rem;
  background-size: 7.5rem 6.1rem;
  width: 2.5rem;
  height: 2.5rem;
}


// 选项
.my-center-actions {
  margin-bottom: 1.5rem;
}

.my-center-actions .action-item a {
  display: block;
  width: 100%;
  color: #333;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  border-bottom: solid 1px #ebebeb;
}

.my-center-actions .action-item i {
  margin-right: 7px;
}

.f-cb:after,
.f-cbli li:after {
  display: block;
  clear: both;
  visibility: hidden;
  height: 0;
  overflow: hidden;
  content: ".";
}



// 提示
.f-pr {
  position: relative;
}

.favorites-wrap {
  background-color: #ffffff;
  -webkit-transition: top 0.5s ease-out;
  transition: top 0.5s ease-out;
  top: 0;
}

.comic-items--standard {
  margin: 0 11px;
  overflow: hidden;
  position: relative;
  z-index: 0;
}

.comic-items--standard {
  margin: 0 11px;
  overflow: hidden;
  position: relative;
  z-index: 0;
}

.loading,
.nodata {
  margin: 20% 0;
  text-align: center;
}


//退出
.mod-tool {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background-color: white;
  position: relative;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: none
}

.mod-tool::before {
  content: "";
  display: block;
  position: absolute;
  -webkit-transform-origin: center top;
  transform-origin: center top;
  width: 100%;
  top: 0;
  width: 200%;
  left: -50%;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  border-top: 1px solid #C5C5C5;
}

.mod-tool a {
  display: block;
  height: 3rem;
  line-height: 3rem;
  font-size: 0.75rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  color: #535252;
}

.mod-tool a {
  display: block;
  height: 3rem;
  line-height: 3rem;
  font-size: 0.75rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  color: #535252;
}

.sprite-app {
  font-size: 1.2rem;
}
</style>