<template>
  <div id="app">
    <carousel-3d class="m-0" :controls-visible="true" :clickable="false">
      <slide v-for="(slide, i) in slides" :index="i" :key="i">
        <block-banner :banner="serviceList[i]"></block-banner>
      </slide>
    </carousel-3d>
    <block-list v-for="list in serviceList" :list="list" :key="serviceList.key"></block-list>
  </div>
</template>

<script>

import Vue from 'vue';
import BlockBanner from './components/BlockBanner'
import BlockList from './components/BlockList'

export default {
  name: 'app',
  components: {
    BlockBanner,
    BlockList
  },
  metaInfo: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  data() {
    return {
      slides: 8,
      serviceList: [
        {
          key: '1',
          title: '스피드론',
          subTitle: '신청 후 바로 입금까지 최대 1,000만원까지 가능',
          imgUrl: require('./assets/icon-sbi.png'),
          interest: '연 19.9% ~ 27.9%',
          limitPrice: '1,000만원',
          linkUrl: 'https://m.babilloan.com/APCMOBprd0102g.web?prodCd=710078'
        },
        {
          key: '2',
          title: 'SBI중금리바빌론',
          subTitle: '직장인 대상 무보증, 무방문으로 최고 1억원까지 신청 가능',
          imgUrl: require('./assets/icon-sbi.png'),
          interest: '연 5.9% ~ 17.9%',
          limitPrice: '1억원',
          linkUrl: 'https://m.babilloan.com/APCMOBprd0102g.web?prodCd=710381'
        },
        {
          key: '3',
          title: '신한카드 즉시대출',
          subTitle: '신한카드가 없어도 OK! 주부, 프리랜서도 대출 가능',
          imgUrl: require('./assets/icon-shinhan.png'),
          interest: '연 6.0% ~ 27.0%',
          limitPrice: '5,000만원',
          linkUrl: 'https://m.shinhancard.com/mob/MOBFM171N/MOBFM171R18.shc?PCD=M0140'
        },
        {
          key: '4',
          title: '신한카드 직장인대출',
          subTitle: '직장건강보험가입만으로도 누구나!',
          imgUrl: require('./assets/icon-shinhan.png'),
          interest: '연 7.0 ~ 27.0%',
          limitPrice: '5,000만원',
          linkUrl: '#'
        },
        {
          key: '5',
          title: '우리카드 신용대출',
          subTitle: '한도조회부터 대출금 입금까지 24시간 언제나 즉시입금 가능',
          imgUrl: require('./assets/icon-woori.png'),
          interest: '연 4.9% ~ 24.9%',
          limitPrice: '3,000만원',
          linkUrl: 'https://sccd.wooribank.com/ccd/Dream?withyou=CDFNS0130'
        },
        {
          key: '6',
          title: '현대캐피탈 신용대출',
          subTitle: '신용등급 영향 없는 무료 한도조회로 30분 내 최고 5,000만원까지 가능',
          imgUrl: require('./assets/icon-hyundai-capital.png'),
          interest: '연 5.75% ~ 25.9%',
          limitPrice: '5,000만원',
          linkUrl: 'https://www.hyundaicapital.com/cpc/dl/CPCDL0101_01.hc'
        },
        {
          key: '7',
          title: '직장인 신용대출',
          subTitle: '최대 3천만원까지 넉넉한 한도, 최저 3.9%부터 중저금리 대출',
          imgUrl: require('./assets/icon-hf.png'),
          interest: '연 3.9% ~ 18.9%',
          limitPrice: '3,000만원',
          linkUrl: 'http://www.honest-fund.com/loan/guide'
        },
        {
          key: '8',
          title: '채무 통합대출',
          subTitle: '최대 3천만원까지 넉넉한 한도, 최저 3.9%부터 중저금리 대출',
          imgUrl: require('./assets/icon-hf.png'),
          interest: '연 3.9% ~ 18.9%',
          limitPrice: '3,000만원',
          linkUrl: 'https://www.honest-fund.com/loan/guide'
        }
      ]
    }
  }
}
</script>

<style>
  @import 'https://toss.im/frame/assets/stylesheets/tossframe-2.0.4.css';
  *, h1, h2, h3, h4, h5, h6 { word-break: keep-all; }
  a, a:hover, a:active, a:focus { text-decoration: none; color: #3d424e; }
  .carousel-3d-container{
    height: 236px !important;
  }
  .carousel-3d-slider {
    width: 100% !important;
    height: 236px !important;
  }
  .carousel-3d-slide {
    border: 0px !important;
    border-width: 0px !important;
    background-color: white;
    margin: auto;
    width: 100% !important;
    height: 236px !important;
  }
</style>
