<!-- 列表组件 -->
<template>
    <div id="read-wrap" class="marginTop">
        <headerTop>
            <div slot="left" class="top-return">
                <i class="default return" @click="rouBack()"></i>
                <h3 class="ellipsis h3">漫画-{{$route.query.title}}</h3>
            </div>
        </headerTop>
        <!-- 筛选 -->
        <div id="read-top">
            <ul>

                <li v-for="(item,index) in selects" :key="index" @click="screenes(item.url,item.id);">
                    <span>{{item.name}}
                        <i class="iconfont ico" v-html="item.icon"></i>
                    </span>
                </li>

            </ul>
        </div>

        <top :topStyle="topStyle"></top>
        <!-- 内容列表 -->
        <keep-alive>
        <novelList :data="dataLists"></novelList>
        </keep-alive>

        <p v-show="loadtext" ref="timg" class="timg"><img width="100%" :src="timg" /></p>
    </div>
</template>

<script>
import { axioss } from '../../extends/axios'
//首页api地址请求
import { MH_LIST } from '../../api/api'

import { getStyle } from '../../extends/getStyle'

//组件
import headerTop from '../header.vue'

// import readTop from './readTop.vue'
import novelList from './novelList.vue'

//插件
import top from '../popup/click_top'

import timg from '../../assets/images/timg.gif'  //加载图片

export default {
    data() {
        return {
            selects: [{ id: 1, name: "筛选", icon: "&#xe606;", url: "/mh_screen" }, { id: 2, name: "人气", icon: "&#xe600;", url: "/manhua" }],
            topStyle: 'normal', //top样式 (目前只支持默认)
            loading: false, //加载控制
            timg: timg,    //下拉加载动画
            loadtext: false, //加载控制动画
            //初始化请求
            params: {
                cat: '',
                order: 'click', //人气 - 收藏 - 更新  ['click','shoucang','date']
                page: 1,
                size:30,
            },
            //数据
            dataLists: JSON.parse(window.localStorage.getItem('MH_LIST') || '[]'), 
        }
    },
    components: {
        headerTop, novelList, top
    },
    beforeRouteUpdate(to,from,next){
        this.initGetData()
        next()
    },
    mounted() {
        let querys = this.$route.query
        // console.log(querys)
        if( Boolean(querys.cat) ){
            this.params.cat = querys.cat;
        }
        this.initGetData()

        //下拉事件 
        window.addEventListener('scroll', this.scrolls, { passive: true });
    },
    destroyed() {
        window.removeEventListener('scroll', this.scrolls, { passive: true });
    },
    methods: {
        rouBack() {
            this.$router.go(-1);
        },
        screenes(url,id){
            if( id == 2 ){
                if( this.params.order=='date' ){
                    this.params.order='click'
                    this.selects[1].name='人气'
                    this.$router.push({path:'/manhua',query:{cat:this.params.cat,title:this.$route.query.title,oreder:this.params.order}})
                }else{
                    this.params.order='date'
                    this.selects[1].name='更新'
                    this.$router.push({path:'/manhua',query:{cat:this.params.cat,title:this.$route.query.title,oreder:this.params.order}})
                }
            }else{
                 this.$router.push({path:url})
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

            if (headerHeight + scrollHeiht <= scrollTop + moduleHeight && this.loading) {
                let setTime = null;
                this.loading = false
                this.loadtext = true;
                clearTimeout(setTime)

                // axios请求
                if (!this.loading) {

                    try {
                        this.params.page += 1

                        let getdataList = await axioss(MH_LIST.url + "&orderby=" + this.params.order + "&search_key=&comic_sort=" + this.params.cat + "&size=" + this.params.size + "&page=" + this.params.page, MH_LIST.type, MH_LIST.data)
                        let getdata = getdataList.data.data.data;
                        if (getdata && getdata.length != 0) {
                            this.dataLists = this.dataLists.concat(getdata)
                            // console.log(this.dataLists)
                            // console.log(this.params.page)
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
        initGetData(){
            this.$nextTick(async () => {
                // axios请求
                var urls;
                try {

                    let dataMH_LIST = await axioss(MH_LIST.url + "&orderby=" + this.params.order + "&search_key=&comic_sort=" + this.params.cat + "&size=" + this.params.size + "&page=" + this.params.page, MH_LIST.type, MH_LIST.data)
                    let dataMH_L = dataMH_LIST.data.data.data;
                    if ( dataMH_L.length == 0) {
                        return this.$toast({ message: "当前分类无内容!", className: 'fontsize' });
                    }
                    this.dataLists = dataMH_L;
                    window.localStorage.setItem('MH_LIST',JSON.stringify(dataMH_L))
                    this.loading = true;
                    // console.log(dataMH_L)
                } catch (err) {
                    return this.$toast({ message: "漫画加载失败!", className: 'fontsize' });
                    console.log(err)
                }

            })
        }
    }
}

</script>
<style lang="less" scoped>
#read-top {
    width: 100%;
    height: 2.8rem;
    background: white;
    border-top: 1px solid #eee;

    ul {
        width: 100%;
        display: flex;
        margin: 0 auto;
        justify-content: center;
        box-sizing: border-box;
        border-bottom: 1px solid #f5f5f5;
        li {
            flex: 1;
            line-height: 2.8rem;
            margin: 0 0.5rem;
            display: inline-block;
            font-size: 1rem;
            text-align: center;
            color: #6e6e6e;
            &:hover {
                color: #fa7b5a
            }
            .ico {
                font-size: 0.9rem;
            }
        }
    }
}
</style>