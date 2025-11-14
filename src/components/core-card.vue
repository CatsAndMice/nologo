<template>
    <a-card v-if="!isEmpty(data) && !isEmpty(platform)" class="my-8 !rounded-lg shadow"
        :title="`${data.type === 'video' ? '视频' : '图集'}`" hoverable :bordered="false">
        <template #extra>
            <div v-if="data.type === 'video'" class="flex items-center">
                <a-popconfirm content="下载较慢，推荐复制链接浏览器访问下载～" ok-text="确认下载" @ok="onClick(data)" cancel-text="复制链接"
                    @cancel="copyUrl(data.url)">
                    <a-button :loading="loading" class="!rounded-lg mr-4">
                        <template #icon>
                            <icon-cloud-download />
                        </template>
                        下载
                    </a-button>
                </a-popconfirm>

                <a-button-group>
                    <a-button type="primary" :class="showCopyTitle ? '!rounded-tl-lg !rounded-bl-lg' : '!rounded-lg'"
                        @click="copyUrl(data.url)">
                        <template #icon>
                            <icon-copy />
                        </template>
                        复制链接
                    </a-button>
                    <a-dropdown v-if="showCopyTitle" position="br">
                        <a-button type="primary" class="!rounded-tr-lg !rounded-br-lg">
                            <template #icon>
                                <icon-more />
                            </template>
                        </a-button>
                        <template #content>
                            <a-doption @click="copyUrl(data.title || data.desc)">
                                <template #icon>
                                    <icon-copy />
                                </template>
                                <template #default>复制标题</template>
                            </a-doption>
                        </template>
                    </a-dropdown>
                </a-button-group>
            </div>
            <a-button-group v-else>
                <a-button :loading="loading" type="primary"
                    :class="showCopyTitle ? '!rounded-tl-lg !rounded-bl-lg' : '!rounded-lg'" @click="onClick(data)">
                    <template #icon>
                        <icon-cloud-download />
                    </template>
                    下载
                </a-button>
                <a-dropdown v-if="showCopyTitle" position="br">
                    <a-button type="primary" class="!rounded-tr-lg !rounded-br-lg">
                        <template #icon>
                            <icon-more />
                        </template>
                    </a-button>
                    <template #content>
                        <a-doption @click="copyUrl(data.title || data.desc)">
                            <template #icon>
                                <icon-copy />
                            </template>
                            <template #default>复制标题</template>
                        </a-doption>
                    </template>
                </a-dropdown>
            </a-button-group>

        </template>
        <template v-if="data.type === 'video'">
            <video controls="controls" class="w-full" style="max-height: 380px;min-height: 300px;">
                <source :src="data.url" type="video/mp4">
            </video>
        </template>
        <template v-else>
            <div class="flex flex-wrap gap-4">
                <a-image-preview-group infinite>
                    <a-card v-for="(image, index) in data.urls" :key="image" hoverable style="--border-radius-small:8px"
                        :body-style="{ display: 'none' }">
                        <template #cover>
                            <div>
                                <a-image class="cursor-pointer" fit="fill" width="120" height="120"
                                    style="--border-radius-small:0px" :src="image">
                                    <template #loader>
                                        <div class="loader-animate" />
                                    </template>
                                </a-image>
                                <div class="my-2 flex justify-center items-center gap-x-4">
                                    <a-button shape="circle" @click="copyUrl(image)">
                                        <icon-copy />
                                    </a-button>
                                    <a-popconfirm content="下载较慢，推荐复制链接浏览器访问下载～" @cancel="copyUrl(image)" ok-text="确认下载"
                                        @ok="downloadOneFile(image, `图片${index + 1}.png`)" cancel-text="复制链接">
                                        <a-button shape="circle">
                                            <icon-cloud-download />
                                        </a-button>
                                    </a-popconfirm>
                                </div>
                            </div>
                        </template>
                    </a-card>
                </a-image-preview-group>
            </div>
        </template>
    </a-card>
</template>
<script>
import { copyUrl } from "../utils/common.js";
import { isEmpty } from "lodash-es";
import { downloadOneFile } from "../utils/compressAndDownload.js"
import { unref, toRefs, watchEffect, shallowRef } from "vue";
export default {
    props: {
        loading: {
            type: Boolean,
            default: false
        },
        platform: {
            type: Object,
            default: () => ({}),
        },
        data: {
            type: Object,
            default: () => ({}),
        }
    },
    emits: ['download'],
    setup(props, { emit }) {
        const { data } = toRefs(props)
        const showCopyTitle = shallowRef(false)

        watchEffect(() => {
            const unrefData = unref(data);
            showCopyTitle.value = unrefData.title || unrefData.desc
        })

        const onClick = (data) => {
            emit('download', data)
        }
        return {
            onClick,
            copyUrl,
            isEmpty,
            showCopyTitle,
            downloadOneFile
        }
    },
}
</script>
<style scoped>
.loader-animate {
    width: 100%;
    height: 100%;
    background: linear-gradient(-60deg,
            var(--color-fill-2) 25%,
            var(--color-neutral-3) 40%,
            var(--color-fill-3) 55%);
    background-size: 400% 100%;
    animation: loop-circle 1.5s cubic-bezier(0.34, 0.69, 0.1, 1) infinite;
}

@keyframes loop-circle {
    0% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0 50%;
    }
}
</style>