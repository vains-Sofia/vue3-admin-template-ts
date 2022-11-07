<script setup lang="ts">
import SubTree from './SubTree.vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { theme } from '@/store/modules/ThemeConfig';
import { global } from '@/store/modules/GlobalConfig';

// data区域
const { t } = useI18n();
const { push } = useRouter();

// 设置props
// eslint-disable-next-line no-undef
defineProps<{ base?: string; routes: Array<RouteRecordRaw> }>();
const redirectAlias: string[] = [];

// methods区域
const routePath = (base: string, route: RouteRecordRaw): string => {
    if (route.redirect) {
        return route.redirect.toString();
    }
    if (route.alias) {
        redirectAlias.push(route.alias[0]);
        return route.alias[0];
    }
    return base === '/'
        ? base + route.path
        : base === '' || typeof base === 'undefined'
        ? route.path
        : base + '/' + route.path;
};

/**
 * 通过i18n获取名字
 * @param e 当前点击的Element的对象
 * @param route  路由对象
 */
const handleItemClick = (e: any, route: RouteRecordRaw) => {
    if (route.meta && route.meta.url) {
        global().setForeignUrl(route.meta.url as string);
        global().setForeignRouter(true);
    } else {
        global().setForeignUrl('');
        global().setForeignRouter(false);
    }
    push(e.index);
};

/**
 * 通过i18n获取名字
 * @param i18nKey i18n中的key
 * @param val 去除前缀后的key
 */
const titleName = (i18nKey: string, val: string): string => {
    return t(i18nKey) === i18nKey ? val : t(i18nKey);
};

const hasChildren = (route: RouteRecordRaw) => {
    const children = route.children?.filter((e) => !e.meta?.hidden);
    return children && children.length > 0 && route.meta && !route.meta.hidden;
};
</script>

<template>
    <template v-for="route in routes" :key="base + route.path">
        <el-sub-menu
            v-if="hasChildren(route)"
            :index="routePath(base, route)"
        >
            <template #title>
                <el-icon
                    v-if="route.meta && route.meta.icon"
                    :size="17"
                    style="height: 1.2em; width: 1.2em"
                >
                    <component :is="route.meta.icon" />
                </el-icon>
                <span>
                    {{
                        titleName(
                            'sidebar.' + route.meta.title,
                            route.meta.title
                        )
                    }}
                </span>
            </template>
            <SubTree :routes="route.children" :base="routePath(base, route)" />
        </el-sub-menu>
        <el-menu-item
            v-else-if="!route.meta.hidden"
            :index="routePath(base, route)"
            @click="handleItemClick($event, route)"
            :style="{
                '--el-menu-hover-background-color': theme().sidebarBgColor,
            }"
        >
            <el-icon
                v-if="route.meta && route.meta.icon"
                :size="17"
                style="height: 1.2em; width: 1.2em"
            >
                <component :is="route.meta.icon" />
            </el-icon>
            <template #title>
                {{ titleName('sidebar.' + route.meta.title, route.meta.title) }}
            </template>
        </el-menu-item>
    </template>
</template>

<style scoped></style>
