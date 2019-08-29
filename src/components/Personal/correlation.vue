<template>
    <div class="view">
        <header class="navbar">
            <h1 class="navbar-heading">{{data.title}}</h1>
            <span @click="$router.go(-1)" class="navbar-back navbar-back--text">返回</span>
        </header>

<div class="view-bd container LoginWrap">
            <p class="f-wwb view-bd-content">{{data.describe}}</p>
            <div class="phoneInput phoneInput--default view-bd-input control-wrap" >
                <input type="tel" class="phoneInput-input js-flag" @keyup="phones" v-model="phone">
                <div class="phoneInput-clear" id="btn-clear" :style="{visibility:stateShow?'visible':'hidden'}"><img @click="clears" src="../../assets/images/register-delete.png"></div>
            </div>
            <div class="control-wrap js-flag captcha-control-wrap" :style="{display:stateShow?'block':'none'}">
                <div class="flex-wrap">
                    <div class="flex-wrap__content input-wrap">
                        <input type="text" class="u-ipt u-ipt-standard code-input" data-required="true" @keyup="captchas" v-model="captcha" name="captcha" autocomplete="off" >
                        </div>
                    <img src="../../assets/images/yzm.png" class="code-button" style="height:40px;vertical-align:middle;">
                </div>
            </div>
                    <div class="Sign">
                        <van-button class="Sign_out" :data-url="data.url" :disabled='Sign'  type="danger" color="fff" size="normal">下一步</van-button>
                    </div>
        </div>
       

    </div>
</template>

<script>

import { Dialog } from 'vant';


export default {
    data() {
        return {
            Sign:true,
            stateShow:false,
            captcha:'',
            phone:'',
            
        }
    },
    props:['data'],
    methods: {
         phones(){
            const phone=this.phone.trim();
            let reg=/^1\d{10}/g;
            if( phone.length == 11 && reg.test(phone) ){
                this.stateShow=true;
            }else{
                this.stateShow=false;
            }
        },
        clears(){
            this.phone='';
            this.stateShow=false;
        },
        captchas(){
            const captcha=this.captcha.trim();
            if( captcha.length == 4 ){
                this.Sign=false
            }else{
                this.Sign=true
            }
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

.container {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
}
.LoginWrap {
    margin-top: 5rem;
}



.view-bd-content {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5rem;
}
.view--register1 .view-bd-input {
    margin-top: 1.5rem;
}
.phoneInput--default, .verifycodeInput--default, .passwordInput--default {
    border-color: rgb(204, 204, 204);
}
.phoneInput, .verifycodeInput, .passwordInput {
    display: flex;
    border: 1px solid #ccc;
    border-radius: 2.5px;
    height:3.1rem;
    line-height: 3.1rem;
    font-size: 1.2rem;
    width: 100%;
}
.phoneInput--default:before {
    border-right: 1px solid rgb(204, 204, 204);
}
.phoneInput:before {
    content: "+86";
    width:5rem;
    height: 100%;
    text-align: center;
}
.phoneInput input, .verifycodeInput input, .passwordInput input {

    width: 100%;
    padding: 0.8rem 0 0.8rem 0.83rem;
    border: 0;
    outline: 0;
    background-color: #fff;
}
.control-wrap {
    margin: 1rem 0;
}

// 隐藏
.phoneInput-clear {
    width: 1.25rem;
    padding: 0.75rem 0.6rem;
    vertical-align: middle;
}
.phoneInput-clear img {
    display: block;
    width: 1.25rem;
    height: auto;
}
.captcha-control-wrap input {
    width: 75%;
    border: 1px solid #ccc;
    border-radius: 2.5px;
    box-sizing: border-box;
}
.u-ipt-standard {
    padding: 0.7rem 0.83rem;
    font-size: 1rem;
    line-height: 1.8rem;
}
.flex-wrap {
    display: flex;
}
.captcha-control-wrap img {
    width: 7.5rem;
    position: relative;
    top: -2px;
}

.van-button{
    width: 100% !important;
}
</style>