<template>
  <div v-if="list.external == true && os == 'iOS'"></div>
  <div v-else class="bb-1">
    <a :href="list.linkUrl">
      <div v-bind:id="list.title" class="block-list px-4 py-4">
        <h1 v-bind:id="list.title" class="h65 gray800-text d-inline-block mb-2 bold">{{ list.title }} <span class="tag-red mx-1" v-if="list.promotion">금리 할인중</span></h1>
        <div v-bind:id="list.title" class="table mb-0 align-top">
          <div v-bind:id="list.title" class="banner-headline cell mr-3 w-100">
            <p v-bind:id="list.title" class="blue500-text bold"><span v-bind:id="list.title" class="tag mr-2 gray600-text normal">금리</span>{{ list.interest }}</p>
            <p v-bind:id="list.title" ><span v-bind:id="list.title" class="tag mr-2 gray600-text">한도</span>최대 {{ list.limitPrice }}</p>
            <p v-bind:id="list.title" ><span v-bind:id="list.title" class="tag mr-2 gray600-text">기간</span>{{ list.limitPeriod }}</p>
          </div>
          <div v-bind:id="list.title" class="banner-image cell text-right align-bottom">
            <div v-bind:id="list.title" class="frame-image mr-0 d-inline-block align-bottom" :style="{ backgroundImage: 'url(' + list.imgUrl + ')' }"></div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['list', 'os']
}
</script>

<style scoped>
  .block-list {
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
  .h65 { font-size: 16px; line-height: 1.4;}
  .tag-red {
    font-weight: normal;
    font-size: 12px;
    color: white;
    background-color: #db5237;
    padding: 1px 4px;
    border-radius: 2px;
    display: inline-block;
  }
  p {
    font-size: 14px;
  }
</style>
