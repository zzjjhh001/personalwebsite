<template>
<div>
    <swiper 
    :options="swiperOptions"
    class='c-slider' :style="sliderStyle">
        <swiper-slide   class="c-swiper-slide swiper-no-swiping" >
            <img :src="items[0].Url" alt=""  />
            <c-one :es1="es" ref='cone' :mianban1="mianban" @mouseenter.native="mouseenter" @mouseleave.native="mouseleave" @mousemove.native="mousemove"/>
        </swiper-slide>
        <swiper-slide   class="c-swiper-slide swiper-no-swiping" >
            <img :src="items[1].Url" alt=""  />
            <c-two/>
        </swiper-slide>
        <!-- <swiper-slide   class="c-swiper-slide swiper-no-swiping" >
            <img :src="items[2].Url" alt=""  />
            <z-t />
        </swiper-slide>
        <swiper-slide   class="c-swiper-slide swiper-no-swiping" >
            <img :src="items[3].Url" alt=""  />
            <c-four />
        </swiper-slide> -->
        <swiper-slide   class="c-swiper-slide " >
            <img :src="items[4].Url" alt=""  />
            <c-five />
        </swiper-slide>
        <swiper-slide   class="c-swiper-slide swiper-no-swiping" >
            <img :src="items[5].Url" alt=""  />
            <c-six />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import {sliders,sliderOptions} from '../js/config.js';
import COne from '../one/index.vue';
import CTwo from '../two/index.vue';
import CFour from '../four/index.vue';
import CFive from '../five/index.vue';
import CSix from '../six/index.vue';
import ZT from '../zt/index.vue';
export default {
    name: 'c-slider',
    components: {
        Swiper,
        SwiperSlide,
        COne,
        CTwo,
        CFive,
        CSix,
        ZT,
        CFour,
    },
    data() {
        return {
            items:[],
            sliderStyle:{
                height:20+"px",
                width:20+"px",
            },
            mianban:false,
            es:{
                esx:0,
                esy:0,
            },
        };
    },
    props:{

    },
    computed: {
    },

    watch: {
        
    },
    methods: {
        init(){
            this.sliderStyle.width =  window.innerWidth+"px";
            this.sliderStyle.height =   window.innerHeight+"px";
        },
        getSliders(){
            this.items = sliders
            this.swiperOptions = sliderOptions
        },
        mouseenter(e){
            this.mianban=true
            console.log("mouseenter")
        },
        mouseleave(e){
            this.mianban=false
            console.log("mouseleave")
        },
        mousemove(e){
            console.log(e.offsetX);
            console.log(e.offsetY)
            this.es.esx=this.$refs.cone.$el.offsetWidth-e.offsetX;
            this.es.esy=this.$refs.cone.$el.offsetHeight-e.offsetY; 
        },

    },
    created() {
        this.getSliders();
    },
    mounted() {
        this.init();
        window.addEventListener('resize',()=>{
            this.sliderStyle.width =  window.innerWidth+"px";
            this.sliderStyle.height =   window.innerHeight+"px";
        })
        
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