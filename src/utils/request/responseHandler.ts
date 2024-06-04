import { AxiosError, AxiosResponse } from 'axios'
import { ApiResponse } from '@/api/type'
import { BusinessErrCode, businessErrCodeMsgKV, errCodeMsgKV,ErrCode } from '@/utils/request/errcode'

/**
 * 处理http响应码为200的响应
 */
export const handleNormalResponse = async (resp: AxiosResponse<ApiResponse>) => {
  // 处理resp.data.success为false的情况
  if (!resp.data.success) {
    // 展示默认错误提示信息
    const outMsgInfo = businessErrCodeMsgKV[resp.data.code as BusinessErrCode]
    if (outMsgInfo) {
      console.log(resp.data.msg || outMsgInfo)
    } else {
      console.log('服务器发出了未知错误！')
    }
    return false
  }
  return true
}

/**
 * 处理http响应码不为200的响应
 */
export const handleHttpError = (err: AxiosError) => {
  if (err.code === 'ERR_CANCELED') {
    return Promise.reject(err)
  }
  const msg = errCodeMsgKV[err.response?.status as ErrCode]
  if (err.code === 'ECONNABORTED' && err.message.includes('timeout')) {
    console.log('请求超时, 请检查网络连接！')
  } else if (err.message === 'Network Error') {
    console.log('服务器错误或网络错误, 请稍后再试！')
  } else if (msg) {
    console.log(msg)
  } else {
    console.log('服务器发出了未知错误')
  }
  return Promise.reject(err)
}
