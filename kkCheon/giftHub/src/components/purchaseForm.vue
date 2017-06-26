<template>
  <div class="container">

    <!-- 상품 선택 폼 -->
    <section id="option">
      <form action="" id="formToPay">
        <div class="order-option">
          <blockSelect v-for="item in items" v-bind:block="item" v-bind:key="item.id"></blockSelect>
        </div>
      </form>
    </section>

    <!-- 총 결제 금액 -->
    <div class="total-price pt-4 pb-3 text-right">
        <span class="align-top h6 pr-1 gray700-text">총 결제 금액</span>
        <span class="value h4">{{ totalPrice }}원</span>
    </div>

    <!-- 구매하기 버튼 -->
    <button @click="purchase" :disabled="purchaseDisabled" class="btn btn-accent btn-lg bold mb-5 btn-block">구매하기</button>

  </div>
</template>

<script>
import blockSelect from '@/components/block-select'

export default {
  name: 'purchaseForm',
  props: ['items', 'totalPrice'],
  components: {
    blockSelect
  }
}
</script>
