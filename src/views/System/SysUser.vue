<template>
    <div v-if="currentPage">
        <div>
            <Designer
                style="display: inline-block"
                id="dynamicForm"
                :formItems="formItems"
                :preview="true"
                :formData="formData"
                :formConfig="formSettings"
                @submit="reloadTable"
            />
            <el-button class="add-button" size="default" @click="toInsert">
                添加
            </el-button>
        </div>
        <div v-if="result.data">
            <el-table
                :data="result.data.records"
                border
                size="large"
                style="width: 100%"
                header-row-class-name="table-header-set"
            >
                <el-table-column
                    v-for="(column, i) in tableColumns"
                    :prop="column.name"
                    :label="column.label"
                    :width="column.width"
                    :formatter="column.formatter"
                    :key="i"
                />
                <el-table-column label="操作" :width="190">
                    <template #default="scope">
                        <el-button
                            icon="Edit"
                            size="small"
                            @click="handleEdit(scope.row)"
                            >修改</el-button
                        >
                        <el-popconfirm
                            confirm-button-text="确定"
                            cancel-button-text="取消"
                            icon="InfoFilled"
                            icon-color="red"
                            title="确定删除该用户吗?"
                            @confirm="handleDelete(scope.row)"
                        >
                            <template #reference>
                                <el-button
                                    size="small"
                                    type="danger"
                                    icon="Delete"
                                    >删除</el-button
                                >
                            </template>
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                background
                class="page-position"
                :total="result.data.total"
                @size-change="onSizeChange"
                :page-size="result.data.size"
                @current-change="onPageChange"
                :page-count="result.data.pages"
                :current-page="result.data.current"
                layout="total, sizes, prev, pager, next, jumper"
            ></el-pagination>
        </div>
    </div>
    <router-view v-else />
</template>

<script setup lang="ts">
import router from '../../router';
import { onMounted, ref, watch } from 'vue';
import type { Ref } from 'vue';
import { deleteById, getList } from '@/api/system/UserApi';
import type { PageTypes } from '@/types/Global/PageTypes';
import type { ResultType } from '@/types/Global/ResultType';
import type { UserRecordsTypes } from '@/types/System/user/UserRecordsTypes';
import type { TableColumnType } from '@/types/Global/TableColumnType';
import type { UserListParam } from '@/types/System/user/UserListParam';
import { ElMessage } from 'element-plus';

// 用户返回列表
let result: Ref<ResultType<PageTypes<UserRecordsTypes>>> = ref(
    {} as ResultType<PageTypes<UserRecordsTypes>>
);

const currentPage = ref<boolean>(true);

currentPage.value =
    router.currentRoute.value.fullPath.indexOf('userInsert') < 0;
watch(router.currentRoute, () => {
    currentPage.value =
        router.currentRoute.value.fullPath.indexOf('userInsert') < 0;
});

// 表单
const formData: Ref<UserListParam> = ref({ current: 1, size: 10 });
const formItems = ref([
    {
        labelWidth: 50,
        tag: 'el-input',
        type: 'Input',
        props: {
            size: 'default',
            disabled: false,
            readonly: false,
            clearable: true,
            suffixIcon: '',
            prefixIcon: '',
            placeholder: '请输入昵称',
        },
        label: '昵称',
        modelValue: 'nickName',
        selectCurrent: false,
    },
    {
        labelWidth: 50,
        tag: 'el-input',
        type: 'Input',
        props: {
            size: 'default',
            disabled: false,
            readonly: false,
            clearable: true,
            suffixIcon: '',
            prefixIcon: '',
            placeholder: '请输入手机号',
        },
        label: '手机',
        modelValue: 'Input_1649063073279',
        selectCurrent: false,
    },
    {
        labelWidth: 50,
        tag: 'el-input',
        type: 'Input',
        props: {
            size: 'default',
            disabled: false,
            readonly: false,
            clearable: true,
            suffixIcon: '',
            prefixIcon: '',
            placeholder: '请输入邮箱',
        },
        label: '邮箱',
        modelValue: 'email',
        selectCurrent: false,
    },
    {
        labelWidth: 50,
        tag: 'el-button',
        type: 'Button',
        props: {
            icon: '',
            type: '',
            size: 'default',
            plain: false,
            round: false,
            circle: false,
            loading: false,
            disabled: false,
        },
        label: '搜索',
        buttonType: 'submit',
        modelValue: 'Button_1649063117438',
        selectCurrent: true,
    },
]);
const formSettings = ref({
    inline: true,
    labelPosition: 'right',
    labelSuffix: '',
    statusIcon: false,
    hideRequiredAsterisk: false,
    showMessage: true,
    size: 'default',
    disabled: false,
});

let searchHeight: Ref<number> = ref(0);

onMounted(() => {
    const form: HTMLElement | null = document.getElementById('dynamicForm');
    if (form !== null) {
        searchHeight.value = form.clientHeight;
    }
});

// 加载数据
let reloadTable = () => {
    getList(formData.value).then((e) => {
        result.value = e;
    });
};

// 加载数据
let toInsert = () => {
    router.push('/system/user/userInsert/0');
};

// 跳转到修改页面
let handleEdit = (row: UserRecordsTypes) => {
    router.push(`/system/user/userInsert/${row.id}`);
};

// 删除数据
let handleDelete = (row: UserRecordsTypes) => {
    deleteById(row.id).then(() => {
        ElMessage('删除成功.');
        reloadTable();
    });
};

reloadTable();

// 页码改变时触发
let onPageChange = (newCurrent: number): void => {
    formData.value.current = newCurrent;
    reloadTable();
};

// 每页行数改变时触发
let onSizeChange = (newSize: number): void => {
    formData.value.size = newSize;
    reloadTable();
};

// 定义表格列
let tableColumns: Ref<Array<TableColumnType>> = ref([
    {
        name: 'id',
        label: '主键',
    },
    {
        name: 'username',
        label: '账号',
    },
    {
        name: 'nickName',
        label: '昵称',
    },
    {
        name: 'sex',
        label: '性别',
        formatter: (row: unknown, column: unknown, cellValue: number) => {
            return cellValue === 0 ? '男' : cellValue === 1 ? '女' : '未知';
        },
    },
    {
        name: 'phone',
        label: '手机',
    },
    {
        name: 'email',
        label: '邮箱',
        width: 190,
    },
    {
        name: 'createTime',
        label: '创建时间',
        width: 170,
    },
]);
</script>

<style scoped>
.add-button {
    top: -10px;
    position: relative;
}
</style>
<style>
.table-header-set {
    color: black;
    font-weight: bold;
}
.page-position {
    left: 8px;
    float: right;
    padding-top: 20px;
    position: relative;
}
.el-table--fit {
    border-bottom: 1px solid var(--el-border-color-lighter);
}
</style>
