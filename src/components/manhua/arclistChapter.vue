<!-- 小说目录-留言组件 -->
<template>
    <section id="chapterComment">
        <nav class="chapterComment-top">
            <ul>
                <li v-for="(item,index) in nav" :key="index" @click="switchNum(item.id)" :class="{activeBordBot:swiNum == item.id}" v-html="item.name">
                    <i class="iconfont" v-html="item.iocn"></i>
                </li>
            </ul>
        </nav>

    <!-- 目录模块 -->
    <keep-alive>
        <chapter v-show="swiNum == nav[0].id"  :swiNum="swiNum"></chapter>
    </keep-alive>

    <!-- 留言模块 -->
    <keep-alive>
        <comment v-show="swiNum == nav[1].id" :swiNum="swiNum"></comment>
    </keep-alive>
    </section>
</template>

<script>
import chapter from './chapter.vue'
import comment from './comment.vue'

export default {
    data() {
        return {
            nav: [
                { id: 1, icon: '', name: '目录' },
                { id: 2, icon: '', name: '评论<i style="font-size:0.8rem;color:#9e9e9e">暂无</i>' },
            ],
            swiNum: 1,
        }
    },
    props:['status','chalist'],
    components:{
        chapter,comment
    },
    methods: {
        switchNum(id) {
            this.swiNum = id

        },
    },
}

</script>

<style lang="less" scoped>
#chapterComment {
    text-align: center;
    .chapterComment-top {
        height: 3rem;
        width: 100%;
        line-height: 3rem;
        margin-bottom:1.5rem;
        ul {
            display: flex;
            width: 100%;
            font-size: 1.25rem;
            li {
                // display: inline-block;
                flex: 1;
                box-sizing: border-box;
                border-bottom: 1px solid #eee;
            }
        }
    }
}

.activeBordBot {
    color: #fa7b5a;
    border-bottom: 1px solid #fa7b5a !important;
}
</style>