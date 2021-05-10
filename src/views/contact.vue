<template>
  <div class="contact-page">
    <div class="cell-wrap">
      <van-cell-group title="个人微信">
        <van-cell title="微信" label="反馈建议" is-link value="前端develop" @click="preview('/img/IMG_3501.JPG')" />
        <van-cell title="助理机器人" label="进群领福利" is-link value="前端develop~助理" @click="preview('/img/IMG_3500.JPG')" />
      </van-cell-group>

      <van-cell-group title="媒体账号">
        <van-cell title="微信公众号" is-link value="前端develop" @click="preview('/img/IMG_3194.JPG')" />
        <van-cell title="小程序" is-link value="i外卖券" @click="preview('/img/IMG_3502.PNG')" />
      </van-cell-group>
      <van-cell-group title="赞赏">
        <van-cell title="请作者喝杯咖啡" is-link @click="preview('/img/IMG_3503.JPG')" />
      </van-cell-group>
      <van-cell-group title="设置">
        <van-cell title="深色模式" is-link :value="themeTip" @click="changeTheme" />
      </van-cell-group>
    </div>
    <logo />
  </div>
</template>

<script lang="ts">
import { ImagePreview } from 'vant'
import { computed, defineComponent } from 'vue'
import logo from '@/components/logo.vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Contact',
  components: {
    logo
  },
  setup () {
    const store = useStore()
    const isFollowSys = computed(() => store.state.isFollowSys)
    const theme = computed(() => store.state.theme)

    const themeTip = computed(() => {
      if (isFollowSys.value) return '跟随系统'
      return theme.value === 'light' ? '普通模式' : '深夜模式'
    })

    return {
      themeTip,
      preview: (src: string) => {
        ImagePreview([ src ])
      },
      refresh () {
        location.reload()
      },
      changeTheme () {
        if (isFollowSys.value) {
          store.dispatch('updateIsFollowSys', false)
        } else if (theme.value === 'light') {
          store.commit('updateTheme', 'dark')
        } else {
          store.dispatch('updateIsFollowSys', true)
        }
      }
    }
  }
})
</script>

<style lang="scss">
.contact-page {
  padding: 0;
  .cell-wrap {
    margin-bottom: 20px;
  }
}
</style>