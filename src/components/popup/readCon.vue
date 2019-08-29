<template>
    <div>
        <header id="hrader">
            <div class="suspension">
                <div class="suspLeft">
                    <p class="return" @click="rouBack()">
                        <i class="iconfont">&#xe616;</i>
                    </p>
                    <p class="title ellipsis">{{title}}</p>
                </div>
                <div class="suspRight">
                    <p class="fontChange" @click="fontChange">字体</p>
                    <p class="bgSty" @click="isColor=!isColor">颜色</p>
                    <div class="store" ref="store" @click="store">
                        <i class="iconfont store-icon">&#xe603;</i>
                    </div>
                </div>

            </div>
            
            <div v-show="isChange" class="change-wrap">
                <van-slider class="change" active-color='#fa7b5a' :max='36' :min="12" v-model="value" @change="onChange" />
            </div>


            <div v-show="isColor" class="color-wrap">
                <div class="colors">
                    <p class="config" @click.stop="bgcolor(oneConfig.font,oneConfig.bg)">一键配置</p>
                </div>

                <div class="colors">
                    <p class="color bgColor">背景颜色:</p>
                    <ul>
                        <li v-for="(item,index) in bgColor" :key="index" @click.stop="bgcolor(item.type,item.color)" :style="'border:1px solid '+ item.color+';color:'+item.color">{{item.name}}</li>
                    </ul>
                </div>

                <div class="colors fontColor">
                    <p class="color">字体颜色:</p>
                    <ul>
                        <li v-for="(item,index) in fontColor" @click.stop="bgcolor(item.type,item.color)" :key="index" :style="'border:1px solid '+ item.color+';color:'+item.color">{{item.name}}</li>
                    </ul>
                </div>
            </div>
        </header>

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
            value: Number(window.localStorage.getItem('FONT_SIZE')) || 14,
            isChange: false,
            change: null,
            isColor:false,
            setTime:null,
            // moryConfig:{font:window.localStorage.getItem('FONT') || '',bg:window.localStorage.getItem('BG') || ''}, //记忆配置
            oneConfig:{font:'#cecece',bg:'#13591d'},  //一键配置
            bgColor: [
                {type:'bg', name: '白色', color: '#fff' }, {type:'bg', name: '黑色', color: '#000' }, {type:'bg', name: '橙色', color: '#fa7b5a' }, {type:'bg', name: '亮黄色', color: '#fff500' }, {type:'bg', name: '亮绿色', color: '#9ec700' }, {type:'bg', name: '深绿色', color: '#009825' }, {type:'bg', name: '蓝色', color: '#00a3e7' }, {type:'bg', name: '护眼背景', color: '#13591d' }
            ],
            fontColor: [
                {type:'font', name: '白色', color: '#fff' }, {type:'font', name: '黑色', color: '#000' }, {type:'font', name: '橙色', color: '#fa7b5a' }, {type:'font', name: '亮黄色', color: '#fff500' }, {type:'font', name: '亮绿色', color: '#9ec700' }, {type:'font', name: '深绿色', color: '#009825' }, {type:'font', name: '蓝色', color: '#00a3e7' }, {type:'font', name: '护眼亚光', color: '#cecece' },
            ]
        }
    },
    props: ['fontSize', 'title','colors'],
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
        fontChange() {
            clearTimeout(this.change)
            this.isChange = !this.isChange;

        },
        onChange(value) {
            clearTimeout(this.change)
            this.$emit('fontSize', value)
            window.localStorage.setItem('FONT_SIZE',value)
            this.$toast('当前值：' + value);
            this.change = setTimeout(() => {
                this.isChange = false
            }, 3000)

        },
        bgcolor(t,c){
            clearTimeout(this.setTime)
            this.$emit('colors', t,c)

            switch(t){
                case 'font':
                    window.localStorage.setItem('FONT',c)
                break;
                case 'bg':
                    window.localStorage.setItem('BG',c)
                break;
                default:
            }
            this.setTime=setTimeout(() => {
                this.isColor = false
            }, 3000)

        }
    },

}

</script>
<style lang="less" scoped>
#hrader {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    height: 3.5rem;
    .suspension {
        padding: 0 1rem;
        line-height: 3.5rem;
        color: white;
        display: flex;
        .suspLeft {
            display: flex;
            flex: 1;
            justify-content: flex-start;
            .return {
                text-align: center;
                padding: 0 0.5rem;
            }
            .title {
                width: 12rem;
            }
        }
        .suspRight {
            display: flex;
            flex: 1;
            justify-content: flex-end;
            .bgSty {
                margin: 0 0.5rem;
            }
            .fontChange {
                margin: 0 0.5rem;
            }
            .store {
                color: white;
                padding: 0 0.5rem;
                .store-icon {
                    font-size: 1.6rem;
                }
            }
        }
    }
    .change-wrap {
        width: 80%;
        height: 0.3rem;
        background: rgba(0, 0, 0, 0.7);
        border-radius: 2rem;
        margin: 2rem auto 0;
        padding: 1.5rem 0;
        .change {
            width: 70%;
            margin: 0 auto;
        }
    }
}

.color-wrap {
    width: 80%;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 1rem;
    margin: 2rem auto 0;
    padding: 1.5rem 0;
    
    .colors {
        padding: 0.5rem;
        display: flex;
        line-height: 1rem;
        color: white;
        .color {
            flex: 1;
            padding: 0.3rem 0.5rem;
        }
        ul {
            flex: 3;
            li {
                display: inline-block;
                padding: 0.3rem 0.5rem;
                box-sizing: border-box;
                margin: 0.2rem;
                border-radius: 0.3rem;
            }
        }
    }
    .bgColor {
        
    }
    .fontColor {

        border-top: 1px #fff;
        border-style: dashed
    }
    .config{
        margin: 1rem 0.5rem;
        padding: 0.5rem;
        border:1px solid #fff;
        border-radius: 0.3rem;
    }
}
</style>