export interface LoginFormInfo {
  /** 登录名 */
  username?: string;
  /** 密码 */
  password?: string;
  /** 验证码 */
  code?: string;
  /** 是否记住 */
  rememberMe?: boolean;
}