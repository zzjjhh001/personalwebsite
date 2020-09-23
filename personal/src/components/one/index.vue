<template>
    <div class='c-one swiper-slide-item' >
        <div class="c-mianban" 
        :class="{'c-mianban-active':mianban1}"  
        ref="mianban"   >
        <!-- style="transform:translate(-50%,-50%) scale(1.2) rotateY(5deg)" -->
            <span><b>Hello,我是赵京辉</b></span>
            <span><b>life does not get easier,you just get stronger</b></span>
            <span>一名准大四毕业生</span>
            <span>未来的前端工程师</span>
            <span>zzjjhh.top</span>
            <span></span>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        
    },
    data() {
        return {
        };
    },
    props:{
        mianban1:{
            type:Boolean,
            default:false
        },
        es1:{
            type:Object,
            default:{},
        }
    },
    computed: {
        
    },
    watch: {
        
    },
    methods: {
        init(){
            console.log(this.es1.esy+'sadasd');

            //this.$refs.mianban.style.transform="translate(-50%,-50%) scale(1.2) rotateY(5deg)";
            
            // this.$refs.mianban.style.transform="rotateY(-5deg)";
            // this.$refs.mianban.style.transform="rotateZ(90deg)";
            //this.$refs.mianban.style.transition="all 1s";
            console.log(this.$refs.mianban.style);
            console.log(this.$refs.mianban);
            console.log(this.$refs.mianban.style.transform);
            console.log(this.es1);
            // transform: scale(1.03) 
            // translate(2.37394e-49px, -6.9307e-50px) 
            // rotateX(-6.9307e-50deg) 
            // rotateY(2.37394e-49deg)
        }
    },
    created() {
    },
    mounted() {
        this.init();
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