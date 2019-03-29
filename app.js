const Koa = require('koa')
const fs = require('fs.promised') // 注意是fs.promised，不是fs
const path = require('path')
const STATIC = require('koa-static')
const router = require('koa-router')()
const app = new Koa()
const { getResponseText } = require('./public/getData')

// 路由方法  get / post / put / delete / del / all
// *all 代表匹配所有，一般放在中间件的末尾
// 添加路由
router.get('/', async (ctx, next) => {
    ctx.response.type = 'html';
    ctx.response.body = await fs.readFile('index.html', 'utf8');
})


//因为 koa 没有对 post 请求获取参数进行封装，所以需要通过原生的 nodejs 请求对象 req，将 post 请求数据解析成 string
router.post('/', async (ctx, next) => {
    let postData = await parsePostData(ctx);
    console.log('接收到的数据: ' + postData);
    setResponeHeader(ctx)
    let res = getResponseText(postData);
    // console.log('要发送的数据：' + res)
    ctx.response.body = res
})


// 调用路由中间件
app.use(router.routes())

// 设置静态资源路径
app.use(STATIC(path.join(__dirname, './static')))

app.listen(80, ()=>{ // 要设置为指定的80端口，前端post的数据才能收到，找开网页也不再需要设置端口号
    console.log('server is running at http://localhost:80')
})


// 解析上下文里node原生请求的POST参数
function parsePostData( ctx ) {
    return new Promise((resolve, reject) => {
        try {
            let postdata = "";
            ctx.req.addListener('data', (data) => {
                postdata += data
            })
            ctx.req.addListener("end",function(){
                resolve( postdata )
            })
        } catch ( err ) {
            reject(err)
        }
    })
}

// 将POST请求参数字符串解析成JSON
function parseQueryStr( queryStr ) {
    let queryData = {}
    let queryStrList = queryStr.split('&')
    console.log( queryStrList )
    for ( let [ index, queryStr ] of queryStrList.entries() ) {
        let itemList = queryStr.split('=')
        queryData[ itemList[0] ] = decodeURIComponent(itemList[1])
    }
    return queryData
}

function setResponeHeader(ctx) {
    ctx.response.set('Access-Control-Allow-Origin', '*');
    ctx.response.set('keep-alive', 'timeout=50, max=200');
    // 这样就能只允许 http://localhost:8080 这个域名的请求了
    // ctx.set("Access-Control-Allow-Origin", "http://localhost:8080");

    // 设置所允许的HTTP请求方法
    // ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");

    // 字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段.
    // ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");

    // 服务器收到请求以后，检查了Origin、Access-Control-Request-Method和Access-Control-Request-Headers字段以后，确认允许跨源请求，就可以做出回应。

    // Content-Type表示具体请求中的媒体类型信息
    // ctx.set("Content-Type", "application/json;charset=utf-8");

    // 该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。
    // 当设置成允许请求携带cookie时，需要保证"Access-Control-Allow-Origin"是服务器有的域名，而不能是"*";
    // ctx.set("Access-Control-Allow-Credentials", true);

    // 该字段可选，用来指定本次预检请求的有效期，单位为秒。
    // 当请求方法是PUT或DELETE等特殊方法或者Content-Type字段的类型是application/json时，服务器会提前发送一次请求进行验证
    // 下面的的设置只本次验证的有效时间，即在该时间段内服务端可以不用进行验证
    // ctx.set("Access-Control-Max-Age", 300);
}
