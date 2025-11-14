import createApp from '@utils/createApp';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';
import Button from '@arco-design/web-vue/lib/button';
import Cord from "@arco-design/web-vue/lib/card";
import Link from "@arco-design/web-vue/lib/link";
import Image from "@arco-design/web-vue/lib/image";
import Modal from "@arco-design/web-vue/lib/modal";
import Menu from "@arco-design/web-vue/lib/menu";
import Dropdown from "@arco-design/web-vue/lib/dropdown";
import Divider from "@arco-design/web-vue/lib/divider";
import Popconfirm from "@arco-design/web-vue/lib/popconfirm";
import { IconQuestionCircle, IconCloudDownload, IconCopy ,IconMore} from '@arco-design/web-vue/lib/icon';

createApp(App, {
    components: [
        Button,
        Cord,
        Link,
        Modal,
        Dropdown,
        Menu,
        Image,
        Divider,
        Popconfirm,
        IconQuestionCircle,
        IconCloudDownload,
        IconCopy,
        IconMore
    ],
})
