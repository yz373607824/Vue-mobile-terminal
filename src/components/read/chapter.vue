<!-- 小说目录章节 -->
<template>
    <div id="chapter">
        <div class="chapter-swi">
            <p class="status">{{this.status}}</p>
            <p @click="order($event)" ref="order" class="order">排序
                <i class="iconfont" style="font-size: 0.9rem;">&#xe600;</i>
            </p>
        </div>

        <ul class="chapter-wrap">
            <li @click="chapter(indexs,items.volume_id)" v-for="(items,indexs) in dataLists" :key="items.id">
                <div class="chapters-volume ellipsis" :class="{'bg-active':indexs == chapterNum}">{{items.volume_name}}</div>
                <ul class="chapters" v-show="indexs == chapterNum">
                    <li class="ellipsis"  v-for="(item,index) in items.chapters" :key="item.chapter_id">
                        <!-- <router-link class="ellipsis a-con" :to='"/chacontent?id="+id+"&v="+items.volume_id+"&c="+item.chapter_id'> -->
                            <span class="ellipsis a-con" @click="chacontent(items.volume_id,item.chapter_id,indexs,index)">
                            {{item.chapter_name}}
                            </span>
                        <!-- </router-link> -->
                    </li>
                </ul>
            </li>
        </ul>

    </div>
</template>

<script>
import { axioss } from '../../extends/axios'
//首页api地址请求
import { XS_CHAPTER } from '../../api/api'

export default {
    data() {
        return {
            dataLists: JSON.parse(window.sessionStorage.getItem('CHAPTER') || '[]'),
            isOrder: false,
            chapterNum: 0,  //点击当前
        }
    },
    props: ['id', 'status'],
    mounted() {
        this.$nextTick(async () => {
            // axios请求章节
            try {
                let dataXS_CHAPTER = await axioss(XS_CHAPTER.url + "/" + this.id + ".json", XS_CHAPTER.type, XS_CHAPTER.data)
                let dataXS_C = dataXS_CHAPTER.data;
                if (dataXS_C.length == 0) {
                    return this.$toast({ message: "章节加载失败请刷新重试!", className: 'fontsize' });
                }
                this.dataLists = dataXS_C;
                window.sessionStorage.setItem('CHAPTER',JSON.stringify(dataXS_C))
                // console.log(this.dataLists)
            } catch (err) {
                return this.$toast({ message: "章节加载失败!", className: 'fontsize' });
                console.log(err)
            }

        })
    },
    methods: {
        order(ev) {
            this.isOrder = !this.isOrder
            if (this.isOrder) {
                this.$refs.order.style.color = '#fa7b5a'
                this.dataLists.reverse()
            } else {
                this.$refs.order.style.color = '#58504e'
                this.dataLists.reverse()
            }
        },
        chapter(index, volume_id) {
            this.chapterNum = index
            if (this.chapterNum == index) {
                this.isChapter = true
            } else {
                this.isChapter = false
            }

        },
        chacontent(v,c,is,i){
            if( this.isOrder ){
                this.isOrder =1
            }else{
                this.isOrder =0
            }
            this.$router.push({path:'/chacontent',query:{id:this.id,v,c,is,i,order:this.isOrder}})
        }
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