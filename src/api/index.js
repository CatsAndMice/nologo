import { baseUrl } from "./config.js";
import { to } from "await-to-js";
import { setStorageItem, getStorageItem } from "../utils/dbStorage.js"
export const getPlatform = async () => {
    const [err, response] = await to(fetch(baseUrl + '/api/platform', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }))

    if (response && response.ok) {
        const result = await response.json()
        if (result && result?.code == 200) {
            return result.data;
        }
    }

    return []
}

const generateUniqueValue = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

const track = (data) => {
    const event = {
        url: '/',
        title: '去水印下载鸭',
        name: 'download',
        website: '46877f1e-34e1-4fc5-b8f2-df891277e563'
    }
    if (window.umami) {
        const unique_id = getStorageItem('unique_id')
        if (unique_id) {
            umami.identify(unique_id);
        } else {
            const id = generateUniqueValue()
            setStorageItem('unique_id', id)
            umami.identify(id);
        }

        window.umami.track({
            ...event,
            ...data
        })
    }
}

export const getDetail = async (url, { apiFail, codeFail }) => {
    const apiUrl = `${baseUrl}/api/download?url=${window.encodeURIComponent(url)}`;

    const [err, response] = await to(fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }));

    if (response && response.ok) {
        const result = await response.json()
        if (result && result?.code == 200) {
            track({
                data: {
                    url,
                },
                name: 'download-web-success'
            })
            return result.data;
        }

        track({
            data: {
                url,
            },
            name: 'download-web-empty'
        })

        apiFail && apiFail(result);
        return null;
    }

    track({
        data: {
            url,
        },
        name: 'download-web-fail'
    })
    codeFail && codeFail()
    return null;
}