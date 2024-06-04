import { ApiResponse } from '@/api/types'
import { service } from '@/utils/request'
import { BaseUserInfo } from '@/api/user/types'

export enum SystemUserApi {
  /** 获取用户基本信息 */
  GET_CURRENT_USER_BASE_INFO = '/system/user/currentUser',
}

/** 获取用户基本信息 */
export function getCurrentUserBaseInfo() {
  return service.get<ApiResponse<BaseUserInfo>>(SystemUserApi.GET_CURRENT_USER_BASE_INFO)
}