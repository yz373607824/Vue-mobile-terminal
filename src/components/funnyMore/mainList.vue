<template>
    <div class="wrapMain">
<div :class="{bodyfilter:mackImg.isMack}">
        <ul id="main_list">

            <li v-for="(item,index) in data" :key="index" @click="fullScreen(item.title,item.picurl_orig)">
                <img class="main_img" v-lazy="item.picurl_orig" :title="item.title">
                <p class="main_title">{{item.title}}</p>
            </li>

        </ul>
</div>
<mack :mack="mackImg"/>
    </div>
</template>

<script>
import mack from '../popup/mackImg'
export default {
    data() {
        return {
            loading:false,
            default: [
                { title: '加载失败！', img: "../assets/images/default.png" }
            ],
            mackImg:{
                isMack:false,
                title:'标题',
                url:''
            },
        }
    },
    props: ['data'],
    components:{
        mack
    },
    methods: {
        fullScreen(title,src){

            this.mackImg.isMack=true;
            this.mackImg.title=title;
            this.mackImg.url=src;

            document.addEventListener('touchmove', function (e) {
                e.returnValue=false
            },{passive:false});

        },
    },
}

</script>
<style lang="less" scoped>
#main_list {
    width: 100%;
    box-sizing: border-box; // padding: 0.4rem 0.3rem;
    overflow: hidden;
    text-align: center;
    li {

        width: 30%;
        margin-left: 2.5%;
        margin-top: 3%;
        float: left;
        img.main_img {
            width: 8rem;
            height: 9.91rem; // background: blue;
        }
        .main_title {
            width: 8rem;
            height: 1.5rem;
            line-height: 1.5rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}
</style>