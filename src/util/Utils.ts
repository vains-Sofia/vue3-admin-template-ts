import useClipboard from 'vue-clipboard3';
import { ElNotification } from 'element-plus';

/**
 * 复制到剪切板
 * @param text 文字
 */
export async function copyToClipboard(text: string) {
    const { toClipboard } = useClipboard();
    try {
        await toClipboard(text);
        ElNotification({
            title: '提示',
            message: '复制到剪切板成功.',
            type: 'success',
        });
    } catch (e) {
        ElNotification({
            title: '提示',
            message: `复制到剪切板失败：${e}.`,
            type: 'error',
        });
    }
}
