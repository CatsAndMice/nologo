import { isUndefined, eq } from "lodash-es";
import emitter from "./mitt.js";

export const openLink = (url) => {
    if (!isUndefined(window.utools)) {
        window.utools.shellOpenExternal(url)
        return
    }
    window.open(url)
};


export const openMorePlatform = (key) => {
    const platform = {
        web: 'http://nologo.code24.top',
        utools: 'https://www.u-tools.cn/plugins/detail/%E6%97%A0%E6%B0%B4%E5%8D%B0%E4%B8%8B%E8%BD%BD%E9%B8%AD/index.html?c=eylamc1n2u',
        'mini-program': 'mini-program'
    }
    
    if (eq(platform[key], 'mini-program')) {
        emitter.emit('openAppDialog')
        return
    }
    openLink(platform[key]);
}


export const openUseManual = () => {
    const url = 'https://zwf4g5rfwiy.feishu.cn/wiki/JGjpwZ1Feiw8Zxks4Hoc8vI9nle?from=from_copylink'
    openLink(url);
}

export const openFeedback = () => {
    const url = 'https://zwf4g5rfwiy.feishu.cn/share/base/form/shrcnOweRofYdR4w106YQ9FYNtg'
    openLink(url);
}

export const openAddon = () => {
    const url = 'https://microsoftedge.microsoft.com/addons/detail/%E6%97%A0%E6%B0%B4%E5%8D%B0%E4%B8%8B%E8%BD%BD%E9%B8%AD/eadlabmenmapmlhphjkhopopkjldekmc'
    openLink(url);
}