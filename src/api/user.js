/**
 * Create by: HZ
 * Date: 2020/9/22 16:49
 * Description: 用户相关请求模块
 */
import request from "../utils/request";
// 登录注册
export const loginSub = data => {
    return request({
        method: 'POST',
        url: '/app/v1_0/authorizations',
        data
    })
}