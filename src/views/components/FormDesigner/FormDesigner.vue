<template>
    <DesignerContainer
        ref="container"
        :formData="formData"
        :formItems="formItems"
        @submit="onSubmit"
    />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const container = ref(null);

onMounted(() => {
    // 调用方法获取表单实例对象
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log(container.value.getDynamicForm());
});

// 提交事件
const onSubmit = () => {
    console.log(formData.value);
};

// 表单数据
const formData = ref({
    Input_1637029608507: '',
});

// 表单列表
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
]);
</script>

<style>
html,
body {
    margin: 0;
    padding: 0;
}
</style>
