<template>
  <div class="blue100">
    <a :href="banner.linkUrl">
      <div class="block-card px-4 py-5">
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
          <div class="banner-detail-1 w-60 cell">
            <p class="h7 elephant700-text">금리</p>
            <p class="blue500-text">{{ banner.interest }}</p>
          </div>
          <div class="banner-detail-2 w-40 cell">
            <p class="h7 elephant700-text">최대한도</p>
            <p class="blue500-text">{{ banner.limitPrice }}</p>
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
    max-width: 360px;
    margin: auto;
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
