<template>
    <div class="html-wrap">
        <headerTop>
            <div slot="left" class="top-return">
                <i class="default return" @click="rouBack"></i>
                <h3 class="ellipsis">{{title}}</h3>
            </div>
        </headerTop>

        <div class="marginTop">
            <iframe :src="src" width="100%" height="400px" frameborder="0"></iframe>
        </div>
    </div>
</template>

<script>
import headerTop from '../header.vue'

export default {
    data() {
        return {
            cid:0,
            uid: 0,
            index:0,
            title: '',
            html: '',
            src: '',
            isSkeleton: true,
        }
    },
    components: {
        headerTop
    },
    mounted() {
        this.uid = this.$route.query.uid;
        this.title = this.$route.query.title;
        this.cid = this.$route.query.cid;
        this.index = this.$route.query.index;
        this.src = 'http://v2.api.dmzj.com/article/show/v2/' + this.uid + '.html'
    },
    methods: {
        rouBack() {
            this.$router.push({path:'/ranking',query:{cid:this.cid,index:this.index}})
        },
    },
}

</script>

<style lang="less" scoped>
.html-wrap {
    padding: 1rem 0.5rem;
}
</style>