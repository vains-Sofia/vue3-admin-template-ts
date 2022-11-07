// 定义全局state的类型
export interface GlobalConfigTypes {
    // 当前Element的语言
    locale: any;
    // 是否开启路由缓存
    keepAlive: boolean;
    // 外链链接
    foreignUrl: string;
    // 是否是外链
    foreignRouter: boolean;
    // 当前选择的语言 key值从src/i18n/elementLocales/index.ts中获取
    localeLanguage: string;
    // 组件是否存活，主要用于刷新
    mainPageAlive: boolean;
    // iFrame组件是否存活，主要用于刷新
    framePageAlive: boolean;
}
// 定义项目主题state的类型
export interface ThemeConfigTypes {
    // 是否显示logo图
    openLogo: boolean;
    // 是否显示头部
    openHeader: boolean;
    // 是否固定头部
    fixedHeader: boolean;
    // 侧边导航宽度
    sidebarWidth: number;
    // 侧边导航背景色
    sidebarBgColor: string;
    // 侧边栏是否收起
    sidebarCollapse: boolean;
    // 侧边导航文字色
    sidebarTextColor: string;
    // 侧边导航选中文字色
    sidebarActiveTextColor: string;
}

// 定义root层state的类型
export interface RootStateTypes {
    ThemeConfig: ThemeConfigTypes;
    GlobalConfig: GlobalConfigTypes;
}
