<script setup>
import { ref } from 'vue'
import { useMessage } from '../../stores/ChatMessage'
import { useRoute } from 'vue-router'
import { useUser } from '../../stores/User';
const User = useUser()
const Mess = useMessage()
let sendText = ref("")
const route = useRoute()
const Send = () => {
    Mess.ToButtom = Mess.ToButtom++
    let ASign = {};
    for (let i = Mess.AllMess.length - 1; i >= 0; i--) {
        if (Mess.AllMess[i].chatId == parseInt(route.params.ChatName)) {
            ASign = Mess.AllMess[i].sign
            break
        }
    }
    Mess.AddMess({
        chatId: parseInt(route.params.ChatName),
        sender: User.id,
        text: sendText.value,
        sign: ASign
    })
    sendText.value = ""
    // Mess.NewChatting++
}
</script>

<template>
    <div class="Out">
        <el-input v-model="sendText" autosize type="textarea" placeholder="请输入消息" />
        <el-button type="success" @click="Send">发送 到底端</el-button>
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
    margin-right: 10px;
}
</style>