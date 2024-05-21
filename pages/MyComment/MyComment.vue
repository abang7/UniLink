<template>
	<view style="padding: 20rpx;">
		<navigator :url="'/pages/detail/detail?orderId=' + item.orderId" class="box" v-for="item in commentList" :key="item.id" style="margin-bottom: 20rpx;">
			<view style="margin-bottom: 10rpx;">{{ item.content }}</view>
			<view style="display: flex;">
				<view style="flex: 1;"><uni-rate :value="item.star"></uni-rate></view>
				<view style="flex: 1; color: #888;">{{ item.time }}</view>
			</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				commentList: [],
				user: uni.getStorageSync('xm-user')
			}
		},
		onLoad() {
			this.load()
		},
		methods: {
			load() {
				this.$request.get('/comment/selectComment/' + this.user.id).then(res => {
					this.commentList = res.data || []

				})
			}
		}
	}
</script>

<style>

</style>
