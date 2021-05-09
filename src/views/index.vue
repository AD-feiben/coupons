<template>
  <div class="index-page">
    <van-field
      v-model="message"
      rows="4"
      autosize
      type="textarea"
      placeholder="请输入淘口令或唯品会链接"
    />

    <van-button class="btn-search" type="primary" block>搜索</van-button>

    <logo />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import logo from '@/components/logo.vue'
import profile from '@/components/profile.vue'

export default defineComponent({
  name: 'Index',
  components: {
    logo
  },
  setup () {
    let message = ref('')
    return {
      message
    }
  }
})
</script>

<style lang="scss">
.index-page {
  .van-cell::after {
    display: none;
  }

  .btn-search {
    margin: 20px 0 30px;
  }

  .van-cell {
    border-radius: 8px;
  }
}
</style>