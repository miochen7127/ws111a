import { DB } from "https://deno.land/x/sqlite/mod.ts";

let db = null
export async function open() {
    db = new DB("my.db");
    db.query(`CREATE TABLE IF NOT EXISTS users 
              (uid INTEGER PRIMARY KEY AUTOINCREMENT, 
               user TEXT, pass TEXT, email TEXT)`)
    db.query(`CREATE TABLE IF NOT EXISTS orders
              (id INTEGER PRIMARY KEY AUTOINCREMENT, 
                records TEXT, number TEXT, total_price REAL)`);
              }

export async function orderSave(order){
  db.query(`INSERT INTO orders(records, number, total_price) VALUES (?,?, ?)`, [order.records,order.number , order.total_price])
}

export async function orderQuery(){
  let q = db.query('SELECT id,records,number, total_price FROM orders')
  return q
}

export async function close() {
    db.close()
  }

  export async function userAdd(user) {
    db.query(`INSERT INTO users (user, pass, email) VALUES (?,?,?)`, 
                          [user.user, user.pass, user.email])
  }
  
  export async function userGet(user1) {
    let q = db.query(`SELECT uid, user, pass, email FROM users 
                      WHERE user=?`, [user1])
    console.log(`userGet(${user1})=${q}`)
    if (q.length <=0) return null
    let [uid, user, pass, email] = q[0]
    return {uid, user, pass, email}
  }