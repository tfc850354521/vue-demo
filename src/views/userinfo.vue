<template>
	<div class="main">
		<div class="userinfo-top" >
			<img src="../../public/touxiang.png" alt="" @click="login">
			<div class="user-name" @click="login">立即登录</div>
		</div>
		<ul class="user-tab" >
			<li @click="login">
				<span class=" iconfont">&#xe8ae;</span>
				<span>电影订单</span>
			</li>
			<li @click="login">
				<span class=" iconfont">&#xe61b;</span>
				<span>商品订单</span>
			</li>
		</ul>
	    <div class="user-card" @click="login">
			<span class="iconfont">&#xe864;</span>
			<span class="card-juan">卖座劵</span>
		</div>
		<div class="user-card" @click="login">
			<span class="iconfont">&#xe644;</span>
			<span class="card-juan">组合红包</span>
		</div>
		<div class="user-card" @click="login">
			<span class="iconfont">&#xe647;</span>
			<span class="card-juan">余额</span>
		</div>
		<div class="user-card" @click="login">
			<span class="iconfont">&#xe623;</span>
			<span class="card-juan">设置</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'userinfo',
		data:function(){
			return{
			}
		},
		methods:{
			login:function(){
				console.log(this.$router)
				this.$router.push('/login')
			}
		}
	}
</script>

<style>
	.main{
		background: #f4f4f4;
	}
	.userinfo-top{
		width: 100%;
		height: 12.5rem;
		background: url('https://assets.maizuo.com/h5/v5/public/app/img/bg.6837f67.png');
		position: relative;
	}
	.userinfo-top>img{
		display: inline-block;
		width: 3.9375rem;
		height: 3.9375rem;
		border: 2px solid #FFFFFF;
		border-radius: 50%;
		position: absolute;
		top: 4.6875rem;
		left: 2.3125rem;
	}
	.user-name{
		font-size: 1rem;
		color: #FFFFFF;
		position: absolute;
		top: 6.25rem;
		left: 7.8125rem;
	}
	.user-tab{
		padding: 0.625rem 0;
		display: flex;
		justify-content: space-around;
		margin-bottom: 5px;
		background: #FFFFFF;
	}
	.user-tab>li{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.user-tab>li span:nth-child(1){
		font-size: 1.875rem;
		color: #ff5f16;
	}
	.user-tab>li span:nth-child(2){
		font-size: 13px;
		color: #797d82;
	}
	.user-card{
		width: 100%;
		height: 3.0625rem;
		font-size: 0.9375rem;
		border-bottom: 1px solid #f4f4f4;
		display: flex;
		align-items: center;
		background: #FFFFFF;
	}
	.user-card span:nth-child(1){
		color:#ff5f16;
		font-size: 25px;
		margin-left: 10px;
		
	}
	.user-card span:nth-child(3){
		margin-left: 13.125rem;
		font-size: 0.75rem;
		color: #797d82;
	}
	.user-card span:nth-child(2){
		margin-left: 10px;
	}
	
</style>
