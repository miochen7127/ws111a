  async function sqlRun() {
    let command = document.getElementById('SQL').value
    let rzjson = document.getElementById('result')
    let list1 = document.getElementById('list')
    if(command === ".tables"){
      let showtable =  "SELECT name FROM sqlite_schema WHERE type ='table'";
      let r1 = await window.fetch(`/table/${showtable}`)
      let obj1 = await r1.json()
      list1.innerText = JSON.stringify(obj1, null, 2)
    }
    else{
    let r = await window.fetch(`/sqlcmd/${command}`)
    let obj = await r.json()
    rzjson.innerText = JSON.stringify(obj, null, 2)
    }

  }