const postsJSON =[
    '{"postId":1355,"commentsQuantity":5}',
    '{"postId":5131,"commentsQuantity":13}',
    '{"postId":6134,"commentsQuantity":2}'
];

var posts = [];
for (let i = 0; i < postsJSON.length; i++) {
    posts.push(JSON.parse(postsJSON[i]));
}

console.log(posts);
console.log(posts[0].postId);