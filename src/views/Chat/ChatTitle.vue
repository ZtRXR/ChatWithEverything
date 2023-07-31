<script setup>



</script>

<template>
    <div class="ChatBoxTitle">
        <span>
            <slot name='ChatName'>
                无名用户
            </slot>
        </span>
    </div>
</template>

<style scoped>
.ChatBoxTitle {
    width: 100%;
    height: 30px;
    background-color: rgb(232, 232, 232);
    text-align: center;
    border-radius: 50px;
    padding-top: 5px;
}

.ChatBoxTitle span {
}
</style>