<template>
	<div class="home"   >
        <top />
        <home-nav />
		<c-slider ref="cslider"  />
        <chang-yan />
        <music />
		<!-- <liu-yan /> -->
	</div>
</template>
<script>
import CSlider from 'components/slider/index.vue';
import Top from './top.vue';
import HomeNav from './nav.vue';
import ChangYan from './changyan.vue';
import Music from './music.vue';
export default {
    name:'home',
	components: {
        CSlider,
        Top,
        HomeNav,
        ChangYan,
		Music,
	},
	data() {
		return {

        };
	},
	computed: {},
	watch: {},
	methods: {
    },
	created() {
    },
	mounted() {
    },
	beforeCreate() {},
	beforeMount() {},
	beforeUpdate() {},
	updated() {},
	beforeDestroy() {},
	destroyed() {},
	activated() {},
};
</script>
    <style lang='scss' scoped>
</style>