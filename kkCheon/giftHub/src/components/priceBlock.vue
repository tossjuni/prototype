<template>
  <li class="item clearfix p-3 my-2 elephant100 list-unstyled">
    <table>
      <tr class="h5">
        <td class="w-100">
          <h2 class="title h7 mb-1">{{ block.title }}</h2>
          <span class="price">{{ block.price }}원</span>
        </td>
        <td class="w-100 selection">
            <select class="form-control d-inline select gift" data-price="5000">
              <option value="0">수량</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </div>
        </td>
        <td class="pl-1 pt-2">매</td>
      </tr>
    </table>
  </li>
</template>

<script>
export default {
  name: 'priceBlock',
  props: ['block']
}
</script>

<style scoped>
  .h7 {
    font-size: 0.75rem;
  }
  select {
    width: 80px;
    display: inline;
  }
</style>
