<script lang='ts' setup>
import LoginForm from './components/LoginForm.vue'

const login = async() => {
  //登录
}
</script>


<template>
  <div class="login-start">
    <div class="login-wrapper">
      <LoginForm @submit="login" :loading="false"></LoginForm>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.login-start {
  @include box-center(column,center);
  height:100%;
  background-image: url('./images/login-background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>