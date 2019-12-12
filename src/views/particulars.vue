<template>
	<div>
		<div class="top-img">
			<img :src="movieInformation.poster" alt="">
			<div class="go-back" @click="goback"><img src="../../public/goback.png" alt="">
			</div>
		</div>
		<div class="movie-detail">
			<div class="movie-title">
				<div class="movie-name">
					<span> {{ movieInformation.name }} </span>
					<span>{{ movieInformation.timeType}}D</span>
				</div>
				<div class="movie-grade"><i>{{ movieInformation.grade}}</i>&nbsp;分</div>
			</div>
			<div class="movie-type">{{ movieInformation.category}}</div>
			<div class="movie-time">{{ movieInformation.premiereAt | movieTime }}</div>
			<div class="movie-region">{{ movieInformation.nation }} | {{ movieInformation.runtime }}分钟</div>
			<div class="movie-brief" :class="switcherHeight" ><p ref="togo">{{ movieInformation.synopsis }}</p></div>
			<div class="movie-brief-btn"><img src="../../public/movie-btn.png" alt="" class="movie-brief-btn-img" @click="btn" :class="switcher"></div>
		</div>
		<div class="movie-cast">
			<h2>演职人员</h2>

			<swiper :options="swiperOption" ref="mySwiper" class="movie-cast-wrap">

				<swiper-slide class="movie-cast-list" v-for="err in movieInformation.actors">
					<div class="movie-cast-img">
						<img :src="err.avatarAddress" alt="">
					</div>
					<div class="movie-cast-name">{{ err.name }}</div>
					<div class="movie-cast-post">{{ err.role }}</div>
				</swiper-slide>


			</swiper>
		</div>
		<div class="movie-photograph">
			<div class="movie-photograph-top">
				<h1>剧照</h1>
			</div>
			<swiper :options="swiperOption1" ref="mySwiper" class="movie-cast-wrap">

				<swiper-slide class="movie-photograph-list" v-for="item in movieInformation.photos">
					<div>
						<img :src="item" alt="">
					</div>
				</swiper-slide>


			</swiper>
		</div>
		<div class="buy-tickets">
			选座购票
		</div>
	</div>
</template>

<script>
    import $ from 'jquery'
	import axios from 'axios'
	export default {
		data: function () {
			return {
				switcherHeight:'switcherHeight',
				switcher:'',
				movieInformation: {},
				swiperOption: {
					slidesPerView: 4,
					slidesPerGroup: 1,
				},
				swiperOption1: {
					slidesPerView: 2,
					slidesPerGroup: 1,
				}

			}
		},
		created: function () {
			var url = `https://m.maizuo.com/gateway?filmId=${this.$route.query.filmId}&k=5944875`

			axios({
				url,
				method: 'get',
				headers: {
					'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15726136123766686319921"}',
					'X-Host': 'mall.film-ticket.film.info'
				}
			}).then(response => {
				if (response.status === 200 && response.data.status === 0) {
					this.movieInformation = response.data.data.film
				}
			}).catch(error => {
				console.log(error)
			})
		},
		computed: {
			swiper() {
				``
				return this.$refs.mySwiper.swiper
			}
		},
		mounted() {
			this.swiper.slideTo(1, 1000, false)
		},
		methods:{
             goback:function(){
				 this.$router.go(-1)
			 },
			 btn:function(){
				 $('.switcherHeight').attr('style','height:'+this.$refs.togo.offsetHeight+'px')
				 if(this.switcher===''){
					 this.switcher='switcher'
				 }else{
					 this.switcher=''
				 }
				 if(this.switcherHeight==='switcherHeight'){
					 this.switcherHeight=''
				 }else{
					 this.switcherHeight='switcherHeight'
				 }
				
			 }
		}
	}
</script>

<style>
    .switcher{
		    transform: rotate(180deg);
	}
	.switcherHeight{
		height: 38px !important;
		transition: height .5s ease;
	}
	.top-img {
		width: 100%;
		height: 11.25rem;
		overflow: hidden;
	}

	.top-img>img {
		width: 100%;
	}

	.movie-detail {
		width: 100%;
		padding-top: 20px;
	}

	.movie-title {
		display: flex;
		justify-content: space-between;
	}

	.movie-grade {
		margin-right: 10px;
	}

	.movie-name span:nth-child(1) {
		font-size: 1.125rem;
		color: #191a1b;
		margin: 0 0 0 15px;
	}

	.movie-name span:nth-child(2) {
		font-size: 12px;
		color: #FFFFFF;
		background: #d2d6dc;
		padding: 0 0.125rem;
		border-radius: 0.125rem;
	}

	.movie-grade {
		font-size: 0.625rem;
		color: #ffb232;
	}

	.movie-grade>i {
		font-size: 1.125rem;
		font-weight: bolder;
	}

	.movie-type,
	.movie-time,
	.movie-region {
		font-size: 0.8125rem;
		color: #797d82;
		margin: 0 0 0 15px;
		margin-top: 4px;
	}

	.movie-brief {
		font-size: 0.8125rem;
		color: #797d82;
		margin: 5px 15px;
		line-height: 18px;
		overflow: hidden;
		/* height: 195px; */
		transition: height .5s ease;
	}
	.movie-brief-btn{
		width: 100%;
		text-align: center;
	}
	.movie-brief-btn-img{
		width: 8px;
		height: 4px;
	}
	.movie-cast {
		width: 100%;
		height: 12rem;
		overflow: hidden;
	}

	.movie-cast ul {
		display: flex;
		justify-content: space-between;
	}

	.movie-cast-img {
		width: 5.3125rem;
		height: 5.3125rem;
		overflow: hidden;
		text-align: center;
	}

	.movie-cast-img>img {
		width: 70px;
		margin-top: -10px;
	}

	.movie-cast-name {
		text-align: center;
		font-size: 0.75rem;
		color: #191a1b;
		width: 70px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;

	}

	.movie-cast-post {
		font-size: 0.625rem;
		color: #797d82;
		width: 70px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		text-align: center;
	}

	.movie-cast h2 {
		font-size: 1rem;
		color: #191a1b;
		font-weight: normal;
		margin: 10px 0px 10px 15px;
	}

	.movie-cast-list {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.movie-photograph {
		height: 11.0625rem;
		width: 100%;
		margin-bottom: 40px;
	}

	.movie-photograph-top h1 {
		font-size: 1rem;
		font-weight: normal;
		color: #191a1b;
		margin: 10px 0px 10px 15px;
	}

	.movie-photograph-top span {
		font-size: 13px;
		color: #797d82;
	}

	.movie-photograph-list {
		width: 9.375rem;
		height: 6.25rem;
	}

	.movie-photograph-list div {
		text-align: center;
		overflow: hidden;
	}

	.movie-photograph-list img {
		width: 150px;
	}

	.movie-photograph ul {
		display: flex;
		justify-content: space-between;
	}

	.buy-tickets {
		width: 100%;
		height: 49px;
		color: #ffffff;
		font-size: 16px;
		text-align: center;
		line-height: 49px;
		background: #ff5f16;
		position: fixed;
		bottom: 0;
		z-index: 4;
	}

	.movie-cast-wrap {
		width: 100%;
	}

	.go-back img {
		width: 30px;
		height: 30px;
		position: fixed;
		top: 5px;
		left: 3px;
	}
</style>