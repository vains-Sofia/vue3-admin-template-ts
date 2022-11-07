import { en } from './locales/en';
// 本地的国际化
import { zhCn } from './locales/zh-CN';
import { createI18n } from 'vue-i18n';
// elementPlus的国际化
import elementEnLocale from 'element-plus/lib/locale/lang/en';
import elementZhLocale from 'element-plus/lib/locale/lang/zh-cn';

const messages = {
    en: {
        ...en,
        ...elementEnLocale,
    },
    zhCn: {
        ...zhCn,
        ...elementZhLocale,
    },
};

type MessageSchema = typeof en;

const i18n = createI18n<[MessageSchema], 'en' | 'zhCn'>({
    legacy: false,
    locale: 'zhCn',
    messages,
});

export default i18n;
