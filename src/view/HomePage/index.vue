<template>
    <div class="home-page">
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