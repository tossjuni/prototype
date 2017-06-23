<template>
  <div>
    <giftHeader :title="headerTitle" :subtitle="headerSubtitle" :bannerImg="bannerImg" :bannerBgColor="bannerBgColor"></giftHeader>
    <purchaseForm :items="purchaseItems" :totalPrice="totalPrice"></purchaseForm>
    <giftInfo></giftInfo>
  </div>


</template>

<script>
import giftHeader from '@/components/giftHeader'
import purchaseForm from '@/components/purchaseForm'
import giftInfo from '@/components/giftInfo'

export default {
  name: 'afreecaTV',
  metaInfo: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  components: {
    giftHeader,
    purchaseForm,
    giftInfo
  },

  // 화면 구성에 필요한 모든 변수를 입력하세요
  data: () => {
    return {

      bannerImg: require('../assets/img/card_afreecaTV.png'), // 배너 이미지를 연결하세요
      bannerBgColor: '#91a0cd', // 배너의 배경색을 입력하세요
      headerTitle: '아프리카TV 별풍선', // 타이틀을 입력하세요
      headerSubtitle: '보조 설명을 입력하세요', // 보조설명을 입력하세요

      // 상품의 개수와 이름, 가격정보를 입력하세요
      purchaseItems: [
        { id: '1', title: '{{ product-name-1 }}', price: '{{ price-1 }}' },
        { id: '2', title: '{{ product-name-2 }}', price: '{{ price-2 }}' },
        { id: '3', title: '{{ product-name-3 }}', price: '{{ price-3 }}' }
      ],
      totalPrice: '{{ totalPrice }}' // 전체 금액을 계산하세요

    }
  }
}
</script>
