<template>
    <div class='c-five'ondragstart="return false">
        <swiper :options="swiperOptions" class="ww">
            <swiper-slide ><a href="//pshows.top" target="_black"><p>我的个人网站</p>
                <div class="c-five-swiper-slide-div">
                    <img  src="~assets/imgs/grt.png" alt="">
                    
                </div>
                </a>
            </swiper-slide>
            <swiper-slide><a href="//zzjjhh.top" target="_black"><p>我的个人博客</p>
                <div class="c-five-swiper-slide-div">
                    <img src="~assets/imgs/bkt.png" alt="">
                </div></a>
            </swiper-slide>
            <swiper-slide><a href="//github.com/zzjjhh001/yuyuepingtai.git" target="_black"><p>城市预约平台</p>
                <div class="c-five-swiper-slide-div">
                    <img src="~assets/imgs/yyt.png" alt="">
                </div></a>
            </swiper-slide>
            <swiper-slide><a href="//www.baidu.com" target="_black"><p>慕淘网</p>
                <div class="c-five-swiper-slide-div">
                    <img src="~assets/imgs/grt.png" alt="">
                </div></a>
            </swiper-slide>
            <div class="swiper-pagination1"  slot="pagination">
            </div>
            <!-- <div class="swiper-button-next"> > </div>
            <div class="swiper-button-prev"> < </div> -->
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import {sliderOptions} from '../js/six-config.js';
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            
        };
    },
    computed: {
        
    },
    watch: {
        
    },
    methods: {
        init(){
            this.swiperOptions = sliderOptions
        }
    },
    created() {
        this.init();
    },
    mounted() {
        
    },
    beforeCreate() {
        
    }, 
    beforeMount() {
        
    }, 
    beforeUpdate() {
        
    }, 
    updated() {
        
    }, 
    beforeDestroy() {
        
    }, 
    destroyed() {
        
    }, 
    activated() {
        
    }, 
    }
    </script>
    <style lang='scss' scoped>
    
    </style>