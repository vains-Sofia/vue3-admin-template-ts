<script setup lang="ts">
import Logo from './Logo.vue';
import SubTree from './SubTree.vue';
import { useRoute } from 'vue-router';
import { computed, onBeforeMount } from 'vue';
import type { ComputedRef } from 'vue';
import { routes } from '@/router/AsyncRouters';
import { theme } from '@/store/modules/ThemeConfig';

// data

// 当前路由路径
const path: ComputedRef<string> = computed(() => useRoute().fullPath);

// methods
/**
 * 将只有一个子页面的转为父导航
 */
const oneToParent = (): void => {
    routes.forEach((e) => {
        if (e.children) {
            if (e.children.length === 1) {
                let child = e.children[0];
                if (e.alias) {
                    e.alias = e.alias + child.path;
                } else if (child.alias) {
                    e.path = e.path + child.alias;
                } else if (e.alias && child.alias) {
                    e.alias = e.alias + child.alias;
                } else {
                    if (child.path.startsWith('/')) {
                        e.path = e.path + child.path;
                    } else {
                        e.path = e.path + '/' + child.path;
                    }
                }
                e.meta = child.meta;
                delete e.children;
            }
        }
    });
};

// 生命周期
onBeforeMount(() => {
    oneToParent();
});
</script>

<template>
    <el-scrollbar
        :wrap-style="`background-color: ${theme().sidebarBgColor}`"
        view-style="height: 100%;"
    >
        <Logo />
        <el-menu
            unique-opened
            :default-active="path"
            :collapse="theme().sidebarCollapse"
            :text-color="theme().sidebarTextColor"
            :background-color="theme().sidebarBgColor"
            :active-text-color="theme().sidebarActiveTextColor"
            :style="{
                '--el-menu-hover-background-color': theme().sidebarBgColor,
            }"
        >
            <SubTree v-if="routes" :routes="routes" />
        </el-menu>
    </el-scrollbar>
</template>

<style>
.el-icon {
    margin-right: 5px;
}
.el-menu {
    border-right: 1px;
}
.el-sub-menu__title:hover {
    color: var(--el-menu-active-color) !important;
}
.el-menu-item:hover {
    color: var(--el-menu-active-color) !important;
}
</style>
