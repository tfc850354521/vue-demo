<template>
	<div id="app">
		<keep-alive>
			<router-view />
		</keep-alive>
		
		<div id="fixationNav" v-if="loginHide">
			<ul class="navBox" ref="navBox">

				<li>
					<router-link to="/movie" class="navlist"><i class="iconfont">&#xe6be;</i>电影</router-link>
				</li>
				<li>
					<router-link to="/cinema" class="navlist"><i class="iconfont">&#xe8c7;</i>影院</router-link>
				</li>
				<li>
					<router-link to="/information" class="navlist"><i class="iconfont">&#xe600;</i>资讯</router-link>
				</li>
				<li>
					<router-link to="/userinfo" class="navlist"><i class="iconfont">&#xe6b1;</i>我的</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'app',
		data: function() {
			return {
				loginHide: true
			}
		},
		watch: {
		      $route(to, from) {
		        if (this.$route.path === "/login" || this.$route.path === "/particulars" || this.$route.path === "/details" ) {
		          this.loginHide = false;
		        } else {
		          this.loginHide = true;
		        }
		      },

		},
		}
</script>

<style lang="scss">
	* {
		padding: 0;
		margin: 0;
	}

	a {
		text-decoration: none;
		font-family: "微软雅黑";
	}

	ol,
	ul {
		list-style: none;
	}

	img {
		border: 0;
		vertical-align: middle;
	}


	#fixationNav {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 3.0625rem;
	}

	.navBox {
		height: 3.0625rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #FFFFFF;
		border-top: 1px solid #ededed;
		z-index: 2;
	}

	.navlist {
		color: #797d82;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.navStyle {
		color: #ff5f16;
	}
</style>
