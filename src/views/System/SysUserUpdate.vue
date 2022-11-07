<script setup lang="ts">
import { ref, type UnwrapRef } from 'vue';
import router from '../../router';
import type { Ref } from 'vue';
import { getById, userInsert, userUpdate } from '@/api/system/UserApi';
import { ElMessage } from 'element-plus';
import type { RouteParamValue } from 'vue-router';
import type { UserRecordsTypes } from '@/types/System/user/UserRecordsTypes';
import type { ResultType } from '@/types/Global/ResultType';
const formData: Ref<UserRecordsTypes> = ref({} as UserRecordsTypes);
const formItems = ref([
    {
        labelWidth: 70,
        tag: 'el-input',
        type: 'Input',
        props: {
            size: 'large',
            disabled: false,
            readonly: false,
            clearable: true,
            suffixIcon: '',
            prefixIcon: 'UserFilled',
            placeholder: '请输入账号',
        },
        label: '账号',
        modelValue: 'username',
        selectCurrent: false,
        enableRule: true,
        rules: [
            {
                required: true,
                message: '账号不能为空',
                trigger: 'change',
                checkType: 'required',
            },
        ],
    },
    {
        labelWidth: 70,
        tag: 'el-input',
        type: 'Password',
        props: {
            size: 'large',
            disabled: false,
            readonly: false,
            clearable: false,
            suffixIcon: '',
            prefixIcon: 'Lock',
            showPassword: true,
            placeholder: '请输入密码',
        },
        modelValue: 'password',
        label: '密码',
        selectCurrent: false,
        enableRule: true,
        rules: [
            {
                required: true,
                message: '密码不能为空',
                trigger: 'change',
                checkType: 'required',
            },
        ],
    },
    {
        labelWidth: 70,
        tag: 'el-input',
        type: 'Input',
        props: {
            size: 'large',
            disabled: false,
            readonly: false,
            clearable: true,
            suffixIcon: '',
            prefixIcon: 'MagicStick',
            placeholder: '请输入昵称',
        },
        label: '昵称',
        modelValue: 'nickName',
        selectCurrent: false,
        enableRule: true,
        rules: [
            {
                required: true,
                message: '昵称不能为空',
                trigger: 'change',
                checkType: 'required',
            },
        ],
    },
    {
        labelWidth: 70,
        tag: 'el-input',
        type: 'Input',
        props: {
            size: 'large',
            disabled: false,
            readonly: false,
            clearable: true,
            suffixIcon: '',
            prefixIcon: 'Iphone',
            placeholder: '请输入手机号',
        },
        label: '手机',
        modelValue: 'phone',
        selectCurrent: false,
        enableRule: true,
        rules: [
            {
                min: 11,
                max: 11,
                message: '手机号长度必须为11位',
                trigger: 'change',
                checkType: 'length',
            },
            {
                required: true,
                message: '手机号码不能为空',
                trigger: 'change',
                checkType: 'required',
            },
        ],
    },
    {
        labelWidth: 70,
        tag: 'el-input',
        type: 'Input',
        props: {
            size: 'large',
            disabled: false,
            readonly: false,
            clearable: true,
            suffixIcon: '',
            prefixIcon: 'Link',
            placeholder: '请输入邮箱',
        },
        label: '邮箱',
        modelValue: 'email',
        selectCurrent: false,
        enableRule: true,
        rules: [
            {
                required: true,
                message: '邮箱不能为空',
                trigger: 'change',
                checkType: 'required',
            },
            {
                type: 'email',
                message: '必须是邮箱格式',
                trigger: 'change',
                checkType: 'email',
            },
        ],
    },
    {
        labelWidth: 70,
        tag: 'el-radio-group',
        type: 'Radio',
        props: { disabled: false, border: false },
        modelValue: 'sex',
        label: '性别',
        options: [
            { value: 0, label: '男' },
            { value: 1, label: '女' },
            { value: 2, label: '未知' },
        ],
        selectCurrent: false,
        enableRule: true,
    },
    {
        labelWidth: 70,
        tag: 'el-button',
        type: 'Button',
        props: {
            icon: '',
            type: 'primary',
            size: 'large',
            plain: false,
            round: false,
            circle: false,
            loading: false,
            disabled: false,
        },
        label: '提交',
        buttonType: 'submit',
        modelValue: 'Button_1649067692662_1649067704593_1649068351630',
        selectCurrent: false,
    },
]);
const formSettings = ref({
    inline: false,
    labelPosition: 'right',
    labelSuffix: '',
    statusIcon: false,
    hideRequiredAsterisk: false,
    showMessage: true,
    size: 'large',
    disabled: false,
});

let insertUser: Ref = ref(null);

// 提交事件需添加提交类型的按钮方可触发(触发方式：@click)
const submit = () => {
    if (insertUser.value !== null) {
        insertUser.value.dynamicForm.validate((validate: boolean) => {
            if (validate) {
                if (userId.value === '') {
                    userInsert(formData.value).then(() => {
                        ElMessage('添加成功.');
                        router.push('/system/user');
                    });
                } else {
                    userUpdate(formData.value).then(() => {
                        ElMessage('修改成功.');
                        router.push('/system/user');
                    });
                }
            }
        });
    }
};

// 获取url中的用户ID，并尝试根据用户id查询用户信息
const id: Ref<UnwrapRef<string | RouteParamValue[]>> = ref(
    router.currentRoute.value.params.id
);

let title: Ref<string> = ref(
    typeof id.value === 'string'
        ? id.value !== '0'
            ? '修改用户'
            : '添加用户'
        : ''
);
const userId: Ref<string> = ref('');

if (id.value !== '0' && typeof id.value === 'string') {
    userId.value = id.value;
    formItems.value.splice(1, 1);
    getById(parseInt(id.value)).then((result: ResultType<UserRecordsTypes>) => {
        formData.value = result.data;
    });
}
</script>
<template>
    <div class="add-header">
        <div class="title">{{ title }}</div>
        <el-icon
            :size="17"
            style="
                height: 1.2em;
                width: 1.2em;
                position: relative;
                left: 15px;
                cursor: pointer;
            "
            @click="$router.push('/system/user')"
        >
            <close-bold />
        </el-icon>
    </div>
    <Designer
        ref="insertUser"
        :formItems="formItems"
        :preview="true"
        :formData="formData"
        :formConfig="formSettings"
        @submit="submit"
    />
</template>
<style scoped>
.add-header {
    display: flex;
    margin-bottom: 23px;
    padding: 10px 25px 18px;
    justify-content: space-between;
    border-bottom: 1px solid #f2f3f6;
}
</style>
