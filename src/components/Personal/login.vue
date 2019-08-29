<template>
    <div class="view">
        <header class="navbar">
            <h1 class="navbar-heading">登录飞鱼映画</h1>
            <span @click="$router.go(-1)" class="navbar-back navbar-back--text">返回</span>
        </header>
        <div class="container LoginWrap">
            <div id="login-area" class="login-area">
                <form method="post" action="" class="login-classic LoginClassic" id="" style="display: block;">
                    <input name="redirect" type="hidden" value="">
                    <input name="csrfToken" type="hidden" value="">
                    <div class="control-wrap control-wrap--hasIcon">
                        <i class="iconfont icon">&#xe7d0;</i>
                        <input type="text" placeholder="手机号" class="u-ipt ipt-block" id="username" name="username">
                    </div>
                    <div class="control-wrap control-wrap--hasIcon">
                        <i class="iconfont icon">&#xe620;</i>
                        <input type="password" id="password" name="password" class="u-ipt ipt-block" placeholder="密码">
                    </div>
                    <div class="control-wrap"></div>
                    <p class="err"></p>
                    <div class="f-cb">
                        <router-link to="/retrieve" class="f-fr">忘记密码？</router-link>
                    </div>
                    <div class="Sign">
                        <van-button class="Sign_out" type="danger" size="normal">登录</van-button>
                    </div>
                    <div class="m-register LoginClassic__resgiter">
                        <router-link to="/apply">手机号快速注册</router-link>
                    </div>
                </form>
            </div>
        </div>
        <div class="f-pr m-login-other container">
            <div class="u-line"></div>
            <div class="u-line-text">使用以下账号登录</div>
        </div>
        <div class="m-login-other container LoginMethod">
            <a class="js-phoneSwitcher" href="">
                <span class="sprite-sns-mail"></span>
                <div class="plainText LoginMethod__plainText">微信</div>
            </a>
            <a id="qq" href="">
                <span class="sprite-sns-qq"></span>
                <div class="plainText LoginMethod__plainText">QQ</div>
            </a>
            <a id="sina" href="">
                <span class="sprite-sns-sina"></span>
                <div class="plainText LoginMethod__plainText">微博</div>
            </a>
        </div>
        <div class="m-declaration">
            <input id="declaration" class="u-checkbox" checked="true" type="checkbox">我同意
            <span @click="services">“{{service.title}}”</span>和
            <span @click="privacys">“{{privacy.title}}”</span>
        </div>
    </div>
</template>

<script>
import { Dialog } from 'vant';

export default {
    data() {
        return {
            service: {
                title: "服务条款",
                content: "本条款是用户与公司之间关于用户使用漫画软件或服务的条款，内容包括条款正文、公司已经发布的或将来可能发布的各类规则。所有规则为本条款不可分割的组成部分，与条款正文具有同等法律效力。除另行明确声明外，用户使用漫画软件或服务的行为将受本条款约束。",
            },
            privacy: {
                title: "隐私策略",
                content: "我们可能适时修订本隐私策略的内容。如过该等变更会导致您在本政策项下权利的实质减损，我们将在变更生效前，通过在页面显著位置提示、向您发送电子邮件等方式提醒您。在该种情况下，若您继续使用我们的服务，即表示统一受经修订的政策约束。",
            }
        }
    },
    methods: {
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
        }
    },
}

</script>


<style lang="less" scoped>
.view {
    position: relative;
}

.navbar-heading {
    text-align: center;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 4.1rem;
    margin: 0;
}

.navbar-back--text {
    font-size: 1rem;
    color: #373b44;
    line-height: 1.25rem;
    padding: 1.5rem 1.25rem;
}

.navbar-back {
    position: absolute;
    top: 0;
    left: 0;
}

.LoginWrap {
    margin-top: 5rem;
}

.container {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
}


input {
    display: block;
    border-radius: 2px;
    box-sizing: border-box;
}

.control-wrap--hasIcon {
    position: relative;
}

.control-wrap {
    margin-bottom: 0.8rem;
}

.control-wrap--hasIcon>.icon {
    position: absolute;
    left: 0.6rem;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}

.control-wrap--hasIcon>input {
    padding-left: 2.5rem;
}

.ipt-block {
    width: 100%;
    box-sizing: border-box;
}

.u-ipt {
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 0.65rem;
    font-size: 1.2rem;
    line-height: 2rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

.f-fr {
    float: right;
}

.f-cb:after,
.f-cbli li:after {
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    overflow: hidden;
    content: ".";
}

.LoginClassic__resgiter {
    margin: 1rem 0;
}

.m-register {
    font-size: 1rem;
    text-align: center;
}

.m-login-other {
    text-align: center;
}

.f-pr {
    position: relative;
}

.u-line {
    width: 100%;
    margin-top: 3rem;
    border-top: 1px solid #e2e2e2;
}

.u-line-text {
    font-size: 1rem;
    color: #afafb0;
    position: absolute;
    top: -0.66rem;
    left: 50%;
    background-color: #ffffff;
    padding: 0 2px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}

.m-login-other {
    text-align: center;
}

.m-login-other a {
    display: inline-block;
    margin: 5rem 0 0;
}

.LoginMethod__plainText {
    font-size: 1rem;
    color: rgba(55, 59, 68, .6);
    margin-top: 0.3rem;
}

.m-declaration {
    text-align: center;
    line-height: 1rem;
    font-size: 1rem;
    margin: 1.5rem 0;
    color: #aeafb0;
    vertical-align: middle;
}

.u-checkbox:checked {
    // background: url(/images/selected.png?e918827…) no-repeat;
    background-size: 7px 5px;
    background-position: center;
}

.m-declaration input {
    display: inline-block;
    margin-right: 3px;
}

.m-declaration span {
    color: #373b44;
}

.Sign {
    margin-top: 2rem;
}

.icon{
    position: absolute;
    top:1rem;
    left:0.7rem;
    font-size: 1.5rem;
}

.van-button{
    width: 100% !important;
}
</style>