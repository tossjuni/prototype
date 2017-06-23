<template>
  <div>
      <tabBar></tabBar>
      <div class="tab-content">
          <ProductList>
          </ProductList>
      </div>
  </div>
</template>

<script>
import tabBar from '../components/tabBar.vue';
import ProductList from '../components/ProductList.vue';
import PurchaseHistory from '../components/PurchaseHistory.vue';

export default {
  name: 'storeHub',
  metaInfo: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  components: {
    tabBar,
    ProductList
  },
  data: () => {
    return {

    }
  }
}
</script>
<style>
body {
  background-color: #eaedf3;
}
</style>
