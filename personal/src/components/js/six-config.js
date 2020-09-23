export const sliderOptions = { // 轮播图配置
    direction: 'horizontal', // horizontal:水平 vertical:垂直
    loop: true, // 是否无缝滚动
    interval: 0, // 自动播放时间间隔，为0则不自动播放
    pagination: {
        el: '.swiper-pagination1',
        clickable:true,
    }, // 是否需要分页器
    // navigation:{
    //     nextEl:'.swiper-button-next',
    //     pervEl:'.swiper-button-prev',
    // },
    mousewheel:false,
    observer:true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents:true,
    speed:800,
    effect:'coverflow',
    slidesPerView: 2,
    centeredSlides:true,
    coverflowEffect:{
        rotate: 30,
        stretch: 10,
        depth: 90,
        modifier: 2,
        slideShadows:true,
    },
};