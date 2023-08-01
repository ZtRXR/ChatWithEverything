<script setup>

import BoxTitle from './ChatTitle.vue'
import MessBox from './ChatMess.vue'
import SendConsole from './SendConsole.vue'



</script>

<template>
    <div class="chatOutBox">
        <BoxTitle>
            <template>
            </template>
        </BoxTitle>
        <MessBox>
        </MessBox>
        <SendConsole />
    </div>
</template>

<style scoped>
.chatOutBox {
    width: 100%;
    min-height: 720px;
}
</style>
