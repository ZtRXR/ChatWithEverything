<script setup>
import { ref } from 'vue';
// import { router } from 'router';

const isCollapse = ref(false)
const GotoRoute = [
    '',
    '/home',
    '/test'
]
const handleOpen = (key, keyPath) => {
    // console.log(key, keyPath)
    // router.go(GotoRoute[key])
}
const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
}
</script>

<template>
    <el-row class="tac">
        <el-col>
            <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <!-- <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse"> -->
                <!-- <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <House />
                        </el-icon>
                        <span>主页</span>
                    </template>
                    <el-menu-item-group title="Group One">
                        <el-menu-item index="1-1">item one</el-menu-item>
                        <el-menu-item index="1-2">item two</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                        <el-menu-item index="1-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-sub-menu index="1-4">
                        <template #title>item four</template>
                        <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu> -->
                <RouterLink to="/home">
                    <el-menu-item index="1">
                        <el-icon>
                            <House />
                        </el-icon>
                        <span>主页</span>
                    </el-menu-item>
                </RouterLink>
                <!-- <el-menu-item index="2" disabled>
                    <el-icon>
                        <document />
                    </el-icon>
                    <span>Navigator Three</span>
                </el-menu-item> -->
                <RouterLink to="/chat">
                    <el-menu-item index="2">
                        <el-icon>
                            <ChatDotRound />
                        </el-icon>
                        <span>聊天</span>
                    </el-menu-item>
                </RouterLink>
            </el-menu>
        </el-col>
    </el-row>
</template>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 180px;
    min-height: 400px;
}

a {
    text-decoration: none;
}
</style>