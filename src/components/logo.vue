<template>
  <div class="logo-wrap">
    <p class="logo">前端develop出品</p>
    <p v-if="msg" class="logo-tip">{{ msg }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="scss">
.logo-wrap {
  text-align: center;
}

.logo {
  position: relative;
  width: 100%;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  font-style: italic;
  color: #1989fa;

  &::before,
  &::after {
    position: absolute;
    content: "";
    display: block;
    top: 50%;
    width: 10px;
    height: 2px;
    background-color: #1989fa;
    transform: translatey(-50%);
  }

  &::before {
    left: 30%;
  }
  &::after {
    right: 30%;
  }
}

.logo-tip {
  font-size: 12px;
}
</style>