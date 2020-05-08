<template>
  <swiper class="swiper" :options="swiperOption" v-if="topStories.length > 0">
    <swiper-slide class="slide" v-for="(story, index) in topStories" :key="index">
      <img class="img" :src="story.image" alt="">
      <div class="mask"></div>
      <span class="title">{{story.title}}</span>
      <span class="hint">{{story.hint}}</span>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import 'swiper/css/swiper.css'
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
            disableOnInteraction: true
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
        // 'topStories'
    ])
  },
  components: {
    Swiper,
    SwiperSlide
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

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 470px;
  .slide {
    width: 100%;
    height: 100%;
    .mask {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
    }
    .img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
    //   top: 25%;
    //   transform: translateY(-25%);
    }
    .title {
      font-size: 20px;
      line-height: 21px;
      position: absolute;
      left: 0;
      bottom: 44px;
      padding: 0 15px;
      color: #fffffc;
    }
    .hint {
      font-size: 14px;
      line-height: 14px;
      position: absolute;
      left: 0;
      bottom: 14px;
      padding: 0 15px;
      color: #dddffc;
    }
  }
}
  .swiper-pagination-bullet {
    background: #88878d;
    opacity: 1;
    &.swiper-pagination-bullet-active {
      background: #fffffd;
      opacity: 1;
    }
  }

</style>