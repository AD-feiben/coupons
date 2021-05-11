<template>
  <iframe class="air" src="http://192.168.1.103:3000/" frameborder="0"></iframe>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Air',
  setup () {
    return {}
  }
})
</script>

<style lang="scss">
.air {
  width: 100%;
  padding: 0;
}
</style>
