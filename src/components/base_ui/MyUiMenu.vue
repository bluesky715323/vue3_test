<template>
  <div class="menu-item">
    <div
      :style="{
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '16px',
        background: `${bgColor}`,
      }"
    >
      <van-image width="30" height="30" :src="icon" />
    </div>
    <div class="vseperator-box-20" />
    <div>{{ name }}</div>
  </div>
</template>

<script setup lang="ts">
interface PropsType {
  icon: string;
  name: string;
  bgColor: string;
}
withDefaults(defineProps<PropsType>(), {});
</script>

<style lang="less" scoped>
.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}
</style>
