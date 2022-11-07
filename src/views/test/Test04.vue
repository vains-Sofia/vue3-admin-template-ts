<script setup lang="ts">
import { ref } from 'vue';
const formData = ref({
    Input_1637029608507: '12312',
    Checkbox_1640334266072: [2],
    Password_1640334267543: '123123',
});
const formItems = ref([
    {
        labelWidth: 100,
        tag: 'el-input',
        type: 'Input',
        props: {
            size: 'medium',
            disabled: false,
            readonly: false,
            clearable: false,
            suffixIcon: '',
            prefixIcon: '',
            placeholder: '输入框',
        },
        label: '输入框',
        modelValue: 'Input_1637029608507',
        selectCurrent: false,
    },
    {
        labelWidth: 100,
        tag: 'el-checkbox-group',
        type: 'Checkbox',
        props: { disabled: false, min: 0, max: 5, border: false },
        label: '复选框',
        modelValue: 'Checkbox_1640334266072',
        options: [
            { value: 1, label: '选项一' },
            { value: 2, label: '选项二' },
        ],
        selectCurrent: false,
    },
    {
        labelWidth: 100,
        tag: 'el-input',
        type: 'Password',
        props: {
            size: 'medium',
            disabled: false,
            readonly: false,
            clearable: false,
            suffixIcon: '',
            prefixIcon: '',
            showPassword: true,
            placeholder: '密码框',
        },
        modelValue: 'Password_1640334267543',
        label: '密码框',
        selectCurrent: false,
    },
    {
        labelWidth: 100,
        tag: 'el-button',
        type: 'Button',
        props: {
            icon: '',
            type: '',
            size: 'medium',
            plain: false,
            round: false,
            circle: false,
            loading: false,
            disabled: false,
        },
        label: '按钮',
        buttonType: 'submit',
        modelValue: 'Button_1640334268671',
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
    size: 'medium',
    disabled: false,
});
// 提交事件需添加提交类型的按钮方可触发(触发方式：@click)
const submit = () => {
    console.log(formData.value);
};
</script>
<template>
    <Designer
        :formItems="formItems"
        :preview="true"
        :formData="formData"
        :formConfig="formSettings"
        @submit="submit"
    />
</template>
