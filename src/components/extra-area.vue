<template>
  <div class="mt-6 items-center flex justify-center">
    <div class="flex flex-wrap justify-center items-center gap-5 text-sm text-gray-600">
      <a href="javascript:void(0)" @click="openAuthorDialog" target="_blank" rel="noopener noreferrer"
        class="flex items-center hover:text-blue-600 transition-colors">
        <svg t="1760432736870" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6173"
          class="w-4 h-4 mr-1">
          <path
            d="M939.74 803.39C914.88 666 821.06 552.51 695.48 500.05a241.61 241.61 0 0 0 85.34-184.54c0-133.78-108.39-242.17-242.17-242.17S296.48 181.73 296.48 315.51A241.6 241.6 0 0 0 381.75 500c-125.63 52.42-219.47 165.9-244.42 303.28-6.84 38.24 22.25 73.36 61.07 73.36l680.26 0.12a62.15 62.15 0 0 0 61.08-73.37zM538.65 180.26c74.58 0 135.25 60.68 135.25 135.25s-60.67 135.25-135.25 135.25S403.4 390.09 403.4 315.51s60.68-135.25 135.25-135.25zM237.34 783.92a316.7 316.7 0 0 1 98.27-148.34 314.26 314.26 0 0 1 405.84 0A315.89 315.89 0 0 1 839.73 784z"
            fill="currentColor" p-id="6174"></path>
          <path d="M467.04 676.55h143.01q35.75 0 35.75 35.75t-35.75 35.75H467.04q-35.75 0-35.75-35.75t35.75-35.75z"
            fill="currentColor" p-id="6175"></path>
        </svg>
        关于作者
      </a>
      <a-divider direction="vertical" />
      <a href="javascript:void(0)" @click="openUpdateLogDialog"
        class="flex items-center hover:text-blue-600 transition-colors">
        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
          </path>
        </svg>
        更新日志
      </a>
      <a-divider direction="vertical" />
      <a href="javascript:void(0)" @click="openAppreciatedDialog"
        class="flex items-center hover:text-blue-600 transition-colors">
        <svg t="1760432664519" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4578"
          class="w-4 h-4 mr-1">
          <path
            d="M512 106.667A405.333 405.333 0 1 0 917.333 512 405.333 405.333 0 0 0 512 106.667z m135.04 486.4a40.533 40.533 0 0 1 0 81.066h-94.507v53.974a40.533 40.533 0 1 1-81.066 0v-53.974H376.96a40.533 40.533 0 0 1 0-81.066h94.507V525.44H376.96a40.533 40.533 0 1 1 0-81.067h77.013L348.8 339.2a40.533 40.533 0 0 1 56.533-57.173L512 388.693l104.107-104.106a39.253 39.253 0 0 1 55.68 55.68L567.04 445.013h79.573a40.533 40.533 0 1 1 0 81.067h-94.08v66.987h94.507z"
            fill="currentColor" p-id="4579"></path>
        </svg>
        赞赏
      </a>
      <a-divider direction="vertical" />
      <a href="javascript:void(0)" @click="openAppDialog"
        class="flex items-center hover:text-blue-600 transition-colors">
        <svg t="1761037779137" class="w-4 h-4 mr-1" viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg" p-id="5039">
          <path
            d="M512 916.210526c223.232 0 404.210526-180.978526 404.210526-404.210526 0-223.232-180.978526-404.210526-404.210526-404.210526-223.232 0-404.210526 180.978526-404.210526 404.210526 0 223.232 180.978526 404.210526 404.210526 404.210526z m0 80.842106C244.116211 997.052632 26.947368 779.883789 26.947368 512S244.116211 26.947368 512 26.947368s485.052632 217.168842 485.052632 485.052632-217.168842 485.052632-485.052632 485.052632z m-204.934737-536.495158l68.527158 55.592421c-17.650526 21.126737-23.713684 32.336842-25.869474 49.987368-3.853474 28.887579 9.512421 60.362105 37.510737 88.360421 43.115789 43.115789 88.360421 49.556211 120.670316 17.246316 17.677474-17.677474 24.144842-40.528842 18.108632-61.197474-6.036211-19.833263-8.192-22.851368-53.894737-96.121263-24.980211-39.639579-35.301053-63.784421-38.777263-91.351579-4.742737-39.235368 7.760842-74.132211 36.648421-102.992842 59.904-59.904 146.944-50.445474 221.07621 23.713684 49.125053 49.098105 71.114105 101.241263 63.784421 150.824421-3.449263 24.980211-11.210105 43.088842-28.887579 71.087158l-68.931368-54.298947c12.045474-17.246316 16.357053-27.567158 17.650526-43.52 2.155789-24.576-9.485474-50.849684-33.17221-74.563369-37.510737-37.483789-81.893053-43.951158-109.891369-15.925894-18.108632 18.081684-21.126737 40.070737-9.916631 68.50021 5.605053 13.365895 8.192 17.677474 45.271579 76.288 26.677895 41.364211 39.181474 70.251789 43.92421 96.525474 6.467368 42.684632-6.036211 77.608421-38.346105 109.918316-30.612211 30.585263-65.077895 46.08-100.405895 46.08-44.840421-0.835368-89.653895-24.117895-135.760842-70.224842-35.328-35.328-61.197474-78.416842-68.096-112.909474-5.605053-28.887579-1.724632-57.748211 11.210105-87.04 6.036211-13.797053 12.503579-23.713684 27.567158-43.978105z"
            fill="currentColor" p-id="5040"></path>
        </svg>
        <span class="flex items-center">
          小程序
          <span
            class="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full ml-1 transform scale-90">
            NEW
          </span>
        </span>
      </a>
    </div>

    <a-modal v-model:visible="showAuthorDialog" title="关于作者">
      <div class="space-y-4 py-3">
        <!-- 微信信息 -->
        <div
          class="flex items-start p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
          <div class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-0.5">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
              </path>
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-gray-800 text-base">微信</h3>
            <p class="text-gray-600 mt-1">linglan008</p>
          </div>
        </div>

        <!-- 邮箱信息 -->
        <div
          class="flex items-start p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
          <div class="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-0.5">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
              </path>
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-gray-800 text-base">邮箱</h3>
            <a href="mailto:lihai_js@163.com"
              class="text-green-600 hover:text-green-800 hover:underline transition-colors mt-1 inline-block">
              lihai_js@163.com
            </a>
          </div>
        </div>

        <!-- GitHub信息 -->
        <div
          class="flex items-start p-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
          <div class="flex-shrink-0 w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-3 mt-0.5">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z">
              </path>
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-gray-800 text-base">GitHub</h3>
            <a href="https://github.com/CatsAndMice" target="_blank"
              class="text-gray-700 hover:text-gray-900 hover:underline transition-colors mt-1 inline-block">
              https://github.com/CatsAndMice
            </a>
          </div>
        </div>

        <!-- 网站信息 -->
        <div
          class="flex items-start p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
          <div class="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center mr-3 mt-0.5">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9">
              </path>
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-gray-800 text-base">个人网站</h3>
            <a href="https://download.linglan01.cn/" target="_blank"
              class="text-purple-600 hover:text-purple-800 hover:underline transition-colors mt-1 inline-block">
              https://download.linglan01.cn
            </a>
          </div>
        </div>
      </div>
      <template #footer>
        <a-button @click="closeAuthorDialog">关闭</a-button>
      </template>
    </a-modal>

    <!-- 赞赏弹框 -->
    <a-modal v-model:visible="showAppreciatedDialog" title="赞赏支持">
      <div class="text-center py-4">
        <p class="text-gray-600 mb-6">如果您觉得这个项目对您有帮助，欢迎赞赏支持作者的持续开发</p>
        <div class="flex justify-center space-x-8">
          <div class="text-center">
            <div class="bg-gray-100 rounded-lg p-2 inline-block mb-2">
              <img src="https://linglan008-blog.oss-cn-hangzhou.aliyuncs.com/%E6%94%AF%E4%BB%98%E5%AE%9D.JPG"
                alt="微信赞赏码" class="w-32 h-32">
            </div>
            <p class="text-gray-700 font-medium">微信赞赏</p>
          </div>
          <div class="text-center">
            <div class="bg-gray-100 rounded-lg p-2 inline-block mb-2">
              <img src="https://linglan008-blog.oss-cn-hangzhou.aliyuncs.com/%E5%BE%AE%E4%BF%A1.JPG" alt="支付宝赞赏码"
                class="w-32 h-32">
            </div>
            <p class="text-gray-700 font-medium">支付宝赞赏</p>
          </div>
        </div>
        <p class="text-sm text-gray-500 mt-4">您的支持是我继续开发的动力，感谢您的认可！</p>
      </div>
      <template #footer>
        <a-button @click="closeAppreciatedDialog">关闭</a-button>
      </template>
    </a-modal>


    <!-- 更新日志弹框 -->
    <a-modal v-model:visible="showUpdateLogDialog" title="更新日志">
      <div class="max-h-80 overflow-y-auto">
        <div>
          <div v-for="(version, index) in updateLogs" :key="index" class=" pl-4 py-1">
            <h3 class="font-bold text-lg text-gray-800">{{ version.version }}</h3>
            <p class="text-gray-500 text-sm">{{ version.date }}</p>
            <ul class="mt-2 space-y-1">
              <li v-for="(item, itemIndex) in version.changes" :key="itemIndex" class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span class="text-gray-700">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <template #footer>
        <a-button @click="closeUpdateLogDialog">关闭</a-button>
      </template>
    </a-modal>



    <!-- 更新日志弹框 -->
    <a-modal v-model:visible="showAppDialog" title="小程序">
      <div class="text-center">
        <p class="text-gray-600 mb-4">请用微信扫下方小程序码</p>
        <div class="flex justify-center">
          <img src="https://linglan008-blog.oss-cn-hangzhou.aliyuncs.com/wx.jpg" alt="微信小程序码"
            class="w-48 h-48 object-contain border border-gray-200 rounded-lg p-2 bg-white">
        </div>
      </div>
      <template #footer>
        <a-button @click="closeAppDialog">关闭</a-button>
      </template>
    </a-modal>

  </div>
</template>

<script>
import useDialog from "../hooks/useDialog.js";
import { updateLogs } from "../api/updateLog.js";
import emitter from "../utils/mitt.js";
import { onMounted } from "vue"
export default {
  name: 'ExtraArea',
  setup() {
    const { showDialog: showAuthorDialog, openDialog: openAuthorDialog, closeDialog: closeAuthorDialog } = useDialog();
    const { showDialog: showAppreciatedDialog, openDialog: openAppreciatedDialog, closeDialog: closeAppreciatedDialog } = useDialog();
    const { showDialog: showUpdateLogDialog, openDialog: openUpdateLogDialog, closeDialog: closeUpdateLogDialog } = useDialog();
    const { showDialog: showAppDialog, openDialog: openAppDialog, closeDialog: closeAppDialog } = useDialog();

    onMounted(() => {
      emitter.off("openAppDialog")
      emitter.on("openAppDialog", openAppDialog)
    })

    return {
      showAuthorDialog,
      openAuthorDialog,
      closeAuthorDialog,
      showAppreciatedDialog,
      openAppreciatedDialog,
      closeAppreciatedDialog,
      showUpdateLogDialog,
      openUpdateLogDialog,
      closeUpdateLogDialog,
      updateLogs,
      showAppDialog,
      openAppDialog,
      closeAppDialog
    };
  }
};
</script>

<style scoped>
.arco-divider-vertical {
  margin: 0 8px;
  height: 1em;
}
</style>