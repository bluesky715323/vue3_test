<template>
  <div class="back-btn-container">
    <van-icon name="arrow-left" :size="size" :color="color" />
  </div>
</template>

<script setup lang="ts">
interface PropsType {
  size?: number | string,
  color?: string,
}
withDefaults(defineProps<PropsType>(), {
	size: 20,
})
</script>

<style lang="less" scoped>
.back-btn-container {
  padding: 10px;
  background: rgba(255,255,255,0.2);
  border-radius: 50%;
  width: fit-content;
  height: fit-content;
  line-height: 0;
}
</style>
