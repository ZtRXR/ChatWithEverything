<script setup>
import api from '../../HttpA';
import {ref} from 'vue'

let AUser = ref({
    name: '',
    pwd: ''
})

</script>

<template>
    <div class="outCard">
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>请 登录 或者 注册</span>
                    <!-- <el-button class="button" text>Operation button</el-button> -->
                </div>
            </template>
            <el-form :model="AUser">
                <el-form-item label="账号名">
                    <el-input v-model="AUser.name" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="AUser.pwd" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-button type="primary">登录/注册</el-button>
            </el-form>
        </el-card>
    </div>
</template>
  
<style scoped>
.outCard {
    display: flex;
    justify-content: center;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.box-card {
    width: 480px;
}
</style>