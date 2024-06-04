import { BusinessErrCode, ErrCode } from '@/utils/request/errcode'

/**
 * 接口响应类型
 *
 * T 为data具体类型,默认为null
 */
export interface ApiResponse<T = null> {
  code: BusinessErrCode | ErrCode
  data: T
  msg: string
  success: boolean
}