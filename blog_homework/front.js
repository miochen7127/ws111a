export function layout(title , content){
    return`
    <html>
    <head>
        <title>${title}</title>
    </head>
    <body>
        <h2>${title}</h2>
        <p>${content}</p>
    </bodt>
    </html>
    `
}

export function list(posts){
    let list = [];
    for(let post of posts){
        list.push(`
        <h2>${ post.title }</h2>
        <p>${post.date}</p>
        <p><a href="/post/${post.id}">Read post</a></p>
        <p><a href="/remove/${post.id}">Delete post</a></p>
        `)
    }  
    let content = `
    <p>You have <strong>${posts.length}</strong> posts!</p>
    <p><a href="/post/new">Create a Post</a></p>
    <ul id="posts">
      ${list.join('\n')}
    </ul>
    `
    return layout('Posts', content)
}

export function newPost(){
    return layout('New Post', `
    <p>Create a new post.</p>
    <form action="/post" method="post">
      <p><input type="text" placeholder="Title" name="title"></p>
      <p><input type = "date" name = "date"></p>
      <p><textarea placeholder="Contents" name="body"></textarea></p>
      <p><input type="submit" value="Create"></p>
    </form>
    `)
}
    export function show(post) {
        return layout(post.title, `
        <pre>${post.date}</pre>
        <pre>${post.body}</pre>
      `)
}