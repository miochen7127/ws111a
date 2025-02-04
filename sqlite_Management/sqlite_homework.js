import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
import { DB } from "https://deno.land/x/sqlite/mod.ts";

const db = new DB("mydb.db");
const app = new Application()
const router = new Router()

router.get('/', home)
.get('/sqlcmd/:cmd', sqlcmd)
.get('/public/(.*)', pub)
.get('/table/:cmd',displaytable)

app.use(router.routes())
app.use(router.allowedMethods())

async function home(ctx) {
  ctx.response.redirect('/public/')
}

async function pub(ctx) {
  console.log(ctx.request.url.pathname)
  await send(ctx, ctx.request.url.pathname, {
      root: `${Deno.cwd()}/`,
      index: "sqlite_homework.html",
  })
}

async function displaytable(ctx){
  let cmd1 = ctx.params['cmd']
  console.log('cmd1=', cmd1)
  let result = db.query(cmd1)
  console.log('result=', result)
  ctx.response.type = 'application/json'
  ctx.response.body = result
}

async function sqlcmd(ctx) {
  let cmd = ctx.params['cmd']
  console.log('cmd=', cmd)
  let result = db.query(cmd)
  console.log('result=', result)
  ctx.response.type = 'application/json'
  ctx.response.body = result
}

console.log('Server run at http://127.0.0.1:8000')
await app.listen({ port: 8000 })
