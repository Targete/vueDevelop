<template>
    <div class="home-page">首页
        <Swiper></Swiper>
    </div>

</template>
<script>
export default {
    components: {
    Swiper: () => import('@/components/swiper/index.vue'),
  },
}
</script>
<style>

</style>