<template>

    <!-- @click="fullScreen(item.title,item.picurl_orig)" -->
<transition name="mack">
    <div class="mask" v-show="mack.isMack" @click="macks">
        <h1>{{mack.title}}</h1>
        <img class="mask-img" v-lazy="mack.url">
    </div>
</transition>

</template>

<script>

export default {
    data() {
        return {
        }
    },
    props:['mack','fullScreen'],
    methods:{
        macks(){
            this.mack.isMack=false
            
           document.addEventListener('touchmove', function (e) {
               e.returnValue=true
            },{passive:false});
        }
    }
}

</script>

<style lang="less">
.mask {
    // touch-action: none;
    overflow-y: scroll;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    background: rgba(0, 0, 0, 0.8);
    z-index: 9000;
    overflow:hidden;
    h1 {
        color:white;
        font-size: 1.2rem;
        padding: 1rem 0;
        line-height: 1rem;
    }
    .mask-img {
        width: 100%;
        max-width: 100%;
        height: auto;
    }
}

.mack-enter-active,.mack-leave-active{
    transition: all 0.2s
}
.mack-enter-to,.mack-leave{
    opacity: 1;
}
.mack-enter,.mack-leave-to{
    opacity: 0;
}

</style>