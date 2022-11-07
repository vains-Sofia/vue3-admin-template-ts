/**
 * 左侧导航类型定义
 */
interface SidebarTypes {
    home: string;
    testNavigation: string;
    test01: string;
    test02: string;
    test03: string;
    test04: string;
    system: string;
    user: string;
    client: string;
    Swagger: string;
    Monitor: string;
    Blogs: string;
    FormDesigner: string;
    components: string;
    Markdown: string;
    formMaking: string;
    RichText: string;
    login: string;
    clientDetail: string;
    InsertUser: string;
}

/**
 * navbar类型定义
 */
interface NavbarTypes {
    fold: string;
    expand: string;
    refresh: string;
    fullScreen: string;
    exitFullScreen: string;
    language: string;
}

/**
 * 多语言类型限制
 */
export default interface LocaleTypes {
    sidebar: SidebarTypes;
    navBar: NavbarTypes;
}
