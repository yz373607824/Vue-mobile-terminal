<template>
    <section id="about">
        <headerTop>
            <div slot="left" class="top-return">
                <i class="default return" @click="rouBack"></i>
                <h3 class="h3">{{title}}</h3>
            </div>
        </headerTop>

        <div class="about-comic text-centre block-body fit-padding-t-b">
            <img class="logo-img" @click="logos" :src="logo.imgUrl" :alt="logo.title">
            <p class="fit-padding-l-r" v-html="logo.slogan"></p>
        </div>

        <div class="feedback-contact  block-body fit-padding-l-r fit-padding-t-b mg-top">
            <h2>问题反馈</h2>
            <ul>
                <li>时间：工作日 周一到周五、10点-18点</li>
                <li>邮箱：szfyp@52fypi.com</li>
            </ul>
        </div>
        <div class="feedback-contact  block-body fit-padding-l-r fit-padding-t-b">
            <h2>合作联系</h2>
            <ul>
                <li>时间：工作日 周一到周五、10点-18点</li>
                <li>邮箱：szfyp@52fypi.com</li>
            </ul>
        </div>

        <div class="statement  block-body fit-padding-l-r fit-padding-t-b">
            <ul>
                <li>
                    <span  @click="services">{{service.title}}</span>
                </li>
                <li>
                    <span  @click="privacys">{{privacy.title}}</span>
                </li>
                <li>
                    <span  @click="copyrights">{{copyright.title}}</span>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import headerTop from '../../components/header.vue'
import { Dialog } from 'vant';

import logo from  "../../assets/logo_ico.png"

export default {
    data() {
        return {
            title:'关于我们',
            logo:{
                title:"飞鱼映画",
                imgUrl:logo,
                content:"<img src='"+logo+"' width='50%'><p style='color:#fa7b5a;margin-top:1rem;'>当前版本：体验版 V1.0.0</p>",
                slogan:"海量优质内容，即时浏览。<br>飞鱼映画给你不一样的二次元体验"
            },

            service: {
                title: "服务条款",
                content: "本条款是用户与公司之间关于用户使用漫画软件或服务的条款，内容包括条款正文、公司已经发布的或将来可能发布的各类规则。所有规则为本条款不可分割的组成部分，与条款正文具有同等法律效力。除另行明确声明外，用户使用漫画软件或服务的行为将受本条款约束。",
            },
            privacy: {
                title: "隐私策略",
                content: "我们可能适时修订本隐私策略的内容。如过该等变更会导致您在本政策项下权利的实质减损，我们将在变更生效前，通过在页面显著位置提示、向您发送电子邮件等方式提醒您。在该种情况下，若您继续使用我们的服务，即表示统一受经修订的政策约束。",
            },
            copyright: {
                title: "版权声明",
                content: "数据均来源于网络，并不参与上传、创作，版权争议与本站无关。 仅学习交流使用，请勿用于商业（非法）用途！否则，一切后果请自行承担！",
            }
        }
    },
    components: {
        headerTop
    },
  methods: {
    rouBack() {
      this.$router.go(-1);
    },
        logos() {
            Dialog.alert({
                title: this.logo.title,
                message: this.logo.content
            }).then(() => {
                // on close
                // alert('感谢你的认同！')
            });
        },
        services() {
            Dialog.alert({
                title: this.service.title,
                message: this.service.content
            }).then(() => {
                // on close
                // alert('感谢你的认同！')
            });
        },
        privacys() {
            Dialog.alert({
                title: this.privacy.title,
                message: this.privacy.content
            }).then(() => {
                // on close
                // alert('感谢你的认同！')
            });
        },
        copyrights(){
            Dialog.alert({
                title: this.copyright.title,
                message: this.copyright.content
            }).then(() => {
                // on close
                // alert('感谢你的认同！')
            });
        },
  },
}

</script>

<style lang="less" scoped>
#about{
    margin-top:3.5rem;
    background-color: #eeeeee;
}
.logo-img{
    width:25%;
}
.about-comic {
    box-sizing: border-box;
}

.block-body {
    box-sizing: border-box;
    background-color: #fff;
    color: #666666;
}

.text-centre {
    text-align: center;
}
.mg-top {
    margin-top: 0.66rem;
}
.fit-padding-t-b {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
}
.fit-padding-l-r {
    padding-left: 1rem;
    padding-right: 1rem;
}

.about-comic p {
    box-sizing: border-box;
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.5;
    color: #333333;
    padding-top: 1.25rem;
}

.feedback-contact h2 {
    font-weight: normal;
    font-size: 1.2rem;
    color: #333333;
}

.feedback-contact li {
    box-sizing: border-box;
    font-size: 1rem;
    padding-top: 0.5rem;
    color: #666666;
}

.feedback-contact {
    box-sizing: border-box;
}

.block-body {
    box-sizing: border-box;
    background-color: #fff;
    color: #666666;
}

.block-body {
    box-sizing: border-box;
    background-color: #fff;
    color: #666666;
}

.statement li {
    font-size: 1rem;
    padding-bottom: 1rem;
}

.statement li span {
    color: #fa7b5a;
}
</style>