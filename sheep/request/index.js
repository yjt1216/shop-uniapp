/* 
 * request
 * @description 网络请求拦截 错误处理
 */
import Request from 'luch-request'
import {baseUrl ,apiPath} from '@/sheep/config/index.js'
import $store from '@/sheep/store/index.js'

const options = {
	/* 操作成功消息 默认不显示false */
	showSuccess: false,
	/* 成功提醒 默认使用后端返回值 */
	successMsg: '',
	/* 显示失败消息 默认显示true */
	showError: true,
	/* 失败消息提醒 默认显示后端返回信息 */
	errorMsg: '',
	/* 显示请求时loading 默认显示true */
	showLoading: true,
	/* 加载提示 */
	loadingMsg: '加载中',
	/* 需要授权才能请求 默认放开false */
	auth: false
};

/* loading全局实例 */
let LoadingInstance = {
	target: null,
	count: 0
}

/* 关闭loading */
function closeLoading() {
	if(LoadingInstance.count > 0) LoadingInstance.count--;
	if(LoadingInstance.count === 0) uni.hideLoading();
}

/* 
 * @description 请求配置
 */
const http = new Request({
	baseURL: baseUrl,
	timeout: 8000,
	method: 'GET',
	header: {
		Accept: 'text/json',
		'Content-Type':'application/json;charset=UTF-8',
	},
	custom: options
});

/* 请求拦截 */
http.interceptors.request.use((config) => {
	
})