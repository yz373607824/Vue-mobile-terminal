<!-- 列表头部组件 -->
<template>
    <div id="read-top">
        <ul>

            <li v-for="(item,index) in selects" :key="index">
                <span  @click="screen(item.url,item.id)">{{item.name}}
                    <i class="iconfont ico" v-html="item.icon"></i>
                </span>
            </li>

        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selects: [{id:1, name: "筛选", icon: "&#xe606;", url: "/screen" }, { id:2,name: "人气", icon: "&#xe600;", url: "/read" }]
        }
    },
    methods: {
        screen(url,id){
            if( id == 2 ){
                this.$router.push({path:url,query:{order:1}})
            }
            this.$router.push({path:url})
        }
    },
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