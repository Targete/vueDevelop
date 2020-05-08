<template>
  <swiper class="swiper" :options="swiperOption" v-if="topStories.length > 0">
    <swiper-slide class="slide" v-for="(story, index) in topStories" :key="index">
      <img class="img" :src="story.image" alt="">
      <div class="mask"></div>
      <span class="title">{{story.title}}</span>

    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
// import 'swiper/dist/css/swiper.css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { mapGetters } from 'vuex'


// import image403 from '@/utils/image403'

export default  {
  data () {
    let vm = this
    return {
        topStories: [],
        swiperOption: {
            loop: true,
            autoplay: {
            disableOnInteraction: false
            },
            pagination: {
            el: '.swiper-pagination'
            },
            on: {
            tap: function () {
                // clickedIndex下标从1开始
                vm.$router.push({ name: 'newsDetail', params: { id: vm.topStories[this.clickedIndex - 1].id } })
            }
            }
        }
    }
  },
  created() {
      this.$zhihuAxios.get('/api/4/news/latest').then(res => {
          if(res.status===200) {
              console.log('--------------------')
              console.log(res.data.top_stories);
              this.topStories = res.data.top_stories
              this.$store.dispatch('increment', this.topStories);
          }
      })

  },
  computed: {
    ...mapGetters([
        'topStories'
    ])
  },
  components: {
      [Swiper.name]: Swiper,
      [SwiperSlide.name]: SwiperSlide,
    // swiper,
    // swiperSlide
  },
  methods: {
    // 解决访问api图片403禁止访问问题
    // image403,
    toNewsDetail (id) {
      console.log(1)
      this.$router.push({ path: `newsDetail/${id}` })
    }
  }
}
</script>

<style>
.swiper{
    width:100%;
    height: 470px;
    background-color: #aaa;
}
</style>