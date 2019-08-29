<template>
  <div id="mind">
      <i class="iconfont" @click="mind">&#xe625;</i>
  </div>
</template>

<script>
export default {
    methods: {
        mind(){
            alert(1)
        }
    },
}

</script>
<style lang="less" scoped>
#mind{
    width:3rem 
}
</style>