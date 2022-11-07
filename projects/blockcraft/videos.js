// Blockcraft videos

// Other load items

console.log("Videos.js loaded. This website uses YouTube API.")

// Mules

  // Get videos result

  fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCDnNCbnzWhsfgY8A3F7MbiQ&maxResults=10&order=date&q=Blockcraft&type=video&key=AIzaSyCXV_pJ1fQs3u7d9qy8uNdHh4XYjHodIpY")

  // Everything else

  .then((result)=>{
    return result.json()
  }).then((data)=>{
    // Info Log 
    console.log(data)
    // LET blank = blank
    let videoContaner = document.querySelector(".mules-video-contanier")
    let videos = data.items
    for(videos of videos){
      // HTML
      videoContaner.innerHTML += `
      <section class="video">
        <div class="thumbnail-contaner">
            <a href="https://www.youtube.com/watch/${videos.id.videoId}" class="video-link">
            <img src="https://i.ytimg.com/vi/${videos.id.videoId}/hq720.jpg" class="thumbnail" alt="ERROR: Thumbnail failed to load">
            </a>
        </div>
        <div class="text-box">
          <a href="https://www.youtube.com/watch/${videos.id.videoId}" class="video-link"><h3 class="video-title">${videos.snippet.title}</h3></a><br>
          <p class="video-desc">${videos.snippet.description}</p><br>
          <a href="https://www.youtube.com/channel/${videos.snippet.channelId}" class=" video-link"><p class="channel">${videos.snippet.channelTitle}</p></a>
        </div>
      </section>
      `
    }

  })


// Bluey

  // Get videos result

  fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCdTs7rNvX-FLa7hsOjBvm4g&maxResults=10&order=date&q=Blockcraft&type=video&key=AIzaSyCXV_pJ1fQs3u7d9qy8uNdHh4XYjHodIpY")

  // Everything else

  .then((result)=>{
    return result.json()
  }).then((data)=>{
    // LET blank = blank
    let videoContaner = document.querySelector(".bluey-video-contanier")
    let videos = data.items
    for(videos of videos){
      // HTML
      videoContaner.innerHTML += `
      <section class="video">
        <div class="thumbnail-contaner">
          <a href="https://www.youtube.com/watch/${videos.id.videoId}" class="video-link">
          <img src="https://i.ytimg.com/vi/${videos.id.videoId}/hq720.jpg" class="thumbnail" alt="ERROR: Thumbnail failed to load">
          </a>
        </div>
        <div class="text-box">
          <a href="https://www.youtube.com/watch/${videos.id.videoId}" class="video-link"><h3 class="video-title">${videos.snippet.title}</h3></a><br>
          <p class="video-desc">${videos.snippet.description}</p><br>
          <a href="https://www.youtube.com/channel/${videos.snippet.channelId}" class=" video-link"><p class="channel">${videos.snippet.channelTitle}</p></a>
        </div>
      </section>
      `
    }

  })


// zaynii

  // Get videos result

  fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCxc9U84DaAYroqUPfwDp1xQ&maxResults=10&order=date&q=Blockcraft&type=video&key=AIzaSyCXV_pJ1fQs3u7d9qy8uNdHh4XYjHodIpY")

  // Everything else

  .then((result)=>{
    return result.json()
  }).then((data)=>{
    // LET blank = blank
    let videoContaner = document.querySelector(".zaynii-video-contanier")
    let videos = data.items
    for(videos of videos){
      // HTML
      videoContaner.innerHTML += `
      <section class="video">
        <div class="thumbnail-contaner">
          <a href="https://www.youtube.com/watch/${videos.id.videoId}" class="video-link">
          <img src="https://i.ytimg.com/vi/${videos.id.videoId}/hq720.jpg" class="thumbnail" alt="ERROR: Thumbnail failed to load">
          </a>
        </div>
        <div class="text-box">
          <a href="https://www.youtube.com/watch/${videos.id.videoId}" class="video-link"><h3 class="video-title">${videos.snippet.title}</h3></a><br>
          <p class="video-desc">${videos.snippet.description}</p><br>
          <a href="https://www.youtube.com/channel/${videos.snippet.channelId}" class=" video-link"><p class="channel">${videos.snippet.channelTitle}</p></a>
        </div>
      </section>
      `
    }

  })



