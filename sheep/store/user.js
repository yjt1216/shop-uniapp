import { defineStore } from 'pinia';
import userApi from '@/sheep/api/user.js';


// 默认用户信息
const defaultUserInfo = {
	avatar: '', // 头像
	nickname: '', // 昵称
	gender: 0, // 性别
	mobile: '', // 手机号
	money: '--', // 余额
	commission: '--', // 佣金
	score: '--', // 积分
	verification: {}, // 认证字段
};

// 默认订单、优惠券等其他资产信息
const defaultNumData = {
	coupons_num: '--',
	order_num: {
		aftersale: 0,
		nocomment: 0,
		noget: 0,
		nosend: 0,
		unpaid: 0,
	},
};