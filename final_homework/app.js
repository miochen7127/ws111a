import * as db from './db.js'
import {Server, sendJson, bodyParams, sendStatus, Status} from './server.js'

db.open()

const server = new Server()
server.public("/public")

server.router.get('/', home)
.post('/login', login)
.post('/signup', signup)

async function home(ctx) {
    ctx.response.redirect("/public/#home")
}

async function signup(ctx) {
    const params = await bodyParams(ctx)
    console.log('params=', params)
    let user = await db.userGet(params.user)
    if (user == null) { // user name available
      console.log('signup:params=', params)
      await db.userAdd({user:params.user, pass:params.password, email:params.email})
      sendStatus(ctx, Status.OK)
    }
    else
      sendStatus(ctx, Status.Fail)
  }

  async function login(ctx) {
    const params = await bodyParams(ctx)
    let user = await db.userGet(params.user)
    console.log('login:user=', user)
    if (user != null && user.pass == params.password) {
      await ctx.state.session.set('user', user)
      sendStatus(ctx, Status.OK)
    } else
      sendStatus(ctx, Status.Fail)
  }
  
  await server.listen(8000)