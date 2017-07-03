<template>
  <div>
    <a :href="banner.linkUrl">
      <div v-bind:id="banner.title" class="block-card p-4">
        <div v-bind:id="banner.title" class="table">
          <div v-bind:id="banner.title" class="banner-image cell">
            <div v-bind:id="banner.title" class="frame-image mr-3" :style="{ backgroundImage: 'url(' + banner.imgUrl + ')' }"></div>
          </div>
          <div v-bind:id="banner.title" class="banner-headline cell align-top w-100">
            <h6 v-bind:id="banner.title" class="h7 mb-1">{{ banner.bankName }}</h6>
            <h1 v-bind:id="banner.title" class="h5 bold mb-0">{{ banner.title }}</h1>
          </div>
        </div>
        <p v-bind:id="banner.title" class="gray600-text mb-2">금리<span class="bold ml-1 blue500-text">{{ banner.interest }}</span></p>
        <h2 v-bind:id="banner.title" class="h65 mb-3 lh-lose gray700-text text-left">{{ banner.subTitle }}</h2>
        <div v-bind:id="banner.title" class="table mb-0">
          <div v-bind:id="banner.title" class="banner-detail-2 w-40 cell bl-2-gray200 pl-3">
            <p v-bind:id="banner.title" class="h7 elephant700-text">한도</p>
            <p v-bind:id="banner.title" class="h7 blue500-text bold">최대 {{ banner.limitPrice }}</p>
          </div>
          <div v-bind:id="banner.title" class="banner-detail-2 w-40 cell bl-2-gray200 pl-3">
            <p v-bind:id="banner.title" class="h7 elephant700-text">기간</p>
            <p v-bind:id="banner.title" class="h7 blue500-text bold">{{ banner.limitPeriod }}</p>
          </div>
        </div>
      </div>
    </a>
  </div>

</template>

<script>
export default {
  props: ['banner'],
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
  .lh-lose { line-height: 1.4; }
</style>
