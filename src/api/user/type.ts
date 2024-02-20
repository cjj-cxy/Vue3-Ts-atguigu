// 登陆接口需要修带参数ts类型
export interface loginForm {
  username: string
  password: string
}

// 登陆接口返回的数据类型
interface dataType {
  token: string
}
export interface loginResponseData {
  code: number
  data: dataType
}

// 定义服务器返回用户信息相关的数据类型
interface userInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}
interface user {
  checkUser: userInfo
}
export interface userResponseData {
  code: number
  data: user
}