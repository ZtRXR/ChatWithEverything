<script setup>
import {ref,onMounted} from 'vue'
let Mess = [
    {
        id:1,
        word:"nusoidfnuioshgusiodnghuoisdnfoggs.f;g,set,grtsletgghsetyohterynusoidfnuioshgusiodnghuoisdnfoggs.f;g,set,grtsletgghsetyohterynusoidfnuioshgusiodnghuoisdnfoggs.f;g,set,grtsletgghsetyohteryf;g,set,grtsletgghsetyohterynusoidfnuioshgusiodnghuoisdnfoggs.f;g,set,grtsletgghsetyohteryf;g,set,grtsletgghsetyohterynusoidfnuioshgusiodnghuoisdnfoggs.f;g,set,grtsletgghsetyohteryf;g,set,grtsletgghsetyohterynusoidfnuioshgusiodnghuoisdnfoggs.f;g,set,grtsletgghsetyohteryf;g,set,grtsletgghsetyohterynusoidfnuioshgusiodnghuoisdnfoggs.f;g,set,grtsletgghsetyohteryf;g,set,grtsletgghsetyohterynusoidfnuioshgusiodnghuoisdnfoggs.f;g,set,grtsletgghsetyohteryf;g,set,grtsletgghsetyohterynusoidfnuioshgusiodnghuoisdnfoggs.f;g,set,grtsletgghsetyohteryf;g,set,grtsletgghsetyohterynusoidfnuioshgusiodnghuoisdnfoggs.f;g,set,grtsletgghsetyohteryf;g,set,grtsletgghsetyohterynusoidfnuioshgusiodnghuoisdnfoggs.f;g,set,grtsletgghsetyohteryf;g,set,grtsletgghsetyohterynusoidfnuioshgusiodnghuoisdnfoggs.f;g,set,grtsletgghsetyohtery"
    },
    {
        id:2,
        word:"234827309857248095702458924578934275893245"
    },
    {
        id:2,
        word:"nusoidfnuioshgusiodnghuo34532452345324543525"
    },
    {
        id:1,
        word:"nusoidfnuioshgusiodnghuoisdnfoggs.f;g,set,grtsletgghsetyohtery"
    },
    {
        id:2,
        word:"234827309857248095702458924578934275893245"
    },
    {
        id:2,
        word:"nusoidfnuioshgusiodnghuo34532452345324543525"
    },
    {
        id:1,
        word:"nusoidfnuioshgusiodnghuoisdnfoggs.f;g,set,grtsletgghsetyohtery"
    },
    {
        id:2,
        word:"234827309857248095702458924578934275893245"
    },
    {
        id:2,
        word:"nusoidfnuioshgusiodnghuo34532452345324543525"
    },
    {
        id:1,
        word:"nusoidfnuioshgusiodnghuoisdnfoggs.f;g,set,grtsletgghsetyohtery"
    }
]
const Chatwindow = ref(null)

const scrolltoBotton = () =>{
    Chatwindow.value.scrollTop = Chatwindow.value.scrollHeight;
}

onMounted(()=>{
    scrolltoBotton()
})


</script>


<template>
    <div class="ChatWindow" ref="Chatwindow">
        <div class="ChatMess" :style="AMess.id==2?'flex-direction: row-reverse':''" v-for="(AMess,index) in Mess" :key="AMess.id.id">
            <div class="headPhoto">
                
            </div>
            <div class="MessText">
                {{ AMess.word }}
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
    min-height: 70px;
    word-wrap: break-word;
    padding: 18px;
}

</style>