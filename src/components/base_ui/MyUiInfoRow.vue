<template>
  <div class="ir-wrap">
    <div class="ir-name">{{name}}</div>
    <div class="ir-value">
      <div v-if="value">{{value}}</div>
      <slot v-else>default slot</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface PropsType {
  name: string,
  value?: string,
}
withDefaults(defineProps<PropsType>(), {
	name: ''
})
</script>

<style lang="less" scoped>
.ir-wrap {
  display: flex;
  align-items: center;
  padding: 24px;
  .ir-name {
    flex: 0.25;
  }
  .ir-value {
    flex: 0.75;
  }
}
</style>
