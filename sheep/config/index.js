export let baseUrl;
export let version;
if(process.env.NODE_ENV === 'devalopment'){
	baseUrl = import.meta.env.SHOPRO_DEV_BASE_URL;
}else{
	baseUrl = import.meta.env.SHOPRO_BASE_URL;
}

version = import.meta.env.SHOPRO_VERSION;
if(typeof baseUrl === 'undefined'){
	console.error('请检查.env配置文件是否存在');
}else{
	console.log(`[Shopro ${version}] https://www.sheepjs.com`);
}

export const apiPath = import.meta.env.SHOPRO_API_PATH;

export const staticUrl = import.meta.env.SHOPRO_STATIC_URL;

export default {
	baseUrl,
	apiPath,
	staticUrl,
}