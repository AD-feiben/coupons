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

    <div v-if="couponInfo" class="coupon-card">
      <div class="coupon-card-top">
        <div class="coupon-card-top-inner">
          <div class="coupon-name">{{ couponInfo.name }} - {{ couponInfo.couponTpwd }}</div>
          <div class="coupon-date">{{ couponInfo.couponStartTime.replace(/-/g, '.') }} - {{ couponInfo.couponEndTime.replace(/-/g, '.') }}</div>
          <p class="coupon-card-tip">若口令无法识别，请粘贴至淘宝搜索框搜索</p>
        </div>
      </div>

      <div class="coupon-card-btn" :data-clipboard-text="couponInfo.couponTpwd">
        复制淘口令
      </div>
    </div>

    <logo />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import logo from '@/components/logo.vue'
import { getCoupon } from '@/api'
import { isWeixin } from '@/utils'
import Clipboard from 'clipboard'
import { Toast } from 'vant'

// import profile from '@/components/profile.vue'

interface ICouponInfo {
  couponTpwd: string;
  name: string;
  couponStartTime: string;
  couponEndTime: string;
}

export default defineComponent({
  name: 'Index',
  components: {
    logo
  },
  setup () {
    const message = ref('')
    let couponInfo = ref<ICouponInfo | null>(null)

    return {
      message,
      couponInfo,
      getCoupon: async () => {
        try {
          const { data } = await getCoupon(message.value)
          console.log(data);
          const { plat, couponUrl, couponTpwd } = data
          if (isWeixin && plat === 'tb') {
            couponInfo.value = {
              couponTpwd,
              ...data.couponInfo
            }
            const clip = new Clipboard('.coupon-card-btn')
            clip.on('success', function(e) {
              Toast(`已为你复制淘口令，若口令无法识别，请粘贴至淘宝搜索框搜索`)
              e.clearSelection();
            })
            return;
          }
          location.href = couponUrl
        } catch (error) {
          console.log(error)
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

  .coupon-card {
    margin-bottom: 30px;
    padding: 15px;
    border-radius: 8px;
    overflow: hidden;
    background: linear-gradient(330deg, #ff243c, #ff8456);
  }

  .coupon-card-top {
    position: relative;
    width: 100%;
    margin-bottom: 20px;
  }

  .coupon-card-top-inner {
    padding: 10px;
    border-radius: 8px;
    background: #ffffe9;
  }

  .coupon-name {
    margin-bottom: 10px;
    color: #f05040
  }

  .coupon-date {
    color: #999;
    font-size: 12px;
  }

  .coupon-card-btn {
    border-radius: 50px;
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin: 0 auto;
    position: relative;
    box-shadow: 0 5px 5px 2px rgb(0 0 0 / 10%);

    font-size: 15px;
    font-weight: 700;
    color: #d0021b;

    -webkit-tap-highlight-color: transparent!important;
    background: linear-gradient(-180deg,#ffe276,#ffa44c);;
    cursor: pointer;
  }

  .coupon-card-tip {
    margin-top: 15px;
    font-size: 12px;
    color: #999;
  }
}
</style>