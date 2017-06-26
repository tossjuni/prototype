<template>
  <div>
    <blockCard v-for="item in items" :card="item" :key="item.key"></blockCard>
  </div>
</template>

<script>
import blockCard from '@/components/block-card'

export default {
  name: 'giftInfo',
  components: {
    blockCard
  },
  data: () => {
    return {
      items: [
        {
          key: '1',
          title: '문화상품권',
          price: '20,000원',
          pinNum: '123-123-123-123',
          paymentPrice: '19,500원',
          paymentAccount: '기업IBK 123-123-123-123'
        }
      ]
    }
  }
}
</script>
