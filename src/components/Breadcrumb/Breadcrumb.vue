<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { type RouteLocationMatched, useRouter } from 'vue-router';

// data区域
const { t } = useI18n();
const { currentRoute } = useRouter();

const titleName = (i18nKey: string, val: string): string => {
    return t(i18nKey) === i18nKey ? val : t(i18nKey);
};

/**
 * 是否需要填充path
 * @param i 当前面包屑的下标
 * @param item 当前匹配的路由
 */
const hasToPath = (i: number, item: RouteLocationMatched) => {
    return i > 0 && item.path.indexOf(':') < 0;
};
</script>

<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">{{
            t('sidebar.home')
        }}</el-breadcrumb-item>
        <template v-for="(item, i) in currentRoute.matched" :key="i">
            <el-breadcrumb-item
                v-if="currentRoute.matched[0].path !== '/'"
                :to="hasToPath(i, item) ? { path: item.path } : null"
            >
                {{ titleName('sidebar.' + item.meta.title, item.meta.title) }}
            </el-breadcrumb-item>
        </template>
    </el-breadcrumb>
</template>
