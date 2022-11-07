<script setup lang="ts">
import { computed, ref, type ToRefs } from 'vue';
import { useI18n } from 'vue-i18n';
import type { ComputedRef, Ref } from 'vue';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb.vue';
import type { ThemeConfigTypes } from '@/types/StoreTypes';
import { theme } from '@/store/modules/ThemeConfig';
import { global } from '@/store/modules/GlobalConfig';
import { currentUser } from '@/api/system/UserApi';
import { type StoreState, storeToRefs } from 'pinia';

// data区域
const themeStore: ToRefs<StoreState<ThemeConfigTypes>> = storeToRefs(theme());

const { t } = useI18n();
const collapseContent: ComputedRef<string> = computed(() =>
    themeStore.sidebarCollapse ? t('navBar.expand') : t('navBar.fold')
);

// methods区域

let userNickname: Ref<string> = ref<string>('登录');

const token: string = window.localStorage.getItem(`token`) as string;
if (token) {
    currentUser()
        .then((e) => {
            global().refreshMainPage();
            userNickname.value = e.userNickName;
        })
        .catch(() => {
            userNickname.value = '登录';
            window.localStorage.setItem(`token`, '');
        });
}
/**
 * 去登录页
 */
const toLogin = (): void => {
    let token: string = window.localStorage.getItem(`token`) as string;
    if (token) {
        return;
    }
    const interval = setInterval(() => {
        token = window.localStorage.getItem(`token`) as string;
        if (token) {
            clearInterval(interval);
            currentUser().then((e) => {
                global().refreshMainPage();
                userNickname.value = e.userNickName;
            });
        }
    }, 100);
    // http://kwqqr48rgo.cdhttp.cn/oauth2/authorize?response_type=code&client_id=admin&redirect_uri=http://vains-sofia.gitee.io/vains3-admin-template-ts/loginRedirect
    window.open(
        'http://kwqqr48rgo.cdhttp.cn/oauth2/authorize?response_type=code&client_id=admin&redirect_uri=http://192.168.4.88:3000/vains3-admin-template-ts/loginRedirect',
        '_newtab'
    );
};
</script>

<template>
    <div class="navbar-container">
        <div class="container-item">
            <!-- 展开收起 -->
            <el-tooltip
                class="navbar-item"
                effect="dark"
                :content="collapseContent"
                placement="bottom"
            >
                <el-icon
                    @click="theme().toggleSidebarCollapse"
                    :size="23"
                    class="navbar-item"
                >
                    <component
                        :is="theme().sidebarCollapse ? 'expand' : 'fold'"
                    />
                </el-icon>
            </el-tooltip>
            <div class="navbar-tool-item" @click="global().refreshMainPage">
                <!-- 面包屑 -->
                <Breadcrumb />
            </div>
            <!-- 刷新 -->
            <el-tooltip
                class="navbar-item"
                effect="dark"
                :content="t('navBar.refresh')"
                placement="bottom"
            >
                <el-icon
                    @click="global().refreshMainPage"
                    :size="20"
                    class="navbar-item"
                >
                    <refresh />
                </el-icon>
            </el-tooltip>
        </div>
        <div class="container-item" style="margin-right: 30px" @click="toLogin">
            {{ userNickname }}
        </div>
    </div>
</template>

<style scoped>
.navbar-item {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.navbar-tool-item {
    height: 60px;
    display: flex;
    padding: 0 10px;
    align-items: center;
    justify-content: center;
}
.container-item {
    display: flex;
    align-items: center;
}
.navbar-item:hover {
    background-color: var(--el-color-primary-light-9);
}
.navbar-container {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    transition: width 0.5s ease 0s;
    justify-content: space-between;
    height: var(--el-header-height);
    /*padding: 0 var(--el-main-padding);*/
    border-bottom: 1px solid var(--el-border-color);
}
</style>
