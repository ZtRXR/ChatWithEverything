<script setup>

import BoxTitle from './ChatTitle.vue'
import MessBox from './ChatMess.vue'

</script>

<template>
    <div class="chatOutBox">
        <BoxTitle>
            <template #ChatName>
                TestUserName
            </template>
        </BoxTitle>
        <MessBox>
            
        </MessBox>
    </div>
</template>

<style scoped>
.chatOutBox {
    width: 100%;
    min-height: 720px;
}
</style>