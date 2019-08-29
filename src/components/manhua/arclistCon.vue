<template>
    <section id="content" ref="content">
        <div class="body-wrap">
            <div v-show="isLoading" @click="prev()" class="ellipsis prev-next">上一章：{{prevText}}</div>
            <ul id="img-list" @click="longtag" @select.prevent="select" ref="img">
                <li v-for="(item,index) in thisEndNum" :key="item.chapter_name">
                    <img width="100%" :src="IMG_REPLACE(thisRule,index+1)" :alt="item.chapter_name" lazy = 'loaded'/>
                </li>
            </ul>
            <div v-show="isLoading" @click="next()" class="ellipsis prev-next">下一章：{{nextText}}</div>
        </div>
        
        <transition name="read">
            <manhuaCon :title="title" :list='chapterArr' v-show="isReadCon"></manhuaCon>
        </transition>
    </section>
</template>

<script>
import { axioss } from '../../extends/axios'
//首页api地址请求
import { MH_ARC } from '../../api/api'

import { IMG_REPLACE } from './manhuaImgUrl'; //图片

import manhuaCon from '../popup/manhuaCon'

export default {
    data() {
        return {
            id: 0,
            uid: 0,
            index: 0,
            isRevers: 1, //1 正序 0反序
            IMG_REPLACE: IMG_REPLACE,
            isLoading: false, //加载标签元素
            thisEndNum: 0,
            thisURL:[],
            thisRule: '',
            prevText: '',
            nextText: '',
            title: '',  //props
            isReadCon: false,
            chapterArr: [],
            viewH:0,  //页面总高
            topH:0,    //当前滚动条高
            value:0,  //100%比对值
        }
    },
    components:{
        manhuaCon
    },
    created() {
        //初始化功能

        this.id = this.$route.query.id
        this.uid = this.$route.query.uid;
        this.index = this.$route.query.index;
        this.isRevers = this.$route.query.isRevers;

        this.initdata()
        window.addEventListener('scroll', this.scrolls, { passive: true });
    },
    destroyed() {
        window.removeEventListener('scroll', this.scrolls, { passive: true });
    },
    watch:{
        '$route':{
            handler:function(val){
                this.index=this.$route.query.index
            },
            deep:true
        }
    },
    beforeRouteUpdate(to, from, next) {
        if (to.fullPath != from.fullPath) {
            this.init()
        }
        next()
    },
    methods: {
        rouBack() {
            this.$router.go(-1);
        },
        select(ev){
            var ev=ev || event
            ev.returnValue=false
            ev.preventDefault();
            return false
        },
        scrolls(){
            this.topH=document.documentElement.scrollTop || document.body.scrollTop
            let H=document.documentElement.offsetHeight || document.body.offsetHeight
            let vH=window.screen.availHeight;
            this.viewH=H-vH
            //  console.log(this.topH)
            //  console.log(this.viewH)
            this.$nextTick(()=>{
                this.value=parseInt(((this.topH*100/this.viewH)).toFixed(0))
                if( this.value  >100 ){
                    this.value = 100
                }
                if( this.value < 0 ){
                    this.value =0
                }
                // console.log(document.getElementById('speed').clientHeight)
            })
        },
        longtag(){
            this.isReadCon=!this.isReadCon;

            this.$children[0].isCatalog=false //目录关闭
            this.$children[0].isBrightness=false //亮度关闭

        },
        prev() {
            if (this.index <= 0) {
                this.index = 0
            } else {
                this.index = parseInt(this.index) - 1;
                this.$router.push({ path: '/arclistcon', query: { id: this.id, uid: this.uid, index: this.index, isRevers: this.isRevers } })
                window.scrollTo(0, 0)
            }
        },
        next() {
            if (this.index >= this.chapterArr.length - 1) {
                this.index = this.chapterArr.length - 1
            } else {
                this.index = parseInt(this.index) + 1;
                this.$router.push({ path: '/arclistcon', query: { id: this.id, uid: this.uid, index: this.index, isRevers: this.isRevers } })
                window.scrollTo(0, 0)
            }
        },
        init() {
            //初始化值
            this.thisRule = (this.chapterArr[this.index].rule);
            this.thisEndNum = this.chapterArr[this.index].end_num

            this.isLoading = true;
            this.$toast({ message: this.chapterArr[this.index].chapter_name, className: 'fontsize'});
            this.title= this.chapterArr[this.index].chapter_name;

            let prev, next;
            if (this.index == 0) {
                this.prevText = '上面没有啦！'
            } else {
                prev = parseInt(this.index) - 1
                this.prevText = this.chapterArr[prev].chapter_name;
            }
            if (this.index == this.chapterArr.length - 1) {
                this.nextText = '下面没有啦！'
            } else {
                next = parseInt(this.index) + 1
                this.nextText = this.chapterArr[next].chapter_name;
            }
            
        },
        initdata() {
            // 漫画详情 
            this.$nextTick(async () => {
                try {
                    let dataXS_ARCLIST = await axioss('https://m.kanman.com/api/getcomicinfo_body?product_id=1&productname=kmh&platformname=wap&comic_id' + "=" + this.id + "&t=" + Date.now(), MH_ARC.type, MH_ARC.data);
                    let dataXS_A = dataXS_ARCLIST.data.data;
                    let data = dataXS_A.comic_chapter;
                    
                    if (this.$route.query.isRevers == 1) {
                        this.chapterArr = data
                    } else {
                        this.chapterArr = data.reverse();
                    }
                    this.init()
                    // console.log(this.$route.query.isRevers)
                } catch (err) {
                    this.$toast({ message: "漫画加载失败!", className: 'fontsize' });
                    console.log(err)
                }
            })
        }

    },
}

</script>

<style lang="less" scoped>
#content {
    width: 100%;
    overflow: hidden;
    .body-wrap {
        .prev-next {
            width: 100%;
            text-align: center;
            background: rgba(250, 123, 90, 0.7);
            color: white;
            padding: 1rem 0;
        }
        #img-list {
            width: 100%;
            li {
                width: 100%;
            }
        }
        .con-body {
            width: 96%;
            margin: 2rem auto;
            font-size: 1rem;
            img {
                display: block;
                margin: 0 auto;
                width: 100%;
            }
        }
        img {
            display: block;
            margin: 0 auto;
            width: 100%;
        }
    }
}
</style>