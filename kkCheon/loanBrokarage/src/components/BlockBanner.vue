<template>
  <div>
    <a :href="banner.linkUrl">
      <div class="block-card mt-3 mx-2 px-3">
        <div class="table">
          <div class="banner-image cell">
            <div class="frame-image mr-3" :style="{ backgroundImage: 'url(' + banner.imgUrl + ')' }"></div>
          </div>
          <div class="banner-headline cell align-top">
            <h1 class="h5 bold">{{ banner.title }}</h1>
            <h2 class="h6 lh-lose">{{ banner.subTitle }}</h2>
          </div>
        </div>
        <div class="table mb-0">
          <div class="banner-detail-1 w-45 cell">
            <p class="h7 elephant700-text">금리</p>
            <p class="blue500-text">{{ banner.interest }}</p>
          </div>
          <div class="banner-detail-2 w-25 cell">
            <p class="h7 elephant700-text">최대한도</p>
            <p class="blue500-text">{{ banner.limitPrice }}</p>
          </div>
          <div class="banner-detail-2 w-25 cell">
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
    /* max-width: 360px; */
    margin: auto;
    border: 1px solid #ebebeb !important;
    box-shadow: 0px 4px 10px 0px #cccccc;
    background-color: white;
    margin: auto;
    padding-top: 32px;
    padding-bottom: 32px;
  }
  .frame-image {
    width: 76px;
    height: 76px;
    background-size: 76px 76px;
  }
  .table { display: table; }
  .cell { display: table-cell; }
  .table p, .table h2 { margin-bottom: 0; }
  .h7 { font-size: 13px; }
  .lh-lose { line-height: 1.4; }
</style>
