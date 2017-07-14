<template>
  <a :id="card.id" class="link-card" :href="card.linkUrl" :data-product="card.bankName + ' ' + card.productName">
    <div class="block-card p-4">
      <div class="table">
        <div class="card-image cell">
          <div class="frame-image mr-3" :style="{ backgroundImage: 'url(' + card.imgUrl + ')' }"></div>
        </div>
        <div class="card-headline cell align-top w-100">
          <h6 class="h7 mb-1">{{ card.bankName }}</h6>
          <h1 class="h5 bold mb-0">{{ card.productName }}</h1>
        </div>
      </div>
      <p class="gray600-text mb-2">금리<span class="bold ml-1 blue500-text">{{ card.interest }}</span></p>
      <h2 class="h65 mb-3 lh-lose gray700-text text-left">{{ card.description }}</h2>
      <div class="table mb-2">
        <div class="card-detail-2 w-40 cell bl-2-gray200 pl-3">
          <p class="h7 elephant700-text">한도</p>
          <p class="h7 blue500-text bold">최대 {{ card.limitPrice }}</p>
        </div>
        <div class="card-detail-2 w-40 cell bl-2-gray200 pl-3">
          <p class="h7 elephant700-text">기간</p>
          <p class="h7 blue500-text bold">{{ card.limitPeriod }}</p>
        </div>
      </div>
      <p class="h8 gray400-text mb-0">{{ card.notice }}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: ['card', 'os'],
}
</script>

<style scoped>
  .block-card {
    max-width: 300px;
    border: 1px solid #ebebeb !important;
    box-shadow: 0px 4px 40px 10px rgba(16, 59, 180, 0.19);
    background-color: white;
    margin: auto;
    padding-top: 32px;
    padding-bottom: 32px;
  }
  .frame-image {
    width: 40px;
    height: 40px;
    background-size: 40px 40px;
  }
  .h5 { font-size: 18px; line-height: 1.2;}
  .h65 { font-size: 16px; line-height: 1.2;}
  .table { display: table; }
  .cell { display: table-cell; }
  .table p, .table h2 { margin-bottom: 0; }
  .h7 { font-size: 13px; }
  .h8 {
    font-size: 10px;
    text-align: center;
    position: absolute;
  }
  .lh-lose { line-height: 1.4; }
</style>
