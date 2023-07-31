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
    height: 40px;
    background-color: rgb(238, 255, 247);
    text-align: center;
    border-radius: 50px;
    padding-top: 15px;
}

</style>