import { isObject } from "lodash-es"
export const setStorageItem = (key, value) => {
    const cloneValue = isObject(value) ? JSON.stringify(value) : value
    if (window.utools && window.utools.dbStorage) {
        return window.utools.dbStorage.setItem(key, cloneValue);
    }
    return localStorage.setItem(key, cloneValue);
}

export const getStorageItem = (key) => {
    let value = '';
    if (window.utools && window.utools.dbStorage) {
        value = window.utools.dbStorage.getItem(key);
    } else {
        value = localStorage.getItem(key)
    }

    try {
        return JSON.parse(value);
    } catch (e) {
        // 如果解析失败，返回原始值
        return value;
    }
} 