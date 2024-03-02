<template>
    <van-image
      :style="{border: `${borderWidth} solid ${borderColor}`}"
      :width="width"
      :height="height"
      :src="src"
      round
    />
</template>

<script setup lang="ts">
import { computed } from 'vue'
interface PropsType {
  width?: number | string;
  height?: number | string;
  src: string;
  borderWidth?: string;
  borderColor?: string;
}
withDefaults(defineProps<PropsType>(), {
  width: 36,
  height: 36,
  borderWidth: "0px",
  borderColor: "#fff"
});
</script>

<style lang="less" scoped>
</style>
