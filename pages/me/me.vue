<template>
	<view style="padding: 20rpx;">
		<view style="display: flex; justify-content: center;">
			<view style="width: 200rpx; padding: 30rpx 0; text-align: center;">
				<image :src="user.avatar" style="width: 100%; height: 200rpx; border-radius: 50%;"></image>
				<view style="margin: 10rpx 0;">{{ user.name }} </view>
				<view style="color: dodgerblue; font-weight: bold; margin-left: 10rpx;" v-if="user.status === '通过'">
					<uni-icons type="vip" size="18" color="dodgerblue" style="position: relative; top: 4rpx;"></uni-icons>认证骑手
				</view>
			</view>
		</view>

		<view class="box" style="margin-bottom: 20rpx;">
			<view class="title">用户服务</view>
			<view style="display: flex;">
				<navigator url="/pages/address/address" class="grid-item">
					<image src="@/static/imgs/地址.png" style="width: 50%;" mode="widthFix"></image>
					<view>我的地址</view>
				</navigator>
				<navigator url="/pages/records/records" class="grid-item">
					<image src="@/static/imgs/积分兑换.png" style="width: 50%;" mode="widthFix"></image>
					<view>收支明细</view>
				</navigator>
				<navigator url="/pages/MyComment/MyComment" class="grid-item">
					<image src="@/static/imgs/评价.png" style="width: 50%;" mode="widthFix"></image>
					<view>评价中心</view>
				</navigator>
				<navigator url="/pages/wallet/wallet" class="grid-item">
					<image src="@/static/imgs/钱包.png" style="width: 50%;" mode="widthFix"></image>
					<view>我的钱包</view>
				</navigator>
			</view>
		</view>

		<view class="box" style="margin-bottom: 20rpx;">
			<view class="title">骑手服务</view>
			<view style="display: flex;">
				<navigator url="/pages/certification/certification"
					style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;">
					<image src="@/static/imgs/认证.png" style="width: 100rpx; height: 100rpx;"></image>
					<view>骑手认证</view>
				</navigator>
				<navigator url="/pages/acceptOrders/acceptOrders"
					style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;">
					<image src="@/static/imgs/跑腿.png" style="width: 100rpx; height: 100rpx;"></image>
					<view>骑手订单</view>
				</navigator>
			</view>
		</view>
		
		<view class="box">
			<navigator url="/pages/person/person" style="padding: 20rpx;  border-bottom: 1px solid #eee;">
				<uni-icons type="person" size="18" style="position: relative; top: 4rpx; margin-right: 10rpx;"></uni-icons>
				个人信息
			</navigator>
			<navigator url="/pages/info/info" style="padding: 20rpx;  border-bottom: 1px solid #eee;">
				<uni-icons type="medal" size="18" style="position: relative; top: 4rpx; margin-right: 10rpx;"></uni-icons>
				平台介绍
			</navigator>
			<navigator url="/pages/agreement/agreement" style="padding: 20rpx;  border-bottom: 1px solid #eee;">
				<uni-icons type="paperclip" style="position: relative; top: 4rpx; margin-right: 10rpx;"></uni-icons>用户协议
			</navigator>
			<view @click="logout()" style="padding: 20rpx; border-bottom: 1px solid #eee;"><uni-icons type="undo" style="position: relative; top: 4rpx; margin-right: 10rpx;"></uni-icons>退出登录</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: uni.getStorageSync('xm-user')
			}
		},
		onShow() {
			
		},
		methods: {
			logout() {
				uni.removeStorageSync('xm-user')
				uni.reLaunch({
					url: '/pages/login/login'
				})
			}
		}
	}
</script>

<style>
	.title {
		font-size: 36rpx;
		font-weight: bold;
		margin-bottom: 20rpx;
	}

	.grid-item {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		grid-gap: 10rpx;
	}
</style>