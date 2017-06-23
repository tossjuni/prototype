<template>
  <!-- tabs -->
  <div class="container-tabs blue600">
      <div class="content">
          <ul class="nav nav-tabs gray0 drop-shadow-1 px-3">
              <li class="nav-item w-50 text-center active">
                  <a :class="['nav-link', {active: isBuyPresentView}]"
                     @click="currentView = BUY_PRESENT">구매하기</a>
              </li>
              <li class="nav-item w-50 text-center">
                  <a :class="['nav-link', {active: isPurchaseHistoryView}]"
                     @click="currentView = PURCHASE_HISTORY">구매 내역</a>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'tabBar'
}
</script>
<style scoped>
  .drop-shadow-1 {
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.15);
    z-index: 2;
  }
  .active {
    color: #144ae1 !important;
    font-weight: bold;
  }
  .active .nav-link {
    border-bottom: 4px solid #4e7bfa !important;
  }
  .nav-item a {
    padding: 0.75rem 0;
  }
</style>
