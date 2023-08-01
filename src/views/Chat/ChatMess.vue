<script setup>
import {ref,onMounted} from 'vue'
import { useRoute } from 'vue-router'
import {useMessage} from '../../stores/ChatMessage'
import {useUser} from '../../stores/User'

const Chatwindow = ref(null)
const Messages = useMessage()
const route = useRoute()
const User = useUser()
const scrolltoBotton = () =>{
    Chatwindow.value.scrollTop = Chatwindow.value.scrollHeight;
}

onMounted(()=>{
    scrolltoBotton()
})
// console.log(route.params.ChatName)

</script>


<template>
    <div class="ChatWindow" ref="Chatwindow">
        <div v-if="Messages.Users[route.params.ChatName]!=null" class="ChatMess" :style="AMess.name!=User.name?'flex-direction: row-reverse':''" v-for="(AMess,index) in Messages.Users[route.params.ChatName].Hist" :key="index">
            <div class="headPhoto">
                
            </div>
            <div class="MessText">
                {{ AMess.Mess }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.ChatWindow{
    margin-top: 10px;
    background-color: #e9f5ff;
    min-height: 700px;
    width: 100%-40px;
    border-radius: 30px;
    padding: 20px;
    max-height: 720px;
    overflow-y: scroll;
}
.ChatMess{
    /* background-color: blueviolet; */
    width: 100%;
    min-height: 90px;
    margin-bottom: 10px;
    overflow: hidden;
    display: flex;
}
.ChatMess .headPhoto{
    height: 90px;
    width: 90px;
    border-radius: 30px;
    background-color: #fff;
    /* height: 100%; */
}
.ChatMess .MessText{
    min-width: 50px;
    max-width: 65%;
    margin: 10px;
    background-color: rgb(189, 201, 255);
    border-radius: 10px;
    min-height: 10px;
    word-wrap: break-word;
    padding: 18px;
}

</style>