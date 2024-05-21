<template>
	<view style="padding: 20rpx;">
		
		
		<view style="margin: 20rpx 0;">
			<uni-notice-bar show-icon :text="notice" />
		</view>
		
		<!-- 跑腿分类 -->
		<view class="box" style="margin: 20rpx 0;">
			<view style="display: flex;">
				<view class="category-item" @click="preOrders('代拿快递')">
					<image src="@/static/imgs/deliver.png" mode="widthFix" style="width: 50%;"></image>
					<text>代拿快递</text>
				</view>
				<view class="category-item" @click="preOrders('代取餐品')">
					<image src="@/static/imgs/food.png" mode="widthFix" style="width: 50%;"></image>
					<text>代取餐品</text>
				</view>
				<view class="category-item" @click="preOrders('代买零食')">
					<image src="@/static/imgs/零食.png" mode="widthFix" style="width: 50%;"></image>
					<text>代买零食</text>
				</view>
				<view class="category-item" @click="preOrders('代送鲜花')">
					<image src="@/static/imgs/car.png" mode="widthFix" style="width: 50%;"></image>
					<text>拼车</text>
				</view>
			</view>
		</view>
		<!-- 跑腿分类结束 -->
		
		<!-- 待接单列表 -->
		<view>
			<view class="box" style="color: dodgerblue; margin-bottom: 10rpx; font-weight: bold; font-size: 32rpx;">订单</view>
			<view class="box" v-for="item in ordersList" :key="item.id" style="margin-bottom: 10rpx;"  @click="goDetail(item.id)">
				<view style="display: flex; align-items: center; margin-bottom: 30rpx;">
					<uni-tag text="快递" type="primary" size="mini" v-if="item.type === '代拿快递'"></uni-tag>
					<uni-tag text="餐品" type="success" size="mini" v-if="item.type === '代取餐品'"></uni-tag>
					<uni-tag text="零食" type="warning" size="mini" v-if="item.type === '代买零食'"></uni-tag>
					<uni-tag text="拼车" type="error" size="mini" v-if="item.type === '代送鲜花'"></uni-tag>
					<view style="font-size: 32rpx; margin-left: 10rpx; flex: 1;">{{ item.name }}</view>
					<view><text style="color: #666;">跑腿费</text> <text style="font-size: 36rpx; color: red;">￥{{ item.price }}</text></view>
				</view>
				<view style="display: flex;">
					<view style="flex: 1;">
						<text>已下单{{ item.minutes }}分钟</text>
						<text style="margin-left: 20rpx; color: orange;">{{ item.status }}</text>
					</view>
					<view style="flex: 1; text-align: right;">
						<uni-tag text="接单" type="primary" @click.native.stop="acceptOrders(item)"></uni-tag>
					</view>
				</view>
			</view>
		</view>
		<!-- 待接单列表结束 -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgs: [
				  require('@/static/imgs/banner1.png'),
				  require('@/static/imgs/banner2.png'),
				],
				notice: '',
				ordersList: [],
				inter: null
			}
		},
		onShow() {
			this.load()
		},
		onHide() {
			clearInterval(this.inter)
			this.inter = null
		},
		methods: {
			goDetail(orderId) {
				uni.navigateTo({
					url: '/pages/detail/detail?orderId=' + orderId
				})
			},
			acceptOrders(row) {
				this.$request.put('/orders/accept', row).then(res => {
					if (res.code === '200') {
					      uni.showToast({
					        title: '接单成功'
					      })
						  this.load()
					    } else {
					      uni.showToast({
					        icon: 'error',
					        title: res.msg
					      })
					    }
				})
			},
			preOrders(orderType) {
				uni.navigateTo({
					url: '/pages/preOrders/preOrders',
					success() {
						uni.setStorageSync('orderType', orderType)
					}
				})
			},
			load() {
				this.$request.get('/notice/selectAll').then(res => {
					let noticeList = res.data || []
					if (noticeList.length) {
						let i = 0
						this.notice = noticeList[i++].content
						if (noticeList.length > 1) {
							this.inter = setInterval(() => {
								if (i === noticeList.length) {
									i = 0
								}
								this.notice = noticeList[i++].content
							}, 5000)
						}
					}
				})
				
				this.$request.get('/orders/selectAll', { status: '待接单' }).then(res => {
					this.ordersList = res.data || []
				})
			}
		}
	}
</script>

<style>
	.category-item {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		grid-gap: 20rpx;
	}
</style>
