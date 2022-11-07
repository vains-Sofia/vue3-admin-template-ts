<template>
    <div>
        测试二
        <router-link to="/">test1</router-link><br />
        <el-icon> <delete /> </el-icon><br />
        {{ message }}<br />
        {{ computed1 }}<br />
        {{ computed2 }}<br />
        <el-button plain @click="theme().toggleFixedHeader"
            >改变fixedHeader</el-button
        >{{ theme().fixedHeader }}<br />
        <el-button plain @click="global().toggleKeepAlive"
            >改变keepAlive</el-button
        >{{ global().keepAlive }}<br />
        {{ t('sidebar.test01') }}<br />
        <el-button plain @click="global().changeLocaleLanguage('en')"
            >英文</el-button
        >
        <el-button plain @click="global().changeLocaleLanguage('zhCn')"
            >中文</el-button
        ><br />
        测试二
        <router-link to="/">test1</router-link><br />
        <el-icon> <delete /> </el-icon><br />
        {{ message }}<br />
        {{ computed1 }}<br />
        {{ computed2 }}<br />
        <el-button plain @click="global().toggleKeepAlive"
            >改变keepAlive</el-button
        >{{ global().keepAlive }}<br />
        {{ t('sidebar.test01') }}<br />
        <el-button plain @click="global().changeLocaleLanguage('en')"
            >英文</el-button
        >
        <el-button plain @click="global().changeLocaleLanguage('zhCn')"
            >中文</el-button
        ><br />
        测试二
        <router-link to="/">test1</router-link><br />
        <el-icon> <delete /> </el-icon><br />
        {{ message }}<br />
        {{ computed1 }}<br />
        {{ computed2 }}<br />
        <el-button plain @click="global().toggleKeepAlive"
            >改变keepAlive</el-button
        >{{ global().keepAlive }}<br />
        {{ t('sidebar.test01') }}<br />
        <el-button plain @click="global().changeLocaleLanguage('en')"
            >英文</el-button
        >
        <el-button plain @click="global().changeLocaleLanguage('zhCn')"
            >中文</el-button
        ><br />
        测试二
        <router-link to="/">test1</router-link><br />
        <el-icon> <delete /> </el-icon><br />
        {{ message }}<br />
        {{ computed1 }}<br />
        {{ computed2 }}<br />
        <el-button plain @click="global().toggleKeepAlive"
            >改变keepAlive</el-button
        >{{ global().keepAlive }}<br />
        {{ t('sidebar.test01') }}<br />
        <el-button plain @click="global().changeLocaleLanguage('en')"
            >英文</el-button
        >
        <el-button plain @click="global().changeLocaleLanguage('zhCn')"
            >中文</el-button
        ><br />
        测试二
        <router-link to="/">test1</router-link><br />
        <el-icon> <delete /> </el-icon><br />
        {{ message }}<br />
        {{ computed1 }}<br />
        {{ computed2 }}<br />
        <el-button plain @click="global().toggleKeepAlive"
            >改变keepAlive</el-button
        >{{ global().keepAlive }}<br />
        {{ t('sidebar.test01') }}<br />
        <el-button plain @click="global().changeLocaleLanguage('en')"
            >英文</el-button
        >
        <el-button plain @click="global().changeLocaleLanguage('zhCn')"
            >中文</el-button
        ><br />
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { type StoreState, storeToRefs } from 'pinia';
import type { ComputedRef, Ref } from 'vue';
import { ref, computed, onMounted, type ToRefs } from 'vue';
import { theme } from '@/store/modules/ThemeConfig';
import { global } from '@/store/modules/GlobalConfig';
import type { GlobalConfigTypes, ThemeConfigTypes } from '@/types/StoreTypes';

let globalStore: ToRefs<StoreState<GlobalConfigTypes>> = storeToRefs(global());
let message: Ref<string> = ref('字符串');
const themeStore: ToRefs<StoreState<ThemeConfigTypes>> = storeToRefs(theme());

let { t } = useI18n();

let computed1: ComputedRef<string> = computed(() => '值1：' + message.value);
let computed2: ComputedRef<string> = computed(() => '值2：' + message.value);
onMounted(() => {
    console.log('页面加载完成');
});
</script>

<style scoped></style>
