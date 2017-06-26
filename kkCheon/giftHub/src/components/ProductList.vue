<template>
  <ul id="ProductItem" class="item-list px-0">
    <blockList v-for="item in items" :item="item" :key="key"></blockList>
  </ul>
</template>

<script>
import Vue from 'vue'
import blockList from '@/components/block-list'

export default {
  name: 'ProductList',
  components: {
    blockList
  },
  data() {
    var items = [
      { key: '1', link: '#', title: '문화상품권', subtitle: '내용을 입력하세요', imgUrl: require('../assets/img/icon/1-cultureGift-40.png') },
      { key: '2', link: '#', title: '틴캐시', subtitle: '내용을 입력하세요', imgUrl: require('../assets/img/icon/2-teencash.png') },
      { key: '3', link: '#', title: '해피머니 상품권', subtitle: '내용을 입력하세요', imgUrl: require('../assets/img/icon/3-happy-money.png') },
      { key: '4', link: 'afreecaTV', title: '아프리카TV 별풍선', subtitle: '내용을 입력하세요', imgUrl: require('../assets/img/icon/4-afreecaTV-40.png') },
      { key: '5', link: 'googlePlayGift', title: 'GooglePlay 기프트 코드', subtitle: '내용을 입력하세요', imgUrl: require('../assets/img/icon/5-play-gift-card-40.png') },
      { key: '6', link: 'steam', title: '스팀 월렛', subtitle: '내용을 입력하세요', imgUrl: require('../assets/img/icon/6-steam-40.png') }
    ]
    return { items };
  }
}
</script>
