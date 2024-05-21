<template>
	<view style="padding: 20rpx;">
		<view class="box">
			<uni-forms :modelValue="form" :rules="rules" ref="formRef" label-width="160rpx" label-align="right">
				<uni-forms-item label="地址" name="address" required>
					<uni-easyinput type="text" v-model="form.address" placeholder="请输入地址" />
				</uni-forms-item>
				<uni-forms-item label="门牌号" name="doorNo" required>
					<uni-easyinput type="text" v-model="form.doorNo" placeholder="请输入门牌号" />
				</uni-forms-item>
				<uni-forms-item label="联系人" name="userName" required>
					<uni-easyinput type="text" v-model="form.userName" placeholder="请输入联系人" />
				</uni-forms-item>
				<uni-forms-item label="联系电话" name="phone" required>
					<uni-easyinput type="text" v-model="form.phone" placeholder="请输入联系电话" />
				</uni-forms-item>

				<view>
					<button type="primary" style="height: 70rpx; line-height: 70rpx; font-size: 30rpx; 
					background-color: #006eff; border-color: #006eff;" @click="save">保存并使用</button>
				</view>
			</uni-forms>
		</view>

		<view class="box" style="margin: 20rpx 0;" v-if="addressList.length">
			<view v-for="item in addressList" :key="item.id"
				style="margin-bottom: 20rpx; padding-bottom: 10rpx; border-bottom: 2rpx solid #eee;">
				<view  @click="selectAddress(item.id)">
					<view style="font-weight:bold; font-size: 32rpx; margin-bottom: 10rpx;">{{ item.address + item.doorNo }}</view>
					<view style="color: #888;">
						<text>{{ item.userName }}</text> 
						<text style="margin-left: 20rpx;">{{ item.phone }}</text>
					</view>
				</view>
				<view style="text-align: right;">
					<uni-icons type="compose" size="18" style="margin-right: 20rpx;" @click="handleEdit(item)"></uni-icons>
					<uni-icons type="trash" size="18" @click="del(item.id)"></uni-icons>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {},
				addressList: [],
				rules: {
					address: {
						rules: [{
							required: true,
							errorMessage: '请填写地址',
						}]
					},
					doorNo: {
						rules: [{
							required: true,
							errorMessage: '请填写门牌号',
						}]
					},
					userName: {
						rules: [{
							required: true,
							errorMessage: '请填写联系人',
						}]
					},
					phone: {
						rules: [{
							required: true,
							errorMessage: '请填写联系电话',
						}]
					}
				},
				type: '',
				fromAddressId: 0,
				toAddressId: 0,
				user: uni.getStorageSync('xm-user')
			}
		},
		onLoad(option) {
			this.type = option.type
			this.fromAddressId = option.fromAddressId
			this.toAddressId = option.toAddressId
			this.load()
		},
		methods: {
			selectAddress(addressId) {
				if (this.type === 'from') {
					this.fromAddressId = addressId
				} else if (this.type === 'to') {
					this.toAddressId = addressId
				}
				uni.reLaunch({
					url: '/pages/preOrders/preOrders?type=' + this.type + '&fromAddressId=' + this.fromAddressId + '&toAddressId=' + this.toAddressId
				})
			},
			handleEdit(address) {
				this.form = JSON.parse(JSON.stringify(address))
			},
			del(addressId) {
				this.$request.del('/address/delete/' + addressId).then(res => {
					if (res.code === '200') {
						uni.showToast({
							title: '操作成功'
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
			load() {
				this.$request.get('/address/selectAll', { userId: this.user.id }).then(res => {
					this.addressList = res.data || []
				})
			},
			save() {
				this.$refs.formRef.validate().then(res => {
					this.$request.request({
						url: this.form.id ? '/address/update' : '/address/add',
						method: this.form.id ? 'PUT' : 'POST',
						data: this.form
					}).then(res => {
						if (res.code === '200') {
							uni.showToast({
								title: '操作成功'
							})
							this.form = {} // 清空数据
							this.load()
							this.selectAddress(res.data.id)
						} else {
							uni.showToast({
								icon: 'error',
								title: res.msg
							})
						}
					})
				}).catch(err => {
					console.log('err', err);
				})
			}
		}
	}
</script>

<style>

</style>