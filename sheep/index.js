import $api from '@/sheep/api';
import $url from '@/sheep/url/index.js';
import $router from '@/sheep/router/index.js';
import $platform from '@/sheep/platform/index.js';
import $helper from '@/sheep/helper';
import zIndex from '@/sheep/config/zIndex.js';
import $store from '@/sheep/store';
import dayjs from 'dayjs';

import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');
dayjs.extend(relativeTime);
dayjs.extend(duration);

const sheep = {
	$api,
	$store,
	$url,
	$router,
	$platform,
	$helper,
	$zIndex: zIndex,
};

export async function ShoproInit(){
	await $store('app').init();
	$platform.load();
	if(process.env.NODE_ENV === 'development'){
		ShoproDebug();
	}
};
// 开发模式
function ShoproDebug(){
	// #ifdef H5
	
	// #endif
	
	$api.app.pageSync(ROUTES);
}

export default sheep;