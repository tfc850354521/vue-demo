<template>
	<div>
<!-- 		<div class="tabBox hideBox" v-if="hideBox">
			<ul>
				<li :class="{'tabActive':tabStyle==='hot'}" @click="hotHandler">正在热映</li>
				<li :class="{'tabActive':tabStyle==='comingsoon'}" @click="comingsoonHandler">即将上映</li>
			</ul>
		
		</div> -->
				<swiper :options="swiperOption" ref="mySwiper">
					<swiper-slide class="recommend"><img src="https://static.maizuo.com/v5/upload/b27e2f1ca2c7e6c2748f78131855bfc5.jpg?x-oss-process=image/quality,Q_70"
						 alt=""></swiper-slide>
					<swiper-slide class="recommend"><img src="https://static.maizuo.com/v5/upload/b93301a27c59f90ecd860f6501900d15.jpg?x-oss-process=image/quality,Q_70"
						 alt=""></swiper-slide>
				</swiper>
				
				<div class="tabBox" >
					<ul>
						<li :class="{'tabActive':tabStyle==='hot'}"  @click="hotHandler">正在热映</li>
						<li :class="{'tabActive':tabStyle==='comingsoon'}" @click="comingsoonHandler">即将上映</li>
					</ul>
				</div>
				
				<transition enter-active-class="animated fadeIn">
					<component :is="tabStyle" ></component>
				</transition>

	</div>
</template>

<script>
	import hot from '../components/hot';
	import comingsoon from '../components/comingsoon';
	export default {
		name: 'movie',
		data() {
			return {
				tabStyle: 'hot',
				// hideBox:false,
				swiperOption: {
					autoplay: true,
					loop: true,
				},
				scrollObj:null,
			}
		},
		methods: {
			hotHandler: function() {
				this.tabStyle = 'hot'

			},
			comingsoonHandler: function() {
				this.tabStyle = 'comingsoon'
			}
		},
		components: {
			hot,
			comingsoon
		}
			// window.addEventListener('touchmove',(event) => {
				
   //          var touch = event.targetTouches[0]
			// 	if(touch.pageY<250){
			// 		this.hideBox=true
			// 	}else{
					
			// 		this.hideBox=false
			// 	}
				
			// })
			

		
	}
</script>

<style>
	.recommend img {
		max-width: 100%;
	}

	.tabBox {
		position: relative;
		width: 100%;
		background: #FFFFFF;
		z-index: 3;
	}

	.tabBox>ul {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.tabBox>ul>li {
		display: flex;
		line-height: 3.0625rem;
		height: 3.0625rem;
		color: #191a1b;
		border-bottom: 2px solid #FFFFFF;
	}

	.tabActive {
		color: #ff5f16 !important;
		border-bottom: 2px solid #ff5f16 !important;
	}
	/* .hideBox{
		position: fixed;
		top: 0;
		background: #FFFFFF;
		z-index: 5;
	} */
</style>
