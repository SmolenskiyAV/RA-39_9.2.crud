const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

const app = new Koa();

app.use(cors());
app.use(koaBody({json: true}));

let posts = [{id: "999", content: "Default content", created: "00.00.0000"}, {id: "888", content: "Default content2", created: "66.66.6666"}];
let nextId = 1;

const router = new Router();

router.get('/posts', async (ctx, next) => {
    ctx.response.body = posts;
});

router.post('/posts', async(ctx, next) => {
    const {id, content} = ctx.request.body;
    console.log('catched body: ', ctx.request.body);
    id = Number(id);
    if (id !== 0) {
        posts = posts.map(o => o.id !== id ? o : {...o, content: content});
        ctx.response.status = 204;
        console.log('added post ID= ', id);
        console.log('====================')
        return;
    }

    posts.push({...ctx.request.body, id: nextId++, created: Date.now()});
    ctx.response.status = 204;
});

router.delete('/posts/:id', async(ctx, next) => {
    const postId = Number(ctx.params.id);
    const index = posts.findIndex(o => o.id === postId);
    if (index !== -1) {
        posts.splice(index, 1);
        console.log('deleted post ID= ', postId);
        console.log('---------------------------')
    }
    ctx.response.status = 204;
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 7777;
const server = http.createServer(app.callback());
server.listen(port, () => console.log('server started'));