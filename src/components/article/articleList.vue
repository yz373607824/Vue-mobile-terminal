<template>
    <section class="marginTop">

            <van-tabs  title-active-color="#fa7b5a" color="#fa7b5a" @click="onTabs" v-model="modelIndex" :ellipsis="false">
                <van-tab v-for="(items,indexs) in categorys" :key="items.indexs" :title="items.tag_name" ref="tabs" :id="items.tag_id" animated>
                    <ul class="ZX_list">
                        <li class="list" v-for="(item,index) in data" :key="item.index" @click="article(item.article_id,items.tag_name,items.tag_id,modelIndex)">
                            <h2 class="ellipsis title">{{item.title}}</h2>
                            <span class="name-time">{{item.nickname}} | {{item.create_time|dateTime}}</span>
                            <img class="list-img" width="100%" v-lazy="item.row_pic_url" :alt="item.title" :title="item.title">
                            <p class="intro">{{item.intro}}</p>
                        </li>
                    </ul>

                    <ul class="ZX_list" v-show="isSkeleton">
                        <li class="list" v-for="(item,index) in 20" :key="index">
                            <van-skeleton :row-width="rowWidth" :row="4" />
                        </li>
                    </ul>
                    <p v-show="loadtext" ref="timg" class="timg"><img width="100%" :src="timg" /></p>
                </van-tab>
            </van-tabs>

        <top :topStyle="topStyle"></top>
    </section>
</template>

<script>
import Vue from 'vue';
import { axioss } from '../../extends/axios'
//首页api地址请求
import { ZX_CAT, ZX_LIST } from '../../api/api'
import { getStyle } from '../../extends/getStyle'

import { Skeleton } from 'vant'; //骨架

import { Tab, Tabs } from 'vant'; //分类滑块

Vue.use(Skeleton);
Vue.use(Tab).use(Tabs);

import timg from '@/assets/images/timg.gif'  //加载图片
//插件
import top from '@/components/popup/click_top'
export default {
    data() {
        return {
            categorys: JSON.parse(window.sessionStorage.getItem('ZX_CAT') || '[]'),
            id: 1,
            modelIndex:0,
            data: [],
            // datalists: {},
            page: 0,
            loading: false, //加载控制
            timg: timg,    //下拉加载动画
            loadtext: false, //加载控制动画
            isSkeleton: true,
            rowWidth: ['50%', '30%', '100%'],
            topStyle: 'normal', //top样式 (目前只支持默认)
        }
    },
    components: {
        top
    },
    filters: {
        dateTime(timestamp) {
            var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            var D = date.getDate();
            return Y + M + D;
        }
    },
    created() {

        if (!window.sessionStorage.getItem('ZX_CAT')) {
            this.$nextTick(async () => {
                // axios请求分类
                try {
                    let dataZX_CAT = await axioss(ZX_CAT.url, ZX_CAT.type, ZX_CAT.data)
                    let dataZX_C = dataZX_CAT.data;
                    if (dataZX_C.length == 0) {
                        return this.$toast({ message: "分类加载失败请刷新重试!", className: 'fontsize' });
                    }
                    this.categorys = dataZX_C;
                    window.sessionStorage.setItem('ZX_CAT', JSON.stringify(dataZX_C))
                    // console.log(this.categorys)
                } catch (err) {
                    return this.$toast({ message: "分类加载失败!", className: 'fontsize' });
                    console.log(err)
                }

            })
        }
    },
    mounted() {
        // this.data = JSON.parse(window.sessionStorage.getItem('ZX_LIST' + this.id) || '[]')
        let LIST=JSON.parse( window.sessionStorage.getItem('ZX_LIST' + this.id)) && JSON.parse( window.sessionStorage.getItem('ZX_LIST' + this.id)).length !=0;

        if( LIST ){
            this.loading = true;
            this.data=JSON.parse( window.sessionStorage.getItem('ZX_LIST' + this.id))
            
            // document.cookie='ZX_PAGE_'+this.id+'='+this.data.length/20
        }else{
            this.axioss()
        }

        if (this.$route.query.cid && /^\d+$/ig.test(this.$route.query.cid)) {
            this.id = this.$route.query.cid;
            this.modelIndex=this.$route.query.index

            this.data=JSON.parse( window.sessionStorage.getItem('ZX_LIST' + this.id))
            
        }

        // if( this.$route.query.page ){
        //     this.page=this.$route.query.page;
        //     document.cookie='ZX_PAGE_'+this.id+'='+this.page
        // }
        
        //下拉事件 
        window.addEventListener('scroll', this.scrolls, { passive: true });
    },
    destroyed() {
        window.removeEventListener('scroll', this.scrolls, { passive: true });
    },
    methods: {
        article(uid, title, cid,index) {
            this.$router.push({ path: '/article', query: { uid, title, cid ,index,} })
        },
        onTabs(name, title) {
            this.isSkeleton = true;
            this.id = this.$refs.tabs[name].$attrs.id;

            let LIST=JSON.parse( window.sessionStorage.getItem('ZX_LIST' + this.id)) && JSON.parse( window.sessionStorage.getItem('ZX_LIST' + this.id)).length !=0;
            if (LIST) {
                this.data=JSON.parse(window.sessionStorage.getItem('ZX_LIST' + this.id));
                // document.cookie='ZX_PAGE_'+this.id+'='+this.data.length/20
            }else{
                this.axioss()
            }
        },
        async scrolls(ev) {
            var ev = ev || event
            var moduleHeight = window.screen.availHeight;   //移动

            var scrollHeiht = document.body.scrollHeight || document.documentElement.scrollHeight;
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

            var fontSize = Number(getStyle(document.documentElement, 'font-size').slice(0, -2))

            var headerHeight = 3.5 * fontSize - 1;  //top固定高度
            // 移动端处理

            if (headerHeight + scrollHeiht <= scrollTop + moduleHeight && this.loading ) {
                let setTime = null;
                this.loading = false
                this.loadtext = true;
                this.isSkeleton = true;
                clearTimeout(setTime)

                // axios请求
                if (!this.loading) {
                    try {
                        if( this.data.length !=0 ){
                             this.page = this.data.length/20  
                        }
                        this.page += 1

                        let dataZX_LIST = await axioss(ZX_LIST.url + '/' + this.id + '/2/' + this.page + '.json', ZX_LIST.type, ZX_LIST.data)
                        let dataZX_L = dataZX_LIST.data;

                        if (dataZX_L && dataZX_L.length != 0) {
                            this.isSkeleton = false;
                            this.data = this.data.concat(dataZX_L);

                            window.sessionStorage.setItem('ZX_LIST' + this.id, JSON.stringify(this.data))
                        } else {
                            this.loading = false
                            this.loadtext = true
                            this.$refs.timg.innerHTML = '^~^无更多内容咯！！！'
                            return
                        }
                        setTime = setTimeout(() => {
                            this.loading = true
                            this.loadtext = false
                        }, 500)

                    } catch (err) {
                        console.log('请求出错了')
                        console.log(err)
                    }
                }
            }


        },
        axioss() {
            this.$nextTick(async () => {
                // axios请求分类
                try {
                    let dataZX_LIST = await axioss(ZX_LIST.url + '/' + this.id + '/2/' + this.page + '.json', ZX_LIST.type, ZX_LIST.data)
                    let dataZX_L = dataZX_LIST.data;
                    if (dataZX_L.length == 0) {
                        return this.$toast({ message: "列表加载失败请刷新重试!", className: 'fontsize' });
                    }
                    this.isSkeleton = false;
                    this.loading = true;
                    this.data = dataZX_L;

                    window.sessionStorage.setItem('ZX_LIST' + this.id, JSON.stringify(this.data))
                } catch (err) {
                    return this.$toast({ message: "列表加载失败!", className: 'fontsize' });
                    console.log(err)
                }

            })
        }
    }
}

</script>

<style lang="less" scoped>
.ZX_list {
    font-size: 1rem;
    li.list {
        padding: 1rem 0.5rem;
        text-align: left;
        h2.title {
            margin-bottom: 0.2rem;
            font-size: 1.2rem;
        }
        .name-time {
            font-size: 1rem;
            color: #aeaeae;
        }
        .list-img {
            display: block;
            border-radius: 0.4rem;
            margin: 0.3rem 0;
            width: 100%;
        }
        .intro {
            color: #706f6f;
            font-size: 1.1rem;
            line-height: 1.5rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            display: box;
            -webkit-line-clamp: 3;
            line-clamp: 3;
            -webkit-box-orient: vertical;
        }
    }
}
</style>