<template>
    <div>
        <header id="header">
            <div slot="left" class="top-return">
                <i class="default return" @click="rouBack"></i>
            </div>
            <h2 class="title">{{img.title}}</h2>
        </header>

        <van-image-preview>
        </van-image-preview>

        <img id="img" v-lazy="img.url" :alt="img.title" width="95%"  @click="fullScreen" @tap="fullScreen">


    </div>
</template>

<script>
import Vue from 'vue';
//vant图片预览
import { ImagePreview } from 'vant';
import 'vant/lib/index.css';
Vue.use(ImagePreview);


export default {
    data() {
        return {
            img:{ 
                url:this.$route.query.url,
                title:this.$route.query.title,
                // loadNum:this.$route.params.loadNum,
                // fullPath:this.$route.params.fullPath,
            },
        }
    },
    methods: {
        rouBack() {
            this.$router.go(-1)
            // this.$router.push({path:this.img.fullPath,query:{loadNum:this.img.loadNum}});  
        },
        fullScreen(){
            ImagePreview({
                images:[this.img.url],//this.img.url,this.img.url
                closeOnPopstate:true
            });
        },
    }

}

</script>

<style lang="less" scoped>
#header {
    width: 100%;
    height: 3.5rem;
    padding: 0.5rem;
    box-sizing: border-box;
    overflow: hidden;
    box-shadow: 0px 1px 2px #eee;
    background: #fa7b5a;
    text-align: center;
    .title {
        color: white;
        line-height: 2.5rem
    }
}

.return {
    display: inline-block;
    float: left;
    width: 2.5rem;
    height: 2.5rem;
    background: url('../../assets/images/default.png') no-repeat;
    background-position: 0.5rem -9.16rem;
    background-size: 12rem;
}

.h3 {
    float: left
}

.position {
    display: inline-block;
    position: relative;
    width: 5rem;
    float: right;
    line-height: 2.4rem;
    .search {
        width: 2.5rem;
        height: 2.5rem;
        float: left;
        background-position: -4.5rem -5.2rem;
        background-size: 12rem;
        cursor: pointer;
    }
    .menu {
        text-align: right;
        padding-right: 0.5rem;
        line-height: 2.5rem;
    }
}
#img{
    display: flex;
    justify-content: center;
    margin: 0.5rem auto;
}

</style>