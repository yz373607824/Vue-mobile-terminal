<template>
  <div>
    <headerTop>
      <div slot="left" class="top-return" >
          <i class="default return" @click="rouBack"></i>
          <h3>{{title}}</h3>
      </div>
    </headerTop>

    <keep-alive>
      <categoryMain></categoryMain>
    </keep-alive>
    
  </div>
</template>

<script>
import headerTop from '../../components/header.vue'
import categoryMain from '../../components/category/categoryMain.vue'


export default {
  data() {
    return {
      title:'分类'
    }
  },
  components:{
    headerTop,categoryMain
  },
  mounted() {
    

  },
  methods: {
    rouBack(){
      this.$router.go(-1)
    }
  }
}

</script>

<style lang="less" scoped>
</style>
