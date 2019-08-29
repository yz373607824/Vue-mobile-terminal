<template>
    <div class="list-wrap">
        <headerTop>
            <div slot="left" class="top-return">
                <i class="default return" @click="rouBack()"></i>
                <h3 class="ellipsis h3">{{$route.query.title}}</h3>
            </div>
        </headerTop>
        
        <!-- 列表内容 -->
        <keep-alive>
            <listTopSelce @selectTopTable="selectTopTable" :selects="selects" :type="type" style="margin-top:3.5rem;"></listTopSelce>
        </keep-alive>

        <top :topStyle="topStyle"></top>

<div :class="{bodyfilter:mackImg.isMack}">
<keep-alive>
        <ul id="main_list" v-if="type=='one'">
            <li v-for="(item,index) in listData" :key="index" style="width:100%;" @click="fullScreen(item.title,item.picurl_orig)"> <!--@click="urlParams(item.title,item.picurl_orig)"-->
                <img class="main_img" v-lazy="item.picurl_orig" :title="item.title"  style="height:auto">
                <p class="main_title">{{item.title}}</p>
            </li>
        </ul>
</keep-alive>

<keep-alive>
        <ul id="main_list" v-if="type=='two'">
            <li v-for="(item,index) in listData" :key="index" style="width:12.2rem;margin:0.8rem 0.5rem" @click="fullScreen(item.title,item.picurl_orig)">    <!--@click="urlParams(item.title,item.picurl_orig)"-->
                <img class="main_img" v-lazy="item.picurl_orig" :title="item.title"  style="height: 15.8rem;">
                <p class="main_title">{{item.title}}</p>
            </li>
        </ul>
</keep-alive>
        <p v-show="loadtext" ref="timg" class="timg"><img width="100%" :src="timg"/></p>
</div>
<mack :mack="mackImg"/>

    </div>
</template>

<script>
import Vue from 'vue';

import {getStyle} from '../../extends/getStyle'

import { axioss } from '../../extends/axios'
import { DZ } from '../../api/api'

import headerTop from '../header.vue'
import listTopSelce from './listTopSelce.vue'

import top from '../popup/click_top'
import mack from '../popup/mackImg'

// import { ImagePreview } from 'vant';
// import 'vant/lib/index.css';
// Vue.use(ImagePreview);


import timg from '../../assets/images/timg.gif'  //加载图片


export default {
    data() {
        return {
            timg:timg,    //下拉加载动画
            loadtext:false,  //下拉加载
            loading: false, //加载限制
            loadNum:1,  //请求get
            type: window.localStorage.getItem('TYPE') || 'one',//模式
            selects: [    //栏目
                { name: "一栏展示", type: "one" },
                { name: "二栏展示", type: "two" }
            ],
            listData: JSON.parse(window.sessionStorage.getItem('listData') || '[]'),
            topStyle:'normal',

            mackImg:{
                isMack:false,
                title:'标题',
                url:''
            },

        }
    },
    components: {
        headerTop, listTopSelce,top,mack
    },

    mounted() {
        let type = this.$route.query.type;

        switch (type) {
            case 'gaoxiao':
                // axios请求
                axioss(DZ.url, DZ.type, DZ.data).then(res => {
                    this.listData = res.data
                    this.loading=true  
                }, err => {
                    console.log(err)
                });
                break;
            case 2:
                // 执行代码块 2
                break;
            default:
                return this.$toast({message:'图片无法完成参数请求!',className:'fontsize'});
            // 与 case 1 和 case 2 不同时执行的代码
        }

        //下拉事件 
        window.addEventListener('scroll', this.scrolls,false);
        
        
    },
    destroyed() {
        window.removeEventListener('scroll', this.scrolls,false);
    },

    watch: {
        listData: {  //监听缓存数据
            deep: true,
            handler: function(val) {
                window.sessionStorage.setItem('listData', JSON.stringify(val))
            },

        },
        type: {  //监听模式
            deep: true,
            handler: function(val) {
                window.localStorage.setItem('TYPE', val)
            },

        },
    },
    methods: {
        rouBack() {
            this.$router.go(-1);
        },
        fullScreen(title,src){

            this.mackImg.isMack=true;
            this.mackImg.title=title;
            this.mackImg.url=src;

            document.addEventListener('touchmove', function (e) {
                e.returnValue=false
            },{passive:false});

        },
        selectTopTable(type) {

            if (type.type == 'one') {
                this.type = 'one'
            } else if (type.type == 'two') {
                this.type = 'two'
            } else {

            }
        },

        async scrolls(ev) {
            var ev = ev || event;

            var height = document.body.clientHeight || document.documentElement.clientHeight; //pc
            var moduleHeight = window.screen.availHeight;   //移动

            var scrollHeiht = document.body.scrollHeight || document.documentElement.scrollHeight;
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

            var fontSize= Number(getStyle(document.documentElement,'font-size').slice(0,-2))

            var headerHeight=3.5*fontSize-1;  //top固定高度
            // 移动端处理
            
                if ( headerHeight + scrollHeiht <= scrollTop + moduleHeight && this.loading ) {
                    let setTime=null;
                    this.loading=false 
                    this.loadtext=true;       
                    clearTimeout(setTime)

                    // axios请求
                    if( !this.loading ){
                        try{
                            this.loadNum = this.loadNum + 1;
                            let getdata=await axioss(DZ.url + this.loadNum, DZ.type, DZ.data)
                            let data=getdata.data
                                if( data && data.length != 0){

                                        this.listData=data
                                        window.scrollTo(0,0)
                                        setTime=setTimeout(()=>{
                                            this.loading=true
                                            this.loadtext=false 
                                        },500)
                                        // console.log(this.loadNum)
                                }else{
                                    this.loading = false
                                    this.loadtext = true
                                    this.$refs.timg.innerHTML='^~^无更多内容咯！！！'
                                    return 
                                }

                        }catch(err){
                            console.log(err)
                        }
                        }
                        
            }
        }
    },


}
</script>

<style lang="less" scoped>
#main_list {
    width: 100%; // padding: 0.4rem 0.3rem;
    height: 100%;
    overflow: auto;
    text-align: center; // box-sizing: border-box;
    li {
        // width: 100%;    //100% 一栏
        width: 12.2rem; // 12.2rem 两栏
        overflow: auto;
        float: left;
        margin-top: 3%;
        img.main_img {
            width: 100%;
            height: 15.8rem; // background: blue;    height：15.8rem; 两栏
        }
        .main_title {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}

</style>