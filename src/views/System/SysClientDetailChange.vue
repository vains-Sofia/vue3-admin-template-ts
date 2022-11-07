<template>
    <div class="header-text">端点信息</div>
    <div class="client-info">
        <el-form
            v-if="openIdConfiguration.issuer"
            class="demo-form-inline"
            label-position="right"
            label-width="auto"
        >
            <el-form-item label="发行地址">
                {{ openIdConfiguration.issuer }}
            </el-form-item>
            <el-form-item label="认证端点">
                <el-link
                    type="primary"
                    target="_blank"
                    :underline="false"
                    :href="openIdConfiguration.authorization_endpoint"
                >
                    {{ openIdConfiguration.authorization_endpoint }}
                </el-link>
            </el-form-item>
            <el-form-item label="当前用户">
                <el-link
                    type="primary"
                    target="_blank"
                    :underline="false"
                    :href="openIdConfiguration.userinfo_endpoint"
                >
                    {{ openIdConfiguration.userinfo_endpoint }}
                </el-link>
            </el-form-item>
            <el-form-item label="jwks端点">
                <el-link
                    target="_blank"
                    :underline="false"
                    :href="openIdConfiguration.jwks_uri"
                    >{{ openIdConfiguration.jwks_uri }}
                </el-link>
            </el-form-item>
        </el-form>
        <el-form
            v-if="openIdConfiguration.revocation_endpoint"
            class="demo-form-inline"
            label-position="right"
            label-width="auto"
            style="margin-left: 92px"
        >
            <el-form-item label="撤销Token端点">
                <el-link
                    type="warning"
                    target="_blank"
                    :underline="false"
                    :href="openIdConfiguration.revocation_endpoint"
                    >{{ openIdConfiguration.revocation_endpoint }}
                </el-link>
            </el-form-item>
            <el-form-item label="Token自省端点">
                <el-link
                    type="primary"
                    target="_blank"
                    :underline="false"
                    :href="openIdConfiguration.introspection_endpoint"
                    >{{ openIdConfiguration.introspection_endpoint }}
                </el-link>
            </el-form-item>
            <el-form-item label="获取Token端点">
                <el-link
                    type="primary"
                    target="_blank"
                    :underline="false"
                    :href="openIdConfiguration.token_endpoint"
                    >{{ openIdConfiguration.token_endpoint }}
                </el-link>
            </el-form-item>
            <el-form-item label="Token加密方式">
                {{
                    openIdConfiguration.id_token_signing_alg_values_supported
                        ? openIdConfiguration.id_token_signing_alg_values_supported.join(
                              ','
                          )
                        : ''
                }}
            </el-form-item>
        </el-form>
    </div>
    <el-form
        :rules="rules"
        ref="authInfo"
        scroll-to-error
        class="client-form"
        label-position="top"
        :model="clientDetail"
        v-if="clientDetail.clientSettings"
    >
        <div class="client-info">
            <div>
                <div class="header-text">基本信息</div>
                <el-form-item
                    label="应用名称"
                    prop="clientName"
                    class="basic-info"
                >
                    <el-input
                        v-model="clientDetail.clientName"
                        placeholder="应用名称"
                    />
                </el-form-item>
                <el-form-item
                    label="AppId"
                    style="display: flex"
                    class="basic-info"
                >
                    {{ clientDetail.clientId }}
                    &nbsp;&nbsp;
                    <el-tooltip
                        class="box-item"
                        effect="dark"
                        content="复制到剪切板"
                        placement="top"
                    >
                        <el-icon
                            class="hand-mouse"
                            @click="copyToClipboard(clientDetail.clientId)"
                            ><CopyDocument
                        /></el-icon>
                    </el-tooltip>
                </el-form-item>
                <el-form-item label="AppSecret" class="basic-info">
                    <el-input
                        disabled
                        v-model="clientDetail.clientSecret"
                        placeholder="AppSecret"
                    />&nbsp;&nbsp;
                    <el-tooltip
                        class="box-item"
                        effect="dark"
                        :content="`重新生成App Secret`"
                        placement="top"
                    >
                        <el-icon class="hand-mouse" @click="refreshAppSecret"
                            ><Refresh
                        /></el-icon> </el-tooltip
                    >&nbsp;&nbsp;
                    <el-tooltip
                        class="box-item"
                        effect="dark"
                        content="复制到剪切板"
                        placement="top"
                    >
                        <el-icon
                            class="hand-mouse"
                            @click="copyToClipboard(clientDetail.clientSecret)"
                            ><CopyDocument
                        /></el-icon>
                    </el-tooltip>
                </el-form-item>
                <el-form-item label="签发时间" class="basic-info">
                    {{ clientDetail.clientIdIssuedAt }}
                </el-form-item>
            </div>
            <div style="margin-left: 62px">
                <div class="header-text">应用Logo</div>
                <el-upload
                    class="avatar-uploader"
                    action="http://k7fsqkhtbx.cdhttp.cn/system/file/upload"
                    :headers="headers"
                    :on-success="uploadSuccess"
                    :show-file-list="false"
                >
                    <el-image
                        v-if="clientDetail.clientProfile"
                        :src="clientDetail.clientProfile"
                        class="avatar"
                        fit="cover"
                    />
                    <el-icon v-else class="avatar-uploader-icon">
                        <Plus />
                    </el-icon>
                </el-upload>
            </div>
        </div>
        <div class="header-text">认证相关设置</div>
        <el-form-item
            label="回调地址"
            class="flex-item-wrap custom-width"
            prop="redirectUris"
        >
            <div
                v-for="(redirectUri, i) in clientDetail.redirectUris"
                :key="i"
                style="width: 100%"
            >
                <el-input
                    v-model="clientDetail.redirectUris[i]"
                    placeholder="回调地址"
                />
                <el-icon
                    @click="handleDeleteRedirect(redirectUri, i)"
                    class="icon-item"
                >
                    <Delete />
                </el-icon>
            </div>
        </el-form-item>
        <el-link
            icon="CirclePlus"
            type="primary"
            :underline="false"
            style="margin: 0 0 10px 3px"
            @click="addRedirectUri"
        >
            添加回调地址
        </el-link>
        <el-form-item label="JwkSetUrl" class="custom-width">
            <el-input
                v-model="clientDetail.clientSettings.jwkSetUrl"
                placeholder="JwkSetUrl"
            />
        </el-form-item>
        <el-form-item label="授权模式" prop="authorizationGrantTypes">
            <el-checkbox-group v-model="clientDetail.authorizationGrantTypes">
                <el-checkbox
                    v-for="(
                        grantType, i
                    ) in openIdConfiguration.grant_types_supported"
                    :label="grantType"
                    :key="i"
                />
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="应用认证方式" prop="clientAuthenticationMethods">
            <el-checkbox-group
                v-model="clientDetail.clientAuthenticationMethods"
            >
                <el-checkbox
                    v-for="(
                        method, i
                    ) in openIdConfiguration.token_endpoint_auth_methods_supported"
                    :label="method"
                    :key="i"
                />
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="应用设置" prop="requireAuthorizationConsent">
            <el-checkbox
                v-model="
                    clientDetail.clientSettings.requireAuthorizationConsent
                "
            >
                授权确认
            </el-checkbox>
            <el-checkbox
                v-model="clientDetail.tokenSettings.reuseRefreshTokens"
            >
                重用Refresh Token
            </el-checkbox>
            <el-checkbox v-model="clientDetail.clientSettings.requireProofKey">
                仅支持PKCE
            </el-checkbox>
        </el-form-item>
        <div class="el-input">
            <el-form-item
                label="Token存活时间"
                prop="tokenSettings.accessTokenTimeToLive"
            >
                <el-input
                    v-model="clientDetail.tokenSettings.accessTokenTimeToLive"
                    type="number"
                    placeholder="Token存活时间"
                    class="input-with-select"
                >
                    <template #append>
                        <el-select
                            v-model="
                                clientDetail.tokenSettings
                                    .accessTokenTimeToLiveUnit
                            "
                            :placeholder="
                                handleUnitChange(
                                    clientDetail.tokenSettings
                                        .accessTokenTimeToLiveUnit
                                )
                            "
                        >
                            <el-option label="秒" value="SECONDS" />
                            <el-option label="分" value="MINUTES" />
                            <el-option label="时" value="HOURS" />
                            <el-option label="天" value="DAYS" />
                        </el-select>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item
                label="Refresh Token存活时间"
                prop="tokenSettings.refreshTokenTimeToLive"
                style="margin-left: 55px"
            >
                <el-input
                    placeholder="RefreshToken存活时间"
                    class="input-with-select"
                    type="number"
                    v-model="clientDetail.tokenSettings.refreshTokenTimeToLive"
                >
                    <template #append>
                        <el-select
                            v-model="
                                clientDetail.tokenSettings
                                    .refreshTokenTimeToLiveUnit
                            "
                            :placeholder="
                                handleUnitChange(
                                    clientDetail.tokenSettings
                                        .refreshTokenTimeToLiveUnit
                                )
                            "
                        >
                            <el-option label="秒" value="SECONDS" />
                            <el-option label="分" value="MINUTES" />
                            <el-option label="时" value="HOURS" />
                            <el-option label="天" value="DAYS" />
                        </el-select>
                    </template>
                </el-input>
            </el-form-item>
        </div>
        <el-form-item>
            <el-button
                type="primary"
                @click="handleSubmit"
                :loading="submitLoad"
                style="width: 150px"
                >保存</el-button
            >
            <el-button type="info" plain @click="formReset">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import router from '../../router';
import type { ComputedRef, Ref } from 'vue';
import { computed, ref, UnwrapRef } from 'vue';
import type { RouteParamValue } from 'vue-router';
import {
    getById,
    getOpenidConfiguration,
    updateClient,
} from '@/api/system/ClientApi';
import { copyToClipboard } from '@/util/Utils';
import type { ResultType } from '@/types/Global/ResultType';
import type { FindClientResponse } from '@/types/System/authorize/FindClientResponse';
import {
    ElMessageBox,
    ElNotification,
    type FormInstance,
    type FormRules,
    type UploadFile,
    type UploadFiles,
} from 'element-plus';
import type { OpenidConfiguration } from '@/types/System/authorize/OpenidConfiguration';
import type { UpdateClientRequest } from '@/types/System/authorize/UpdateClientRequest';
import { nextUuId } from '@/util/IdWorker';
// 获取url中的客户端ID，并尝试根据客户端id查询用户信息
const id: Ref<UnwrapRef<string | RouteParamValue[]>> = ref(
    router.currentRoute.value.params.id
);
// 当前客户端
const clientDetail: Ref<FindClientResponse> = ref({} as FindClientResponse);
// 端点信息
const openIdConfiguration: Ref<OpenidConfiguration> = ref(
    {} as OpenidConfiguration
);

const headers: ComputedRef<Headers | null> = computed((): Headers | null => {
    const token: string = window.localStorage.getItem(`token`) as string;
    return token ? new Headers({ Authorization: token }) : null;
});

const loadClientDetail = () => {
    // 根据客户端id获取当前客户端信息
    if (typeof id.value === 'string') {
        getById(id.value).then((result: ResultType<FindClientResponse>) => {
            clientDetail.value = result.data;
        });
    }
};

const refreshAppSecret = () => {
    clientDetail.value.clientSecret = String(nextUuId());
};

loadClientDetail();

// 获取端点信息
getOpenidConfiguration().then((e: OpenidConfiguration) => {
    openIdConfiguration.value = e;
});

/**
 * 删除某个回调地址
 * @param redirectUri 回调地址
 * @param index 下标
 */
const handleDeleteRedirect = (redirectUri: string, index: number): void => {
    if (redirectUri) {
        ElMessageBox.confirm(
            `确定删除回调地址：${redirectUri}吗？`,
            'Warning',
            {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            }
        ).then(() => {
            clientDetail.value.redirectUris.splice(index, 1);
        });
    } else {
        clientDetail.value.redirectUris.splice(index, 1);
    }
};

// 校验回调地址
const redirectUrisValidator = (
    rule: unknown,
    value: Array<string>,
    callback: any
) => {
    if (!value) {
        callback(new Error('回调地址不能为空'));
    }
    for (const redirectUri of value) {
        if (!redirectUri) {
            callback(new Error('回调地址任意一项不能为空'));
            return;
        }
    }
    callback();
};

// 表单校验规则
const rules = ref<FormRules>({
    clientName: [
        { required: true, message: '应用名称不能为空', trigger: 'blur' },
    ],
    redirectUris: [{ validator: redirectUrisValidator, trigger: 'blur' }],
    authorizationGrantTypes: [
        {
            type: 'array',
            required: true,
            message: '授权模式不能为空',
            trigger: 'blur',
        },
    ],
    clientAuthenticationMethods: [
        {
            type: 'array',
            required: true,
            message: '应用认证方式不能为空',
            trigger: 'blur',
        },
    ],
    'tokenSettings.accessTokenTimeToLive': [
        {
            required: true,
            message: '必须填写Token存活时间',
            trigger: 'blur',
        },
    ],
    'tokenSettings.refreshTokenTimeToLive': [
        {
            required: true,
            message: '必须填写RefreshToken存活时间',
            trigger: 'blur',
        },
    ],
});

// 认证信息
const authInfo = ref<FormInstance>();

// 按钮是否加载
const submitLoad = ref<boolean>(false);
/**
 * 提交表单
 */
const handleSubmit = () => {
    authInfo.value?.validate((isValid, invalidFields) => {
        if (isValid) {
            submitLoad.value = true;
            const client: UpdateClientRequest = JSON.parse(
                JSON.stringify(clientDetail.value)
            );
            updateClient(client)
                .then((result) => {
                    submitLoad.value = false;
                    if (result.success) {
                        ElNotification({
                            title: '提示',
                            message: '应用修改成功.',
                            type: 'success',
                        });
                        // router.push(`/system/client`);
                    } else {
                        ElNotification({
                            title: '提示',
                            message: result.message || '应用修改失败.',
                            type: 'error',
                        });
                    }
                })
                .catch(() => {
                    submitLoad.value = false;
                });
        }
    });
};

// 时间单位切换
const handleUnitChange = (val: string): string => {
    switch (val) {
        case 'SECONDS':
            return '秒';
        case 'MINUTES':
            return '分';
        case 'HOURS':
            return '时';
        case 'DAYS':
            return '天';
    }
    return '秒';
};

/**
 * 重置表单
 */
const formReset = () => {
    authInfo.value?.resetFields();
    loadClientDetail();
};

/**
 * 添加回调地址
 */
const addRedirectUri = () => {
    clientDetail.value.redirectUris.push('');
};

const uploadSuccess = (
    response: any,
    uploadFile: UploadFile,
    uploadFiles: UploadFiles
) => {
    clientDetail.value.clientProfile = `http://k7fsqkhtbx.cdhttp.cn/system${response.data[0]}`;
};
</script>

<style scoped>
.avatar-uploader {
    padding-bottom: 30px;
}

.avatar-uploader .avatar {
    width: 178px;
    height: 178px;
    display: block;
    cursor: pointer;
}

.header-text {
    color: black;
    font-size: 17px !important;
    padding-bottom: var(--el-menu-base-level-padding);
}

.client-info :deep(.el-input) {
    width: 300px;
}

:deep(.el-form-item__label) {
    color: black;
}

.client-info :deep(*) {
    font-size: 15px;
}

.flex-item-wrap :deep(.el-form-item__content) {
    flex-direction: column;
    align-content: flex-start;
}

.client-form .custom-width :deep(.el-form-item__content .el-input) {
    margin: 3px;
    width: 640px;
}

.icon-item {
    color: darkred;
    cursor: pointer;
}

.client-info {
    display: flex;
    margin-bottom: 20px;
}

:deep(.el-input-group__append) {
    width: 50px;
    background-color: transparent;
}

.input-with-select {
    width: 280px;
}

.basic-info {
    display: flex;
}
.basic-info :deep(.el-form-item__label) {
    top: 5px;
    width: 100px;
    position: relative;
    justify-content: flex-end;
    display: inline-flex !important;
}
</style>

<style>
.avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}
</style>
