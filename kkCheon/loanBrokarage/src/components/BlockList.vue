<template>
  <div class="bb-1">
    <a :href="list.linkUrl">
      <div class="block-card px-4 py-3">
        <h1 class="h6 bold gray800-text d-inline-block">{{ list.title }} <span class="tag-red mx-1" v-if="list.promotion">금리 할인중</span></h1>
        <div class="table mb-0 align-top">
          <div class="banner-headline cell mr-3 w-100">
            <p class="blue500-text"><span class="tag mr-2 gray600-text">금리</span>{{ list.interest }}</p>
            <p><span class="tag mr-2 gray600-text">한도</span>최대 {{ list.limitPrice }}</p>
            <p><span class="tag mr-2 gray600-text">기간</span>{{ list.limitPeriod }}</p>
          </div>
          <div class="banner-image cell text-right align-bottom">
            <div class="frame-image mr-0 d-inline-block align-bottom" :style="{ backgroundImage: 'url(' + list.imgUrl + ')' }"></div>
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
  .h6 { font-size: 18px; line-height: 1.4;}
  .tag-red {
    font-weight: normal;
    font-size: 12px;
    color: white;
    background-color: #db5237;
    padding: 1px 4px;
    border-radius: 2px;
    display: inline-block;
  }
</style>
