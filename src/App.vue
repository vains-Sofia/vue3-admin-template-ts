<template>
    <el-config-provider :locale="global().locale">
        <router-view />
    </el-config-provider>
</template>

<script setup lang="ts">
// 从store中导入数据
import { global } from './store/modules/GlobalConfig';
</script>
