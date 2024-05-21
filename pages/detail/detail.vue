<template>
	<view style="padding: 20rpx;">
		<view class="box" v-if="orders.id">
			<view class="line" style="margin-bottom: 40rpx;">
				<view class="line-title">订单编号：</view>
				<view class="line-content">{{ orders.orderNo }}</view>
			</view>
			<view class="line">
				<view class="line-title">取货地址：</view>
				<view class="line-content">{{ orders.address.address + orders.address.doorNo }}</view>
			</view>
			<view class="line">
				<view class="line-title">取货联系人：</view>
				<view class="line-content">{{ orders.address.userName }}</view>
			</view>
			<view class="line" style="margin-bottom: 40rpx;">
				<view class="line-title">取货电话：</view>
				<view class="line-content">{{ orders.address.phone }}</view>
			</view>
			
			<view class="line">
				<view class="line-title">收货地址：</view>
				<view class="line-content">{{ orders.targetAddress.address + orders.targetAddress.doorNo }}</view>
			</view>
			<view class="line">
				<view class="line-title">收货联系人：</view>
				<view class="line-content">{{ orders.targetAddress.userName }}</view>
			</view>
			<view class="line" style="margin-bottom: 40rpx;">
				<view class="line-title">收货电话：</view>
				<view class="line-content">{{ orders.targetAddress.phone }}</view>
			</view>
			
			<view class="line">
				<view class="line-title">物品/快递码：</view>
				<view class="line-content">{{ orders.name }}</view>
			</view>
			<view class="line">
				<view class="line-title">物品描述：</view>
				<view class="line-content">{{ orders.descr }}</view>
			</view>
			<view class="line">
				<view class="line-title">物品图片：</view>
				<view class="line-content"><image :src="orders.img" mode="widthFix" style="width: 180rpx;"></image></view>
			</view>
			<view class="line">
				<view class="line-title">物品类型：</view>
				<view class="line-content">{{ orders.type }}</view>
			</view>
			<view class="line">
				<view class="line-title">物品重量：</view>
				<view class="line-content">{{ orders.weight }} kg</view>
			</view>
			<view class="line">
				<view class="line-title">小费：</view>
				<view class="line-content" style="color: red;">￥{{ orders.weight }}</view>
			</view>
			<view class="line">
				<view class="line-title">下单时间：</view>
				<view class="line-content">￥{{ orders.time }}</view>
			</view>
			<view class="line" style="margin-bottom: 40rpx;">
				<view class="line-title">备注：</view>
				<view class="line-content">{{ orders.comment }}</view>
			</view>
			
			<view v-if="orders.acceptId">
				<view class="line" >
					<view class="line-title">接单骑手：</view>
					<view class="line-content">{{ orders.acceptUser.name }}</view>
				</view>
				<view class="line" >
					<view class="line-title">骑手电话：</view>
					<view class="line-content">{{ orders.acceptUser.phone }}</view>
				</view>
				<view class="line" >
					<view class="line-title">骑手照片：</view>
					<view class="line-content"><image :src="orders.acceptUser.avatar" mode="widthFix" style="width: 180rpx;"></image></view>
				</view>
			</view>
			
			<view style="text-align: center;">
				<button type="primary" @click="goBack">确 定</button>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orders: {}
			}
		},
		onLoad(option) {
			this.load(option.orderId)
		},
		methods: {
			goBack() {
				uni.navigateBack()
			},
			load(orderId) {
				this.$request.get('/orders/selectById/' + orderId).then(res => {
					this.orders = res.data || {}
				})
			}
		}
	}
</script>

<style>
.line {
	display: flex;
	margin-bottom: 10rpx;
}
.line-title {
	width: 200rpx;
	font-weight: bold;
	text-align: right;
}
.line-content {
	flex: 1;
}
</style>
