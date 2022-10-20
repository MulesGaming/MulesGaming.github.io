// Load message

console.log("Videos.js loaded. This website uses YouTube API.")

// Main

  // Get videos result

  fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCDnNCbnzWhsfgY8A3F7MbiQ&maxResults=3&order=date&key=AIzaSyAMMhkNlgDzRQKmBIr7NKYkxlbd52Vcv-A")

  // Everything else

  .then((result)=>{
    return result.json()
  }).then((data)=>{
    // LET blank = blank
    let videoContaner = document.querySelector(".videos-container")
    let videos = data.items
    for(videos of videos){

      // HTML
      videoContaner.innerHTML += `
      <div class="video">
        <a class="videos-link" href="https://www.youtube.com/watch?v=${videos.id.videoId}">
          <img src="https://i.ytimg.com/vi/${videos.id.videoId}/hq720.jpg" class="video-thumbnail" title="Thumbnail of ${videos.snippet.title}" alt="${videos.snippet.title}'s thumbnail">  
          <h3 class="video-title">${videos.snippet.title}</h3>
        </a>
      </div>
      `
    }

  })



