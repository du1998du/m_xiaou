import http from './axios'

// 封装轮播图接口
export function getBanner(){
    return http.get('/getbanner')
}
// 获取商品信息(首页)
export function getIndexGoods(){
    return http.get('/getindexgoods')
}
// 获取分类树形结构
export function getCateTree(){
    return http.get('/getcatetree')
}

// 获取获取分类商品
export function getCateGoods(params){
    return http.get('/getgoods',{
        params
    })
}
// 获取商品信息
export function getGoodsInfo(params){
    return http.get('/getgoodsinfo',{
        params
    })
}
// 登录
export function getLogin(data){
    return http.post('/login', data)
}
// 注册
export function getRegister(data){
    return http.post('/register', data)
}

// 加入购物车
export function getCartAdd(data){
    return http.post('/cartadd', data)
}
// 获取购物车列表
export function getCartList(params){
    return http.get('/cartlist',{
        params
    })
}
// 删除购物车
export  function getCartDelete(data){
    return http.post('/cartdelete', data)
}