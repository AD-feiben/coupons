<template>
  <template v-if="$route.meta.title">
    <van-sticky>
      <header :class="{ active: showStatusBar }">{{ showStatusBar ? $route.meta.title : '' }}</header>
    </van-sticky>
    <h1 ref="h1">{{ $route.meta.title }}</h1>
  </template>

  <router-view v-slot="{ Component }" class="container">
    <keep-alive :include="/Index|Takeout|Contact|Air/">
      <component :is="Component" />
    </keep-alive>
  </router-view>

  <van-tabbar placeholder route>
    <van-tabbar-item replace :to="{ name: 'index' }" icon="shop-o">购物优惠</van-tabbar-item>
    <van-tabbar-item replace :to="{ name: 'takeout' }" icon="bag-o">外卖优惠</van-tabbar-item>
    <van-tabbar-item replace :to="{ name: 'air' }" icon="smile-o">便携小空调</van-tabbar-item>
    <van-tabbar-item replace :to="{ name: 'contact' }" icon="contact">关于作者</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'App',

  setup() {
    let h1 = ref()
    let showStatusBar = ref(false)

    const methods = {
      handleScroll: () => {
        if (h1.value === null) {
          showStatusBar.value = false
        } else {
          const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
          showStatusBar.value = scrollTop > h1.value?.offsetHeight
        }
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', methods.handleScroll)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', methods.handleScroll)
    })

    return {
      h1,
      showStatusBar,
      ...methods
    }
  }
})
</script>

<style lang="scss">
header {
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);
  height: 44px;
  line-height: 44px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  background: var(--page-bg);
  box-shadow: content-box;
  box-sizing: content-box;

  &.active {
    background: rgba(255, 255, 255, 0.3);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
    @include dark {
      background: rgba(255, 255, 255, 0.1);
    }

    &:after {
      position: absolute;
      box-sizing: border-box;
      content: ' ';
      pointer-events: none;
      top: -50%;
      right: -50%;
      bottom: -50%;
      left: -50%;
      border: 0 solid #ebedf0;
      border-bottom-width: 1px;
      transform: scale(.5);
    }
  }
}
</style>
