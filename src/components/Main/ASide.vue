<script setup>
import { ref, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { onBeforeMount } from 'vue'
import { useUser } from '../../stores/User';
const User = useUser()
let route = useRoute()
let isCollapse = reactive({
    is: false
})
// const handleOpen = (key, keyPath) => {
    // console.log(key, keyPath)
    // router.go(GotoRoute[key])
// }
// const handleClose = (key, keyPath) => {
//     console.log(key, keyPath)
// }
</script>

<template>
    <el-row class="tac">
        <el-col>
            <!-- @open="handleOpen" @close="handleClose" -->
            <el-menu :default-active="route.path" :router="true" class="el-menu-vertical-demo" :collapse="isCollapse.is">
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
                <!-- <RouterLink to="/home"> -->
                <el-menu-item index="/login" v-if="!User.IsLogin">
                    <el-icon>
                        <Position />
                    </el-icon>
                    <span>登录</span>
                </el-menu-item>
                <el-menu-item index="/chat/0" v-if="User.IsLogin">
                    <el-icon>
                        <ChatDotRound />
                    </el-icon>
                    <span>聊天</span>
                </el-menu-item>
                <!-- </RouterLink> -->
                <!-- <el-menu-item index="2" disabled>
                    <el-icon>
                        <document />
                    </el-icon>
                    <span>Navigator Three</span>
                </el-menu-item> -->
                <!-- <RouterLink to="/chat"> -->
                <el-menu-item index="/chat/Zengtudor" v-if="User.IsLogin">

                    <el-icon>
                        <Document />
                    </el-icon>
                    <span>站长博客</span>
                </el-menu-item>

                <!-- </RouterLink> -->
            </el-menu>
        </el-col>
    </el-row>
    <el-switch v-model="isCollapse.is" />
</template>

<style scoped>
/* .el-col{
    width: 10px;
} 
.el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: 400px;
} */

a {
    text-decoration: none;
}
</style>