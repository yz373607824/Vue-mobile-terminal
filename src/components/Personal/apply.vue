<template>
    <correlation :data="data"/>
</template>

<script>
import correlation from './correlation'

export default {
    data() {
        return {
            data:{
                title:'注册飞鱼映画',
                describe:"手机号注册需要验证你的手机号，该号码不会对其他人公开",
                //提交地址
                url:'',
            }
        }
    },
    components:{
        correlation
    }
}

</script>