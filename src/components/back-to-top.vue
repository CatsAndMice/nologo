<template>
  <transition name="fade">
    <div 
      v-if="showBackTop" 
      class="fixed bottom-8 right-8 z-20 cursor-pointer"
      @click="scrollToTop"
    >
      <div class="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center shadow-lg hover:bg-blue-500 transition-colors">
        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
        </svg>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'BackToTop',
  props: {
    // 滚动多少距离后显示回到顶部按钮
    visibilityHeight: {
      type: Number,
      default: 300
    },
    // 滚动动画持续时间(ms)
    backTopDuration: {
      type: Number,
      default: 500
    }
  },
  setup(props) {
    const showBackTop = ref(false);

    const handleScroll = () => {
      showBackTop.value = document.documentElement.scrollTop >= props.visibilityHeight;
    };

    const scrollToTop = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const startTime = performance.now();
      
      const animateScroll = (currentTime) => {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / props.backTopDuration, 1);
        
        // 使用缓动函数使滚动更平滑
        const easeInOutCubic = progress < 0.5 
          ? 4 * progress * progress * progress 
          : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1;
          
        const scrollTo = scrollTop * (1 - easeInOutCubic);
        document.documentElement.scrollTop = scrollTo;
        document.body.scrollTop = scrollTo;
        
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };
      
      requestAnimationFrame(animateScroll);
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      showBackTop,
      scrollToTop
    };
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>