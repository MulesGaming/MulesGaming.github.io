// Loaded message

console.log('bskyPosts.js loaded')

// Get posts

fetch('https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=mulesgaming.com').then((result)=>{
    return result.json()
  }).then((postData)=>{
    removeReposts(postData.feed)
  })

// Remove reposts

function removeReposts(data){
  var myPosts = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].post.author.handle == "mulesgaming.com"){
      // Write posts
      myPosts.push(data[i])
    }
  }
  writePost(myPosts)
}

// Write posts to page

function writePost(data){
  const htmlToWrite = document.getElementById('bskyPostsHolder')
  htmlToWrite.innerHTML = ""
  for (let i = 0; i < 4; i++) {
    // Get post id
    postID = data[i].post.uri.split('/')[4]
    // Check for images
    var postImages;
    if (data[i].post.embed.images != null){
      let imagesArray = data[i].post.embed.images;
      postImages = `<img class="bsky-post-image" alt="${imagesArray[0].alt}" src="${imagesArray[0].thumb}">`
    }else{
      var postImages = ""
    }
    // Write
    htmlToWrite.innerHTML += `<a href="https://bsky.app/profile/mulesgaming.com/post/${postID}" class="bsky-post-link-to-post">
    <div class="bsky-post-items">
      <span class="bsky-post-content">${data[i].post.record.text}</span>
      <div class="bsky-post-images">${postImages}</div>
    </div></a>`
  }
}

