import { defineStore } from 'pinia';
import { PiniaNames } from '../PiniaNames';
import type { ThemeConfigTypes } from '@/types/StoreTypes';

export const theme = defineStore(PiniaNames.THEME_CONFIG, {
    state: (): ThemeConfigTypes => ({
        openLogo: true,
        openHeader: true,
        fixedHeader: true,
        sidebarWidth: 255,
        sidebarCollapse: false,
        sidebarTextColor: '#fff',
        sidebarBgColor: '#191a23',
        sidebarActiveTextColor: '#ffd04b',
    }),
    actions: {
        /**
         * 设置是否显示Logo
         * @param openLogo 状态
         */
        setOpenLogo(openLogo: boolean) {
            this.openLogo = openLogo;
        },
        /**
         * 设置是否显示上方导航
         * @param openHeader 状态
         */
        setOpenHeader(openHeader: boolean) {
            this.openHeader = openHeader;
        },
        /**
         * 设置上方导航是否漂浮
         * @param fixedHeader 状态
         */
        setFixedHeader(fixedHeader: boolean) {
            this.fixedHeader = fixedHeader;
        },
        /**
         * 切换Logo显示状态
         */
        toggleOpenLogo() {
            this.openLogo = !this.openLogo;
        },
        /**
         * 切换上方导航显示状态
         */
        toggleOpenHeader() {
            this.openHeader = !this.openHeader;
        },
        /**
         * 切换上方导航漂浮状态
         */
        toggleFixedHeader() {
            this.fixedHeader = !this.fixedHeader;
        },
        /**
         * 设置左侧导航宽度
         * @param sidebarWidth 宽度，单位：px
         */
        setSidebarWidth(sidebarWidth: number) {
            this.sidebarWidth = sidebarWidth;
        },
        /**
         * 设置左侧导航背景色
         * @param sidebarBgColor 背景色
         */
        setSidebarBgColor(sidebarBgColor: string) {
            this.sidebarBgColor = sidebarBgColor;
        },
        /**
         * 设置左侧导航文字颜色
         * @param sidebarTextColor 文字颜色
         */
        setSidebarTextColor(sidebarTextColor: string) {
            this.sidebarTextColor = sidebarTextColor;
        },
        /**
         * 切换左侧导航显示状态
         */
        toggleSidebarCollapse() {
            this.sidebarCollapse = !this.sidebarCollapse;
            if (this.sidebarCollapse) {
                this.setSidebarWidth(64);
            } else {
                this.setSidebarWidth(255);
            }
        },
        /**
         * 设置左侧导航当前选中选项文字颜色
         * @param sidebarActiveTextColor 选中导航文字颜色
         */
        setSidebarActiveTextColor(sidebarActiveTextColor: string) {
            this.sidebarActiveTextColor = sidebarActiveTextColor;
        },
    },
});
