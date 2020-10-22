const posts =[
    {postId : 1355, commentsQuantity : 5},	
    {postId : 5131, commentsQuantity : 13},	
    {postId : 6134, commentsQuantity : 2}	
];

function findSinglePost(urId,post){
    let res = post.find(element => element.postId==urId);
    console.log(res)
}

findSinglePost(1355, posts)
