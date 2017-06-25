<template>
  <ul id="ProductItem" class="item-list px-0">
    <div v-for="item in items">
      <router-link :to="{ name: item.link }">
        <li class="item list-unstyled p-3 bb-1 gray0">
          <table class="w-100">
            <tr>
              <td class="block-icon">
                <div class="icon" v-bind:style="{ backgroundImage: 'url(' + item.imgUrl + ')' }"></div>
              </td>
              <td class="block-text pl-3 pt-2">
                <h2 class="h5 mb-0">{{ item.title }}</h2>
                <p class="mb-0">{{ item.subtitle }}</p>
              </td>
              <td class="align-middle text-right">
                <!-- <div class="block-promotion d-inline-block px-2 py-1">
                  5% 할인
                </div> -->
              </td>
            </tr>
          </table>
        </li>
      </router-link>
    </div>
  </ul>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'ProductList',
  props: 'listData',
  data() {
    var items = [
      { link: '#', title: '문화상품권', subtitle: '내용을 입력하세요', imgUrl: require('../assets/img/icon/1-cultureGift-40.png') },
      { link: '#', title: '틴캐시', subtitle: '내용을 입력하세요', imgUrl: require('../assets/img/icon/2-teencash.png') },
      { link: '#', title: '해피머니 상품권', subtitle: '내용을 입력하세요', imgUrl: require('../assets/img/icon/3-happy-money.png') },
      { link: 'afreecaTV', title: '아프리카TV 별풍선', subtitle: '내용을 입력하세요', imgUrl: require('../assets/img/icon/4-afreecaTV-40.png') },
      { link: 'googlePlayGift', title: 'GooglePlay 기프트 코드', subtitle: '내용을 입력하세요', imgUrl: require('../assets/img/icon/5-play-gift-card-40.png') },
      { link: 'steam', title: '스팀 월렛', subtitle: '내용을 입력하세요', imgUrl: require('../assets/img/icon/6-steam-40.png') }
    ]
    return { items };
  }
}



</script>
<style scoped>
  .block-icon {
    width: 48px;
  }
  .icon {
    background: #D8D8D8;
    border-radius: 4px;
    width: 48px;
    height: 48px;
    background-size: 48px 48px;
  }
  .block-promotion {
    position: relative;
    border: 1px solid #DB5237;
    border-radius: 100px;
    font-size: 12px;
    color: #DB5237;
    line-height: 12px;
    font-weight: bold;
  }
  a,
  a:hover,
  a:focus {
    color: #333333;
    text-decoration: none;
  }
</style>
