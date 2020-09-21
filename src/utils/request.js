/**
 * Create by: HZ
 * Date: 2020/9/21 16:23
 * Description: Axios的请求封装
 */

import axios from 'axios';

// axios创建baseURL基础实例
const request = axios.create({
    baseURL: ''
})

// 请求拦截器

// 响应拦截器

export default request