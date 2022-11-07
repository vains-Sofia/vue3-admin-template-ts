<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { theme } from '@/store/modules/ThemeConfig';
import Navbar from '../../components/Navbar/Navbar.vue';
import { global } from '@/store/modules/GlobalConfig';
import Sidebar from '../../components/Sidebar/Sidebar.vue';

// 从store中获取数据
let { mainPageAlive } = storeToRefs(global());
let { openHeader, sidebarWidth, fixedHeader } = storeToRefs(theme());
</script>

<template>
    <el-container class="main-container">
        <el-aside
            style="transition: width 0.5s ease 0s"
            :width="sidebarWidth + 'px'"
        >
            <Sidebar />
        </el-aside>
        <el-container>
            <el-header v-show="fixedHeader">
                <Navbar v-if="openHeader" />
            </el-header>
            <el-main style="padding: 0">
                <div
                    style="
                        height: 100%;
                        transition: width 0.5s ease 0s;
                        overflow-x: hidden;
                        transform: translate(0, 0);
                    "
                >
                    <!--                    <el-affix v-if="ThemeConfig.fixedHeader">-->
                    <!--                        <Navbar v-if="ThemeConfig.openHeader" />-->
                    <!--                    </el-affix>-->

                    <Navbar v-show="openHeader && !fixedHeader" />

                    <div class="main-page">
                        <div
                            style="min-height: calc(98% - 20px); padding: 10px"
                        >
                            <router-view v-if="mainPageAlive" />
                        </div>
                        <div style="height: 20px"></div>
                    </div>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<style scoped>
.main-page {
    height: 87.5%;
    padding: calc(var(--el-main-padding) - 8px);
}

.main-container {
    height: 100%;
}

.el-header {
    padding: 0;
    /* 加上导航栏下边框线的高度 */
    height: calc(var(--el-header-height) + 1px);
}
</style>
