<script setup>
import {useRoute} from 'vue-router'
import { useMessage } from '../../stores/ChatMessage';
const Mess = useMessage()
const route = useRoute()
// console.log(route.query.ChatName)
</script>

<template>
    <div class="ChatBoxTitle">
        <span>
            {{ Mess.GetName(parseInt(route.params.ChatName)) }} [{{ route.params.ChatName }}]
        </span>
    </div>
</template>

<style scoped>
.ChatBoxTitle {
    width: 100%;
    height: 40px;
    background-color: rgb(238, 255, 247);
    text-align: center;
    border-radius: 50px;
    padding-top: 15px;
}

</style>