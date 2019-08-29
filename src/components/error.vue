<template>
  <div>
      <headerTop>
            <div slot="left" class="top-return">
                <i class="default return" @click="rouBack()"></i>
                <h3 class="h3">页面404</h3>
            </div>
      </headerTop>
      <img class="error404" src="../assets/images/404.png" width="100%">
  </div>
</template>

<script>
import headerTop from './header.vue'
export default {
    components:{
        headerTop
    },
    methods: {
        rouBack() {
            this.$router.back();
        },
    }
}

</script>
<style>
</style>