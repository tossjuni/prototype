<template>
  <div class="giftHeader">
    <div class="banner w-100 gray200"
      v-bind:style="{ backgroundImage: 'url(' + bannerImg + ')', backgroundColor: bannerBgColor }"></div>
    <div class="container">
      <header class="py-4">
        <h1 class="h3 mb-2">{{ title }}</h1>
        <h6 class="gray700-text mb-0">{{ subtitle }}</h6>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'bannerImg', 'bannerBgColor']
}
</script>

<style scoped>
 .banner {
   background-position: center;
   background-repeat: no-repeat;
   background-size: 360px;
   width: 100%;
   height: 180px;
 }

</style>
