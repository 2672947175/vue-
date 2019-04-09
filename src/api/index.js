// 请求接口
import axios from "axios";
// 设置默认访问路径
axios.defaults.baseURL = "http://localhost:3012"

// 请求拦截 响应拦截 Interceptors 拦截器
axios.interceptors.response.use((res) => {
    return res.data
}, (err) => {
    Promise.reject(err)
})

// 获取登录数据
export let getpage = (usename,pass) => {
    return axios.get(`/denglu?username=${usename}&passw=${pass}`);
}
// 获取兑换数据
export let getdui= () => {
    return axios.get('/duihuang');
}