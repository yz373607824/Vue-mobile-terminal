<template>
  <div id="app">

<router-view/>

          



    <div id="nav" v-show="!$route.meta.isHomeFooter">
      <div class="wrap">
        <div class="category" :class="{active:'/' == $route.path}" @click="routes('/')">
          <i class="category_png home_png"></i>
          <p>首页</p>
        </div>
      </div>
      <div class="wrap">
        <div  class="category" :class="{active:'/category' == $route.path}"  @click="routes('/category')">
          <i class="category_png cat_png"></i>
          <p>分类</p>
        </div>
      </div>
      <div class="wrap">
        <div class="category" :class="{active:'/ranking' == $route.path}" @click="routes('/ranking')">
          <i class="category_png rank_png"></i>
          <p>资讯</p>
        </div>
      </div>
      <div class="wrap">
        <div class="category" :class="{active:'/personal' == $route.path}"  @click="routes('/personal')">
          <i class="category_png pers_png"></i>
          <p>我的</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  data() {
    return {
    }
  },
  created() {
    this.$root.appHeight=window.screen.height;
    this.$route.meta.isHomeFooter=false
  },
  methods: {
    routes(path){
        this.$router.push({path:path})
    },
  },
}
</script>
<style lang="less" scoped>
#app{
  height: 100%;
  margin-bottom: 7rem;
}
#nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4.1rem;
  z-index: 8888;
  background: white;
  border-top: 1px solid #ccc;
  .wrap {
    display: inline-block;
    width: 25%;
    height: 3.5rem;
    padding: 0.5rem 0;
    text-align: center;
    .category {
      width: 2.4rem;
      display: inline-block;

      .category_png {
        display: block;
        height: 2.3rem;
        margin: 0 auto;
        background: url('./assets/images/default.png') no-repeat;
        background-size: 12rem
      }
      .home_png{
        background-position: 0 0;
      }
      .cat_png{
        background-position: -3.08rem -2.75rem;
      }
      .rank_png{
        background-position: 0 -2.58rem;
      }
      .pers_png{
        background-position: 0 0;
      }
    }
  }
}

</style>
