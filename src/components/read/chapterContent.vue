<!-- 正文 -->
<template>
    <section id="content" ref="content">
        <div class="body-wrap">
            <div v-show="isLoading" @click="prevNext(prevCha.v.id,prevCha.c.chapter_id)" class="ellipsis prev-next">上一章：{{prevCha.v.volume_name}} {{prevCha.c.chapter_name}}</div>
            <div class="con-body" ref="bodys" v-html="dataTxt" @click="longtag"></div>
            <img v-if="!isLoading" src="../../assets/images/loading.gif" />
            <div v-show="isLoading" @click="prevNext(nextCha.v.id,nextCha.c.chapter_id)" class="ellipsis prev-next">下一章：{{nextCha.v.volume_name}} {{nextCha.c.chapter_name}}</div>
        </div>
        <transition name="read">
            <readCon @fontSize="fontSize" @colors="colors" :title="title" v-show="isReadCon"></readCon>
        </transition>
    </section>
</template>

<script>
import { axioss } from '../../extends/axios'
//首页api地址请求
import { XS_DOWN, XS_CHAPTER } from '../../api/api'

import readCon from '../popup/readCon'

export default {
    data() {
        return {
            title: '',
            isReadCon: false,
            isLoading: false,
            dataTxt: '',  //正文
            id: '',
            v: '',
            c: '',
            is: 0,
            i: 0,
            order: 0,
            conChapter: JSON.parse(window.sessionStorage.getItem('CON_CHAPTER' + this.$route.query.id) || '[]'), //抓取前后章节
            prevCha: {
                v: { id: 0, volume_name: '' },
                c: { chapter_id: 0, chapter_name: '' }
            },
            nextCha: {
                v: { id: 0, volume_name: '' },
                c: { chapter_id: 0, chapter_name: '' }
            },
            indexCha: {
                V: [],
                C: []
            }
        }
    },
    components: {
        readCon
    },
    beforeRouteUpdate(to, from, next) {
        if (from.fullPath) {
            this.id = to.query.id;
            this.v = to.query.v;
            this.c = to.query.c;

            this.is = this.$route.query.is;
            this.i = this.$route.query.i;
            this.order = this.$route.query.order;
            this.getAxios()
            window.scrollTo(0, 0)
        }
    },
    mounted() {
        this.id = this.$route.query.id;
        this.v = this.$route.query.v;
        this.c = this.$route.query.c;

        this.is = this.$route.query.is;
        this.i = this.$route.query.i;
        this.order = this.$route.query.order;


        if (!window.sessionStorage.getItem('CON_CHAPTER' + this.$route.query.id)) {
            this.$nextTick(async () => {
                // axios请求章节
                try {
                    let dataXS_CHAPTER = await axioss(XS_CHAPTER.url + "/" + this.id + ".json", XS_CHAPTER.type, XS_CHAPTER.data)
                    let dataXS_C = dataXS_CHAPTER.data;
                    if (dataXS_C.length == 0) {
                        return this.$toast({ message: "章节加载失败请刷新重试!", className: 'fontsize' });
                    }
                    this.conChapter = dataXS_C;
                    window.sessionStorage.setItem('CON_CHAPTER' + this.id, JSON.stringify(dataXS_C))
                } catch (err) {
                    return this.$toast({ message: "章节加载失败!", className: 'fontsize' });
                    console.log(err)
                }

            })
        }
        this.getAxios();
        //获取颜色配置
        this.$refs.content.style.color = window.localStorage.getItem('FONT') || '';
        this.$refs.content.style.background = window.localStorage.getItem('BG') || '';
        this.$refs.bodys.style.fontSize = window.localStorage.getItem('FONT_SIZE') + 'px' || ''
        this.$refs.bodys.style.lineHeight = (window.localStorage.getItem('FONT_SIZE') ? (2 * window.localStorage.getItem('FONT_SIZE')) + 'px' : 'normal')
    },
    methods: {
        fontSize(val) {
            this.$refs.bodys.style.fontSize = val + 'px'
            this.$refs.bodys.style.lineHeight = 2 * val + 'px'
        },
        colors(t, c) {
            switch (t) {
                case 'font':
                    this.$refs.content.style.color = c;
                    break;
                case 'bg':
                    this.$refs.content.style.background = c;
                    break;
                default:
                    this.$refs.content.style.color = t;
                    this.$refs.content.style.background = c;
            }

        },
        prevNext(v, c) {
            this.$router.push({ path: '/chacontent', query: { id: this.id, v, c } })

        },
        longtag() {
            this.isReadCon = !this.isReadCon;
        },
        conChapters() {  //获取前后章节

            this.conChapter.forEach((items, indexs) => {
                this.indexCha.V[1] = this.conChapter.length - 1;
                if (items.id == this.v) {
                    this.indexCha.V[0] = indexs
                    items.chapters.forEach((item, index) => {
                        this.indexCha.C[1] = items.chapters.length - 1;
                        if (item.chapter_id == this.c) {
                            this.title = item.chapter_name
                            this.indexCha.C[0] = index;
                        }
                    })
                }
            })

            if (0 < this.indexCha.C[0] && this.indexCha.C[0] < this.indexCha.C[1]) {      //c在区间
                this.prevCha = {
                    v: this.conChapter[this.indexCha.V[0]],
                    c: this.conChapter[this.indexCha.V[0]].chapters[this.indexCha.C[0] - 1]
                }
                this.nextCha = {
                    v: this.conChapter[this.indexCha.V[0]],
                    c: this.conChapter[this.indexCha.V[0]].chapters[this.indexCha.C[0] + 1]
                }
            }else if( 0 == this.indexCha.C[0] && this.indexCha.C[1] == 0 ){ //章下只有一篇
                if( this.indexCha.V[0] -1  >= 0 ){
                        this.prevCha = {
                            v: this.conChapter[this.indexCha.V[0] - 1],
                            c: this.conChapter[this.indexCha.V[0] - 1].chapters[this.conChapter[this.indexCha.V[0] - 1].chapters.length - 1]
                        }  
                }else{
                        this.prevCha = {
                            v: { chapter_id: this.conChapter[this.indexCha.V[0]].id, volume_name: '最前一章了' },
                            c: { chapter_id: this.conChapter[this.indexCha.V[0]].chapters[this.indexCha.C[0]].chapter_id, chapter_name: '.' }
                        }   
                }
                
                if( this.indexCha.V[0] + 1 <= this.indexCha.V[1] ){
                        this.nextCha = {
                            v: this.conChapter[this.indexCha.V[0] + 1],
                            c: this.conChapter[this.indexCha.V[0] + 1].chapters[0]
                        }
                }else{
                        this.nextCha = {
                            v: { chapter_id: this.conChapter[this.indexCha.V[0]].id, volume_name: '最后一章了' },
                            c: { chapter_id: this.conChapter[this.indexCha.V[0]].chapters[this.indexCha.C[1]].chapter_id, chapter_name: '.' }
                        }
                }    
            }else if( this.indexCha.C[1] == 0 ){  //章下没有时
                return this.$toast({ message: "歐!这章内容被掏空了！", className: 'fontsize' });
            }else{  //不在c区间
                if (this.indexCha.C[0] == 0) {

                    if (0 < this.indexCha.V[0]) {  //v在区间
                        this.prevCha = {
                            v: this.conChapter[this.indexCha.V[0] - 1],
                            c: this.conChapter[this.indexCha.V[0] - 1].chapters[this.conChapter[this.indexCha.V[0] - 1].chapters.length - 1]
                        }
                        this.nextCha = {
                            v: this.conChapter[this.indexCha.V[0]],
                            c: this.conChapter[this.indexCha.V[0]].chapters[this.indexCha.C[0] + 1]
                        }

                    } else {  //不在v在区间
                        this.prevCha = {
                            v: { chapter_id: this.conChapter[this.indexCha.V[0]].id, volume_name: '最前一章了' },
                            c: { chapter_id: this.conChapter[this.indexCha.V[0]].chapters[this.indexCha.C[0]].chapter_id, chapter_name: '.' }
                        }
                        this.nextCha = {
                            v: this.conChapter[this.indexCha.V[0]],
                            c: this.conChapter[this.indexCha.V[0]].chapters[this.indexCha.C[0] + 1]
                        }
                    }
                }

                if (this.indexCha.C[0] == this.indexCha.C[1]) {

                    if (this.indexCha.V[0] < this.indexCha.V[1]) {
                        this.prevCha = {
                            v: this.conChapter[this.indexCha.V[0]],
                            c: this.conChapter[this.indexCha.V[0]].chapters[this.indexCha.C[0] - 1]
                        }
                        this.nextCha = {
                            v: this.conChapter[this.indexCha.V[0] + 1],
                            c: this.conChapter[this.indexCha.V[0] + 1].chapters[0]
                        }
                    } else {
                        this.prevCha = {
                            v: this.conChapter[this.indexCha.V[0]],
                            c: this.conChapter[this.indexCha.V[0]].chapters[this.indexCha.C[0] - 1]
                        }
                        this.nextCha = {
                            v: { chapter_id: this.conChapter[this.indexCha.V[0]].id, volume_name: '最后一章了' },
                            c: { chapter_id: this.conChapter[this.indexCha.V[0]].chapters[this.indexCha.C[1]].chapter_id, chapter_name: '.' }
                        }
                    }
                }

            }

            // console.log('v索引' + this.indexCha.V[0] + ',v索引长度：' + this.indexCha.V[1])
            // console.log('c索引' + this.indexCha.C[0] + ',c索引长度：' + this.indexCha.C[1])

        },
        getAxios() {

            this.$nextTick(async () => {
                // axios请求正文
                try {
                    let dataXS_DOWN = await axioss(XS_DOWN.url + "/" + this.id + "_" + this.v + "_" + this.c + ".txt", XS_DOWN.type, XS_DOWN.data)
                    let dataXS_D = dataXS_DOWN.data;
                    if (dataXS_D.length == 0) {
                        return this.$toast({ message: "文章加载失败请刷新重试!", className: 'fontsize' });
                    }

                    let dataXS_D_REGEXP_IMG = dataXS_D.replace(/<img/ig, '<img width="100%" height="100%" style="margin:0 auto"');
                    this.isLoading = true;
                    this.dataTxt = dataXS_D_REGEXP_IMG;

                    this.conChapters()
                    // console.log(this.dataTxt)
                } catch (err) {
                    return this.$toast({ message: "文章加载失败!", className: 'fontsize' });
                    console.log(err)
                }

            })
        }
    },
}

</script>

<style lang="less" scoped>
#content {
    width: 100%;
    overflow: hidden;
    .body-wrap {
        .prev-next {
            width: 100%;
            text-align: center;
            background: rgba(250, 123, 90, 0.7);
            color: white;
            padding: 1rem 0;
        }
        .con-body {
            width: 96%;
            margin: 2rem auto;
            font-size: 1rem;
            line-height: 2rem;
            text-indent: 2rem;
            img {
                display: block;
                margin: 0 auto;
                width: 100%;
            }
        }
        img {
            display: block;
            margin: 0 auto;
            width: 40%;
        }
    }
}
</style>