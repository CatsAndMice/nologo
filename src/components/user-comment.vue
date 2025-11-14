<!-- front-end/src/components/user-comment.vue -->
<template>
    <div class="user-comment py-12 ">
        <div>
            <h2 class="text-2xl font-bold text-center mb-12">数千用户都说好</h2>

            <!-- 三栏布局 -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="(comment, index) in comments" :key="index"
                    class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                    :style="comment.style">
                    <div class="flex items-center flex-col mb-4">
                        <img :src="comment.avatar" :alt="comment.name" class="w-12 h-12 rounded-full object-cover">
                        <div class="text-center">
                            <p class="font-semibold text-gray-900">{{ comment.name }}</p>
                            <p class="text-sm mt-1 text-gray-500">{{ comment.role }}</p>
                        </div>
                        <div class="mx-auto flex mt-1">
                            <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                    </div>
                    <p style="color:#16172F;font-size: 16px;font-weight: 400;line-height: 22px;">“{{ comment.content }}”
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserComment',
    setup() {
        // 用户评价数据
        const comments = [
            {
                name: '张先生',
                role: '自媒体工作者',
                avatar: 'https://downni.zhipianbang.com/static/imgs/step/head1.png',
                content: '我的工作要求我经常下载文件，曾经我对于这个工作很头痛，自从我发现了去水印下载鸭这个软件，我的工作变的超级简单、容易，带给我的是效率大幅度提升。',
                style: {
                    'background-color': '#EFF8FB'
                }
            },
            {
                name: '单小姐',
                role: '网站运营',
                avatar: 'https://downni.zhipianbang.com/static/imgs/step/head2.png',
                content: '去水印下载鸭能支持的网站非常多，这一点省去我安装各种下载软件的烦恼，去水印下载鸭能快速下载清晰的视频文件，特别赞!',
                style: {
                    'background-color': '#FEF8E7'
                }
            },
            {
                name: '刘经理',
                role: '产品经理',
                avatar: 'https://downni.zhipianbang.com/static/imgs/step/head3.png',
                content: '第一次使用去水印下载鸭就有种惊艳的感觉，清新脱俗，粘贴一个APP或网页的地址就可以下载的清晰视频、图片，很高效。',
                style: {
                    'background-color': '#F1F6FE'
                }
            }
        ];

        return {
            comments
        };
    }
};
</script>

<style scoped>
@media (max-width: 768px) {
    .user-comment {
        padding: 2rem 1rem;
    }

    .user-comment h2 {
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
}
</style>