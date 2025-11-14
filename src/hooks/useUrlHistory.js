import { ref, onUnmounted } from 'vue';
import { trim } from "lodash-es";
import { extractUrl } from "@utils/common.js";
import Notification from '@arco-design/web-vue/es/notification';
export default () => {
    const urlInputRef = ref(null);
    const urlHistoryRef = ref(null);
    const hideHistoryTimer = ref(null);

    const addToHistory = (input) => {
        input = trim(input)
        const url = extractUrl(trim(input));
        if (url) {
            urlHistoryRef.value?.hide();
            urlHistoryRef.value?.addToHistory(input);
            return url;
        }

        Notification.error({
            title: '错误',
            content: '请输入正确的链接',
        });
        return null;
    };

    // 显示历史记录
    const showHistory = () => {
        urlHistoryRef.value?.show();
    };

    // 延迟隐藏历史记录
    const hideHistoryDelayed = () => {
        hideHistoryTimer.value = setTimeout(() => {
            urlHistoryRef.value?.hide();
        }, 200);
    };

    // 清除隐藏定时器
    const clearHideTimer = () => {
        if (hideHistoryTimer.value) {
            clearTimeout(hideHistoryTimer.value);
            hideHistoryTimer.value = null;
        }
    };

    // 处理历史记录选择
    const onHistorySelect = () => {
        urlInputRef.value?.focus();
    };

    // 在组件卸载时清除定时器
    onUnmounted(() => {
        clearHideTimer();
    });
    return {
        urlInputRef,
        urlHistoryRef,
        showHistory,
        hideHistoryDelayed,
        clearHideTimer,
        onHistorySelect,
        addToHistory
    }
}