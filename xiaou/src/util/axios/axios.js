import axios from 'axios'
import router from "../../router";
import { Toast } from "vant";


const http = axios.create({
    baseURL: '/api/api'
});

// 请求拦截
http.interceptors.request.use(req => {
    // 将登录成功存储在离线存储中的token值取出来，添加到请求头中
    let token = sessionStorage.getItem('user') ? 
    JSON.parse(sessionStorage.getItem('user')).token:''
    // console.log(token);
    // 后端要求的令牌名字叫 authorization
    req.headers.authorization = token
    return req
})
// 响应拦截
http.interceptors.response.use(res => {
    if(res.code == 403){
        Toast(res.msg);
        router.push('/login');
        return res.data
    }else if(res.code == 500){
        Toast.fail(res.msg);
        router.push('/login');
        return res.data
    }else{
        return res.data
    }
    return res.data
})
export default http