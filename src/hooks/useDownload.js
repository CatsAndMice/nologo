import { shallowRef, unref } from "vue";
import { isEmpty, eq } from "lodash-es";
import { compressAndDownload } from "../utils/compressAndDownload";
import Notification from '@arco-design/web-vue/es/notification';
export default ({ platform }) => {
    const downloading = shallowRef(false)

    const emitDownload = ({ files, type }) => {
        const plat = unref(platform)
        const name = plat.appName + (eq(type, 'video') ? '视频' : '图集')
        compressAndDownload({
            files,
            folderName: name,
            zipName: `${name}.zip`,
            success: () => {
                downloading.value = false;
            },
            error: () => {
                downloading.value = false;
                Notification.error({
                    title: '下载错误',
                    content: '推荐复制链接，浏览器访问下载',
                });
            },
        })
    }

    const download = async (fileObj) => {
        const unrefFiles = unref(fileObj);
        if (isEmpty(unrefFiles)) return;
        const downloadFiles = []

        if (eq(unrefFiles.type, 'video')) {
            downloadFiles.push({
                fileName: `视频1.mp4`,
                fileUrl: unrefFiles.url
            })
        } else {
            unrefFiles.urls.forEach((url, index) => {
                downloadFiles.push({
                    fileName: `图片${index + 1}.png`,
                    fileUrl: url
                })
            })
        }

        downloading.value = true;
        emitDownload({ files: downloadFiles, type: unrefFiles.type })
    }

    return {
        downloading,
        download
    }
}