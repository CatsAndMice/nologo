<template>
    <div class="max-w-3xl mx-auto !pt-16 p-8 min-h-screen" style="opacity: 1; transform: none;">
        <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-gray-900 my-8">联系我们</h1>
            <p class="text-xl text-gray-600">如果您有任何问题、建议或反馈，请随时与我们联系</p>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-8 mx-4">
            <div class="space-y-8">
                <div class="text-center">
                    <h2 class="text-2xl font-semibold text-gray-900 mb-4">电子邮件联系</h2>
                    <p class="text-gray-600 mb-4">您可以通过以下邮箱地址联系我们，我们会尽快回复您的邮件</p>
                    <p href="13034833806@163.com">13034833806@163.com</p>
                </div>
                <div class="border-t border-gray-200 pt-8">
                    <h2 class="text-2xl font-semibold text-gray-900 mb-4 text-center">回复时间</h2>
                    <p class="text-gray-600 text-center">我们通常会在24小时内回复您的邮件。如果您的问题比较紧急，建议在邮件主题中标注"紧急"，我们会优先处理。</p>
                </div>
                <div class="border-t border-gray-200 pt-8">
                    <h2 class="text-2xl font-semibold text-gray-900 mb-4 text-center">客户支持</h2>
                    <p class="text-gray-600 text-center">
                        我们的客服团队随时准备为您提供帮助，包括使用指导、技术支持和问题反馈。请微信扫码添加并详细描述您的问题，以便我们更好地为您服务。</p>
                    <div class="flex justify-center mt-4">
                        <img :src="weixinImage" class="w-40" alt="微信二维码">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import weixinImage from "@/assets/weixin.png";
export default {
    setup() {
        return {
            weixinImage
        }
    },
}
</script>