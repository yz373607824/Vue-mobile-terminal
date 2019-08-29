<template>
    <div>
        <headerTop>
            <div slot="left" class="top-logo"></div>
        </headerTop id="swiper-cat-wrap">

        <!-- 轮播 -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
                    <router-link :to="'/arclist?id='+item.obj_id">
                        <img :src="item.cover">
                        <div class="ellipsis swiper-title">{{item.title}}</div>
                    </router-link>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        
        <!-- 分类 -->
        <section id="cat">
            <ul class="wrap-ul">
                <li v-for="(categoal,index) in categoal" :key="index">
                    <router-link class="wrap-click" :to="categoal.url+'&title='+categoal.title">
                        <img class="img" :src="categoal.icoImg" :alt="categoal.title">
                        <p>{{categoal.title}}</p>
                    </router-link>
                </li>
            </ul>
        </section>

        <!-- 内容 -->

        <!-- 漫画 -->
        <hometitle :categoal="categoal[0]"></hometitle>
        <keep-alive>
            <MHhomeList :data="dataManhu"></MHhomeList>
        </keep-alive>

        <!-- 段子 -->
        <hometitle :categoal="categoal[1]"></hometitle>
        <keep-alive>
            <main-list :data="dataImg"></main-list>
        </keep-alive>

        <!-- 短视频 -->
        <hometitle :categoal="categoal[2]"></hometitle>
        <keep-alive>
            <homeList :data="dataVideo"></homeList>
        </keep-alive>

        <!-- 底部 -->
        <footer id="footer">
            <div class="footer-tent">
                <p>版权声明:网站内容仅供学习交流，<br/>本站不参与上传、创作,
                    请勿用于商业(非法)用途！
                    <br/>否则,一切后果请自行承担！</p>
            </div>
        </footer>

    </div>
</template>

<script>
// import Vue from 'vue';
import { axioss } from '../../extends/axios'
//首页api地址请求
import { HOME_MH,MH_HOME, HOME_DZ, SP } from '../../api/api'

import { randoms } from '../../extends/random'

//头部
import headerTop from '../../components/header.vue'
import hometitle from '../../components/home/title'
//漫画模块
import MHhomeList from '../../components/manhua/homeList.vue'
//段子模块
import mainList from '../../components/funnyMore/mainList.vue'
//视频模块
import homeList from '../../components/videoList/homeList.vue'


//swiper轮播
import swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'


// 分类图标
import nav1 from '../../assets/images/nav_1.png'
import nav2 from '../../assets/images/nav_2.png'
import nav3 from '../../assets/images/nav_3.png'
import nav4 from '../../assets/images/nav_4.png'

//推荐内容图标
import re_1 from '../../assets/images/re_img1.png'
import re_2 from '../../assets/images/re_img2.png'
import re_3 from '../../assets/images/re_img3.png'



export default {
    data() {
        return {
            randoms: randoms(498, 90961), //视频随机数

            showLen: 6,  //首页显示个数段子

            banner: [],  //轮播
            //格式{title,picurl_orig}
            dataManhu: JSON.parse( window.sessionStorage.getItem('HOME_DATAMANHUA') || '[]' ),//首页漫画数据
            dataImg: JSON.parse( window.sessionStorage.getItem('HOME_DATAIMG') || '[]' ), //首页请求图片内容地址
            dataVideo:JSON.parse( window.sessionStorage.getItem('HOME_DATAVIDEO') || '[]' ), //首页请求视频内容地址

            categoal: [  //首页分类标题与图标
                { title: "暴走漫画", icoImg: nav2, url: '/manhua?', type: "manhua", titleImg: re_2 },
                { title: "猎奇段子", icoImg: nav1, url: '/typelist?type=gaoxiao', type: "gaoxiao", titleImg: re_1 },
                { title: "短视频", icoImg: nav3, url: '/videolist?type=video', type: "video", titleImg: re_3 },
                { title: "分类", icoImg: nav4, url: '/category?', type: "category", titleImg: '' },
            ],
        }
    },
    components: {
        headerTop, hometitle, MHhomeList, mainList, homeList
    },
    watch: {
        dataManhu: {
            handler: function(val) {
                window.sessionStorage.setItem('HOME_DATAMANHUA',JSON.stringify(val))
            },
            deep: true
        },
        dataImg: {
            handler: function(val) {
                window.sessionStorage.setItem('HOME_DATAIMG',JSON.stringify(val))
            },
            deep: true
        },
        dataVideo: {
            handler: function(val) {
                window.sessionStorage.setItem('HOME_DATAVIDEO',JSON.stringify(val))
            },
            deep: true
        }
    },
    created() {

        //banner请求
        this.$nextTick(async () => {
            try {
                let dataManhua = await axioss(HOME_MH.url, HOME_MH.type, HOME_MH.data);
                let dataM = dataManhua.data;
                if (dataM.length == 0) {
                    return this.$toast({ message: "漫画加载失败请刷新重试!", className: 'fontsize' });
                }
                //轮播
                this.banner = dataM[0].data;
                await this.ban_Swiper()
                // console.log(dataManhua)
                // console.log(this.banner)
            } catch (err) {
                this.$toast({ message: "漫画加载失败!", className: 'fontsize' });
                console.log(err)
            }
        })
        

        //漫画请求
        if( !Boolean(window.sessionStorage.getItem('HOME_DATAMANHUA')) ){
            this.$nextTick(async () => {
                try {
                    let dataMANHUA = await axioss(MH_HOME.url, MH_HOME.type, MH_HOME.data);
                    let dataHOME_M= dataMANHUA.data.data;

                    if (dataHOME_M.length == 0) {
                        return this.$toast({ message: "漫画加载失败请刷新重试!", className: 'fontsize' });
                    }
                    this.dataManhu = dataHOME_M.splice(0,9);
                    window.sessionStorage.setItem('HOME_DATAMANHUA',JSON.stringify(this.dataManhu))
                    
                } catch (err) {
                    this.$toast({ message: "漫画加载失败!", className: 'fontsize' });
                    console.log(err)
                }
            })
        }

        //段子请求
        if( !Boolean(window.sessionStorage.getItem('HOME_DATAIMG')) ){
            this.$nextTick(async () => {
                // axios请求
                try {
                    let dataImg = await axioss(HOME_DZ.url, HOME_DZ.type, HOME_DZ.data);
                    let dataI = dataImg.data;
                    if (dataI.length == 0) {
                        return this.$toast({ message: "段子加载失败请刷新重试!", className: 'fontsize' });
                    }
                    this.dataImg = dataI.splice(0, this.showLen)
                    window.sessionStorage.setItem('HOME_DATAIMG',JSON.stringify(this.dataImg))
                } catch (err) {
                    this.$toast({ message: "段子加载失败!", className: 'fontsize' });
                    console.log(err)
                }
            })
        }

        //视频请求
        if( !Boolean(window.sessionStorage.getItem('HOME_DATAVIDEO')) ){
            this.$nextTick(async () => {
                // axios请求
                try {
                    let dataVideo = await axioss(SP.url + this.randoms, SP.type, SP.data)
                    let dataV = dataVideo.data;
                    // console.log(dataV)
                    if (dataV.itemList.length == 0) {
                        return this.$toast({ message: '视频加载失败请刷新重试!', className: 'fontsize' });
                    }
                    this.dataVideo = dataV.itemList.splice(0, 3)
                    window.sessionStorage.setItem('HOME_DATAVIDEO',JSON.stringify(this.dataVideo))
                } catch (err) {
                    this.$toast({ message: "视频加载失败!", className: 'fontsize' });
                    console.log(err)
                }

            })
        }


    },
    methods: {
        ban_Swiper() {
            this.$nextTick(() => {
                var mySwiper = new swiper('.swiper-container', {
                    observer: true,
                    observeParents: true,
                    speed: 300,
                    initialSlide: 0,
                    loop: true,
                    autoplay: {
                        delay: 3000,//1秒切换一次
                    },
                    loop: true, // 循环模式选项
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                    },
                })
            })
        }
    }

}

</script>

<style lang="less" scoped>
.top-logo {
    width: 8rem;
    height: 2.5rem;
    float: left;
    display: inline-block;
    background: url('../../assets/images/default.png') no-repeat;
    background-position: 0px -7.5rem;
    background-size: 12.5rem;
}

.swiper-container {
    width: 100%; // height: 16.5rem;
    margin-top: 3.5rem
}

.swiper-slide img {
    width: 100%;
}

#cat {
    width: 100%;
    position: relative;
    top: -2.5rem;
    z-index: 555;
    background: url('../../assets/images/bg_y.png') no-repeat;
    background-size: 100%;
    background-position: 0 -0.42rem;
    ul.wrap-ul {
        text-align: center;
        display: flex;
        li {
            width: 25%;
            flex: 1;
            box-sizing: border-box;
            padding: 2rem 0.42rem 0;
            .img {
                display: inline-block;
                width: 3rem;
            }
        }
    }
}
.swiper-title{
    position: absolute;
    bottom: 2.7rem;
    left:10%;
    width: 80%;
    height: 2rem;
    line-height: 2rem;
    border-radius: 1rem;
    color: white;
    text-align: center;
    background: rgba(255,123,90,0.5)
    // background: #fa7b5a
}
#footer {
    margin: 1rem 0;
    color: #9d9d9d;
    font-size: 0.9rem;
    text-align: center;
    line-height: 1.5rem;
    .footer-tent{
        padding: 0 2rem;
    }
}
</style>