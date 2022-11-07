<template>
    <el-calendar />
    <el-button plain @click="global().changeLocaleLanguage('en')"
        >英文</el-button
    >
    <el-button plain @click="global().changeLocaleLanguage('zhCn')"
        >中文</el-button
    ><br />
    <el-color-picker /> <br />
    <div>
        {{ new Date().getTime() }}
    </div>
    <el-button plain @click="global().refreshMainPage">刷新</el-button><br />
</template>

<script setup lang="ts">
import { global } from '@/store/modules/GlobalConfig';
</script>

<style scoped></style>
