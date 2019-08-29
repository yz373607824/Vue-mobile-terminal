<template>
    <div id="content">
        <div id="header-footer" @click="$parent.longtag">
            <header id="hrader">
                <div class="suspension">
                    <div class="suspLeft">
                        <p class="return" @click="rouBack()">
                            <i class="iconfont">&#xe616;</i>
                        </p>
                        <p class="title ellipsis">{{title}}</p>
                    </div>
                    <div class="suspRight">
                        <router-link to="/">
                            <p class="home">首页</p>
                        </router-link>
                        <div class="store" ref="store" @click="store">
                            <i class="iconfont store-icon">&#xe603;</i>
                        </div>
                    </div>
                </div>
            </header>

            <div id="speed" :style="{ height: '20rem',width:'3rem', }">
                <van-slider v-model="$parent.value" active-color="#fa7b5a" :min='0' :max='100' vertical @change="onChange"/>
                <p class="speedTips">{{$parent.value}}/100</p>
            </div>

            <footer id="footer">
                <div class="function">
                    <ul class="setup">
                        <li @click.stop="Catalog">
                            <i class="iconfont">&#xe650;</i>
                            <p>目录</p>
                        </li>
                        <li @click="brightness">
                            <i class="iconfont">&#xe685;</i>
                            <p>亮度</p>
                        </li>
                        <li @click="play">
                            <i class="iconfont">&#xe647;</i>
                            <p>播放</p>
                        </li>
                        <li @click="full">
                            <i class="iconfont">&#xe601;</i>
                            <p>切换</p>
                        </li>
                        <li @click="iconfont">
                            <i class="iconfont">&#xe65a;</i>
                            <p>更多设置</p>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>

        <div class="Catalog" v-show="isCatalog">
            <p class="tips">
                <span style="text-align:left">目录</span>
                <span style="text-align:right">排序</span>
            </p>
            <ul ref="setup">
                <li v-for="(item,index) in list" :key="index" class="ellipsis" @click="chapter(index)">{{item.chapter_name}}</li>
            </ul>
        </div>

        <div class="brightness" v-show="isBrightness">
            <p>-&nbsp;&nbsp;&nbsp;亮度调节&nbsp;&nbsp;&nbsp;+</p>
            <van-slider class="change" active-color='#fa7b5a' :max='100' :min="0" v-model="Brvalue"  @change="onChange"/>
        </div>
        <div class="br" ref="brightness" style=""></div>
    </div>
</template>

<script>
import Vue from 'vue';
import { Slider } from 'vant';

Vue.use(Slider);

export default {
    data() {
        return {
            isStore: false,
            value: 1,
            isCatalog: false,  //目录
            isBrightness: false, //亮度
            isPlay:false,
            Brvalue: 50,
            setTime:null,
        }
    },
    props: ['title', 'list'],
    beforeDestroy() {
        clearInterval(this.setTime); //关闭
    },
    methods: {
        rouBack() {
            this.$router.go(-1);
        },
        store() {
            this.isStore = !this.isStore
            let store = this.$refs.store;
            if (this.isStore) {
                store.style.color = '#fa7b5a';
                this.$toast({ message: "^0^已加入我的收藏啦！！！", className: 'fontsize' });
            } else {
                store.style.color = '#fff';
                this.$toast({ message: ")~( 已取消收藏！", className: 'fontsize' });
            }
        },
        onChange(){
            // console.log(this.$parent.topH)
            // this.value=parseInt(((this.topH*100/this.viewH)).toFixed(0))
            window.scrollTo(0,this.$parent.viewH*this.$parent.value/100)
        },
        chapter(index) {
            this.$router.push({ path: '/arclistcon', query: { id: this.$route.query.id, uid: this.$route.query.uid, index, isRevers: this.$route.query.isRevers } })
        },
        Catalog() { //目录
            this.isCatalog = !this.isCatalog

        },
        brightness() { //亮度
            this.isBrightness = !this.isBrightness
            this.$toast({ message: "亮度暂不支持！", className: 'fontsize' });
        },
        play(){ //播放
            clearInterval(this.setTime)
            this.isPlay=!this.isPlay
            if( this.isPlay ){    
                this.setTime=setInterval(()=>{
                    if( this.$parent.viewH <= this.$parent.topH ){
                        clearInterval(this.setTime)
                        this.isPlay=false
                    }
                    this.$parent.topH++;
                    window.scrollTo(0,this.$parent.topH)
                },40)
            }else{
                clearInterval(this.setTime)
            }
            
        },
        full() { //全屏
            
            console.log(this.$root)
            if( this.$route.meta.isHomeFooter ){
                document.getElementById('nav').style.display='block'
                this.$root.$el.style.marginBottom='7rem'
            }else{
                document.getElementById('nav').style.display= 'none'
                this.$root.$el.style.marginBottom=0
            }
            this.$route.meta.isHomeFooter=!this.$route.meta.isHomeFooter
            
        },
        iconfont(){  //更多设置
            this.$toast({ message: "暂未开放！", className: 'fontsize' });
        }

    },

}

</script>
<style lang="less" scoped>
#content {
    #hrader {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 9999;
        width: 100%;
        background: rgba(0, 0, 0, 0.7);
        .suspension {
            padding: 0.8rem 1rem;
            color: white;
            display: flex;
            .suspLeft {
                display: flex;
                flex: 1;
                justify-content: flex-start;
                align-items: center;
                .return {
                    font-size: 1.5rem;
                    text-align: center;
                    padding: 0 0.5rem;
                }
                .title {
                    font-size: 1.1rem;
                    width: 15rem;
                }
            }
            .suspRight {
                display: flex;
                flex: 1;
                justify-content: flex-end;
                .home {
                    color: white;
                    border: 1px solid #fff;
                    padding: 1px 0.2rem;
                    border-radius: 0.3rem;
                    margin-right: 0.3rem;
                }
                .store {
                    color: white;
                    padding: 0 0.5rem;
                    .store-icon {
                        font-size: 1.5rem;
                    }
                }
            }
        }
    }
    #speed {
        position: fixed;
        left: 90%;
        bottom: 25%;
        width: 100%;
        z-index: 9999;
        .speedTips {
            position: absolute;
            left: -1.2rem;
            bottom: -2rem;
            color: #fa7b5a;
        }
    }
    #footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        z-index: 9999;
        background: rgba(0, 0, 0, 0.7);
        .function {
            padding: 0.8rem 1rem;
            color: white;
            .setup {
                display: flex;
                li {
                    flex: 1;
                    text-align: center;
                    i {
                        font-size: 2rem;
                    }
                    p {
                        font-size: 1rem;
                    }
                }
            }
        }
    }
    .Catalog {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 18rem;
        z-index: 9999;
        background: rgba(0, 0, 0, 0.7);
        overflow: hidden;
        color: white;
        .tips {
            padding: 0.5rem 1.2rem;
        }
        ul {
            display: inline-block;
            padding: 0 1rem 0.8rem;
            overflow-x: hidden;
            overflow-y: scroll;
            height: 80%;
            li {
                width: 5.5rem;
                padding: 0.3rem 0.5rem;
                margin: 0 0.3rem 0.5rem;
                box-sizing: border-box;
                float: left;
                border: 1px solid #fff;
                border-radius: 1rem;
                text-align: center;
            }
        }
    }
    .brightness {
        position: fixed;
        left: 10%;
        top: 40%;
        z-index: 1;
        width: 80%;
        background: rgba(0, 0, 0, 0.7);
        border-radius: 2rem;
        padding: 0.5rem 0;
        color: white;
        text-align: center;
        .change {
            width: 70%;
            margin: 1rem auto;
        }
    }
    .br {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 0;
        // width: 100%;
        // height: 100%;
        // background: #000;
        opacity: 0.5;
        &::before{
            background: rgba(0, 0, 0, 0.5)
        }
    }
}
</style>