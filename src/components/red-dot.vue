<!-- src/components/RedDot.vue -->
<template>
    <div class="relative" @click="hideRedDot">
        <slot></slot>
        <span v-if="showRedDot" class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" :class="dotClass"></span>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
    name: 'RedDot',
    props: {
        // 用于标识不同功能的红点
        featureKey: {
            type: String,
            required: true
        },
        // 自定义红点样式类
        dotClass: {
            type: String,
            default: ''
        },
        // 是否自动隐藏
        autoHide: {
            type: Boolean,
            default: true
        },
        // 自动隐藏时间（毫秒）
        autoHideDelay: {
            type: Number,
            default: 3000
        }
    },
    setup(props) {
        const showRedDot = ref(false)

        onMounted(() => {
            // 检查本地存储中是否标记了用户已查看过此功能
            const hasSeenFeature = localStorage.getItem(`hasSeenFeature_${props.featureKey}`)
           console.log(hasSeenFeature);
           
            if (!hasSeenFeature) {
                showRedDot.value = true
                console.log(showRedDot.value);
                
                // 如果设置为自动隐藏
                if (props.autoHide) {
                    setTimeout(() => {
                        showRedDot.value = false
                        // 标记用户已查看此功能
                        localStorage.setItem(`hasSeenFeature_${props.featureKey}`, 'true')
                    }, props.autoHideDelay)
                }
            }
        })

        // 手动隐藏红点的方法
        const hideRedDot = () => {
            showRedDot.value = false
            localStorage.setItem(`hasSeenFeature_${props.featureKey}`, 'true')
        }

        // 重置红点显示状态的方法
        const resetRedDot = () => {
            localStorage.removeItem(`hasSeenFeature_${props.featureKey}`)
            showRedDot.value = true
        }

        return {
            showRedDot,
            hideRedDot,
            resetRedDot
        }
    }
}
</script>