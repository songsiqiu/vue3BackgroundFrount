import axios from 'axios'
import globalConfig from '@/config/global'
import { handleHttpError, handleNormalResponse } from '@/utils/request/responseHandler'

export const service = axios.create({
  baseURL: globalConfig.apiBaseUrl,
  timeout: globalConfig.apiTimeOut,
})

service.interceptors.response.use(
  async (resp) => {
    const isSuccess = await handleNormalResponse(resp)
    if (isSuccess) {
      return resp.data
    } else {
      return Promise.reject(resp)
    }
  },
  (err) => {
    if (axios.isAxiosError(err)) {
      return handleHttpError(err)
    }
    console.log({ content: '网络请求发生了意料之外的错误！' })
    return Promise.reject(err)
  }
)