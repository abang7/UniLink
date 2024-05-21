<template>
	<view style="padding: 20rpx;">
		<view class="box">
			<uni-row :gutter="10">
				<uni-col :span="8" v-for="item in items" :key="item">
					<view  class="charge-item" :class="{ 'charge-item-active' : current === item }" @click="select(item)">
						￥{{ item }}
					</view>
				</uni-col>
			</uni-row>
			<view style="margin: 40rpx 0;"><button type="primary" style="background-color: #f44336;" @click="charge">支 付</button></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 6,
				items: [6, 18, 68, 288, 588, 999]
			}
		},
		methods: {
			select(money) {
				this.current = money
			},
			charge() {
				this.$request.put('/user/charge/' + this.current).then(res => {
					 if (res.code === '200') {
					   uni.showToast({
						 title: '操作成功'
					   })
					 } else {
					   uni.showToast({
						 icon: 'error',
						 title: res.msg
					   })
					 }
				})
			}
		}
	}
</script>

<style>
	.charge-item {
		border: 2rpx solid #666;
		padding: 40rpx 0;
		text-align: center;
		border-radius: 10rpx;
		margin-bottom: 10rpx;
		color: #666;
		font-size: 36rpx;
	}
	.charge-item-active {
		background-color: #f44336;
		border-color: #f44336;
		color: #fff;
	}
</style>