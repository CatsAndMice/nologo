<template>
    <!-- https://www.hellotik.app/zh -->
    <footer class="bg-gray-50">
        <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <nav class="flex flex-wrap justify-center space-x-6">
                <span class="text-gray-500 hover:text-gray-900 cursor-pointer" @click="onClick('3')">服务条款</span>
                <span class="text-gray-500 hover:text-gray-900 cursor-pointer" @click="onClick('4')">隐私政策</span>
                <span class="text-gray-500 hover:text-gray-900 cursor-pointer" @click="onClick('5')">联系我们</span>
            </nav>
            <p class="mt-6 text-center text-gray-400">© <!-- -->2025<!-- --> <!-- -->去水印下载鸭</p>
        </div>
    </footer>
</template>
<script>
import { nextTick } from 'vue';

export default {
    setup(props, { emit }) {
        const onClick = (value) => {
            emit('change', value)
            nextTick(() => {
                window.scrollTo(0, 0)
            })
        }

        return {
            onClick
        }
    },
}
</script>