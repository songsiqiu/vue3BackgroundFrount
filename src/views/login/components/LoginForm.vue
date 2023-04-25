<script lang="ts" setup>
import { ref } from 'vue'
import { LoginFormInfo } from '../type'
import { Form } from 'ant-design-vue'
import { ChangeEventHandler } from 'ant-design-vue/lib/_util/EventInterface'
import { onMounted } from 'vue'

defineProps<{
  value?: LoginFormInfo
  loading: boolean
}>()

const emits = defineEmits<{
  (e: 'update:value', formState: LoginFormInfo): void
  (e: 'submit', formState: LoginFormInfo): void
}>()

const codeImgUrl = ref('')
const formState = ref<LoginFormInfo>({
  username: '',
  password: '',
  code: '',
  rememberMe: false,
})

const usernameChange: ChangeEventHandler = (e) => {
  formState.value.username = e.target.value || ''
  emits('update:value', formState.value)
}

const passwordChange: ChangeEventHandler = (e) => {
  formState.value.password = e.target.value || ''
  emits('update:value', formState.value)
}

const codeChange: ChangeEventHandler = (e) => {
  formState.value.code = e.target.value || ''
  emits('update:value', formState.value)
}

const getVerificationCode = async () => {
  //获取验证码
}

const submit = () => {
  //提交表单
}

const getAuthCodeImgLoading = ref(false)
const { validateInfos } = Form.useForm(formState)

onMounted(() => {
  getVerificationCode()
})
</script>

<template>
  <div class="login-form">
    <div class="login-title">后台管理系统</div>
    <a-form :model="formState">
      <a-form-item v-bind="validateInfos.username">
        <a-input size="large" :value="formState.username" placeholder="请输入用户名" @change="usernameChange">
          <template #prefix>
            <user-outlined />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item v-bind="validateInfos.password">
        <a-input-password size="large" :value="formState.password" placeholder="请输入密码" @change="passwordChange">
          <template #prefix>
            <lock-outlined />
          </template>
        </a-input-password>
      </a-form-item>
      <a-form-item v-bind="validateInfos.code">
        <div class="code-wrapper">
          <a-input size="large" :value="formState.code" placeholder="请输入验证码" @change="codeChange" @press-enter="submit">
            <template #prefix>
              <security-scan-outlined />
            </template>
          </a-input>
          <a-span :spinning="getAuthCodeImgLoading">
            <a-tooltip placement="right">
              <template #title>点击刷新验证码</template>
              <template v-if="codeImgUrl">
                <img class="code-img" :src="codeImgUrl" alt="重新获取" @click="getVerificationCode" />
              </template>
              <template v-else>
                <div class="code-img" @click="getVerificationCode">
                  <p>验证码获取失败</p>
                  <p>请点击重试</p>
                </div>
              </template>
            </a-tooltip>
          </a-span>
        </div>
      </a-form-item>
      <a-form-item>
        <a-button size="large" block type="primary" @click="submit" :loading="loading">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style lang="scss" scoped>
.login-form {
  border-radius: 6px;
  background: #ffffff;
  width: 400px;
  padding: 25px 25px 5px 25px;
  .login-title {
    margin: 0px auto 30px auto;
    text-align: center;
    color: $color-text-content;
    font-size: 18px;
  }
  .code-wrapper {
    display: flex;
    align-items: center;
  }
  .code-img {
    height: 40px;
    margin-left: 6px;
    width: 97px;
    border: 1px solid $color-line-div;
    border-radius: 2px;
    cursor: pointer;
    font-size: 12px;
    color: $color-text-minor;
    text-align: center;
  }
}
</style>
