<template>
	<view style="padding: 20rpx;">
		<view style="background-color: dodgerblue; border-radius: 10rpx; padding: 80rpx; 
			text-align: center; color: #fff; font-size: 40rpx; margin-bottom: 20rpx;">
			余额 <text style="color: gold; margin-left: 10rpx;">{{ account }}</text>
		</view>
		<view>
			<button type="primary" @click="charge">充 值</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				account: 0,
				user: uni.getStorageSync('xm-user')
			}
		},
		onShow() {
			this.load()
		},
		methods: {
			charge() {
				uni.navigateTo({
					url: '/pages/charge/charge'
				})
			},
			load() {
				this.$request.get('/user/selectById/' + this.user.id).then(res => {
					this.account = res.data.account || 0
				})
			}
		}
	}
</script>

<style>

</style>
