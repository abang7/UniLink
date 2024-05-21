<template>
	<view style="padding: 20rpx;">
		<!-- 订单列表 -->
		<view>
			<view class="box" v-for="item in ordersList" :key="item.id" style="margin-bottom: 10rpx;"  @click="goDetail(item.id)">
				<view style="display: flex; align-items: center; margin-bottom: 30rpx;">
					<uni-tag text="快递" type="primary" size="mini" v-if="item.type === '代拿快递'"></uni-tag>
					<uni-tag text="餐品" type="success" size="mini" v-if="item.type === '代取餐品'"></uni-tag>
					<uni-tag text="零食" type="warning" size="mini" v-if="item.type === '代买零食'"></uni-tag>
					<uni-tag text="鲜花" type="error" size="mini" v-if="item.type === '代送鲜花'"></uni-tag>
					<view style="font-size: 32rpx; margin-left: 10rpx; flex: 1;">{{ item.name }}</view>
					<view><text style="color: #666;">跑腿费</text> <text style="font-size: 36rpx; color: red;">￥{{ item.price }}</text></view>
				</view>
				<view style="display: flex;">
					<view style="flex: 1;">
						<text style="margin-right: 20rpx;" v-if="item.status === '待送达' || item.status === '待收货'">已下单{{ item.minutes }}分钟</text>
						
						<text style="color: dodgerblue" v-if="item.status === '待送达'">{{ item.status }}</text>
						<text style="color: mediumpurple;" v-if="item.status === '待收货'">{{ item.status }}</text>
						<text style="color: indianred;" v-if="item.status === '待评价'">{{ item.status }}</text>
						<text style="color: green;" v-if="item.status === '已完成'">{{ item.status }}</text>
					</view>
					<view style="flex: 1; text-align: right;">
						<uni-tag text="送达" type="primary" @click.native.stop="changeStatus(item, '待收货')" v-if="item.status === '待送达'"></uni-tag>
					</view>
				</view>
			</view>
		</view>
		<!-- 订单列表结束 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ordersList: [],
				user: uni.getStorageSync('xm-user'),
			}
		},
		onLoad() {
			this.loadOrders()
		},
		methods: {
			goDetail(orderId) {
				uni.navigateTo({
					url: '/pages/detail/detail?orderId=' + orderId
				})
			},
			changeStatus(orders, status) {
				let form = JSON.parse(JSON.stringify(orders))
				form.status = status
				this.$request.put('/orders/update', form).then(res => {
					if (res.code === '200') {
					  uni.showToast({
					    icon: "success",
					    title: '操作成功'
					  })
					  this.loadOrders()
					} else {
					  uni.showToast({
					    icon: "error",
					    title: res.msg
					  })
					}
				})
			},
			loadOrders() {
				this.$request.get('/orders/selectAll', { acceptId: this.user.id}).then(res => {
					this.ordersList = res.data || []
				})
			}
		}
	}
</script>

<style>

</style>
