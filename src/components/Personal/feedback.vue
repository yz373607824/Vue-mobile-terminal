<template>
    <section id="feedback">
        <h2 class="feedback-top">反馈</h2>
        <van-notice-bar color="#fa7b5a" background="none" scrollable left-icon="info-o">本次反馈会把发生问题的当前设备基础信息（如手机型号、系统版本、APP版本等）一起提交，帮助定位问题。</van-notice-bar>
        <form>
            <div class="form-wrap">

                <div class="Submission-wrap">
                    <textarea class="Submission" placeholder="输入您要反馈的内容！" v-model="text"></textarea>
                </div>

                <div class="file-wrap">
                    <van-uploader class="file-chang" v-model="fileList" multiple :max-count="6" />
                    <span class="text-len" v-html="texts"></span>
                </div>
                

            </div>
            <div class="Sign">
                <van-button class="Sign_out" type="warning" color="#fa7b5a" size="small">提交反馈</van-button>
            </div>

        </form>
    </section>
</template>

<script>
import Vue from 'vue'
import { NoticeBar, Uploader } from 'vant';
Vue.use(Uploader);
Vue.use(NoticeBar);

export default {
    data() {
        return {
            text:'',
            textlen:400,
            fileList: []
        }
    },
    computed: {
        texts(){
            const text=this.text.trim()

            if( text.length <= this.textlen ){

                return this.textlen-text.length;
            }
            return '<span style="color:red">超出长度了</span>'
        }
    },
}

</script>

<style lang="less" scoped>
#feedback {}

.feedback-top {
    text-align: center;
    padding: 0.8rem 0;
    background: #fa7b5a;
    color: white;
}

.form-wrap {
    font-size: 1rem;
    .Submission-wrap {

        .Submission {
            width: 100%;
            height: 10rem;
            padding: 0.5rem 1rem;
            resize: none;
            box-sizing: border-box;
            border: 0
        }
    }
    .file-wrap {
        position: relative;
        margin-bottom: 2rem;
        border-bottom: 1px solid #eee;
        color: #ccc;
        .file-chang {
            margin: 1rem;
        }
        .text-len {
            position: absolute;
            right:1rem;
            line-height: 7.3rem;
            float: right;
    }
    }

}

</style>