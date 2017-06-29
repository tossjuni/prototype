<template>
  <div>
    <a :href="banner.linkUrl">
      <div class="block-card px-4">
        <div class="table">
          <div class="banner-image cell">
            <div class="frame-image mr-3" :style="{ backgroundImage: 'url(' + banner.imgUrl + ')' }"></div>
          </div>
          <div class="banner-headline cell align-top w-100">
            <h1 class="h5 bold mb-1">{{ banner.title }}</h1>
            <p class="gray600-text">금리<span class="ml-1 blue500-text">{{ banner.interest }}</span></p>
          </div>
        </div>
        <h2 class="h6 mb-4 lh-lose gray700-text text-left">{{ banner.subTitle }}</h2>
        <div class="table mb-0">
          <div class="banner-detail-2 w-40 cell bl-2-gray200 pl-3">
            <p class="h7 elephant700-text">한도</p>
            <p class="blue500-text">최대 {{ banner.limitPrice }}</p>
          </div>
          <div class="banner-detail-2 w-40 cell bl-2-gray200 pl-3">
            <p class="h7 elephant700-text">기간</p>
            <p class="blue500-text">{{ banner.limitPeriod }}</p>
          </div>
        </div>
      </div>
    </a>
  </div>

</template>

<script>
export default {
  props: ['banner']
}
</script>

<style scoped>
  .block-card {
    max-width: 300px;
    border: 1px solid #ebebeb !important;
    box-shadow: 0px 4px 10px 0px #cccccc;
    background-color: white;
    margin: auto;
    padding-top: 32px;
    padding-bottom: 32px;
  }
  .frame-image {
    width: 48px;
    height: 48px;
    background-size: 48px 48px;
  }
  .table { display: table; }
  .cell { display: table-cell; }
  .table p, .table h2 { margin-bottom: 0; }
  .h7 { font-size: 13px; }
  .lh-lose { line-height: 1.4; }
</style>
