<template>
    <correlation :data="data"/>
</template>

<script>
import correlation from './correlation'

export default {
    data() {
        return {
            data:{
                title:'找回密码',
                describe:"手机号找回密码需要验证你的手机号，该号码不会对其他人公开",
                //提交地址
                url:'123',
            }
        }
    },
    components:{
        correlation
    }
}

</script>