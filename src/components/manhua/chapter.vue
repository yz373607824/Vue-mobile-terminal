<!-- 小说目录章节 -->
<template>
    <div id="chapter">
        <div class="chapter-swi">
            <p class="status">{{statu}}</p>
            <p @click="order($event)" ref="order" class="order">排序
                <i class="iconfont" style="font-size: 0.9rem;">&#xe600;</i>
            </p>
        </div>

        <ul class="chapter-wrap">
            <li v-for="(items,index) in chapterArr" :key="items.chapter_id">
                <div class="chapters-volume ellipsis"  :class="{'bg-active':index == chapterNum}" @click="chapter(index,items.chapter_id)">{{items.chapter_name}}</div>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    data() {
        return {
            isOrder: false,
            chapterNum: 0,  //点击当前
            chapterArr:[],
        }
    },
    watch: {
        "$parent.chalist":{
            handler:function(val){
                this.chapterArr=val
            },
            deep:true
        },
    },
    computed:{
        statu(){
            return this.status == 1 ? "连载中" : "已完结"
        }
    },
    methods: {
        order(ev) {
            this.isOrder = !this.isOrder
            if (this.isOrder) {
                this.$refs.order.style.color = '#fa7b5a'
                this.chapterArr.reverse()
            } else {
                this.$refs.order.style.color = '#58504e'
                this.chapterArr.reverse()
            }
        },
        chapter(index, uid ) {
            this.chapterNum = index
            let order=0;
            if( !this.isOrder ){
                order=1
            }else{
                order=0
            }
            this.$router.push({path:'/arclistcon',query:{id:this.$route.query.id,uid,index,isRevers:order}})
        },
    },
}

</script>

<style lang="less" scoped>
#chapter {
    width: 90%;
    margin: 0 auto;
    .chapter-swi {
        display: flex;
        text-align: left;
        font-size: 1rem;
        .status {
            flex: 1;
        }
    }
    .chapter-wrap {
        li {

            .chapters-volume {
                width: 100%;
                height: 2.5rem;
                border: 1px solid #eee;
                margin-top: 0.6rem;
                line-height: 2.5rem;
                border-radius: 1rem;
                text-align: center;
                transition: 0.2s;
                font-size: 1.1rem;
            }
            ul.chapters {
                li {
                    .a-con{
                        display: block;
                        padding: 0.6rem 0;
                        text-decoration:underline;
                        font-size: 1rem;
                    }
                }
            }
        }
    }
}
</style>