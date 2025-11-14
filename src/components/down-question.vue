<template>
    <div class="my-12">
        <h2 class="text-center mb-6 text-2xl font-bold" style="color: #16172F;">常见问题</h2>

        <!-- 两列布局的常见问题 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="(faq, index) in faqs" :key="index" class="bg-white p-4 rounded-lg shadow-md"
                style="background-image: url('https://downni.zhipianbang.com/static/imgs/step/list_bg.png');background-repeat: no-repeat;background-position: bottom right;">
                <h3 class="font-bold text-gray-800 mb-2">{{ faq.question }}</h3>
                <p class="text-gray-600 text-sm">{{ faq.answer }}</p>
            </div>
        </div>

    </div>
</template>
<script>
// 常见问题数据
const faqs = [
    {
        question: "Q：去水印下载鸭是什么？",
        answer: "A：去水印下载鸭是一个强大的在线下载工具，让用户可以从包括抖音、小红书、B站等平台下载自己喜爱的视频、图片。"
    },
    {
        question: "Q：是否可以在移动设备上使用去水印下载鸭？",
        answer: "支持，目前已提供小程序访问。"
    },
    {
        question: "Q：如果去水印下载鸭无法下载视频，我的选择是什么？",
        answer: "A：尽管支持多个平台，但有时由于源网站基础设施或政策的更改，获取视频可能会出现问题。如果出现这种情况，我们建议稍后再次尝试获取视频，因为这可能是一个临时问题。然而，如果问题继续存在，建议将您的疑问与我们的支持团队联系。"
    },
    {
        question: "Q：从去水印下载鸭下载是否合法并且不侵犯版权？",
        answer: "A：通常取决于您要下载的视频及其版权情况。虽然去水印下载鸭为您提供了从各种平台检索视频的服务，但用户有责任尊重并遵守各个视频平台或内容创作者的版权政策。我们强烈建议仅将下载用于个人使用或为任何其他用途获得相应版权持有者的许可。"
    },
    {
        question: "Q：使用去水印下载鸭下载在线视频是否安全？",
        answer: "A：是的，去水印下载鸭是一个完全安全的在线视频下载应用程序。我们提供对用户的安全性和隐私保护。"
    },

    {
        question: "Q：下载后的视频打不开怎么办？",
        answer: "A：这种情况极少发生，一般是文件后缀问题，把下载后的文件后缀名改为.mp4即可播放。如果还有疑问可与我们团队进行联系。"
    }
];
export default {
    setup() {
        return {
            faqs
        }
    },
}
</script>