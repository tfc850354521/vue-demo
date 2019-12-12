<template>
    <div>
        <div class="top-goback">
            <img src="../../public/goback2.png" alt="">
        </div>
        <div class="cinema-name">
            帕加尼激光影城（虹口店）
        </div>
        <div class="cinema-centainer">
            <div class="cinema-site">
                <span class="iconfont">&#xe62d;</span>
                <span class="cinema-site-name">虹口区四川北路1363号壹丰广场三楼</span>
                <span class="cinema-phone">&#xe62d;</span>
            </div>
            <div class="cinema-playlist">
                <swiper :options="swiperOption" ref="mySwiper" class="movie-cast-wrap">
                    <swiper-slide v-for="err in this.movieInformation" class="movie-cast-wrap-item">
                        <img :src="err.poster" alt="">
                    </swiper-slide>

                </swiper>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data: function () {
            return {
                cniemaInformation:[],
                movieInformation:[],
                swiperOption: {
                    slidesPerView: 3,
                    centeredSlides: true,
                }
            }
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
        created: function () {
            //电影院信息请求
            var url = `https://m.maizuo.com/gateway/?cinemaId=${this.$route.query.cinemaId }&k=2291707`
            axios({
                url,
                method: 'get',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15726136123766686319921"}',
                    'X-Host': 'mall.film-ticket.cinema.info'
                }
            }).then(response => {
                //  console.log(response)
                if (response.status === 200 && response.data.status === 0) {
                    this.cniemaInformation = response.data.data.cinema
                    // console.log(this.cniemaInformation)
                }
            }).catch(error => {
                console.log(error)
            })

            //电影信息请求
            var url1 = `https://m.maizuo.com/gateway/?cinemaId=${this.$route.query.cinemaId }&k=3168837`
            
            axios({
                url:url1,
                method: 'get',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15726136123766686319921"}',
                    'X-Host': 'mall.film-ticket.film.cinema-show-film'
                }
            }).then(response => {
                 console.log(response)
                if (response.status === 200 && response.data.status === 0) {
                    this.movieInformation = response.data.data.films
                    console.log(this.movieInformation)
                }
            }).catch(error => {
                console.log(error)
            })
        },
        
        
    }
</script>
<style scoped>
    .swiper-slide-active{
          width: 90px;
          height: 120px;
          background: red;
    }
    .movie-cast-wrap-item{
        text-align: center;
         width: 68px;
        height: 94px;
    }
    .movie-cast-wrap img{
        width: 68px;
        height: 94px;
    }
    .swiper-slide-active img{
        widows: 90px;
        height: 120px;
    }
</style>