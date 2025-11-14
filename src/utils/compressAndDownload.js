import JSZip from 'jszip';
import FileSaver from 'file-saver';
import axios from 'axios'; // 用于请求文件
import Notification from '@arco-design/web-vue/es/notification';
// 获取文件内容
const fetchFile = async (url) => {
    try {
        const response = await axios.get(url, { responseType: 'blob' });
        return response.data;
    } catch (error) {
        console.error(`下载失败: ${url}`, error);
        throw error;
    }
};

export const downloadOneFile = async (url, fileName) => {
    try {
        const content = await fetchFile(url);
        FileSaver.saveAs(content, fileName);
    } catch (error) {
        Notification.error({
            title: '下载错误',
            content: '推荐复制链接，浏览器访问下载',
        });
    }
};


// 压缩并下载文件
export const compressAndDownload = async ({ files, folderName = 'download', zipName = "压缩包.zip", success, error }) => {
    try {
        const zip = new JSZip();
        const folder = zip.folder(folderName);

        const promises = files.map(async (file) => {
            const content = await fetchFile(file.fileUrl);
            folder.file(file.fileName, content, { binary: true });
        });

        // 等待所有文件下载完成
        await Promise.all(promises);

        // 生成 ZIP 文件并下载
        zip.generateAsync({ type: "blob", compression: "DEFLATE", compressionOptions: { level: 9 } })
            .then((content) => {
                FileSaver.saveAs(content, zipName);
                success()
            });
    } catch (err) {
        console.error(`压缩并下载文件失败: ${err}`);
        error()
    }
};



