import { defineStore } from 'pinia'


const app = defineStore({
	id:'app',
	state: () => ({
		info: {
			name: '',
			logo: '',
			version: '',
			cdnurl: '',
			filesystem: '',
			
		},
		platform: {
			payment: [],
			recharge_payment: [],
			share: {
				methods: [],
				forwardInfo: {},
				posterInfo: {},
				linkAddress: '',
			},
			auto_login: 0,
			bind_mobile: 0,
		},
		chat: {},
		template: {
			basic: {},
			home: {
				style:{},
				data: [],
			},
			user: {
				style: {},
				data: [],
			}
		},
		shareInfo: {},
		has_wechat_trade_managed: 0,
	}),
	actions: {
		
	},
	persist: {
		enabled: true,
		strategies: [
			{
				key: 'app-store'
			}
		]
	}
});

export default app;