<template>
    <div id="select">
        <ul>
            <li v-for="(item,index) in selects" :key="index" @click="setSelect(item.type)" v-if="!item.disabled || item.disabled == false" :class="{active:item.type == type}">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>

export default {
    data() {
        return {
        }
    },
    props:['selects','type'],
    components:{
    },
    methods: {
        setSelect(type){
            this.$emit('selectTopTable',{type:type})
        }
    },
}

</script>
<style lang="less" scoped>
#select{
    width: 100%;
    height: 2.8rem;
    background: white;
    border-top:1px solid #eee;
    
    ul{
        width: 100%;
        display: flex;
        margin: 0 auto;
        justify-content:center; 
        box-sizing: border-box;
       li{
            flex:1;
            line-height: 2.8rem;
            padding:0 0.5rem;
            display: inline-block;
            font-size: 1rem;
            text-align: center;
       }
    }

}
.active{
    border-bottom:1px solid #fa7b5a;
}
</style>