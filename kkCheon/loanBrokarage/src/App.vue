<template>
    <div id="app">
        <div class="notice text-center py-3 blue600 blue100-text h7">
            <p class="mb-0"><span class="oi oi-bullhorn pr-2"></span> 대출한도 조회는 신용등급에 영향이 없습니다</p>
        </div>
        <!-- 배너영역 -->
        <div class="banner blue500">
            <div class="bannerHeader text-center py-4">
                <h1 class="h6 mb-0 gray0-text">이달의 추천상품</h1>
            </div>
            <carousel-3d
                    :autoplay="false"
                    :controls-visible="false"
                    :clickable="false"
                    :autoplayTimeout="4000"
                    :autoplayHoverPause="true"
            >
                <slide v-for="(service, index) in serviceRecommendList" :index="index" :key="index">
                    <block-card :card="service"></block-card>
                </slide>
            </carousel-3d>
        </div>
        <block-list class="list" v-for="list in serviceList" :list="list" :key="serviceList.key"></block-list>
    </div>
</template>

<script>

import Vue from 'vue'
import Urlencode from 'urlencode'
import MobileDetect from 'mobile-detect'
import BlockCard from './components/BlockCard'
import BlockList from './components/BlockList'

var md = new MobileDetect(window.navigator.userAgent);

export default {
  name: 'app',
  components: {
    BlockCard,
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
      os: 'all',
      serviceRecommendList: [
        {
          key: '1',
          id: 'citibank-worker-loan',
          productName: '온라인 직장인 신용대출',
          bankName: '씨티은행',
          description: '제휴코드 007055 입력시 0.5%p할인',
          imgUrl: require('./assets/icon-citi.png'),
          interest: '최저 연 3.0%',
          interestCondition: '금융채  3개월 기준금리 + 연 1.65%p, 2017년 7월 7일 현재',
          limitPrice: '1억 4천만원',
          limitPeriod: '최대 60개월',
          external: false,
          linkUrl: 'supertoss://web?url=' + Urlencode('https://loanbrokerage-citi-promotion-landin.netlify.com/', 'gbk') + '&external=true'
        },
        {
          key: '2',
          id: 'sbi-speed-loan',
          productName: '스피드론',
          bankName: 'SBI저축은행',
          description: '무보증, 무방문으로 최대 1,000만원까지 신청 가능',
          imgUrl: require('./assets/icon-sbi.png'),
          interest: '연 19.9% ~ 27.9%',
          limitPrice: '1,000만원',
          limitPeriod: '최대 60개월',
          external: false,
          notice: '저축은행중앙회 심의필 2017-00439호(2017년 7월 07일)',
          linkUrl: 'supertoss://web?url=' + Urlencode('http://toss.babilloan.com/APCMOBprd0102g.web?prodCd=710078', 'gbk') + '&external=true'
        },
        {
          key: '3',
          id: 'shinhancard-express-loan',
          productName: '즉시대출',
          bankName: '신한카드',
          description: '신한카드가 없어도 OK! 주부, 프리랜서도 대출 가능',
          imgUrl: require('./assets/icon-shinhan.png'),
          interest: '연 7.0% ~ 27.0%',
          limitPrice: '5,000만원',
          limitPeriod: '최대 36개월',
          external: false,
          notice: '',
          linkUrl: 'https://m.shinhancard.com/mob/MOBFM171N/MOBFM171R18.shc?PCD=M0140'
        },
        {
          key: '5',
          id: 'wooricard-credit-loan',
          productName: '신용대출',
          bankName: '우리카드',
          description: '한도조회부터 대출금 입금까지 24시간 언제나 즉시입금 가능',
          imgUrl: require('./assets/icon-woori.png'),
          interest: '연 4.9% ~ 24.9%',
          limitPrice: '3,000만원',
          limitPeriod: '최대 36개월',
          external: true,
          notice: '',
          linkUrl: 'supertoss://web?url=' + Urlencode('https://sccd.wooribank.com/ccd/Dream?withyou=CDFNS0130&lnkid=A02100000000T', 'gbk') + '&external=true'
        },
        {
          key: '7',
          id: 'honestfund-worker-loan',
          productName: '직장인 신용대출',
          bankName: '어니스트펀드',
          description: '최대 3천만원까지 넉넉한 한도, 최저 3.9%부터 중저금리 대출',
          imgUrl: require('./assets/icon-hf.png'),
          interest: '연 3.9% ~ 18.9%',
          limitPrice: '3,000만원',
          limitPeriod: '최대 36개월',
          external: 'iOS',
          notice: '',
          linkUrl: 'supertoss://web?url=' + Urlencode('https://www.honest-fund.com/loan/draft?utm_source=toss&utm_medium=connect&utm_content=toss&utm_campaign=borrower', 'gbk') + '&external=true'
        }
      ],
      serviceList: [
        {
          key: '0',
          id: 'citibank-worker-loan',
          productName: '온라인 직장인 신용대출',
          bankName: '씨티은행',
          description: 'Toss 제휴코드 "007055"를 입력하면 0.5%p 금리 할인',
          imgUrl: require('./assets/icon-citi.png'),
          interest: '최저 연 3.0%',
          limitPrice: '1억 4천만원',
          limitPeriod: '최대 60개월',
          external: false,
          interestCondition: '금융채  3개월 기준금리 + 연 1.65%p, 2017년 7월 7일 현재',
          notice: 'Toss 제휴코드 "007055"를 입력하면 0.5%p 금리 할인',
          promotion: true,
          linkUrl: 'supertoss://web?url=' + Urlencode('https://loanbrokerage-citi-promotion-landin.netlify.com/', 'gbk') + '&external=true'
        },
        {
          key: '1',
          id: 'sbi-speed-loan',
          productName: '스피드론',
          bankName: 'SBI저축은행',
          description: '무보증, 무방문으로 최대 1,000만원까지 신청 가능',
          imgUrl: require('./assets/icon-sbi.png'),
          interest: '연 19.9% ~ 27.9%',
          limitPrice: '1,000만원',
          limitPeriod: '최대 60개월',
          external: false,
          promotion: true,
          notice: '저축은행중앙회 심의필 2017-00439호(2017년 7월 07일)',
          linkUrl: 'supertoss://web?url=' + Urlencode('http://toss.babilloan.com/APCMOBprd0102g.web?prodCd=710078', 'gbk') + '&external=true'
        },
        {
          key: '2',
          id: 'sbi-babylon',
          productName: '중금리바빌론',
          bankName: 'SBI저축은행',
          description: '직장인 대상 무보증, 무방문으로 최고 1억원까지 신청 가능',
          imgUrl: require('./assets/icon-sbi.png'),
          interest: '연 5.9% ~ 17.9%',
          limitPrice: '1억원',
          limitPeriod: '최대 84개월',
          external: false,
          promotion: true,
          notice: '저축은행중앙회 심의필 2017-00439호(2017년 7월 07일)',
          linkUrl: 'supertoss://web?url=' + Urlencode('http://toss.babilloan.com/APCMOBprd0102g.web?prodCd=710381', 'gbk') + '&external=true'
        },
        {
          key: '3',
          id: 'shinhancard-express-loan',
          productName: '즉시대출',
          bankName: '신한카드',
          description: '신한카드가 없어도 OK! 주부, 프리랜서도 대출 가능',
          imgUrl: require('./assets/icon-shinhan.png'),
          interest: '연 7.0% ~ 27.0%',
          limitPrice: '5,000만원',
          limitPeriod: '최대 36개월',
          external: false,
          notice: '',
          linkUrl: 'https://m.shinhancard.com/mob/MOBFM171N/MOBFM171R18.shc?PCD=M0140'
        },
        {
          key: '4',
          id: 'shinhancard-worker-loan',
          productName: '직장인대출',
          bankName: '신한카드',
          description: '직장건강보험가입만으로도 누구나!',
          imgUrl: require('./assets/icon-shinhan.png'),
          interest: '연 6.0% ~ 27.0%',
          limitPrice: '5,000만원',
          limitPeriod: '최대 48개월',
          external: false,
          notice: '',
          linkUrl: 'https://m.shinhancard.com/mob/MOBFM171N/MOBFM171R18.shc?PCD=M0141'
        },
        {
          key: '5',
          id: 'wooricard-credit-loan',
          productName: '신용대출',
          bankName: '우리카드',
          description: '한도조회부터 대출금 입금까지 24시간 언제나 즉시입금 가능',
          imgUrl: require('./assets/icon-woori.png'),
          interest: '연 4.9% ~ 24.9%',
          limitPrice: '3,000만원',
          limitPeriod: '최대 36개월',
          external: true,
          notice: '',
          linkUrl: 'supertoss://web?url=' + Urlencode('https://sccd.wooribank.com/ccd/Dream?withyou=CDFNS0130&lnkid=A02100000000T', 'gbk') + '&external=true'
        },
        // {
        //   key: '6',
        //   id: 'hyundaicapital-credit-loan',
        //   productName: '신용대출',
        //   description: '신용등급 영향 없는 무료 한도조회로 30분 내 최고 5,000만원까지 가능',
        //   imgUrl: require('./assets/icon-hyundai-capital.png'),
        //   interest: '연 5.75% ~ 25.9%',
        //   limitPrice: '5,000만원',
        //   linkUrl: 'https://www.hyundaicapital.com/cpc/dl/CPCDL0101_01.hc'
        // },
        {
          key: '7',
          id: 'honestfund-worker-loan',
          productName: '직장인 신용대출',
          bankName: '어니스트펀드',
          description: '최대 3천만원까지 넉넉한 한도, 최저 3.9%부터 중저금리 대출',
          imgUrl: require('./assets/icon-hf.png'),
          interest: '연 3.9% ~ 18.9%',
          limitPrice: '3,000만원',
          limitPeriod: '최대 36개월',
          external: 'iOS',
          notice: '',
          linkUrl: 'supertoss://web?url=' + Urlencode('https://www.honest-fund.com/loan/draft?utm_source=toss&utm_medium=connect&utm_content=toss&utm_campaign=borrower', 'gbk') + '&external=true'
        },
        {
          key: '8',
          id: 'honestfund-debt-integrate-loan',
          productName: '채무 통합대출',
          bankName: '어니스트펀드',
          description: '최대 3천만원까지 넉넉한 한도, 최저 3.9%부터 중저금리 대출',
          imgUrl: require('./assets/icon-hf.png'),
          interest: '연 3.9% ~ 18.9%',
          limitPrice: '3,000만원',
          limitPeriod: '최대 36개월',
          external: 'iOS',
          notice: '',
          linkUrl: 'supertoss://web?url=' + Urlencode('https://www.honest-fund.com/loan/draft?utm_source=toss&utm_medium=connect&utm_content=toss&utm_campaign=borrower', 'gbk') + '&external=true'
        }
      ]
    }
  }
}
</script>

<style>
  @import 'https://toss.im/frame/assets/stylesheets/tossframe-2.0.4.css';
  html,body {
    -webkit-overflow-scrolling : touch !important;
    overflow: auto !important;
    height: 100% !important;
  }
  *, h1, h2, h3, h4, h5, h6 { word-break: keep-all; }
  a, a:hover, a:active, a:focus { text-decoration: none; color: #3d424e; }
  .carousel-3d-container{
    height: 280px !important;
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }
  .carousel-3d-slider {
    /* width: 100% !important; */
    height: 280px !important;
    /* background-color: gray; */
  }
  .carousel-3d-slide {
    border: 0px !important;
    background-color: transparent !important;
    margin: auto;
    /* width: 100% !important; */
    height: 280px !important;
    box-shadow:
  }
  .h7 { font-size: 14px; }
</style>
