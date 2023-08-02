<template>
    <div class="outCard">
        <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>请 登录 或者 注册</span>
                <!-- <el-button class="button" text>Operation button</el-button> -->
            </div>
        </template>
    </el-card>
    </div>
</template>
  
<style scoped>
.outCard{
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