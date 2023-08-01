<script setup>
import {useRoute} from 'vue-router'
const route = useRoute()
// console.log(route.query.ChatName)
</script>

<template>
    <div class="ChatBoxTitle">
        <span>
            {{ route.params.ChatName }}
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