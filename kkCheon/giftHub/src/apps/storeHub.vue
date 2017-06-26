<template>
  <div id="storeScreen">
    <tabBar></tabBar>
    <ProductList></ProductList>
    <PurchaseHistory></PurchaseHistory>
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
    ProductList,
    PurchaseHistory
  },
  data() {
    return {

    }
  }
}
</script>
<style>
  #storeScreen {
    background-color: #eaedf3;
  }
</style>
