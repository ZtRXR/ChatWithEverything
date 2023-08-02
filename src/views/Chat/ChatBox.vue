<script setup>

import BoxTitle from './ChatTitle.vue'
import MessBox from './ChatMess.vue'
import SendConsole from './SendConsole.vue'
import { useRouter } from 'vue-router';
import { useUser } from '../../stores/User';
const User = useUser()
const router = useRouter()
if(!User.IsLogin){
    router.push('/login')
}
</script>

<template>
    <div class="chatOutBox">
        <BoxTitle>
            <template>
            </template>
        </BoxTitle>
        <MessBox v-if="User.IsLogin">
        </MessBox>
        <SendConsole v-if="User.IsLogin" />
    </div>
</template>

<style scoped>
.chatOutBox {
    width: 100%;
    min-height: 720px;
}
</style>
