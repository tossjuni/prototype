<template>
  <div class="bb-1">
    <a :href="list.linkUrl">
      <div class="block-card p-4">
        <div class="table mb-0">
          <div class="banner-headline cell align-top mr-3">
            <h1 class="h5 bold">{{ list.title }}</h1>
            <p><span class="tag mr-2 elephant600-text">금리</span>{{ list.interest }}</p>
            <p><span class="tag mr-2 elephant600-text">한도</span>{{ list.limitPrice }}</p>
          </div>
          <div class="banner-image cell text-right">
            <div class="frame-image mr-0 d-inline-block" :style="{ backgroundImage: 'url(' + list.imgUrl + ')' }"></div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['list']
}
</script>

<style scoped>
  .block-card {
    max-width: 360px;
    margin: auto;
  }
  .frame-image {
    width: 48px;
    height: 48px;
    /* background-color: #ededed; */
    background-size: 48px 48px;
  }
  .table { display: table; }
  .cell { display: table-cell; }
  .table p, .table h2 { margin-bottom: 0; }
  .h7 { font-size: 13px; }
  .lh-lose { line-height: 1.4; }
</style>
