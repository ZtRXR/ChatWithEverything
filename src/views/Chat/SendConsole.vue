<script setup>
import { ref } from 'vue'
import { useMessage } from '../../stores/ChatMessage'
import { useRoute } from 'vue-router'
const Mess = useMessage()
let sendText = ref("")
const route = useRoute()
const Send = () => {
    console.log(Mess.Users[route.params.ChatName].Hist)
    Mess.Rm
}
</script>

<template>
    <div class="Out">
        <el-input v-model="sendText" autosize type="textarea" placeholder="请输入消息" />
        <el-button type="success" @click="Send">发送</el-button>
    </div>
</template>

<style scoped>
.Out {
    margin-top: 10px;
    width: 100%;
    /* background-color: #b85959; */
    /* min-height: 70px; */
    max-height: 250px;
    display: flex;
}

.Out .el-input {
    min-height: 70px;
    border-radius: 5px;
}
</style>