<template>
	<view style="padding: 20rpx;">
		<view style="margin-bottom: 20rpx;">
			 <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" 
				styleType="text" activeColor="#006eff"></uni-segmented-control>
		</view>
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
						<text style="margin-right: 20rpx;" v-if="item.status === '待接单' || item.status === '待送达' || item.status === '待收货'">已下单{{ item.minutes }}分钟</text>
						
						<text style="color: #888;" v-if="item.status === '已取消'">{{ item.status }}</text>
						<text style="color: orange;" v-if="item.status === '待接单'">{{ item.status }}</text>
						<text style="color: dodgerblue" v-if="item.status === '待送达'">{{ item.status }}</text>
						<text style="color: mediumpurple;" v-if="item.status === '待收货'">{{ item.status }}</text>
						<text style="color: indianred;" v-if="item.status === '待评价'">{{ item.status }}</text>
						<text style="color: #18bc37;" v-if="item.status === '已完成'">{{ item.status }}</text>
					</view>
					<view style="flex: 1; text-align: right;">
						<uni-tag text="取消订单" type="error" @click.native.stop="changeStatus(item, '已取消')" v-if="item.status === '待接单'"></uni-tag>
						<uni-tag text="确认收货" type="primary" @click.native.stop="changeStatus(item,  '待评价')" v-if="item.status === '待收货'"></uni-tag>
						<uni-tag text="评价" type="warning" @click.native.stop="goComment(item.id)" v-if="item.status === '待评价'"></uni-tag>
						<view @click.native.stop="deleteOrder(item.id)" style="width: fit-content; display: inline-block;" 
							v-if="item.status === '已取消' || item.status === '已完成'">
							<uni-icons type="trash" size="16" color="#888" style="position: relative; top: 2rpx;"></uni-icons>
							<text style="color: #888; font-size: 24rpx;">删除</text>
						</view>
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
				current: 0,
				items: ['全部订单', '待接单', '待送达', '待收货', '待评价'],
				user: uni.getStorageSync('xm-user'),
				status: null
			}
		},
		onShow() {
			this.loadOrders()
		},
		methods: {
			goComment(orderId) {
				uni.navigateTo({
					url: '/pages/comment/comment?orderId=' + orderId
				})
			},
			deleteOrder(orderId) {
				this.$request.del('/orders/delete/' + orderId).then(res => {
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
			goDetail(orderId) {
				uni.navigateTo({
					url: '/pages/detail/detail?orderId=' + orderId
				})
			},
			onClickItem(e) {
				if (this.current != e.currentIndex) {
					this.current = e.currentIndex
					switch(this.current) {
						case 0: this.status = null; break;
						case 1: this.status = '待接单'; break;
						case 2: this.status = '待送达'; break;
						case 3: this.status = '待收货'; break;
						case 4: this.status = '待评价'; break;
					}
					this.loadOrders()
				}
			},
			loadOrders() {
				let params = { userId: this.user.id}
				if (this.status) {
					params.status = this.status
				}
				this.$request.get('/orders/selectAll', params).then(res => {
					this.ordersList = res.data || []
				})
			}
		}
	}
</script>

<style>

</style>
