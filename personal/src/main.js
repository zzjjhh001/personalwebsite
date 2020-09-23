// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.cjs.js'
import 'swiper/swiper-bundle.esm.js'
import 'swiper/swiper.cjs.js'
import 'swiper/swiper-bundle.esm.browser.js'
import 'swiper/swiper.esm.js'
//stylesheet
import 'swiper/swiper.scss'
import 'swiper/swiper-vars.scss'
import 'swiper/swiper-bundle.css'
import 'assets/css/index.scss'

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if(to.meta.title){
  window.document.title = to.meta.title
  }
  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

