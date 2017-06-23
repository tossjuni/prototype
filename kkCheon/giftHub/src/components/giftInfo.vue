<template>
  <section id="info" class="h7 container elephant100 py-2">
      <h2>[유의사항]</h2>
      <ul>
          <li>{{ contents }}</li>
      </ul>

      <h2>[구매방법]</h2>
      <ul>
          <li>{{ contents }}</li>
      </ul>

      <h2>[상품설명]</h2>
      <ul>
          <li>{{ contents }}</li>
      </ul>
  </section>
</template>

<script>
export default {
  name: 'giftInfo'
}
</script>

<style scoped>
#info h2 {
  margin-top: 2rem;
  font-weight: bold;
}
h2 {
  font-size: 13px;
}
ul {
  padding-left: 1.2rem;
}
</style>
