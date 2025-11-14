import Notification from '@arco-design/web-vue/es/notification';
export const extractUrl = (input) => {
    if (!input) return '';

    // 匹配以http或https开头的URL
    const urlMatch = input.match(/https?:\/\/[^\s"'<>()]+/);

    return urlMatch ? urlMatch[0] : input;
};


export const tip1 = {
    title: '温馨提示',
    message: '本站暂不支持您所解析的平台，更多平台正在开发中，您可以微信扫码添加向我们反馈！感谢您的理解与耐心。',
}

export const tip2 = {
    title: '错误提示',
    message: '程序运行出现异常，请稍后重试或微信扫码添加向我们反馈！感谢您的理解与耐心。',
}


export const copyUrl = (url) => {
    if (!url) return false;

    try {
        navigator.clipboard.writeText(url);
        Notification.success({
            title: '成功',
            content: '已复制到剪贴板',
        });
        return true;
    } catch (error) {
        // 降级方案：创建临时input元素来复制
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        Notification.success({
            title: '成功',
            content: '已复制到剪贴板',
        });
        return true;
    }
}