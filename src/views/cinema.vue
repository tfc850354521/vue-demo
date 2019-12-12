<template>
	<div>
		<div class="topBox">
			<div class="top">
				<div class="topRegion iconfont">深圳&#xe654;</div>
				<div class="topTile">影院</div>
				<div class="topSeekBtn iconfont">&#xe601;</div>
			</div>
			<div class="cinemaNav">
				<div class="selectRegion iconfont" @click="sregion">全城&#xe654</div>
				<div class="selectReserve iconfont">APP订票&#xe654</div>
				<div class="selectDistance iconfont">离我最近&#xe654</div>
			</div>
		</div>
		<div class="fillBox"></div>
		<div class="select-region" v-show="btnRegion">
			<ul class=" regionList-wrap">
				<li><div class="select-region-list commonality">全城</div></li>
				<li v-for="item in regionList"><div class="select-region-list">{{item}}</div></li>
				
			</ul>
		</div>
		<div class="cinemaList" ref="cinemaListWrap">
			<ul>
				<li class="cinemaList-item" v-for="err in cinemaErr">
					<div class="cinemaList-item-wrap" @click="skip(err.cinemaId)">
						<div class="cinemaList-item-rt">
							<span class="cinemaList-item-name">{{ err.name }}</span><br />
							<span class="cinemaList-item-site">{{ err.address}}</span>
						</div>
						<div class="cinemaList-item-lt">
							<span class="cinemaList-item-pirce">￥{{ err.lowPrice/100 }} <i>起</i></span><br />
							<span class="cinemaList-item-ditance">距离未知</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>

</template>

<script>
	import axios from 'axios'
	import BScroll from 'better-scroll'
	import $ from 'jquery'
	export default {
		name: 'cinema',
		data: function() {
			return {
				btnRegion:false,
				cinemaErr: [],
				regionList:[],
			}
		},
		created: function() {
			var url = 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=1435708'
			axios({
				url,
				method: 'get',
				headers: {
					'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1571624317738734374930"}',
					'X-Host': 'mall.film-ticket.cinema.list'
				}
			}).then(response => {
				if (response.status === 200 && response.data.status === 0) {
                    console.log(response)
					this.cinemaErr = response.data.data.cinemas
					var arr=[]
                    this.cinemaErr.forEach(item=>{
						if(arr.indexOf(item.districtName)===-1){
							arr.push(item.districtName)
						}
					})
					this.regionList=arr
					console.log( this.regionList)
					var scrollObj = new BScroll('.cinemaList', {
						scrollbar: true,
						click:true,
						pullUpLoad: {
							threshold: 50
						}
					})
                    scrollObj.on('pullingUp',function(){
						
					})
				} else {
					alert('系统繁忙')
				}
			}).catch(error => {
				console.log(error)
			})
		},
		mounted: function() {
			this.$refs.cinemaListWrap.style.height = window.innerHeight + 'px'
           $('.regionList-wrap').on('click',function(e){
			   var e=e||window.event
			   if(/^[\w\u4E00-\u9FA5\uF900-\uFA2D]*$/.test(e.target.innerHTML)){
				   e.target.setAttribute('class',' ')
			   }
		   })
		},
		methods:{
			skip:function(id){
				this.$router.push(`/details?cinemaId=${ id }`)
			},
			sregion:function(){
				if(this.btnRegion=== false){
					this.btnRegion=true
				}else{
					this.btnRegion=false

				}
			}
		}
	}
</script>

<style>
	.top {
		display: flex;
		justify-content: space-between;
		padding: 0.625rem 0.8125rem;
	}

	.topRegion {
		font-size: 0.8125rem;
	}

	.topTile {
		font-size: 1.0625rem;
	}

	.cinemaNav {
		display: flex;
		justify-content: space-between;
		padding: 0.625rem 20px;
		border-bottom: 1px solid #ededed;
	}

	.selectRegion,
	.selectReserve,
	.selectDistance {
		font-size: 0.875rem;
	}

	.topBox {
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 2;
		background: #FFFFFF;
	}

     .fillBox{
		 width: 100%;
		 height: 5.125rem;
	 }
	.cinemaList-item {
		padding: 0.9375rem;
	}

	.cinemaList-item-wrap {
		display: flex;
		justify-content: space-between;
		color: #191a1b;
	}

	.cinemaList-item-name {
		display: inline-block;
		width: 10.5rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		font-size: 0.9375rem;
	}

	.cinemaList-item-site {
		font-size: 0.75rem;
		display: inline-block;
		width: 10.5rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		color: #797d82;
	}

	.cinemaList-item-pirce {
		font-size: 0.9375rem;
		color: #ff5f16;
	}

	.cinemaList-item-pirce>i {
		font-size: 0.625rem;
		font-style: normal;
	}

	.cinemaList-item-ditance {
		font-size: 0.6875rem;
		color: #797d82;
	}
	.select-region{
		width: 100%;
		height: 145px;
		background: #FFFFFF;
		position: fixed;
		top: 82px;
	}
	.select-region ul{
		margin-left: 9px;
		padding-top: 10px;
	}
	.select-region ul li{
		padding: 0  8px 15px 0;
		float: left;
	}
	.select-region ul li:nth-child(4n){
		margin-right: 0;
	}
	.select-region-list{
		width: 67.5px;
		height: 30px;
		border: 1px solid rgba(210,214,220,.5);
		font-size: 13px;
		text-align: center;
		line-height: 30px;
		color: #797d82;
		border-radius: 3px;
	}
	.commonality{
		border: 1px solid #ff5f16;
		color: #ff5f16;
	}
	
</style>
