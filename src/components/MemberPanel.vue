<template>
  <div class="mp-container">
    <my-ui-avatar :src="avatar" :width="48" :height="48" />
    <div class="mp-right-block">
      <div :style="{display: 'flex', alignItems: 'center'}">
        <span class="mp-name">{{name}}</span>
        <span style="padding: 0 4px">{{age}}岁</span>
        <span><SvgIcon :iconName="sex==0 ? 'icon-nvxing' : 'icon-nanxing'" size="14px" :color="sex==0 ? 'red' : '#67A1FF'"/></span>
      </div>
      <div class="vseperator-box-10" />
      <div>
        <span style="font-weight: normal">关系: {{relationship}}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface PropsType {
  name: string,
  age: number,
  sex: number,  // 0-女，1-男
  relationship: string,
  avatar: string,
}
withDefaults(defineProps<PropsType>(), {})
</script>

<style lang="less" scoped>
.mp-container {
  display: flex;
  align-items: center;
  background: #F5F7FB;
  border-radius: 12px;
  padding: 16px;
  font-size: 24px;
  line-height: 1;
  font-weight: bold;
  .mp-right-block {
    padding-left: 8px;
    .mp-name {
      font-size: 28px;
    }
  }
}
</style>
