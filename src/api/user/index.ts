//统一管理咱们项目用户相关的接口
import request from '@/utils/request';
import type { loginForm,loginResponseData, userResponseData } from './type';
// 统一管理接口
enum API{
    LOGIN_URL='/user/login',
    USERINFO_URL='/user/info'
}

// 对外暴露请求函数
// 登陆的接口方法
export const reqLogin = (data: loginForm)=>request.post<any, loginResponseData>(API.LOGIN_URL, data);
// 获取用户信息的接口方法
export const reqUserInfo = () => request.get<any, userResponseData>(API.USERINFO_URL);