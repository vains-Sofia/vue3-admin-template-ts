<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { theme } from '@/store/modules/ThemeConfig';

let { sidebarCollapse, sidebarTextColor } = storeToRefs(theme());
</script>

<template>
    <div class="logo-block">
        <div
            class="logo-png"
            :style="{ 'margin-left': sidebarCollapse ? '5px' : '10px' }"
        >
            <img alt="logo" src="./../../assets/img/logo.png" />
        </div>
        <div
            v-show="!sidebarCollapse"
            class="logo-text"
            :style="{ color: sidebarTextColor }"
        >
            vains
        </div>
    </div>
</template>

<style scoped>
.logo-png img {
    max-width: 30px;
    vertical-align: middle;
}
.logo-png {
    width: 50px;
    vertical-align: middle;
}
.logo-text {
    width: 50px;
    font-size: 25px;
    font-family: Merienda, serif;
}
.logo-block {
    width: 100%;
    line-height: 56px;
    text-align: center;
    display: inline-flex !important;
}
</style>
