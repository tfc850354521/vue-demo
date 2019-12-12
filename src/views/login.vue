<template>
	<div>
		<div class="login">
			<div class="logo">
				<img src="../../public/logo.png" alt="">
			</div>
			<div class="login-from">
				<form action="">
					<div class="phone">
						<input type="text" placeholder="手机号" >
					</div>
				<div class="code">
					<input type="password" placeholder="电话号码">
				</div>
				<button>登录</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style>
	.login{
		width: 100%;
		height: 20.3125rem;
	}
	.logo{
		margin: 4.9375rem auto 2.5rem;
		    text-align: center;
		    height: 3.75rem;
		    line-height: 3.75rem;
	}
	input{
		width: 16.875rem;
		height: 3.4375rem;
		border: none;
		outline: none;
	}
	.logo>img{
		width: 3.75rem;
		height: 3.75rem;
	}
	.phone{
		width: 100%;
	}
	button{
		width: 16.875rem;
		height: 2.75rem;
		background: #ff5f16;
		border:none;
		font-size: 15px;
		color: #FFFFFF;
		border-radius: 5px;
	}
	.code{
		width:100%;
		height: 3.4375rem;
	}
	.login-from{
		margin-top: 1px;
		text-align: center;
		line-height: 20px;
	}
</style>
