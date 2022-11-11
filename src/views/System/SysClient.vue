<template>
    <el-row v-if="currentPage" :gutter="20" class="client_items">
        <el-col
            :xs="12"
            :sm="8"
            :md="6"
            :lg="4"
            :xl="3"
            v-for="(client, i) in clients.records"
            class="client_item"
            :key="i"
        >
            <el-image
                class="image"
                :src="client.clientProfile"
                fit="cover"
                @click="clickItemHandler(client)"
            />
            <div style="padding: 14px">
                <span>{{ client.clientName }}</span>
                <!--                <span style="float: right" class="time">-->
                <!--                    {{ client.clientIdIssuedAt }}-->
                <!--                </span>-->
                <div class="bottom">
                    <time class="time">
                        {{ client.clientIdIssuedAt }}
                    </time>
                    <el-popconfirm
                        confirm-button-text="确定"
                        cancel-button-text="取消"
                        icon="InfoFilled"
                        icon-color="#626AEF"
                        width="220px"
                        :title="`是否确定注销客户端：${client.clientName}?`"
                        @confirm="handleDelete(client.id)"
                    >
                        <template #reference>
                            <el-button text class="button"> 注销 </el-button>
                        </template>
                    </el-popconfirm>
                </div>
            </div>
        </el-col>
        <el-col
            :xs="12"
            :sm="8"
            :md="6"
            :lg="4"
            :xl="3"
            class="icon-item"
            @click="toRegister"
        >
            <el-icon class="avatar-uploader-icon">
                <Plus />
            </el-icon>
        </el-col>
    </el-row>
    <router-view v-else />
</template>

<script setup lang="ts">
import { findClientList, removeById } from '@/api/system/ClientApi';
import type { FindClientParam } from '@/types/System/authorize/FindClientParam';
import type { FindClientResponse } from '@/types/System/authorize/FindClientResponse';
import { ref, watch } from 'vue';
import type { Ref } from 'vue';
import type { PageTypes } from '@/types/Global/PageTypes';
import router from '../../router';

const currentPage = ref<boolean>(true);

let clients: Ref<PageTypes<FindClientResponse>> = ref(
    {} as PageTypes<FindClientResponse>
);
let param: FindClientParam = {
    size: 10,
    current: 1,
};

/**
 * 获取客户端列表
 */
findClientList(param).then((e) => {
    clients.value = e.data;
});

currentPage.value =
    router.currentRoute.value.fullPath.indexOf('clientDetail') < 0 &&
    router.currentRoute.value.fullPath.indexOf('clientRegister') < 0;
watch(router.currentRoute, () => {
    currentPage.value =
        router.currentRoute.value.fullPath.indexOf('clientDetail') < 0 &&
        router.currentRoute.value.fullPath.indexOf('clientRegister') < 0;
});

/**
 * 点击客户端图片时跳转至详情/修改页
 * @param client 客户端
 */
const clickItemHandler = (client: FindClientResponse): void => {
    // console.log(client);
    router.push(`/system/client/clientDetail/${client.id}`);
};

/**
 * 跳转至注册页面
 */
const toRegister = (): void => {
    // console.log(client);
    router.push(`/system/client/clientRegister`);
};

/**
 * 注销客户端
 * @param id 客户端id
 */
const handleDelete = (id: string) => {
    removeById(id).then(() => {
        findClientList(param).then((e) => {
            clients.value = e.data;
        });
    });
};
</script>

<style scoped>
.time {
    font-size: 12px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button {
    padding: 0;
    min-height: auto;
}

.image {
    width: 100%;
    height: 76.18%;
    display: block;
}

.icon-item {
    padding-top: var(--el-menu-base-level-padding);
}

.client_items {
    top: -15px;
    position: relative;
}

.client_item {
    padding-top: var(--el-menu-base-level-padding);
    margin-bottom: var(--el-menu-base-level-padding);
}

.client_item:hover,
.avatar-uploader-icon:hover {
    box-shadow: var(--el-box-shadow);
}

.avatar-uploader-icon {
    width: 100% !important;
    height: 72% !important;
    min-height: 230px !important;
    color: #8c939d;
    font-size: 28px;
    text-align: center;
    border: solid 1px var(--el-border-color);
}

@media only screen and (min-width: 1500px) {
    /* 屏幕大于1500px时显示5列 */
    .client_item {
        max-width: 20% !important;
    }
    .icon-item {
        max-width: 20% !important;
    }
}

@media only screen and (max-width: 500px) {
    /* 屏幕大于1500px时显示5列 */
    .client_item {
        max-width: 100% !important;
    }
    .icon-item {
        min-width: 100% !important;
        height: 380px;
    }

    .client_items {
        display: block !important;
    }
}
</style>
