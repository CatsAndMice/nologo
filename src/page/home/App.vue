<template>
    <div v-if="isMobileDevice" class="fixed left-0 right-0 top-1/2 translate-y-[-50%]">
        <div class="text-center py-6 px-4">
            <p class="text-lg mb-2 font-medium">请用微信扫下方小程序码</p>
            <p class="text-gray-600 mb-4">移动端功能请使用微信小程序体验</p>
            <div class="flex justify-center">
                <img src="https://linglan008-blog.oss-cn-hangzhou.aliyuncs.com/wx.jpg" alt="微信小程序码"
                    class="w-48 h-48 object-contain border border-gray-200 rounded-lg p-2 bg-white">
            </div>
        </div>
    </div>
    <div v-else class="min-h-screen" style="background-image: url('https://snapany.com/images/hero-pattern.svg');">
        <div class="fixed w-full z-10 bg-white shadow-sm">
            <a-menu v-model:selected-keys="menuKey" @menu-item-click="onMenuItemClick" mode="horizontal"
                :class="[isUtools ? null : 'px-8']" :default-selected-keys="['1']">
                <a-menu-item key="0" :style="{ padding: 0, marginRight: isUtools ? '40px' : '80px' }" disabled>
                    <div class="flex items-center">
                        <img :src="LogoSvg" alt="logo" class="w-8 h-8" />
                        <span class="ml-3 text-xl font-bold text-black">去水印下载鸭</span>
                    </div>
                </a-menu-item>
                <a-menu-item key="1">首页</a-menu-item>
                <a-menu-item key="2">使用手册</a-menu-item>
                <a-menu-item key="feedback">问题反馈</a-menu-item>
                <a-menu-item key="addon">插件</a-menu-item>
                <div class="float-right h-8">
                    <a-dropdown position="br">
                        <RedDot feature-key="mainMenu" :auto-hide="false" dotClass="top-0 right-0">
                            <a-button type="text">
                                <template #icon>
                                    <svg t="1759646360393" class="icon" viewBox="0 0 1029 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="8523" width="18" height="18">
                                        <path
                                            d="M643.645496 1023.99488 113.833257 1023.99488c-30.396199 0-58.031151-11.271775-79.914779-32.597638C11.728384 969.774108-2.3e-05 942.054369-2.3e-05 911.233205l0-124.322548 1.166609-4.899351c5.90149-24.79198 17.650329-44.099262 34.923705-57.386553 11.227848-8.634135 24.849187-13.195352 39.399113-13.195352 15.645028 0 31.811045 5.112854 49.416425 15.631747 3.524345 2.049228 5.667556 3.097338 6.73916 3.581552l4.203675 0.700782 5.771753 2.885877c12.707051 6.354036 25.061669 9.44218 37.76872 9.44218 13.633597 0 25.891167-2.395533 37.475536-7.323486 11.839756-5.038281 21.822336-11.714105 30.51572-20.408512 8.781238-8.782259 15.500988-18.690266 20.545399-30.295066 4.838058-11.128758 7.190685-23.107445 7.190685-36.626628 0-13.638705-2.395533-25.895253-7.321443-37.470428-5.040324-11.844864-11.716148-21.827444-20.411576-30.522871-8.697471-8.697471-18.680051-15.374317-30.522871-20.412598-11.576196-4.927953-23.831724-7.322465-37.47145-7.322465-12.730547 0-25.006505 2.678503-37.527634 8.188739l-1.820401 0.800895-1.886802 0.628253c-3.394608 1.131876-4.863596 1.838789-5.123069 1.968525-9.249108 4.623532-18.446116 8.92834-27.345853 12.796948-15.133231 6.58082-29.98145 9.13878-43.887801 7.592154-19.025334-2.107456-35.750139-12.615112-47.064819-29.582024-8.90178-13.350627-13.566174-30.509591-14.68375-54.005225l-0.049035-2.039013 0-112.840335c0-30.608681 11.592541-58.379499 33.52214-80.310119 21.935728-21.931641 49.704502-33.521118 80.31114-33.521118l96.492482 0c-6.217149-19.393092-9.363521-39.975267-9.363521-61.338927 0-29.5003 5.734977-57.534677 17.047615-83.324711 11.066444-25.231246 26.191502-47.537796 44.954298-66.301613 18.766882-18.764839 41.073433-33.889898 66.301613-44.955319 25.785947-11.310593 53.459718-17.046593 82.250041-17.046593 28.789302 0 56.462051 5.734977 82.252085 17.046593 25.231246 11.066444 47.538818 26.192524 66.301613 44.955319 18.763817 18.763817 33.888877 41.072411 44.953276 66.305699 11.310593 25.782882 17.047615 53.819303 17.047615 83.320624 0 21.575121-2.948191 42.052077-8.809841 61.338927l30.38394 0c30.821164 0 58.540903 11.727385 80.161994 33.916458 21.325863 21.889759 32.595595 49.522666 32.595595 79.914779l0 69.794291c20.424857-7.043583 42.091917-10.607768 64.562937-10.607768 27.951631 0 54.97161 5.50615 80.307054 16.365219 25.004462 10.716052 47.241547 25.709331 66.09424 44.562023 18.853714 18.850649 33.848014 41.089778 44.565088 66.095261 10.858048 25.338508 16.364198 52.356444 16.364198 80.303989 0 28.763763-5.543948 56.051388-16.476569 81.104884-10.71503 24.553959-25.672556 46.524419-44.456804 65.303559-18.845542 18.847585-41.082627 33.840864-66.08811 44.55998-25.344638 10.860091-52.362573 16.365219-80.309097 16.365219-22.474085 0-44.140123-3.564185-64.560893-10.607768l0 61.19591c0 30.601531-11.402533 58.184383-32.975611 79.766655C701.84418 1012.587239 674.257242 1023.99488 643.645496 1023.99488zM85.810117 803.534327l0 107.699899c0 7.753559 2.316873 13.1739 7.994645 18.707632 5.930093 5.777883 11.920458 8.243903 20.028496 8.243903l529.812238 0c7.986472 0 13.519183-2.274991 19.095821-7.85265 5.574594-5.577659 7.851628-11.112413 7.851628-19.098886L670.592944 684.116237l70.693255 60.092638c10.82638 9.203138 23.426168 16.797335 37.448976 22.574196 13.158576 5.417276 26.971966 8.051852 42.228805 8.051852 16.490871 0 31.70276-3.084058 46.507053-9.426857 15.132209-6.48786 27.961847-15.1128 39.217277-26.36823 11.325917-11.323874 19.986612-24.061572 26.482644-38.944523 6.267205-14.361961 9.313464-29.66477 9.313464-46.783893 0-16.490871-3.084058-31.701739-9.426857-46.501945-6.486838-15.135274-15.111778-27.964912-26.367209-39.21932-11.258495-11.257473-24.087111-19.882414-39.223407-26.369252-14.799185-6.341778-30.011075-9.425835-46.503988-9.425835-15.257861 0-29.073293 2.634576-42.237999 8.054916-14.014635 5.770732-26.615445 13.365951-37.444889 22.571131l-70.69019 60.079357L670.589879 386.798402c0-8.109058-2.46602-14.099424-8.245946-20.03156-5.528624-5.674707-10.947943-7.989537-18.701502-7.989537L448.509149 358.777305l60.409317-70.762719c18.397081-21.550604 27.340745-46.536678 27.340745-76.386348 0-17.810712-3.212773-33.790807-9.821175-48.855595-6.857661-15.638898-15.703255-28.752526-27.046539-40.093767-11.343283-11.343283-24.456912-20.191943-40.091724-27.049604-15.065809-6.608402-30.696535-9.819132-47.78399-9.819132s-32.717159 3.211751-47.780925 9.819132c-15.633791 6.856639-28.74844 15.704277-40.093767 27.049604-11.342261 11.342261-20.1899 24.454869-27.046539 40.089681-6.609424 15.067852-9.821175 31.049991-9.821175 48.85866 0 14.848219 2.390425 28.228472 7.30612 40.904876 5.194578 13.39864 12.227945 25.6889 20.904984 36.53571l55.770462 69.70848L113.833257 358.776283c-7.986472 0-13.676502 2.431287-19.637242 8.391006-5.956654 5.955632-8.38692 11.643619-8.38692 19.631113l0 105.644542c2.926738-1.393393 5.875952-2.832756 8.83538-4.312981 4.231257-2.11665 8.981461-4.082111 14.468203-5.981171 22.750924-9.734343 46.382424-14.668427 70.274419-14.668427 25.064734 0 48.978181 4.769613 71.075314 14.176039 21.832552 9.290991 41.212363 22.308593 57.594949 38.692201 16.382586 16.381564 29.40121 35.761376 38.694245 57.600057 9.403361 22.097133 14.172975 46.009559 14.172975 71.070206 0 25.174039-4.81354 49.007806-14.306797 70.840357-9.284862 21.357531-22.258538 40.454374-38.560421 56.756257-16.3785 16.380543-35.759333 29.400189-57.601078 38.694245-22.107348 9.405404-46.017731 14.172975-71.069185 14.172975-24.391532 0-48.470471-5.489806-71.650446-16.327422C101.166046 811.214335 94.074451 808.097589 85.810117 803.534327z"
                                            p-id="8524"></path>
                                    </svg>
                                </template>
                            </a-button>
                        </RedDot>

                        <template #content>
                            <a-doption @click="openMorePlatform('web')">
                                <template #icon>
                                    <svg t="1759647034278" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="12597" width="16" height="16">
                                        <path
                                            d="M679.6 876.3h-51.5v-50H422v50h-51.5c-14.2 0-25.8 11.2-25.8 25s11.5 25 25.8 25h309c14.2 0 25.8-11.2 25.8-25s-11.5-25-25.7-25z m128.7-750.2H216c-56.9 0-103 44.8-103 100v350.1h798.3V226.1c0-55.3-46.1-100-103-100zM113 676.2c0 55.2 46.1 100 103 100h592.3c56.9 0 103-44.8 103-100v-50H113v50z"
                                            p-id="12598"></path>
                                    </svg>
                                </template>
                                <span class="ml-2">Web端</span>
                            </a-doption>
                            <a-doption @click="openMorePlatform('utools')">
                                <template #icon>
                                    <svg t="1759646973869" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="11398" width="16" height="16">
                                        <path
                                            d="M512 0C229.376 0 0 229.376 0 512s229.376 512 512 512 512-229.376 512-512S794.624 0 512 0zM215.552 229.376c20.992-18.944 45.056-30.208 73.216-30.72 21.504-1.024 41.472 5.12 60.416 15.872 36.864 20.48 73.216 42.496 111.104 60.416 30.72 14.848 29.696 28.672 5.12 47.616-38.4 29.696-79.36 35.328-122.88 12.8-41.472-21.504-81.408-46.08-122.88-67.072-24.576-12.288-21.504-23.552-4.096-38.912z m-85.504 158.72c4.096-24.064 10.752-35.84 37.888-19.968 71.68 41.472 144.896 79.872 217.088 120.832 35.328 19.968 54.784 50.688 56.832 92.672-2.048 16.896 2.048 38.912-14.848 48.64-14.336 8.192-27.136-8.704-39.936-15.872-66.048-35.84-132.608-71.68-197.632-109.056-47.104-27.136-67.584-70.144-59.392-117.248zM423.424 906.24c-26.624-9.216-48.128-24.064-62.976-48.64-11.776-18.432-16.384-38.4-16.384-60.416 0-41.984 0.512-84.48-2.56-126.464-2.56-34.304 10.24-39.936 38.912-28.16 44.544 18.432 70.144 51.2 71.68 100.352 1.536 46.592 0.512 93.696 3.072 140.288 1.536 27.648-9.728 30.72-31.744 23.04z m61.952-498.688c-13.312-10.24-34.304-17.92-33.792-37.888 0.512-16.384 21.504-18.944 33.792-26.112 64.512-38.4 129.536-76.8 195.072-113.664 47.104-26.624 94.208-22.016 130.56 8.704 18.432 15.872 25.088 27.648-2.048 42.496-72.192 40.448-143.36 83.456-215.04 124.416-34.816 20.48-71.68 21.504-108.544 2.048z m118.272 494.592c-22.528 8.192-36.352 8.704-36.352-22.528 0.512-82.944-2.56-165.888-3.072-248.32-0.512-40.448 16.896-72.704 52.224-95.232 15.36-6.656 32.768-20.992 49.664-11.264 13.824 8.192 5.632 28.16 6.144 42.496 2.048 75.264 3.584 150.528 3.584 225.792-0.512 53.76-27.648 92.16-72.192 109.056z m243.712-386.048c-36.864 20.992-73.728 40.96-109.056 64.512-28.672 18.944-39.936 10.752-43.52-19.968-5.632-48.128 10.24-86.528 51.712-111.616 39.936-24.576 81.408-46.08 120.832-71.168 23.552-14.848 31.744-6.656 35.84 16.384 5.12 27.648 2.56 53.76-11.264 78.848-10.24 18.432-25.6 32.256-44.544 43.008z"
                                            p-id="11399"></path>
                                    </svg>
                                </template>
                                <span class="ml-2">Utools插件</span>
                            </a-doption>

                            <a-doption @click="openMorePlatform('mini-program')">
                                <template #icon>
                                    <svg t="1761038644194" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="5204" width="16" height="16">
                                        <path
                                            d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z m256.717 460.186a151.962 151.962 0 0 1-87.347 65.74 83.251 83.251 0 0 1-24.474 4.096 29.082 29.082 0 0 1 0-58.163 15.667 15.667 0 0 0 6.451-1.229 91.443 91.443 0 0 0 55.91-40.96 75.264 75.264 0 0 0 11.06-39.628c0-45.978-42.496-83.866-94.31-83.866a105.267 105.267 0 0 0-51.2 13.414 81.92 81.92 0 0 0-43.725 70.452v244.224a138.445 138.445 0 0 1-72.704 120.422 159.642 159.642 0 0 1-79.77 20.48c-84.378 0-153.6-63.488-153.6-142.029a136.192 136.192 0 0 1 19.763-69.837 151.962 151.962 0 0 1 87.347-65.74 85.914 85.914 0 0 1 24.474-4.096 29.082 29.082 0 1 1 0 58.163 15.667 15.667 0 0 0-6.451 1.229 95.949 95.949 0 0 0-55.91 40.96 75.264 75.264 0 0 0-11.06 39.628c0 45.978 42.496 83.866 94.925 83.866a105.267 105.267 0 0 0 51.2-13.414 81.92 81.92 0 0 0 43.622-70.452V390.35a138.752 138.752 0 0 1 72.807-120.525 151.245 151.245 0 0 1 79.155-21.504c84.378 0 153.6 63.488 153.6 142.029a136.192 136.192 0 0 1-19.763 69.837z"
                                            p-id="5205" fill="#2c2c2c"></path>
                                    </svg>
                                </template>
                                <span class="ml-2">小程序</span>
                            </a-doption>
                        </template>
                    </a-dropdown>
                </div>
            </a-menu>
        </div>
        <template v-if="menuKey.includes('1')">
            <div class="p-8 pt-16 flex flex-col items-center bg-download">
                <div class="mt-8 w-full"
                    :style="[isUtools ? 'max-width: 600px;' : 'max-width: 750px;', 'min-width: 400px;']">
                    <div class="text-center mb-10">
                        <h1 class="text-3xl font-bold  flex items-center justify-center gap-2">
                            <span class="text-blue-500 mr-2">
                                <img :src="LogoSvg" alt="logo" class="w-8 h-8" />
                            </span>
                            去水印下载鸭
                        </h1>
                    </div>
                    <div class="mb-6">
                        <div class="flex items-center gap-2 mb-3">
                            <span class="text-red-500">*</span>
                            <label class="text-gray-700 font-medium flex items-center ">
                                <span>请输入 URL 地址</span>
                            </label>
                        </div>

                        <div class="relative">
                            <div class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1">
                                    </path>
                                </svg>
                            </div>
                            <input ref="urlInputRef" :value="urlInput" @input="urlInput = $event.target.value"
                                type="text" placeholder="请输入平台对应的 URL 地址 ~"
                                class="w-full pl-12 pr-10 py-3 border border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none text-gray-700"
                                @keyup.enter="getDownloadUrl" @focus="showHistory" @blur="hideHistoryDelayed" />

                            <url-history ref="urlHistoryRef" v-model="urlInput" @select="onHistorySelect" />
                            <a-button v-if="urlInput" @click="urlInput = ''"
                                class="!absolute !right-2 !top-1/2 !transform !-translate-y-1/2 !p-0 !w-6 !h-6 !text-gray-400 "
                                aria-label="清空输入" shape="circle" type="text">
                                <template #icon>
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </template>
                            </a-button>
                        </div>
                    </div>

                    <!-- Platform Support -->
                    <div v-if="!isEmpty(platform)" class="mb-8">
                        <p class="text-gray-600 mb-4">支持平台列表如下：(可点击图标进行测试)</p>
                        <div class="flex flex-wrap gap-4">
                            <div v-for="p in platform" :key="p.platformName" @click="urlInput = p.url"
                                class="flex items-center gap-3 px-2 py-1 rounded-lg cursor-pointer transition-all duration-200 hover:bg-white hover:shadow-md   group">
                                <div class=" rounded flex items-center justify-center">
                                    <a-image :preview="false" width="24" height="24" :src="p.icon" />
                                </div>
                                <span class="text-gray-700 group-hover:text-blue-600 transition-colors">{{ p.appName
                                    }}</span>
                            </div>
                        </div>
                    </div>

                    <a-button size="large" :disabled="downloading" class="w-full !h-10 !rounded-lg"
                        @click="getDownloadUrl" :loading="loading" type="primary">
                        开始解析
                    </a-button>
                    <extra-area />
                    <core-card :platform="curPlatformRef" :data="obj" :loading="downloading" @download="download" />
                    <user-comment />
                    <down-question />
                </div>
            </div>

            <a-modal v-model:visible="showDialog" hide-cancel ok-text="关闭" @ok="closeDialog">
                <template #title>
                    {{ tip.title }}
                </template>
                <div> {{ tip.message }}</div>
                <div class="flex justify-center mt-4">
                    <img :src="weixinImage" class="w-40" alt="微信二维码">
                </div>
            </a-modal>

        </template>

        <template v-else-if="menuKey.includes('3')">
            <terms-service />
        </template>
        <template v-else-if="menuKey.includes('4')">
            <privacy-policy />
        </template>

        <template v-else-if="menuKey.includes('5')">
            <contact-us />
        </template>

        <footer-nav @change="changeMenuKey" />
        <!-- 添加回到顶部组件 -->
        <back-to-top :visibility-height="300" :back-top-duration="500" />
    </div>
</template>
<script>
import { shallowRef, unref, computed, ref, onBeforeMount } from 'vue';
import { isEmpty, isArray } from "lodash-es";
import Notification from '@arco-design/web-vue/es/notification';
import { tip1, tip2 } from "@utils/common.js";
import LogoSvg from "@/assets/logo.svg";
import weixinImage from "@/assets/weixin.png";
import { isMobile } from "@utils/device";
import DownQuestion from '@components/down-question.vue';
import UserComment from '@components/user-comment.vue';
import RedDot from '@components/red-dot.vue';
import CoreCard from '@components/core-card.vue';
import FooterNav from '@components/footer-nav.vue';
import TermsService from '@components/terms-service.vue';
import PrivacyPolicy from '@components/privacy-policy.vue';
import ExtraArea from '@components/extra-area.vue';
import ContactUs from '@components/contact-us.vue';
import BackToTop from '@components/back-to-top.vue'; // 新增导入
import useList from '@/hooks/useList.js';
import { getPlatform, getDetail } from "@/api/index.js";
import { openLink, openMorePlatform, openUseManual, openFeedback, openAddon } from "@utils/open.js";
import useDownload from '@/hooks/useDownload.js';
import useObject from '@/hooks/useObject.js';
import useDialog from "@/hooks/useDialog.js";
import useUrlHistory from "@/hooks/useUrlHistory.js";
import UrlHistory from '@components/url-history.vue';

export default {
    components: {
        DownQuestion,
        UserComment,
        FooterNav,
        TermsService,
        PrivacyPolicy,
        ContactUs,
        ExtraArea,
        CoreCard,
        RedDot,
        BackToTop,
        UrlHistory
    },
    setup() {
        const urlInput = shallowRef('');
        const curPlatformRef = shallowRef({});
        const menuKey = shallowRef(['1'])
        const tip = ref(tip1);
        const { list: platform, getList } = useList(getPlatform);
        const { showDialog, openDialog, closeDialog } = useDialog()
        const { urlInputRef, urlHistoryRef, showHistory, hideHistoryDelayed, onHistorySelect, addToHistory } = useUrlHistory();
        const { obj, loading, getObject } = useObject(async url => {
            return await getDetail(url, {
                apiFail: (result) => {
                    Notification.error({
                        title: '错误',
                        content: result?.message,
                    });
                },
                codeFail: () => {
                    tip.value = tip2;
                    openDialog()
                }
            })
        });

        const { downloading, download } = useDownload({ platform: curPlatformRef });

        const isUtools = computed(() => {
            return window.utools !== undefined;
        });

        // 使用封装的移动端检测方法
        const isMobileDevice = computed(() => {
            return isMobile() && !isUtools.value;
        });

        const getDownloadUrl = async () => {
            hideHistoryDelayed();
            if (unref(loading)) return;
            const unrefUrlInput = unref(urlInput);
            let unrefUrl = addToHistory(unrefUrlInput);
            if (isEmpty(unrefUrl)) return;
            const curPlatform = unref(platform).find(p => {
                if (isArray(p.platformName)) {
                    return p.platformName.some(name => unrefUrl.includes(name));
                }

                if (unrefUrl.includes(p.platformName)) return true;
            })

            if (!curPlatform) {
                tip.value = tip1;
                openDialog()
                return;
            }
            curPlatformRef.value = curPlatform;
            obj.value = {}
            getObject(unrefUrl)
        }
        const onMenuItemClick = (key) => {
            if (key == '2') {
                menuKey.value = ['1']
                openUseManual()
                return
            }
            if (key == 'feedback') {
                menuKey.value = ['1']
                openFeedback()
                return
            }

            if (key == 'addon') {
                menuKey.value = ['1']
                openAddon()
                return
            }

        }
        const changeMenuKey = (value) => {
            menuKey.value = [value];
        }

        onBeforeMount(getList)
        return {
            showHistory,
            urlInputRef,
            urlHistoryRef,
            onHistorySelect,
            hideHistoryDelayed,
            download,
            changeMenuKey,
            openMorePlatform,
            weixinImage,
            menuKey,
            LogoSvg,
            showDialog,
            openDialog,
            closeDialog,
            onMenuItemClick,
            curPlatformRef,
            urlInput,
            loading,
            platform,
            obj,
            tip,
            isUtools,
            downloading,
            getDownloadUrl,
            isMobileDevice,
            isEmpty,
            openLink
        }
    },
}
</script>
<style>
html,
body {
    margin: 0;
    padding: 0;
    background-color: #fff;
}

.bg-download {
    background-image: linear-gradient(to bottom, #EBF5FF, transparent);
}
</style>
