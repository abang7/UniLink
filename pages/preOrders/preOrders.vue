<template>
	<view style="padding: 20rpx;">
		<uni-section title="取货地址" type="line">
			<view style="margin-bottom: 20rpx; padding: 0 0 20rpx 20rpx; color: #888;" @click="selectAddress('from')" v-if="!fromAddress.id">
				请选择取货地址
			</view>
			<view style="margin-bottom: 20rpx; padding: 0 0 20rpx 20rpx; " @click="selectAddress('from')" v-else>
				<view style="font-size: 32rpx; margin-bottom: 10rpx;">{{ fromAddress.address }}</view>
				<view style="color: #888;">
					<text>{{ fromAddress.userName }}</text> 
					<text style="margin-left: 20rpx;">{{ fromAddress.phone }}</text>
				</view>
			</view>
		</uni-section>
		<uni-section title="收货地址" type="line">
			<view style="margin-bottom: 20rpx; padding: 0 0 20rpx 20rpx; color: #888;" @click="selectAddress('to')" v-if="!toAddress.id">
				请选择收货地址
			</view>
			<view style="margin-bottom: 20rpx; padding: 0 0 20rpx 20rpx;" @click="selectAddress('to')" v-else>
				<view style="font-size: 32rpx; margin-bottom: 10rpx;">{{ toAddress.address }}</view>
				<view style="color: #888;">
					<text>{{ toAddress.userName }}</text> 
					<text style="margin-left: 20rpx;">{{ toAddress.phone }}</text>
				</view>
			</view>
		</uni-section>
		
		<view class="box">
			<uni-forms :modelValue="form" :rules="rules" ref="formRef" label-width="160rpx" label-align="right">
			  <uni-forms-item label="物品/ 快递码" name="name" required>
			    <uni-easyinput type="text" v-model="form.name" placeholder="请输入物品名称/快递码" />
			  </uni-forms-item>
			  <uni-forms-item label="描述信息" name="descr">
			    <uni-easyinput type="text" v-model="form.descr" placeholder="请输入描述信息" />
			  </uni-forms-item>
			  <uni-forms-item label="重量(kg)" name="weight">
			    <uni-easyinput type="text" v-model="form.weight" placeholder="请输入物品重量" />
			  </uni-forms-item>
			  <uni-forms-item label="小费(元)" name="weight" required>
			    <uni-number-box v-model="form.price" :min="1" style="position: relative; top: 10rpx;"></uni-number-box>
			  </uni-forms-item>
			  <uni-forms-item label="订单类型" name="type">
				  <uni-data-select v-model="form.type" :localdata="orderTypes"></uni-data-select>
			  </uni-forms-item>
			  <uni-forms-item label="物品图片" name="descr">
			    <uni-file-picker limit="1" :image-styles="imageStyles" :del-icon="false" :disable-preview="true" 
					fileMediatype="image"  @select="handleImgUploadSuccess"></uni-file-picker>
			  </uni-forms-item>
			  <uni-forms-item label="备注" name="comment">
			    <uni-easyinput type="text" v-model="form.comment" placeholder="请输入备注" />
			  </uni-forms-item>
			  <view>
			  	<button type="primary" style="height: 70rpx; line-height: 70rpx; font-size: 30rpx; 
					background-color: #006eff; border-color: #006eff;" @click="save">提交订单</button>
			  </view>
			</uni-forms>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fromAddressId: 0,
				toAddressId: 0,
				fromAddress: {},
				toAddress: {},
				form: { price: 1 },
				imageStyles: {
					"height": 80,	// 边框高度
					"width": 80,	// 边框宽度
					"border":{ // 如果为 Boolean 值，可以控制边框显示与否
						"color":"#eee",		// 边框颜色
						"width":"1px",		// 边框宽度
						"style":"solid", 	// 边框样式
					}
				},
				rules: {
				  name: {
				    rules: [{
				      required: true,
				      errorMessage: '请填写物品名称',
				    }]
				  },
				  price: {
				    rules: [{
				      required: true,
				      errorMessage: '请设置小费',
				    }]
				  }
				},
				orderTypes: [
					{ value: '代拿快递', text: "代拿快递" },
					{ value: '代取餐品', text: "代取餐品" },
					{ value: '代买零食', text: "代买零食" },
					{ value: '代送鲜花', text: "代送鲜花" },
				]
			}
		},
		onLoad(option) {
			let orderType = uni.getStorageSync('orderType')
			this.form.type = orderType
			console.log(this.form.type)
			
			this.fromAddressId = option.fromAddressId || 0
			this.toAddressId = option.toAddressId || 0
			
			this.loadAddress('from')
			this.loadAddress('to')
		},
		methods: {
			save() {
				// 验证
				if (!this.fromAddressId || this.fromAddressId == 0) {
					uni.showToast({
						icon: "error",
						title: '请选择取货地址'
					})
					return
				}
				if (!this.toAddressId || this.toAddressId == 0) {
					uni.showToast({
						icon: "error",
						title: '请选择收货地址'
					})
					return
				}
				if (this.fromAddressId === this.toAddressId) {
					uni.showToast({
						icon: "none",
						title: '取货地址和收货地址不能重复'
					})
					return
				}
				this.form.addressId = this.fromAddressId
				this.form.targetId = this.toAddressId
				this.$refs.formRef.validate().then(res => {
				  this.$request.post('/orders/addOrder', this.form).then(res => {
				    if (res.code === '200') {
				      uni.showToast({
				        title: '下单成功'
				      })
					  uni.removeStorageSync('orderType')
					  setTimeout(() => {
						  uni.switchTab({
						  	url: '/pages/index/index'
						  })
					  }, 500)
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
			},
			handleImgUploadSuccess(e) {
				let _this = this
				const filePath = e.tempFilePaths[0]
				uni.uploadFile({
				url: _this.$baseUrl +'/files/upload',
				filePath: filePath,
				name:"file", 
				success(res) {
				  let url = JSON.parse(res.data || '{}').data
				  _this.form.img = url
				}
				})
			},
			loadAddress(type) {
				if (type === 'from' && this.fromAddressId) {
					this.$request.get('/address/selectById/' + this.fromAddressId).then(res => {
						this.fromAddress = res.data || {}
					})
				} else if (type === 'to' && this.toAddressId) {
					this.$request.get('/address/selectById/' + this.toAddressId).then(res => {
						this.toAddress = res.data || {}
					})
				}
			},
			selectAddress(type) {
				uni.navigateTo({
					url: '/pages/address/address?type=' + type + '&fromAddressId=' + this.fromAddressId + '&toAddressId=' + this.toAddressId
				})
			}
		}
	}
</script>

<style>

</style>
