<script lang='ts' setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN'
</script>


<template>
  <a-config-provider :local="zhCN">
    <router-view />
  </a-config-provider>
</template>

<style></style>