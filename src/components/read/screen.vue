<!-- 筛选内容组件 -->
<template>
    <div>
        <headerTop>
            <div slot="left" class="top-return">
                <i class="default return" @click="rouBack()"></i>
                <h3 class="h3">筛选</h3>
            </div>
        </headerTop>

        <div class="marginTop">

            <div class="holder-tip">
                <span>Biu~筛选在这里</span>
            </div>
            <div class="category-list">
                <div class="status">
                    <p class="tag_name" v-for="(item,index) in status" :key="item.tag_id" @click="this_status = item.tag_id" :class="{but_active: this_status==index}">{{item.tag_name}}</p>
                </div>

                <div class="category-container">
                    
                        <div class="category-item" v-for="(item,index) in dataScreen" :key="item.tag_id">
                            <router-link :to="'/read?tag_id='+item.tag_id+'&title='+item.title+'&status='+this_status">
                            <img class="img-placeholder js-lazyLoad" v-lazy="item.cover"  :alt="item.title" >
                            <h4>{{item.title}}</h4>
                            </router-link>
                        </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { axioss } from '../../extends/axios'
//首页api地址请求
import { XS_SCREEN } from '../../api/api'

import headerTop from '../header.vue'
export default {
    data() {
        return {
            status: [{ tag_id: 0, tag_name: "全部" }, { tag_id: 1, tag_name: "连载中" }, { tag_id: 2, tag_name: "已完结" }],
            this_status:0,

            dataScreen:[
                {cover: "",tag_id: 0,title: "加载中..."},
            ]

        }
    },
    components: {
        headerTop
    },
    mounted() {
        //小说筛选
        this.$nextTick(async () => {
            try {
                let dataXS_SCREEN = await axioss(XS_SCREEN.url, XS_SCREEN.type, XS_SCREEN.data);
                let dataXS_S = dataXS_SCREEN.data;
                
                if (dataXS_S.length == 0) {
                    return 
                }
                this.dataScreen.length=0
                this.dataScreen=dataXS_S
                // console.log(this.dataScreen)

            } catch (err) {
                this.$toast({ message: "小说分类加载失败!", className: 'fontsize' });
                console.log(err)
            }
        }) 
    },
    methods: {
        rouBack() {
            this.$router.go(-1);
        },
    },
}

</script>

<style lang="less" scoped>
.holder-tip {
    border-bottom: solid 1px #eaeaea;
    text-align: center;
    overflow: visible;
    width: 70%;
    margin: 0 auto;
    padding-top: 2rem;
}

.holder-tip span {
    background: #ffffff;
    color: #cccccc;
    padding: 0.66rem;
    font-size: 1rem;
}

.category-list {
    margin: 1.25rem 0;
    .status {
        display: flex;
        justify-content: center;
        text-align: center;
        padding: 0rem 1.5rem 1rem;
        .tag_name {
            flex: 1;
            border: 1px solid #eee;
            border-radius: 0.8rem;
            padding: 0.6rem 1rem;
            margin: 0 0.5rem;
        }
    }
}

.but_active {
    background: #fa7b5a;
    color: white
}

.category-container {
    border-top: 1px solid rgba(237, 237, 237, .5);
    padding:1rem 0;
    text-align:center;
    overflow: hidden;
    .category-item{
        display:inline-block;
        width: 30%;
        float: left;
        margin: 0.6rem 1.66%;
        overflow: hidden;
        & img{
            width: 100%;
            border-radius: 1rem;
        }
    }
}

</style>