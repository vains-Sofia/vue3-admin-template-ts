<template>
    <iframe
        v-if="framePageAlive"
        :src="foreignUrl"
        class="main-frame"
        @load="load"
        v-loading="loading"
    ></iframe>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import type { Ref } from 'vue';
import { onBeforeMount, onBeforeUnmount, ref } from 'vue';
import { global } from '@/store/modules/GlobalConfig';

let loading: Ref<boolean> = ref(false);
onBeforeMount(() => {
    // 挂载之前打开loading
    loading.value = true;
    setTimeout(() => {
        // 10s之后自动停止加载动画
        loading.value = false;
    }, 10000);
});

onBeforeUnmount(() => {
    // 离开之前刷新iframe
    global().refreshFramePage();
});

// 获取store中的数据
let { framePageAlive, foreignUrl } = storeToRefs(global());

// 加载完毕
const load = (): void => {
    loading.value = false;
};
</script>

<style scoped>
.main-frame {
    width: 100%;
    border: none;
    height: 84.7vh;
}
</style>
