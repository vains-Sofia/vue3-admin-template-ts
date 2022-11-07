import type { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: '/',
        component: () => import('../views/Layout/Index.vue'),
        children: [
            {
                path: 'home',
                name: 'home',
                alias: [''],
                component: () => import('../views/test/Test01.vue'),
                meta: {
                    icon: 'house',
                    title: 'home',
                },
            },
        ],
        meta: {
            icon: 'house',
            title: 'home',
        },
    },
    {
        path: '/components',
        name: 'components',
        component: () => import('../views/Layout/Index.vue'),
        children: [
            {
                path: 'FormDesigner',
                name: 'FormDesigner',
                component: () =>
                    import('../views/components/FormDesigner/FormDesigner.vue'),
                meta: {
                    title: 'FormDesigner',
                    icon: 'help-filled',
                },
            },
        ],
        meta: {
            icon: 'operation',
            title: 'components',
        },
    },
    {
        path: '/system',
        name: 'system',
        component: () => import('../views/Layout/Index.vue'),
        children: [
            {
                path: 'user',
                name: 'user',
                component: () => import('../views/System/SysUser.vue'),
                children: [
                    {
                        path: 'userInsert/:id',
                        name: 'userInsert',
                        component: () =>
                            import('../views/System/SysUserUpdate.vue'),
                        meta: {
                            hidden: true,
                            title: 'InsertUser',
                            icon: 'help-filled',
                        },
                    },
                ],
                meta: {
                    title: 'user',
                    icon: 'help-filled',
                },
            },
            {
                path: 'client',
                name: 'client',
                component: () => import('../views/System/SysClient.vue'),
                children: [
                    {
                        path: 'clientDetail/:id',
                        name: 'clientDetail',
                        component: () =>
                            import('../views/System/SysClientDetailChange.vue'),
                        meta: {
                            hidden: true,
                            icon: 'help-filled',
                            title: 'clientDetail',
                        },
                    },
                    {
                        path: 'clientRegister',
                        name: 'clientRegister',
                        component: () =>
                            import('../views/System/SysClientRegister.vue'),
                        meta: {
                            hidden: true,
                            icon: 'help-filled',
                            title: 'clientRegister',
                        },
                    },
                ],
                meta: {
                    title: 'client',
                    icon: 'help-filled',
                },
            },
            {
                path: 'swagger',
                name: 'swagger',
                component: () => import('../views/Layout/FrameTemplate.vue'),
                meta: {
                    url: 'http://k7fsqkhtbx.cdhttp.cn/swagger-ui/',
                    title: 'Swagger',
                    icon: 'help-filled',
                },
            },
            {
                path: 'monitor',
                name: 'monitor',
                component: () => import('../views/Layout/FrameTemplate.vue'),
                meta: {
                    url: 'http://k7fsqkhtbx.cdhttp.cn/monitor/wallboard',
                    title: 'Monitor',
                    icon: 'help-filled',
                },
            },
            {
                path: 'blogs',
                name: 'blogs',
                component: () => import('../views/Layout/FrameTemplate.vue'),
                meta: {
                    url: 'https://www.cnblogs.com/',
                    title: 'Blogs',
                    icon: 'help-filled',
                },
            },
        ],
        meta: {
            icon: 'operation',
            title: 'system',
        },
    },
    {
        path: '/test1',
        name: 'test',
        component: () => import('../views/Layout/Index.vue'),
        children: [
            {
                path: 'test01',
                name: 'test01',
                component: () => import('../views/test/Test01.vue'),
                meta: {
                    title: 'test01',
                    icon: 'help-filled',
                },
            },
            {
                path: 'test2',
                name: 'test2',
                component: () => import('../views/test/Test02.vue'),
                meta: {
                    title: 'test02',
                    icon: 'help-filled',
                },
            },
            {
                path: 'test03',
                name: 'test03',
                component: () => import('../views/test/Test03.vue'),
                meta: {
                    title: 'test03',
                    icon: 'help-filled',
                },
            },
            {
                path: 'test04',
                name: 'test04',
                component: () => import('../views/test/Test04.vue'),
                meta: {
                    title: 'test04',
                    icon: 'help-filled',
                },
            },
        ],
        meta: {
            icon: 'operation',
            title: 'testNavigation',
        },
    },
    {
        path: '/loginRedirect',
        name: 'loginRedirect',
        component: () => import('../components/Login/LoginRedirect.vue'),
        meta: {
            hidden: true,
            icon: 'operation',
            title: 'testNavigation',
        },
    },
];
