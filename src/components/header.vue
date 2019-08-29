<template>
    <header id="header">
        <slot name="left"></slot>
        
        <div class="position">
            <transition name="search">
                <input type="text"  id="search" v-model="search" v-show="isSearch" >
            </transition>
            <p class="default search" @click="searchs" @keydown.enter="searchs"></p>
            <router-link to="/login" class="menu">登录</router-link>
        </div>

    </header>
</template>

<script>
export default {
    data() {
        return {
            isSearch:false,
            search:""
        }
    },
    methods: {
        searchs(){
            // this.isSearch=!this.isSearch;

            const search=this.search.trim();
            if( this.isSearch ){
                if( search != '' ){
                    this.$router.push({path:"/funnymore",query:{search:search}})    
                }
                this.search=''
                this.isSearch=false
                
            }else{
                this.isSearch=true
            }

        }
    },
}

</script>

<style lang="less" scoped>
.default{
    background: url('../assets/images/default.png') no-repeat;
}
#header{
    position:fixed;
    top: 0;
    width: 100%;
    height: 3.5rem;
    padding:0.5rem;
    z-index: 8888;
    box-sizing:border-box;
    overflow: hidden;
    box-shadow:0px 1px 2px #eee;
    background:white;
    .top-return{
    width: 8rem;
    height: 2.5rem;
    line-height: 2.5rem;
    float:left;
        .return{
            display: inline-block;
            float:left;
            width: 2.5rem;
            height: 2.5rem;
            background-position: 0.58rem -5.16rem;
            background-size: 12rem; 
        }
        .h3{
            // float:left
        }
    }
    .position{
        display: inline-block;
        position: relative;
        width: 5rem;
        float:right;
        line-height: 2.4rem;
        .search{
            width: 2.5rem;
            height: 2.5rem;
            float: left;
            background-position: -4.5rem -5.2rem;
            background-size: 12rem;
            cursor: pointer;
        }
        .menu{
            text-align: right;
            padding-right:0.5rem;
            line-height: 2.5rem;
        }
    }
}
#search{
    position: absolute;
    right:5.5rem;
    width: 9rem;
    height: 1.5rem;
    margin: 0.2rem 0;
    border-radius: 1.5rem;
    border: 1px solid #ccc;
    float: left;
    padding: 0.25rem 0.6rem;
    font-size: 1rem;
}

.search-enter-active,.search-leave-active{
    transition: 0.2s;
}
.search-enter{
    transform: translateX(-1rem)
}
.search-leave-to{
    opacity: 0;
}
</style>