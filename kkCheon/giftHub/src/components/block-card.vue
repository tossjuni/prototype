<template>
  <div>
    <ul class="item-list p-3">
      <li class="item-card list-unstyled p-3 bb-1 gray0">
        <table class="w-100 mb-4">
          <tr>
            <td class="block-icon">
              <div class="icon"></div>
            </td>
            <td class="block-text pl-3 pt-2">
              <h2 class="title h6 mb-0">{{ card.title }}</h2>
              <p class="price h4 mb-0">{{ card.price }}</p>
            </td>
            <td class="align-top text-right">
                <i class="blue500-text oi oi-chevron-top"></i>
            </td>
          </tr>
        </table>
        <p class="mb-3">핀번호 : <strong class="blue500-text bold">{{ card.pinNum }}</strong></p>
        <p class="h7">
          결제 금액 : {{ card.paymentPrice }}</Br>
          출금 계좌 : {{ card.paymentAccount }}</br></br>
          컬쳐랜드(www.cultureland.co.kr)에서 컬쳐캐쉬로 충전 후 온라인 가맹처에서 사용 가능합니다.
          (이용 문의 : <a href="tel:1577-2111 underline">1577-2111</a>)
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'blockCard',
  props: ['card']
}
</script>

<style scoped>
  .h7 {
    font-size: 0.75rem;
  }
  select {
    width: 80px;
    display: inline;
  }
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
</style>
