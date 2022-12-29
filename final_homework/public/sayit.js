window.onhashchange = async function () {
    var tokens = window.location.hash.split('/')
    switch (tokens[0]) {
        case '#home':
            await homeweb()
            break
        case '#signup':
            await signup()
            break
        case '#login':
            await login()
            break
        case '#shopping_car':
            await shopping_car()
            break
        case '#customer_service':
            await customer_service()
            break
        case '#order':
            await order()
            break
        case '#brand':
            await brand()
            break
        default:
            console.log(`Error:hash=${tokens[0]}`)
            break
    }
}

window.onload = function () {
    window.onhashchange()
  }
  async function customer_service(){
    Ui.show(`<a href="https://lin.ee/51wS7gH"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png" alt="加入好友" height="36" border="0"></a>
    <img src="https://qr-official.line.me/sid/M/spd3193z.png?shortenUrl=true&appendQueryParameter=oat__id%3D295842">`)
  }
  async function brand(){
    Ui.show(`<iframe width="560" height="315" src="https://www.youtube.com/embed/M0iMPVokfrI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
  }
  async function order(){
    Ui.show(``)
  }
  async function shopping_car() {
    Ui.show(`
    <!DOCTYPE html>
    <html>
    <head>
            <meta charset="UTF-8"/> 
            <title>shopping_car</title>
        </head>
            <span>
                <select id="select1" name="select1">
                    <option>請選擇你要購買的商品</option>
                    <option value="床包$1000">床包$1000</option>
                    <option value="床墊$3980">床墊$3980</option>
                    <option value="棉被$1980">棉被$1980</option>
                    <option value="枕頭$1280">枕頭$1280</option>
                </select>
            </span>
            <span>
                <select id="select2" name="select2">
                    <option>商品數量</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </span>
            <span>
                <input type="submit" value="確認" id="btn1" name="btn1" onclick="serverbuy()">
            </span>
            <div>
                <textarea name="read" cols="50" rows="10" disabled id = "textarea" name="textarea"></textarea>
            </div>
        </div>
            <p id="p" style="float:left ;">total:</p>
            <p id="p1" style="float:left ;">0</p>
            <script src="shopping_cart.js"></script>
        </body>
    `)
  }
  async function homeweb() {
    Ui.show(`
    <!DOCTYPE html>
    <html>    
        <head>
            <title>store</title>
            <meta charset="UTF-8"/> 
            <title>名流寢飾家居館</title>
        </head>
    <style>  
    table.a{
        text-align: center;
    }
    section ul li{
        display: inline;
        font-size: 13px;
        margin-right: 32px;
    }
    .title a{
        color: rgb(255, 255, 255);
        text-decoration: none;
    }
    li{
        list-style: none;
    }
    section ul {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        max-width: 1232px;
        height: 28px;
        margin: auto;
        padding: 0px 24px;
    }
    section.title {
        font-size: 13px;
        background: rgb(37, 14, 68);
    }
    .title_name{
        position: relative;
        max-width: 1232px;
        height: 92px;
        margin: 0px auto;
        padding: 22px 0px;
        color: rgb(255, 255, 255);
        box-sizing: border-box;
    }
    .title_name a{
        width: 184px;
        height: 40px;
        margin-right: 12px;
        padding: 8px 0px;
        text-indent: 100%;
        white-space: nowrap;
        text-decoration: none;
        color: white;
    }
    section{
        display: block;
    }
    header {
        display: block;
    }
    ul {
        display: block;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
    }
    
    .form{
        border-radius: 2px;
        border-color: rgb(24, 143, 255);
        display: flex;
        flex: 1 1 0%;
        width: 100%;
        height: 100%;
        -webkit-box-align: center;
        align-items: center;
        background-color: rgb(255, 255, 255);
        box-sizing: border-box;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(224, 228, 233);
        border-radius: 8px;
        margin-top: 0em;
    }
    .search{
        appearance: none;
        background: none;
        box-sizing: border-box;
        padding: 12px;
        font-size: 16px;
        font-family: inherit;
        margin: 0px;
        border-style: none;
        display: flex;
        height: 100%;
        min-width: 0px;
        -webkit-box-flex: 1;
        flex-grow: 1;
        border-radius: 8px;
        padding: 6px;
        font-size: 14px;
        line-height: 1;
        outline-offset: -2px;
        overflow: visible;
        writing-mode: horizontal-tb !important;
        text-rendering: auto;
        color: -internal-light-dark(black, white);
        letter-spacing: normal;
        word-spacing: normal;
        line-height: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        display: inline-block;
        text-align: start;
        appearance: auto;
        -webkit-rtl-ordering: logical;
        cursor: text;
        background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
        margin: 0em;
        padding: 1px 2px;
        border-width: 2px;
        border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
        border-image: initial;
    }
    .button1{
        flex-shrink: 0;
        height: 100%;
        border-radius: 2px 0px 0px 2px;
        padding: 13px;
        border-radius: 8px;
        border-width: 0px;
        padding: 11px;
        font-size: 16px;
        font-weight: 500;
        border-style: solid;
        color: rgb(255, 255, 255);
        border-color: rgb(24, 143, 255);
        background-color: rgb(24, 143, 255);
        position: relative;
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        padding: 10px;
        margin: 0px;
        font-family: inherit;
        font-size: 1px;
        appearance: none;
        box-shadow: none;
        box-sizing: border-box;
        cursor: pointer;
        text-decoration: none;
    }
    div{
        display: block;
    }
    .logo{
        position: relative;
        right: 120px;
        top: 5px;
        width: 184px;
        height: 40px;
        margin-right: 12px;
        padding: 4px 0px;
        float: left;
        text-indent: 100%;
        white-space: nowrap;
    }
    .div{
        position: relative;
        display: flex;
        -webkit-box-flex: 1;
        flex-grow: 1;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }
    .div1{
        float: left;
        width: 44%;
        height: 48px;
        position: relative;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-flex: 1;
        flex-grow: 1;
        background-color: transparent;
        box-sizing: border-box;
        z-index: 1000;
    }
    section{
        display: block;
    }
    .section1{
        background: linear-gradient(to left, rgb(24, 143, 255) 10%, rgb(0, 179, 255) 90%);
    }
    .title2{
        position: relative;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        max-height: 85vh;
        float: right;
        bottom: 60px;
        left: 60px;
    }
    .title3{
        position: relative;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        padding: 8px 0px;
        max-height: 85vh;
        float: right;
    }
    .title4{
        padding-left: 100px;
    }
    .title5{
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        text-decoration: none;
        outline: none;
    }
    .title6{
        padding-left: 0px;
    }
    .title7{
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        text-decoration: none;
        outline: none;
        height: 36px;
        position: relative;
    }
    .title8{
        left: 15px;
        position: relative;
    }
    .title9{
        display: block;
        width: 24px;
        height: 24px;
    }
    .title10{
        position: relative;
        padding-right: 0px;
        font-size: 13px;
        color: rgb(255, 255, 255);
        left: 50px;
        bottom: 30px;
    }
    .title11{
        padding-right: 30px;
    }
    .title12{
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        text-decoration: none;
        outline: none;
        height: 36px;
        position: relative;
    }
    .title13{
        display: block;
        width: 24px;
        height: 24px;
    }
    .title14{
        position: relative;
        left: 30px;
        bottom: 30px;
        padding-left: 0px;
        font-size: 13px;
        color: rgb(255, 255, 255);
    }
    
    .table1 tr td{
        padding: 30px;
        position:relative;
        left: 300px;
    }
    .table1 p{
        position:relative;
        left: 75px;
    }
    </style>
        <body>
            <header>
                <section class="title">
                        <ul>
                            <li>
                                <a href="">
                                <img src="data:image/png;base64,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" width="16" height="16" alt="首頁">
                                <span>首頁</span>
                                </a>
                            </li>
                            <li>
                                <a href="#brand">品牌介紹</a>
                            </li>
                            <li>
                                <a href="#login">會員專區</a>
                            </li>
                            <li>
                                <a href="https://tw.mall.yahoo.com/store/%E5%90%8D%E6%B5%81%E5%AF%A2%E5%85%B7%E5%AE%B6%E5%B1%85%E9%A4%A8:pb?gg=0&_co=pGW_dsa_store&gclid=Cj0KCQjwvLOTBhCJARIsACVldV1IPuD16QMmCLCUaivYhQoN6BboX7c_OdK5dCVnv_cLMhTI0nAUgLAaAjD7EALw_wcB&gclsrc=aw.ds">網路專區</a>
                            </li>
                            <li>
                                <a href="#customer_service">客服專線</a>
                            </li>
                        </ul>
                </section>
                <section class="section1">
                    <div class="title_name">
                            <a href="" class="logo">名流寢飾家居館</a>
                            <div class="div1">
                                <div class="div">
                                    <form class="form">
                                        <input type="search" autocomplete="off" placeholder="搜尋店內商品" class="search">
                                        <button type="submit" class="button1"><span>搜尋商品</span></button>
                                    </form>
                                </div>
                            </div>
                        <div class="title2">
                            <span class="title3">
                                <section class="title4">
                                    <span><a class="title5">我的商城</a></span>
                                </section>
                            </span>
                            <section class="title6">
                                <a class="title7">
                                    <span class="title8">
                                        <img src="data:image/png;base64,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" alt="我的購物車" class="title9">
                                    </span>
                                    <span ><a href="#shopping_car"class="title10">購物車</a></span>
                                </a>
                            </section>
    
                            <section class="title11">
                                <a class="title12">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX29vYAAAD////6+vr4+Pjw8PDLy8tSUlKFhYV3d3dZWVnX19fk5OSqqqqbm5v09PQnJyegoKDd3d0ODg4UFBTV1dWvr69LS0sICAgbGxtmZmZFRUVtbW0rKyu4uLjg4ODBwcE4ODiMjIySkpLGxsY/Pz9qamp1dXU1NTUgICB+fn7r/vS6AAAIT0lEQVR4nO2d63qjOAyGgy2StiGlOR/apEmbmdnJ/V/gQtIDGGOED6Du6p15+qMpRB+yZRvL9mDAMAzDMAzD1AN9GxAasJD4kx5KZqsUbZA2T6RHAERynD7imZxT8aMkyuQhassllT9FIwzEpLW+jPlS9m06EhDTKNrYaBz2KBFusRHU337//P6lHNqouxLXfHm1+Hosz3D7IUHq0Hw5yIW1wp3QWJ49W92XW7VHNWRxP54ND5NphWH25ZW/tqqEH8x0RkuYHcrfO1mdZ7EU0osvQcTHy3pbY9E6qdrz7KDwTmgMOGjvuHi+HGOdz9vJk2K4M5o0UkI8wKuDwOiXJtYYDNi8LAWAdXGFPGg0OkQN8fLsonCelI2FVJifcDQaWwfgLLqkL802TVWFKxeFlYqYB+ZNfdOTf3JJbYuqGD8hTHqT5fs7BZooUjwC8rH5mn0iNREPIfCIMulNiQ3y4KTwVSml8h1z1bkaoBoBbH1SSyksXQT+jdX+A+45n1tXRoAZsud1VIrVIP7roPCh6ow96sJZW4kAv5A2xWqoFojwVMtKqdWAjc3btk2GfEOadKm0uTC2F7ipBgwQuOD80q4qSmyzfVLrzcDJiSuNmSDOqIJ6bhFOswHeH909tk8Kp7dY1+1PcVWnirbjnT3vdLXbl75YFyGeJVZhPlyIK9evV6+68YVuKJDKxE7iqM4LWedR+d74XK1GR3SwyVyoNrO7mZB5908NAzXVGzCdoQp3yLdRuR0AQk6UUdq6RU0Up/K1K3Eb/1aCSo1F2fcP709thvmb02UsDAKrH2R+SNblm1THObW3U+LM0eI1mBSDuA0D0b4DLWVZ4hRtp9J5nlgOwqANVu+PIS31nNHFFMR98bqRRZ+vK2S5T6d/zVMFRMn51xdgVF9kylHR1CXWzLgY7J8Iu1AdyayQdRmS4lXvpBWWW251rFp71awUSKkW0BuiWN7+IGNieYTXeljSKVB6jbNDlrfyO+vK6IgW4lKw9QHnQ4CyQtICQdwVbMU2bKoPSeNDIWkfskI9rJAUrFALKyQFK9TCCknBCrWwQlKwQi2skBSsUAsrJAUr1NJSYb9PoBOFIWl8fsEVghCvy3E4lknDzGlohTIuvnIOwnxqdGRYhSBn89ACM9a9KQSI65Kj/aJJdutGYXlWJCSH+roYUqFjFmIbDE4MW0pnUUf8U18TgyqUnSnc12dyBy6l9otj2mGwPHCk+d2Rwkk/kaa7Yro3ZI4G7tMIt7x8LK+GjltghSCWLouccOxiU5ZM8J63lOPVJCSHV3MWUGiF+ZLtwDQMn8KPnnC3tKZxgNjBCDiwxt5HwL3DCrWwQlKwQi2skBSsUAsrJAUr1MIKScEKtbBCUnQxAg5M7wplmgQllv3OAUP6/k8UlgfzKuTACm0X3rfj3mR3YIVpN3PAmu2xulEIArs9iCvj+remYX1ovf9FW/JyWmNGQIXQ4Rywbo+z8Aq7nOXep30ozHyYOGbTbLDXr+tXvwZVOGjaLK6J+V/kNLm621Y3Cgdu+yVdWSxQEreGJj/0HLDD/nr5RnrzOUqiacF86F6bONp32rDb1zyYJrk7mAOG4aTFls9FrhuRNm8SPTPvPNTF6Ok/PgdsSZrm/31AVGH68cODSKIKv3C/N0mFN+d5ui1ZhX6K6ICowtx/fuQNSCr0FEM/Iajw6j5/KkkqzBtDb3ejpjD1nkJFTmHqM8rkkFLosSfzDS2Fqb/u6BeEFMKH/zzvrEVI4a0bc72Zz5pNRuFHI+i5iA7IKPzwXOo5juaQUJjf4DOOeoeEwrz6+Q6hX5BQeI0xXrtqBbrJZDesxP7YA/xzOt5iFp/AmyiQdebdPpAff1H7ZyZkk8gOVqvHM+Ny8+xTp9XsSb+ZCiDjO8xZNC48H/rNVDDPj23yaYmt64p24965DQr1MRw/9xQ3GL/dLOa5RKuD9L4xJWOYFdb09PFrSO8iM9vNfLuINltHhZVTs5AKoa6jiJ7ljs11cJ5pyzR6WCxscGKDD91KqXkef7O9VsIo8qDwZOfD2reyyFluMCucz6PFJp/ldS2ikUumgt6JaB8aI2nmw+yf6cw0PHar1W+vFNwijTlTIfPi3M/eJw6ZCm71sCGhJouhPopovlq9VmBja6HtLaAVNq1Wn/sR6JCpUFN/2+wxNMQeXmbPLuk3U0GEXq2emE8DCD+20B5k6ztToddcDJuzI31C4i1GUFihFlZIClaohRWSghVqYYWkYIVaWCEpWKEWVkgKVqiFFZKCFWphhaRghVpYISlYoRZWSApWqOV/oHD5UxWaDjMpAmWFYS10RTk9HrfSoXwgwJi4D4vnM/w2z4h/ApAUFa7MGax9I04FWy9IH0Jc3DtojSzbfVH0xiPWVjEqFVPKTpTHoqmGM4WKgHLK0YiywnLi2RKbNyHLqU7vdMtpuWHbxM0n0V2BQSnURNFUNCS19AUMSgeIPKNdAUI5eeSucYuRHsj8Jf6ohQ1rppiUFUbPY1xL0yEwkPKlbCW+6YZyDL6yG0vZd/5TEZByeG3UvtMf93khRTtRc2bc8+MyAUGE+HW1Vg00nAqlIakqzFj8Wj9QYLTW7Ge4aDdGEI9aiZSZtouGAOFTY/1yahslujsYzxNL2a7FBqXHR55p1ha2WaSaP41Ko0iZtzYtxRf5noF+ku2D82bZdRbLHyJwZdUZyS+RcVdnOLpwyjcetBsY5H3bYaXrQIz9Srj1JqU4vxAuqw8HcBqgXweUUsSH+652fW7D08vqutLbdUCQF3EpZDw8TN8u9zS4e58clmlmFXJMj9KZr43pe0BRQPoUx/QBpbE4wzAMwzAM44N/AeDmsfW8j2DvAAAAAElFTkSuQmCC" alt="我的訂單" class="title13">
                                    <span ><a href="#order"class="title14">訂單</a></span>
                                </a>
                            </section>
    
                        </div>
                    </div>
                </section>
            </header>
            <span>
    
                <span>
                    <table class="table1" >
                        <tr>
                            <td><img src="https://upload.cc/i1/2022/12/10/JdMDqU.jpg"><p>MIT健康枕</p></td>
                            <td><img src="https://upload.cc/i1/2022/12/10/4p2Ie1.jpg"><p>羊毛枕</p></td>
                        </tr>
                        <tr>
                            <td><img src="https://upload.cc/i1/2022/12/10/RW98cx.jpg"><p>js乳膠床墊</p></td>
                            <td><img src="https://upload.cc/i1/2022/12/10/A3gwuJ.jpg"><p>duck乳膠床墊</p></td>
                        </tr>
                    </table>
                    
                </span>
            </span>
            <br/>
        </body>
    </html>
`)
  }

  async function signup() {
    Ui.show(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <title>setup</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>

<style>

  body {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      background-color: pink;
      font-family: "lato", sans-serif;
      background-image:url('https://png.pngtree.com/thumb_back/fh260/back_pic/04/17/96/6758287c4f59131.jpg')
    }
  
  .signupFrm {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .form {
    background-color: white;
    width: 400px;
    border-radius: 8px;
    padding: 20px 40px;
    box-shadow: 0 10px 25px rgba(92, 99, 105, .2);
  }
  
  .title {
    font-size: 50px;
    margin-bottom: 50px;
  }
  
  .inputContainer {
    position: relative;
    height: 45px;
    width: 90%;
    margin-bottom: 17px;
  }
  
  .input {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    border: 1px solid #DADCE0;
    border-radius: 7px;
    font-size: 16px;
    padding: 0 20px;
    outline: none;
    background: none;
    z-index: 1;
  }
  
  ::placeholder {
    color: transparent;
  }
  
  .label {
    position: absolute;
    top: 15px;
    left: 15px;
    padding: 0 4px;
    background-color: white;
    color: #DADCE0;
    font-size: 16px;
    transition: 0.5s;
    z-index: 0;
  }
  
  .submitBtn {
    display: block;
    margin-left: auto;
    padding: 15px 30px;
    border: none;
    background-color: purple;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 30px;
  }
  
  .submitBtn:hover {
    background-color: #9867C5;
    transform: translateY(-2px);
  }
  
  .input:focus + .label {
    top: -7px;
    left: 3px;
    z-index: 10;
    font-size: 14px;
    font-weight: 600;
    color: purple;
  }
  
  .input:focus {
    border: 2px solid purple;
  }
  
  .input:not(:placeholder-shown)+ .label {
    top: -7px;
    left: 3px;
    z-index: 10;
    font-size: 14px;
    font-weight: 600;
  }
  .image{
      margin: 0%;
      padding: 0%;
      height: 200px;
      width: 400px;
  }
</style>

<body >
    <div class="signupFrm">
        <form action=""  class="form">
          <h1 class="title">Sign up</h1>
    
          <div class="inputContainer">
            <input type="email" class="input" placeholder="電子信箱" id = "email">
            <label for="" class="label">Email</label>
          </div>
    
          <div class="inputContainer">
            <input type="text" class="input" placeholder="使用者" id="user">
            <label for="" class="label">Username</label>
          </div>
    
          <div class="inputContainer">
            <input type="Password" class="input" placeholder="密碼" id="password">
            <label for="" class="label">Password</label>
          </div>
    
          <div class="inputContainer">
            <input type="Password" class="input" placeholder="Confirm Password" id="Confirm_Password">
            <label for="" class="label">Confirm Password</label>
          </div>
          <div >
              <img class="image" src="https://www.techfunnel.com/wp-content/uploads/2018/04/Benefits-of-Digital-Technology-in-Business.jpg"  alt="an image">
          </div>
          <a href="#login">I already have account number</a>
          
         <input type="button" class="submitBtn" value="Sign up" id = "btn" onclick="serverSignup()">
        </form>
      </div>
</body>
</html>
<!--參考資料: https://mdbootstrap.com/docs/standard/extended/registration/ -->`)
  }
  
  async function login() {
    Ui.show(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>signin</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>

  <style>
    
    body {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      background-color: pink;
      font-family: "lato", sans-serif;
      background-image:url('https://png.pngtree.com/thumb_back/fh260/back_pic/04/17/96/6758287c4f59131.jpg')
    }
    
    .signupFrm {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    
    .form {
      background-color: white;
      width: 400px;
      border-radius: 8px;
      padding: 20px 40px;
      box-shadow: 0 10px 25px rgba(92, 99, 105, .2);
    }
    
    .title {
      font-size: 50px;
      margin-bottom: 50px;
    }
    
    .inputContainer {
      position: relative;
      height: 45px;
      width: 90%;
      margin-bottom: 17px;
    }
    
    .input {
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      border: 1px solid #DADCE0;
      border-radius: 7px;
      font-size: 16px;
      padding: 0 20px;
      outline: none;
      background: none;
      z-index: 1;
    }
    
    ::placeholder {
      color: transparent;
    }
    
    .label {
      position: absolute;
      top: 15px;
      left: 15px;
      padding: 0 4px;
      background-color: white;
      color: #DADCE0;
      font-size: 16px;
      transition: 0.5s;
      z-index: 0;
    }
    
    .submitBtn {
      display: block;
      margin-left: auto;
      padding: 15px 30px;
      border: none;
      background-color: purple;
      color: white;
      border-radius: 6px;
      cursor: pointer;
      font-size: 16px;
      margin-top: 30px;
    }
    
    .submitBtn:hover {
      background-color: #9867C5;
      transform: translateY(-2px);
    }
    
    .input:focus + .label {
      top: -7px;
      left: 3px;
      z-index: 10;
      font-size: 14px;
      font-weight: 600;
      color: purple;
    }
    
    .input:focus {
      border: 2px solid purple;
    }
    
    .input:not(:placeholder-shown)+ .label {
      top: -7px;
      left: 3px;
      z-index: 10;
      font-size: 14px;
      font-weight: 600;
    }
    .image{
        margin: 0%;
        padding: 0%;
        height: 200px;
        width: 400px;
    }
  </style>

  <body>
      <div class="signupFrm">
          <form class="form">
            <h1 class="title">Sign in</h1>
      
            <div class="inputContainer">
            <input type="text" placeholder="使用者" id="user">
              <label class="label">Username</label>
            </div>
      
            <div class="inputContainer">
              <input type="password" placeholder="密碼" id="password">
              <label class="label">Password</label>
            </div>

            <a href='#signup' >I don't have account number</a>
            <input type="button" class="submitBtn" value="Sign in" id = "btn"  onclick="serverLogin()">
          </form>
        </div>
  </body>
  </html>
<!--參考資料: https://mdbootstrap.com/docs/standard/extended/registration/ -->
`)
  }

  //<option value="床包$1000">床包$1000</option>
  //<option value="床墊$3980">床墊$3980</option>
  //<option value="棉被$1980">棉被$1980</option>
  //<option value="枕頭$1280">枕頭$1280</option>

  async function serverbuy(){
    let product = Ui.id('select1').value
    let number = Ui.id('select2').value
    let money = 0;
    let total = 0;
    if(product == "床包$1000") money = 1000
    else if(product == "床墊$3980") money = 3980
    else if(product == "棉被$1980") money = 1980
    else if(product == "枕頭$1280") money = 1280
    total = money * number
    let r = await Server.post('/shopping_car',{product,number,total})
    console.log('serverbuy : r=',r)
      if (r.status == Status.OK) {
        alert('訂單已送出!')
        //Ui.goto('#login')
      } else {
        alert('訂單未送出')
      }
  }

  async function serverSignup() {
    let user = Ui.id('user').value
    let password = Ui.id('password').value
    let email = Ui.id('email').value
    let Confirm_Password = Ui.id('Confirm_Password').value
    if(password == Confirm_Password){
      let r = await Server.post('/signup', {user, password, email})
      console.log('serverLogin: r=', r)
      if (r.status == Status.OK) {
        alert('註冊成功，開始登入使用!')
        Ui.goto('#login')
      } else {
        alert('註冊失敗，請選擇另一個使用者名稱!')
      }
    }else{
      alert('確認密碼有誤')
    }
  }
  
  async function serverLogin() {
    let user = Ui.id('user').value
    let password = Ui.id('password').value
    let r = await Server.post('/login', {user, password})
    console.log('serverLogin: r=', r)
    if (r.status == Status.OK) {
      localStorage.setItem('user', user)
      Ui.goto('#home')
    } else
      alert('登入失敗: 請輸入正確的帳號密碼!')
  }


  // ====================== Server ====================
const Server = {}

Server.get = async function(path) {
  let r = await window.fetch(path, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return {status:r.status, obj:await r.json()}
}

Server.post = async function(path, params) {
  let r = await window.fetch(path, {
    body: JSON.stringify(params),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return {status:r.status, obj:await r.json()}
}

const Status = {
  OK:200,
  Fail:400,
  Unauthorized:401,
  Forbidden:403,
  NotFound:404,
}

  // ========================= Ui ======================

const Ui = {}

Ui.id = function(path) {
  return document.getElementById(path)
}

Ui.one = function(path) {
  return document.querySelector(path)
}

Ui.show = function (html) {
  Ui.id('main').innerHTML = html
}

Ui.goto = function (hash) {
  window.location.hash = hash
}