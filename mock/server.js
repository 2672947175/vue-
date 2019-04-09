let http = require('http')
let url = require('url')
let fs = require('fs')
let fsPromises = fs.promises

// 请求json 文件
function raddelu(urls){
    return fsPromises.readFile(urls,'utf8').then(data=>{
        // 把Json 转换成数组
        return JSON.parse(data)
    })
}
// 创建服务器
http.createServer((req,res)=>{
    // cors 跨域资源共享
    res.setHeader('Access-Control-Allow-Origin', '*')
    // 设置编码格式 plain 普通文本
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    let {pathname,query} = url.parse(req.url,true)
    if (pathname === '/denglu') {
        // 取到前端传的用户信息
        let {username,passw} = query;
        raddelu('./denglu.json').then(data => {
            let { usename, pass } = data.denglu[0]
            if (username != usename){
                res.end(JSON.stringify({msg:'用户不存在'}))
                return false
            }
            if (passw != pass) {
                res.end(JSON.stringify({ msg: '请输入正确的密码' }))
                return false
            }
            res.end(JSON.stringify({ resa: '/shou' }))
        })
        return
    }
    if(pathname==='/duihuang'){
        raddelu('./duihuang.json').then(data => {
            console.log(data)
            res.end(JSON.stringify({ data }))
        })
        return
    }

    res.end('123456')
}).listen(3012,()=>{
    console.log(3012 +"启动成功")
})




