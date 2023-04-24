<script lang='ts' setup>

</script>


<template>
  <div class="login-start">
    <div class="login-wrapper">
      <a-button type="primary">Primary Button</a-button>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.login-start {
  @include box-center(column,space-between);
  height:100%;
  background-image: url('./images/login-background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>