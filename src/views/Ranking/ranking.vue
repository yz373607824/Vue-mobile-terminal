<template>
  <div>
    <headerTop>
      <div slot="left" class="top-return">
        <i class="default return" @click="rouBack"></i>
        <h3>{{title}}</h3>
      </div>
    </headerTop>
  <keep-alive>
  <articleList></articleList>
  </keep-alive>
  </div>
</template>

<script>

import headerTop from '../../components/header.vue'

import articleList from '../../components/article/articleList.vue'


export default {
  data() {
    return {
      title: "资讯",

    }
  },
  components: {
    headerTop,articleList
  },
  methods: {
    rouBack() {
      this.$router.go(-1)
    },
  },
}

</script>

