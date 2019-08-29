<!-- 小说详情页 -->
<template>
    <section id="arclist-wrap">
        <div class="arclist">

            <div class="arclist-header">
                <div class="bg" :style="'background-image:url('+dataArclist.cover+');background-size: 100% 100%;filter: blur(4px);'"></div>
                <div class="bg-cop"></div>
                <p class="return" @click="rouBack()">
                    <i class="iconfont">&#xe616;</i>
                </p>
                <div class="store" ref="store" @click="store">
                    <i class="iconfont store-icon">&#xe603;</i>
                    <p class="store-text">收藏</p>
                </div>
            </div>
            <div class="arclist-keyword">
                <div class="arclist-img"><img v-lazy="dataArclist.cover" alt="dataArclist.name"></div>
                <div class="arclist-text-keyword">
                    <h1 class="h1_title ellipsis">{{dataArclist.name}}</h1>
                    <p class="arclist-cloumn">
                        <i class="iconfont book">&#xe673;</i>{{dataArclist.authors}}</p>
                    <p class="arclist-cloumn">
                        <i class="iconfont book">&#xe65b;</i>{{dataArclist.zone}}</p>
                    <router-link :to='"/chacontent?id="+dataArclist.id+"&v="+dataArclist.last_update_volume_id+"&c="+dataArclist.last_update_chapter_id'>
                        <p class="book-icon">
                        <i class="iconfont book">&#xe617;</i>观看最后一节</p>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="arclist-describe">
            <p class="arclist-describe-text">{{introduction}}</p>
            <p class="icon-but" @click="describes">
                <i class="iconfont" ref="describesBut">&#xe6d7;</i>
                <span v-show="!isDescribes">展开</span>
            </p>
        </div>

        <keep-alive>
        <arclistChapter :id="$route.query.id" :status="dataArclist.status"></arclistChapter>
        </keep-alive>
    </section>
</template>

<script>
import { axioss } from '../../extends/axios'
//首页api地址请求
import { XS_ARCLIST } from '../../api/api'
//组件
import headerTop from '../header.vue'
import arclistChapter from './arclistChapter'

export default {
    data() {
        return {
            isStore: false,
            dataArclist: JSON.parse(window.sessionStorage.getItem('DATA_ARCLIST') || '[]'),
            arc_id: 0,
            introduction:'',//描述
            isDescribes:false, //是否折叠
        }
    },
    components: {
        headerTop,arclistChapter
    },
    mounted() {
        this.arc_id = this.$route.query.id;

        //小说详情       
        this.$nextTick(async () => {
            try {
                let dataXS_ARCLIST = await axioss(XS_ARCLIST.url + '/' + this.arc_id + '.json', XS_ARCLIST.type, XS_ARCLIST.data);
                let dataXS_A = dataXS_ARCLIST.data;
                if (dataXS_A.length == 0) {
                    return this.$toast({ message: "小说加载失败请刷新重试!", className: 'fontsize' });
                }
                this.dataArclist = dataXS_A;
                window.sessionStorage.setItem('DATA_ARCLIST',JSON.stringify(dataXS_A));
                if( this.dataArclist.introduction.length >90 ){
                    this.isDescribes=false
                    this.introduction=this.dataArclist.introduction.slice(0,90)+'...'
                }else{
                    this.isDescribes = true
                    this.introduction = this.dataArclist.introduction
                }
                
                // console.log(this.dataArclist)

            } catch (err) {
                this.$toast({ message: "小说详情加载失败!", className: 'fontsize' });
                console.log(err)
            }
        })
        
    },
    watch: {
        dataArclist: {
            handler: function(val) {
                this.dataArclist = val
            },
            deep: true
        }
    },
    methods: {
        rouBack() {
            this.$router.go(-1);
        },
        describes() {  //折叠切换
            this.isDescribes=!this.isDescribes;
            let describesBut=this.$refs.describesBut;
            if( this.isDescribes ){
                this.introduction = this.dataArclist.introduction;

            }else{
                this.introduction = this.dataArclist.introduction.slice(0,90)+'...';
            }
             
        },
        store() {
            this.isStore = !this.isStore
            let store = this.$refs.store;
            if (this.isStore) {
                store.style.color = '#fa7b5a';
                this.$toast({ message: "^0^已加入我的收藏啦！！！", className: 'fontsize' });
            } else {
                store.style.color = '#fff';
                this.$toast({ message: ")~( 已取消收藏！", className: 'fontsize' });
            }


        },
    },
}

</script>

<style lang="less" scoped>
.arclist {
    position: relative;
    height: 14.25rem;
    .arclist-header {
        position: relative;
        width: 100%;
        height: 10.7rem;
        .bg {
            overflow: hidden;
            width: 100%;
            height: 100%;
        }
        .bg-cop {
            position: absolute;
            top: 0;
            left: 0;
            content: '';
            display: block;
            width: 100%;
            background: rgba(0, 0, 0, 0.4);
            height: 100%;
        }
        .return {
            position: absolute;
            left: 1rem;
            top: 1.2rem;
            width: 2.5rem;
            height: 2.5rem;
            float: left;
            border: 1px solid rgba(3, 3, 3, 0.1);
            text-align: center;
            border-radius: 50%;
            line-height: 2.5rem;
            color: white;
            background: rgba(6, 6, 6, 0.3);
        }
        .store {
            position: absolute;
            right: 1rem;
            top: 1rem;
            width: 2.5rem;
            text-align: center;
            color: white;
            .store-icon {
                font-size: 1.6rem;
            }
            .store-text {
                font-size: 1rem;
            }
        }
    }

    .arclist-keyword {
        position: absolute;
        left: 0;
        bottom: 0rem;
        overflow: hidden;
        margin: 0 3%;
        width: 94%;
        display: flex;
        color: white;
        .h1_title{
            font-size: 1.3rem;
            padding-bottom:0.2rem; 
        }
        .arclist-img {
            width: 7.25rem;
            height: 9.5rem;
            img {
                width: 100%;
            }
        }
        .arclist-text-keyword {
            flex: 1;
            margin-left: 1.3rem;
            overflow: hidden;
            .arclist-cloumn {
                padding-top: 0.1rem;
            }
            .book-icon {
                position: absolute;
                bottom: 0;
                padding: 0 2.5rem;
                box-sizing: border-box;
                height: 2.6rem;
                line-height: 2.6rem;
                display: block;
                border-radius: 0.2rem;
                border: none;
                font-size: 1.2rem;
                text-align: center;
                background-color: #ff5f65;
                color: #fff;
                i{
                    margin-right: 0.5rem;
                }
            }
        }
    }
}

.book {
    margin-right: 0.3rem;
}

.arclist-describe {
    width: 94%;
    margin: 1rem 3%;
    height: auto;
    overflow: hidden;
    p.arclist-describe-text {
        margin: 0;
        font-size: 1rem;
        line-height: 1.8rem;
        text-indent: 1.5rem;
    }
    .icon-but {
        text-align: center;
        color: #fa7b5a;
        font-size: 1rem;
    }
}
</style>