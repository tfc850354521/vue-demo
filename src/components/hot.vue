<template>
	<div class="container" ref="container">
		<ul >
			<li class="movieTab" v-for="err in movieList">
				<div @click="toLogin(err.filmId)" class="movieList-wrap">
					<div class="movieImg"><img :src="err.poster"
						 alt=""></div>
					<div class="movieInformation">
						<div class="movieName">
							<span>{{ err.name }}</span>
							<span>{{ err.item.name }}</span>
						</div>
						<div class="movieGrade">
							观众评分：<span>{{ err.grade }}</span>
						</div>
						<div class="movieProtagonist">
							主演：<span v-for="item in err.actors"> {{ item.name }} &nbsp;</span>
						</div>
						<div class="movieDetail"> <span> {{ err.nation }} | {{ err.runtime }}分钟</span></div>
					</div>
					<div class="buyBtn"><button>购买</button></div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from "axios"
	import BScroll from 'better-scroll'
	export default {
		name: 'hot',
		data:function(){
			return {
				movieList:[],
				number:1,
				
			}
		},
		created:function(){
			var url='https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=6141815'
			axios({
				url,
				method:'get',
				headers:{
					'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1571624317738734374930"}',
					'X-Host': 'mall.film-ticket.film.list'
				}
			}).then( response=>{
			    if( response.status ===200 && response.data.status ===0 ){
					this.movieList=response.data.data.films
				
				}
			}).catch(error=>{
				console.log(error)
			})
		},
		methods:{
			toLogin:function(id){
				
			 this.$router.push(`/particulars?filmId=${id}`)
			}
		},
		mounted:function(){
			this.$refs.container.style.height = window.innerHeight + 'px'
			
			this.scrollObj = new BScroll('.container', {
				scrollbar: true,
				click:true,
				pullUpLoad: {
					threshold: 50
				}
			})
			this.scrollObj.on('pullingUp', () => {
				this.number++
				var url='https://m.maizuo.com/gateway?cityId=440300&pageNum='+this.number+'&pageSize=10&type=1&k=6141815'
				axios({
					url,
					method:'get',
					headers:{
						'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1571624317738734374930"}',
						'X-Host': 'mall.film-ticket.film.list'
					}
				}).then( response=>{
				    if( response.status ===200 && response.data.status ===0 ){
						this.movieList=[...this.movieList,...response.data.data.films]
						
					}
				}).catch(error=>{
					console.log(error)
				})
				
				this.scrollObj.finishPullUp();
			})
		}
	}
</script>

<style>
	.movieTab>.movieList-wrap {
		padding-top: 0.9375rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 13px;
		color: #797d82;
		line-height:1.25rem;
	}

	.movieImg {
		width: 4.125rem;
		height: 5.875rem;
		margin-left: 0.625rem;
		border-radius: 0.125rem;
		overflow: hidden;
	}

	.movieImg>img {
		max-width: 100%;
	}

	.movieProtagonist {
		width: 9.625rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.buyBtn{
		margin-right:0.625rem;
	}
	.buyBtn>button{
		width: 3.125rem;
		height: 1.5625rem;
		border: 1px solid #ff5f16;
		color: #ff5f16;
		background: #FFFFFF;
		border-radius: 0.125rem;
	}
	.movieName span:nth-child(1){
		font-size: 16px;
		color: #191a1b;
		line-height: 1.375rem;
	}
	.movieName span:nth-child(2){
		font-size: 12px;
		color: #FFFFFF;
		background: #d2d6dc;
		padding: 0 0.125rem;
		border-radius: 0.125rem;
		margin-left:0.375rem;
		
	}
	.movieGrade span{
		color:#ffb232;
		font-size: 14px;
	}
</style>
