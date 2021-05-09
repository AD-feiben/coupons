<template>
  <div class="takeout-page">
    <ul class="takeout-list">
      <li v-for="(item, index) in coupons" :key="index" class="coupon-item">
        <a :href="item.url" rel="noopener noreferrer" target="__blank">
          <img :src="item.icon" />
          <p>{{ item.name }}</p>
        </a>
      </li>
    </ul>

    <profile msg="更多外卖红包，请关注微信公众号" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import coupons from '@/config/takeout'
import profile from '@/components/profile.vue'

export default defineComponent({
  name: 'Takeout',
  components: {
    profile
  },
  setup() {
    return {
      coupons
    }
  }
})
</script>

<style lang="scss">
.takeout-page {
  .takeout-list {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;
  }

  .coupon-item {
    width: calc(50% - 7.5px);
    margin-bottom: 15px;
    text-align: center;
    background: var(--background-color);
    border-radius: 8px;
    // box-shadow: 0 0 20px 5px var(--shadow-color);

    a {
      display: block;
      width: 100%;
      height: 100%;
      padding: 15px;
      color: inherit;
    }

    img {
      width: 20px;
      height: 20px;
    }

    p {
      margin-top: 15px;
      margin-bottom: 0;
    }

    &:nth-of-type(2n) {
      margin-left: 15px;
    }
  }
}
</style>