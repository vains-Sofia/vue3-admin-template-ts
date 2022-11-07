import i18n from '../../i18n';
import { nextTick } from 'vue';
import * as languages from 'element-plus/lib/locale/index';
import type { GlobalConfigTypes } from '@/types/StoreTypes';
import { defineStore } from 'pinia';
import { PiniaNames } from '../PiniaNames';

export const global = defineStore(PiniaNames.GLOBAL_CONFIG, {
    state: (): GlobalConfigTypes => ({
        foreignUrl: '',
        keepAlive: false,
        mainPageAlive: true,
        framePageAlive: true,
        foreignRouter: false,
        localeLanguage: 'zhCn',
        locale: languages['zhCn'],
    }),
    getters: {},
    actions: {
        /**
         * 设置缓存路由的状态
         * @param keepAlive 更新后的值
         */
        setKeepAlive(keepAlive: boolean) {
            this.keepAlive = keepAlive;
        },
        /**
         * 设置外部链接
         * @param foreignUrl 外链地址
         */
        setForeignUrl(foreignUrl: string) {
            this.foreignUrl = foreignUrl;
        },
        /**
         * 切换缓存路由页面的状态
         */
        toggleKeepAlive() {
            this.keepAlive = !this.keepAlive;
        },
        /**
         * 刷新主页面
         */
        refreshMainPage() {
            this.mainPageAlive = false;
            nextTick().then(() => (this.mainPageAlive = true));
        },
        /**
         * 刷新iFrame页面
         */
        refreshFramePage() {
            this.framePageAlive = false;
            nextTick().then(() => (this.framePageAlive = true));
        },
        /**
         * 设置当前路由是否外链
         * @param foreignRouter 状态
         */
        setForeignRouter(foreignRouter: boolean) {
            this.foreignRouter = foreignRouter;
        },
        /**
         * 改变当前项目呈现的语言
         * @param language 改变后的语言
         */
        changeLocaleLanguage(language: string) {
            i18n.global.locale = language;
            this.localeLanguage = language;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (languages[language]) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                this.locale = languages[language];
            } else {
                this.locale = null;
            }
        },
    },
});
