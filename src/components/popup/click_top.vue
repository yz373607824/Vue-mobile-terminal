<template>
    <transition name="top">
        <div id="top" v-show="show" @click="tranTop">
            <div id="top_wrap">
                <i class="iconfont" style="font-size: 1rem;">&#xe6bb;</i>
            </div>
        </div>
    </transition>
</template>

<script>

export default {
    data() {
        return {
            show: false,
            scrollTime: 800,
            scrollHei:0
        }
    },
    props: ['topStyle'],
    methods: {
        scrollTop() {
            let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            this.scrollHei=scrollTop;
            if (scrollTop > this.scrollTime) {
                this.show = true
            } else {
                this.show = false
            }
        },
        tranTop() {
            clearInterval(setInt)
            this.$el.style.transition="0.5s"
            let setInt = setInterval(()=>{
                this.scrollHei=this.scrollHei/2;
                if( this.scrollHei <= 1 ){
                    clearInterval(setInt)
                }
                 window.scrollTo(0, this.scrollHei)
            },70)
           
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollTop, true)
    },
    destroyed() {
        window.removeEventListener('scroll', this.scrollTop, true)
    },

}

</script>

<style lang="less" scoped>
@import '../../assets/css/font.css';
#top {
    position: fixed;
    z-index: 1000;
    right: 2rem;
    bottom: 8rem;
    overflow: auto;
}

// normal
#top_wrap {
    width: 2.5rem;
    height: 2.5rem;
    background: rgba(255, 255, 255, 0.7); // background:rgba(#fa7b5a,0.5);
    border: 1px solid #f5f5f5;
    text-align: center;
    line-height: 2.5rem;
    border-radius: 0.5rem;
    color: #6e6e6e;
    
}

.top-enter-active,.top-leave-active{
    transform: all 1s;
}

.top-enter{
    opacity: 1;
}
.top-leave-to{
     opacity: 0;
}
</style>