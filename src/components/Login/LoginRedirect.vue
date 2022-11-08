<template>Loading...</template>
<script setup lang="ts">
import type { GetTokenParam } from '@/types/System/authorize/GetTokenParam';
import { getToken } from '@/api/system/Login';

/**
 * 获取地址栏参数
 * @param name key
 */
const getQueryString = (name: string): string => {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    let r = window.location.search.substr(1).match(reg);
    if (r !== null) {
        return decodeURIComponent(r[2]);
    }
    return '';
};

let getTokenParam: GetTokenParam = {
    grant_type: 'authorization_code',
    code: getQueryString('code'),
    redirect_uri:
        'http://127.0.0.1:3000/vains3-admin-template-ts/loginRedirect',
};

getToken(getTokenParam).then((e) => {
    window.localStorage.setItem('token', e.token_type + ' ' + e.access_token);
    window.close();
});
</script>

<style scoped></style>
