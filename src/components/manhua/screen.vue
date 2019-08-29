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

                <div class="category-container">
                        <h3 class="h3">分类</h3>
                        <div class="category-item" v-for="(item,index) in dataScreen" :key="item.cat">
                            <router-link :to="'/manhua?cat='+item.cat+'&title='+item.title">
                            <h4 class="ellipsis">{{item.title}}</h4>
                            </router-link>
                        </div>
                </div>

                <div class="category-container">
                        <h3 class="h3">进度</h3>
                        <div class="category-item" v-for="(item,index) in status" :key="item.cat">
                            <router-link :to="'/manhua?cat='+item.cat+'&title='+item.title">
                            <h4 class="ellipsis">{{item.title}}</h4>
                            </router-link>
                        </div>
                </div>
                <div class="category-container">
                        <h3 class="h3">地区</h3>
                        <div class="category-item" v-for="(item,index) in region" :key="item.cat">
                            <router-link :to="'/manhua?cat='+item.cat+'&title='+item.title">
                            <h4 class="ellipsis">{{item.title}}</h4>
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
            status: [ { cat: 'lianzai', title: "连载中" }, { cat: 'wanjie', title: "已完结" }],
            region:[ { cat: 'dalu', title: "大陆" },{ cat: 'gangtai', title: "港台" },{ cat: 'riben', title: "日本" },{ cat: 'oumei', title: "欧美" },{ cat: 'os', title: "韩国" },],
            dataScreen:[
                        { title: '全部',},
                       { title: '热血',cat:'rexue' },
                        { title: '神魔',cat:'shenmo' },
                        { title: '耽美',cat:'liaomei'},
                        { title: '推理',cat:'tuili' },
                        { title: '冒险',cat:'maoxian'},
                        { title: '运动',cat:'yundong'},
                        { title: '恋爱',cat:'lianai' },
                        { title: '搞笑',cat:'gaoxiao'},
                        {  title: '动作',cat:'dongzuo'},
                        {  title: '玄幻',cat:'xuanhuan' },
                        {  title: '机战',cat:'jizhan' },
                        {  title: '战争',cat:'zhanzhen' },
                        {  title: '悬疑',cat:'xuanyi' },
                        {  title: '社会',cat:'shehui' },
                        {  title: '忍者',cat:'renzhe' },
                        {  title: '游戏',cat:'youxi' },
                        {  title: '古风',cat:'gufeng' },
                        {  title: '宠物',cat:'chongwu'},
                        {  title: '吸血',cat:'xixue' },
                        {  title: '后宫',cat:'hougong'},
                        {  title: '御姐',cat:'yujie' },
                        {  title: '霸总',cat:'bazong' },
                        {  title: '百合',cat:'baihe' },
                        {  title: '历史',cat:'lishi' },
                        {  title: '科幻',cat:'kehuan' },
                        {  title: '穿越',cat:'chuanyue' },
                        {  title: '恐怖',cat:'kongbu' },
                        {  title: '漫改',cat:'mangai' },
                        {  title: '真人',cat:'zhenren'},
                        {  title: '都市',cat:'dushi' },
                        {  title: '武侠',cat:'wuxia' },
            ]

        }
    },
    components: {
        headerTop
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
    padding:0.5rem 0;
    text-align:center;
    overflow: hidden;
    .h3{
        margin: 0.5rem 2rem;
        padding: 0.5rem 0;
        border-bottom:1px solid #f6f6f6;
        text-align: center;
        color:#fa7b5a;
    }
    .category-item{
        display:inline-block;
        width: 30%;
        float: left;
        border: 1px solid #eee;
        border-radius: 0.8rem;
        padding: 0.5rem 0;
        margin: 0.6rem 1.2%;
        &:active{
            background: #fa7b5a;
            color: #fff;
        }
    }
}

</style>