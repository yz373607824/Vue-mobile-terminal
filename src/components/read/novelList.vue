<!-- 列表布局组件 -->
<template>
        <ul id="read_home_list" >

            <li v-for="(item,index) in data" :key="item.id" @click="arclist(item.id)"> 
                <img class="main_img" v-lazy="item.cover" :title="item.name">
                <div class="main_der">
                <p class="main_title"><b>{{item.name}}</b></p>
                <p class="main_title main_sub"><span>作者:</span>{{item.authors}}</p>
                </div>
            </li>
        </ul>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props:['data'],
    methods: {
        arclist(id){
            this.$router.push({path:"/arclist",query:{id}})
        }
    },
}

</script>

<style lang="less" scoped>
#read_home_list {
    width: 100%;
    box-sizing: border-box; // padding: 0.4rem 0.3rem;
    overflow: hidden;
    li {

        width: 30%;
        margin-left: 2.5%;
        margin-top: 3%;
        float: left;
        img.main_img {
            width: 8rem;
            height: 9.91rem; // background: blue;
        }
        .main_der{
            width: 8rem;
            text-align: left;
            .main_title {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                height: 1.5rem;
                line-height: 1.5rem;
            }
            .main_sub{
                color:#9d9d9d
            }
        }
    }
}
</style>