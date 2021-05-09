<template>
  <div class="index-page">
    <van-field
      v-model.trim="message"
      rows="4"
      autosize
      type="textarea"
      placeholder="请输入淘口令或唯品会链接"
      clearable
    />

    <van-button :disabled="!message" class="btn-search" type="primary" block @click="getCoupon">搜索</van-button>

    <logo />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import logo from '@/components/logo.vue'
import { getCoupon } from '@/api'
import { clipboard, isWeixin } from '@/utils'
import { Toast } from 'vant'
// import profile from '@/components/profile.vue'

export default defineComponent({
  name: 'Index',
  components: {
    logo
  },
  setup () {
    let message = ref('')
    return {
      message,
      getCoupon: async () => {
        try {
          const { data } = await getCoupon(message.value)
          const { plat, couponUrl, couponTpwd } = data
          if (isWeixin && plat === 'tb') {
            await clipboard(couponTpwd)
            Toast.success(`以为你复制淘口令${couponTpwd}若口令无法识别，请粘贴至淘宝搜索框搜索`)
            return;
          }
          window.open(couponUrl, '_blank')
        } catch (error) {
        } finally {
          // loading?.clear()
        }
      }
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