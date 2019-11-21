//用于编写ajax（更加利于路径处理）

/* 所有ajax的代码写到这里 */
axios.defaults.baseURL = 'http://localhost:5524/vli'
// 设置AJAX超时时间
axios.defaults.timeout = 3000
// 设置提交数据时的格式
axios.defaults.headers['Content-Type'] = 'application/json'

// 设置前置拦截器->以后所有的AJAX都会自动添加上 Authorization:token 的协议头
axios.interceptors.request.use(function (config) {
    // 判断如果用户登录了就把 token 配置上 axios 的协议头中
    let token = sessionStorage.getItem('token')
    if (token) {
        config.headers['Authorization'] = token
    }
    // 处理请求前代码
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});



//登陆
function login(params) {
    return axios.post("/vli/user/login", params);
};
//注册接口
function userRegister(params) {
    return axios.post("/vli/user/register", params);
};
//查询点击栏
function findClickingBar(params){
    return axios.post("/vli/clicking/bar/list", params);
};
//查询文章
function findArticle(params){
    return axios.post("/vli/article/list", params);
};
//查询文章详情
function findArticleById(params){
    return axios.post("/vli/article/findArticleById",params);
};
//获取QQ用户信息
function getQqInformation(params){
    return axios.post("/vli/user/getQqInformation",params);
};
//提交评论
function onSubComment(params){
    return axios.post("/vli/comment/subComment",params);
};
//查询评论
function getListComment(params){
    return axios.post("/vli/comment/getListComment",params);
};
//查询用户其他文章
function getUserOtherArticle(params){
    return axios.post("/vli/article/getUserOtherArticle",params);
}