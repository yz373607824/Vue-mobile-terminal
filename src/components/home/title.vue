<template>
    <div id="title">
        <img class="title_img" :src="categoal.titleImg" :alt="categoal.title">
        <router-link :to="categoal.url+'&title='+categoal.title" class="more">更多</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: ['categoal']
}

</script>
<style lang="less" scoped>
#title {
    width: 100%;
    background: #fff;
    border: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.4rem 0.3rem;
    box-sizing: border-box;
    .title_img {
        display: block;
        width: 50%;
    }
    .more {
        font-size: 1rem;
        border: 1px solid #ddd;
        padding: 0.2rem 0.6rem;
        border-radius: 1.66rem;
    }
}
</style>