<!-- 漫画详情页 -->
<template>
    <section id="arclist-wrap">
        <div class="arclist">

            <div class="arclist-header">
                <div class="bg" :style="'background-image:url('+COVER_IMG_URL(arc_id)+');background-size: 100% 100%;filter: blur(4px);'"></div>
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
                <div class="arclist-img"><img v-lazy="COVER_IMG_URL(arc_id)" :alt="dataArclist.comic_name"></div>
                <div class="arclist-text-keyword">
                    <h1 class="h1_title ellipsis">{{dataArclist.comic_name}}</h1>
                    <p class="ellipsis arclist-cloumn">
                        <i class="iconfont book">&#xe673;</i>{{dataArclist.comic_author}}</p>
                    <p class="ellipsis arclist-cloumn">
                        <i class="iconfont book">&#xe65b;</i>
                        <span v-for="(item,index) in dataArclist.comic_type_new" :key="index">{{item.name}}&nbsp;|&nbsp;</span>
                    </p>
                    <router-link :to="'/arclistcon?id='+arc_id+'&uid='+uid+'&index=0&isRevers=1'">
                        <p class="book-icon">
                            <i class="iconfont book">&#xe617;</i>观看最新章节</p>
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
            <arclistChapter :status="dataArclist.comic_status" :chalist="dataArclist.comic_chapter"></arclistChapter>
        </keep-alive>
    </section>
</template>

<script>
import { axioss } from '../../extends/axios'
//首页api地址请求
import { MH_ARC } from '../../api/api'
//组件
import headerTop from '../header.vue'
import arclistChapter from './arclistChapter'

import { COVER_IMG_URL } from './manhuaImgUrl'; //图片路径前缀

export default {
    data() {
        return {
            isStore: false,
            dataArclist: {},
            COVER_IMG_URL: COVER_IMG_URL,
            arc_id: 0,
            uid:0,
            introduction: '',//描述
            isDescribes: false, //是否折叠
        }
    },
    components: {
        headerTop, arclistChapter
    },
    created() {
        this.arc_id = this.$route.query.id;

        // 漫画详情 
        this.$nextTick(async () => {
            try {
                let dataXS_ARCLIST = await axioss('https://m.kanman.com/api/getcomicinfo_body?product_id=1&productname=kmh&platformname=wap&comic_id' + "=" + this.arc_id + "&t=" + Date.now(), MH_ARC.type, MH_ARC.data);
                let dataXS_A = dataXS_ARCLIST.data.data;

                this.dataArclist = dataXS_A;
                this.uid=dataXS_A.comic_chapter[0].chapter_id
                if (this.dataArclist.comic_desc.length > 90) {
                    this.isDescribes = false
                    this.introduction = this.dataArclist.comic_desc.slice(0, 90) + '...'
                }else{
                    this.isDescribes = true
                    this.introduction = this.dataArclist.comic_desc
                }
                // console.log(dataXS_ARCLIST)        
            } catch (err) {
                this.$toast({ message: "漫画详情加载失败!", className: 'fontsize' });
                console.log(err)
            }
        })


    },
    methods: {
        rouBack() {
            this.$router.go(-1);
        },
        describes() {  //折叠切换
            this.isDescribes = !this.isDescribes;
            let describesBut = this.$refs.describesBut;
            if (this.isDescribes) {
                this.introduction = this.dataArclist.comic_desc;

            } else {
                this.introduction = this.dataArclist.comic_desc.slice(0, 90) + '...';
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
#arclist-wrap{
    // margin-bottom:3rem; 
}
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
        .h1_title {
            font-size: 1.3rem;
            padding-bottom: 0.2rem;
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
                i {
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