<!-- src/components/UrlHistory.vue -->
<template>
  <div class="url-history-container">
    <!-- 历史记录下拉列表 -->
    <div v-show="showHistory && historyItems.length > 0"
      class="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto"
      @mousedown.prevent>
      <div v-for="(item, index) in historyItems" :key="index" @mousedown="selectItem(item)"
        class="px-4 py-2 hover:bg-gray-50 cursor-pointer flex justify-between items-center group">
        <span class="truncate text-gray-700 text-sm">{{ item }}</span>
        <a-button @mousedown.stop="removeItem(index)"
          class="ml-2 opacity-0 group-hover:opacity-100 shrink-0 transition-opacity !p-0 !w-6 !h-6 !text-gray-400"
          shape="circle" type="text">
          <template #icon>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </template>
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getStorageItem, setStorageItem } from '../utils/dbStorage';
export default {
  name: 'UrlHistory',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    storageKey: {
      type: String,
      default: 'urlHistory'
    },
    maxItems: {
      type: Number,
      default: 5
    }
  },
  emits: ['update:modelValue', 'select'],
  setup(props, { emit }) {
    const showHistory = ref(false);
    const historyItems = ref([]);

    // 加载历史记录
    const loadHistory = () => {
      try {
        const savedHistory = getStorageItem(props.storageKey);
        if (savedHistory) {
          historyItems.value = savedHistory;
        }
      } catch (e) {
        console.error('Failed to load history:', e);
        historyItems.value = [];
      }
    };

    // 保存历史记录
    const saveHistory = () => {
      try {
        setStorageItem(props.storageKey, historyItems.value);
      } catch (e) {
        console.error('Failed to save history:', e);
      }
    };

    // 添加到历史记录
    const addToHistory = (url) => {
      if (!url) return;

      // 移除已存在的相同URL
      const index = historyItems.value.indexOf(url);
      if (index !== -1) {
        historyItems.value.splice(index, 1);
      }

      // 添加到开头
      historyItems.value.unshift(url);

      // 限制历史记录数量
      if (historyItems.value.length > props.maxItems) {
        historyItems.value = historyItems.value.slice(0, props.maxItems);
      }

      saveHistory();
    };

    // 选择历史记录项
    const selectItem = (item) => {
      emit('update:modelValue', item);
      emit('select', item);
      showHistory.value = false;
    };

    // 移除历史记录项
    const removeItem = (index) => {
      historyItems.value.splice(index, 1);
      saveHistory();
    };

    // 显示历史记录
    const show = () => {
      showHistory.value = true;
    };

    // 隐藏历史记录
    const hide = () => {
      showHistory.value = false;
    };

    // 组件挂载时加载历史记录
    onMounted(() => {
      loadHistory();
    });

    return {
      showHistory,
      historyItems,
      addToHistory,
      selectItem,
      removeItem,
      show,
      hide
    };
  }
};
</script>