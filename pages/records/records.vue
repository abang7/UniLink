<template>
	<view style="padding: 20rpx;">
		<view class="box" v-for="item in recordsList" :key="item.id" style="margin-bottom: 20rpx;">
			<view style="display: flex; align-items: center; margin-bottom: 10rpx;">
				<view style="flex: 2;">
					<uni-tag type="error" text="支出" size="small" v-if="item.type === '支出'"></uni-tag>
					<uni-tag type="success" text="充值" size="small" v-if="item.type === '充值'"></uni-tag>
					<uni-tag type="primary" text="骑手" size="small" v-if="item.type === '骑手'"></uni-tag>
					<text style="margin-left: 10rpx; font-size: 32rpx;">{{ item.content }}</text>
				</view>
				<view style="flex: 1; text-align: right; ">
					<view style="color: #666;"  v-if="item.type === '支出'"><text>- <text>{{ item.money }}</text></text></view>
					<view style="color: red;" v-if="item.type === '充值'"><text>+ <text>{{ item.money }}</text></text></view>
					<view style="color: dodgerblue;" v-if="item.type === '骑手'"><text>+ <text>{{ item.money }}</text></text></view>
				</view>
			</view>
			<view style="text-align: right; color: #999; font-size: 24rpx;">{{ item.time }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				recordsList: [],
				user: uni.getStorageSync('xm-user')
			}
		},
		onLoad() {
			this.load()
		},
		methods: {
			load() {
				this.$request.get('/records/selectAll', { userId: this.user.id }).then(res => {
					this.recordsList = res.data || []
				})
			}
		}
	}
</script>

<style>

</style>
