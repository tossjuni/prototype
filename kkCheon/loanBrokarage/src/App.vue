<template>
  <div id="app">
    <div class="notice text-center py-3 blue600 blue100-text h7">
      <p class="mb-0"><span class="oi oi-bullhorn pr-2"></span> 대출한도 조회는 신용등급에 영향이 없습니다</p>
    </div>
    <!-- 배너영역 -->
    <div class="banner blue500">
      <div class="bannerHeader text-center pt-3">
        <h1 class="h6 mb-0 mt-2 gray0-text">이달의 추천상품</h1>
      </div>
      <carousel-3d
                   :autoplay="true"

                   :controls-visible="false"
                   :clickable="false"
                   :autoplayTimeout="4000"
                   :autoplayHoverPause="true"
                   >
        <slide v-for="(slide, i) in slides" :index="i" :key="i">
          <block-banner :banner="serviceRecommendList[i]"></block-banner>
        </slide>
      </carousel-3d>
    </div>
    <block-list class="list" v-for="list in serviceList" :list="list" :key="serviceList.key"></block-list>
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
      slides: 4,
      serviceRecommendList: [
        {
          key: '2',
          title: 'SBI저축은행 중금리바빌론',
          subTitle: '직장인 대상 무보증, 무방문으로 최고 1억원까지 신청 가능',
          imgUrl: require('./assets/icon-sbi.png'),
          interest: '연 5.9% ~ 17.9%',
          limitPrice: '1억원',
          limitPeriod: '최대 84개월',
          promotion: false,
          linkUrl: 'https://m.babilloan.com/APCMOBprd0102g.web?prodCd=710381'
        },
        {
          key: '3',
          title: '신한카드 즉시대출',
          subTitle: '신한카드가 없어도 OK! 주부, 프리랜서도 대출 가능',
          imgUrl: require('./assets/icon-shinhan.png'),
          interest: '연 7.0% ~ 27.0%',
          limitPrice: '5천만원',
          limitPeriod: '최대 36개월',
          promotion: 'true',
          linkUrl: 'https://m.shinhancard.com/mob/MOBFM171N/MOBFM171R18.shc?PCD=M0140'
        },
        {
          key: '5',
          title: '우리카드 신용대출',
          subTitle: '우리카드가 없어도 대출 가능 24시간 언제나 즉시입금 가능',
          imgUrl: require('./assets/icon-woori.png'),
          interest: '연 4.9% ~ 24.9%',
          limitPrice: '3천만원',
          limitPeriod: '최대 36개월',
          promotion: false,
          linkUrl: 'https://sccd.wooribank.com/ccd/Dream?withyou=CDFNS0130'
        },
        {
          key: '8',
          title: '어니스트펀드 채무 통합대출',
          subTitle: '최대 3천만원까지 넉넉한 한도, 최저 3.9%부터 중저금리 대출',
          imgUrl: require('./assets/icon-hf.png'),
          interest: '연 3.9% ~ 18.9%',
          limitPrice: '3천만원',
          limitPeriod: '최대 36개월',
          promotion: false,
          linkUrl: 'https://www.honest-fund.com/loan/guide'
        }
      ],
      serviceList: [
        {
          key: '1',
          title: 'SBI저축은행 스피드론',
          subTitle: '무보증, 무방문으로 최대 1,000만원까지 신청 가능',
          imgUrl: require('./assets/icon-sbi.png'),
          interest: '연 19.9% ~ 27.9%',
          limitPrice: '1,000만원',
          limitPeriod: '최대 60개월',
          promotion: false,
          linkUrl: 'https://m.babilloan.com/APCMOBprd0102g.web?prodCd=710078'
        },
        {
          key: '2',
          title: 'SBI저축은행 중금리바빌론',
          subTitle: '직장인 대상 무보증, 무방문으로 최고 1억원까지 신청 가능',
          imgUrl: require('./assets/icon-sbi.png'),
          interest: '연 5.9% ~ 17.9%',
          limitPrice: '1억원',
          limitPeriod: '최대 84개월',
          promotion: false,
          linkUrl: 'https://m.babilloan.com/APCMOBprd0102g.web?prodCd=710381'
        },
        {
          key: '3',
          title: '신한카드 즉시대출',
          subTitle: '신한카드가 없어도 OK! 주부, 프리랜서도 대출 가능',
          imgUrl: require('./assets/icon-shinhan.png'),
          interest: '연 7.0% ~ 27.0%',
          limitPrice: '5,000만원',
          limitPeriod: '최대 36개월',
          promotion: true,
          linkUrl: 'https://m.shinhancard.com/mob/MOBFM171N/MOBFM171R18.shc?PCD=M0140'
        },
        {
          key: '4',
          title: '신한카드 직장인대출',
          subTitle: '직장건강보험가입만으로도 누구나!',
          imgUrl: require('./assets/icon-shinhan.png'),
          interest: '연 6.0% ~ 27.0%',
          limitPrice: '5,000만원',
          limitPeriod: '최대 48개월',
          promotion: true,
          linkUrl: 'https://m.shinhancard.com/mob/MOBFM171N/MOBFM171R18.shc?PCD=M0141'
        },
        {
          key: '5',
          title: '우리카드 신용대출',
          subTitle: '한도조회부터 대출금 입금까지 24시간 언제나 즉시입금 가능',
          imgUrl: require('./assets/icon-woori.png'),
          interest: '연 4.9% ~ 24.9%',
          limitPrice: '3,000만원',
          limitPeriod: '최대 36개월',
          promotion: false,
          linkUrl: 'https://sccd.wooribank.com/ccd/Dream?withyou=CDFNS0130'
        },
        // {
        //   key: '6',
        //   title: '현대캐피탈 신용대출',
        //   subTitle: '신용등급 영향 없는 무료 한도조회로 30분 내 최고 5,000만원까지 가능',
        //   imgUrl: require('./assets/icon-hyundai-capital.png'),
        //   interest: '연 5.75% ~ 25.9%',
        //   limitPrice: '5,000만원',
        //   linkUrl: 'https://www.hyundaicapital.com/cpc/dl/CPCDL0101_01.hc'
        // },
        {
          key: '7',
          title: '어니스트펀드 직장인 신용대출',
          subTitle: '최대 3천만원까지 넉넉한 한도, 최저 3.9%부터 중저금리 대출',
          imgUrl: require('./assets/icon-hf.png'),
          interest: '연 3.9% ~ 18.9%',
          limitPrice: '3,000만원',
          limitPeriod: '최대 36개월',
          promotion: false,
          linkUrl: 'http://www.honest-fund.com/loan/guide'
        },
        {
          key: '8',
          title: '어니스트펀드 채무 통합대출',
          subTitle: '최대 3천만원까지 넉넉한 한도, 최저 3.9%부터 중저금리 대출',
          imgUrl: require('./assets/icon-hf.png'),
          interest: '연 3.9% ~ 18.9%',
          limitPrice: '3,000만원',
          limitPeriod: '최대 36개월',
          promotion: false,
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
    height: 300px !important;
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }
  .carousel-3d-slider {
    /* width: 100% !important; */
    height: 300px !important;
    /* background-color: gray; */
  }
  .carousel-3d-slide {
    border: 0px !important;
    background-color: transparent !important;
    margin: auto;
    /* width: 100% !important; */
    height: 300px !important;
    box-shadow:
  }
  .h7 { font-size: 14px; }
</style>
