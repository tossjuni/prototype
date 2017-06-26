<template>
  <router-link :to="{ name: item.link }">
    <li class="item list-unstyled p-3 bb-1 gray0">
      <table class="w-100">
        <tr>
          <td class="block-icon">
            <div class="icon" v-bind:style="{ backgroundImage: 'url(' + item.imgUrl + ')' }"></div>
          </td>
          <td class="block-text pl-3 pt-2">
            <h2 class="h5 mb-0">{{ item.title }}</h2>
            <p class="mb-0">{{ item.subtitle }}</p>
          </td>
          <td class="align-middle text-right">
            <!-- <div class="block-promotion d-inline-block px-2 py-1">
              5% 할인
            </div> -->
          </td>
        </tr>
      </table>
    </li>
  </router-link>
</template>

<script>
export default {
  name: 'blockList',
  props: ['item']
}
</script>

<style scoped>
  .block-icon {
    width: 48px;
  }
  .icon {
    background: #D8D8D8;
    border-radius: 4px;
    width: 48px;
    height: 48px;
    background-size: 48px 48px;
  }
  .block-promotion {
    position: relative;
    border: 1px solid #DB5237;
    border-radius: 100px;
    font-size: 12px;
    color: #DB5237;
    line-height: 12px;
    font-weight: bold;
  }
  a,
  a:hover,
  a:focus {
    color: #333333;
    text-decoration: none;
  }
</style>
