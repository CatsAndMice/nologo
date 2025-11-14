
/**
 * 判断是否为移动端设备
 * @returns {boolean} 如果是移动端设备返回 true，否则返回 false
 */
export function isMobileDevice() {
    // 检查是否存在 window 对象（确保在浏览器环境中运行）
    if (typeof window === 'undefined') {
        return false;
    }

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    return mobileRegex.test(userAgent) || window.innerWidth <= 768;
}

/**
 * 判断是否为移动端设备（更全面的检测）
 * @returns {boolean} 如果是移动端设备返回 true，否则返回 false
 */
export function isMobile() {
    // 检查是否存在 window 对象（确保在浏览器环境中运行）
    if (typeof window === 'undefined') {
        return false;
    }

    // 检查用户代理字符串
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    // 检查屏幕宽度
    const isSmallScreen = window.innerWidth < 600;


    // 综合判断
    return mobileRegex.test(userAgent) || isSmallScreen;
}

export default {
    isMobileDevice,
    isMobile
};