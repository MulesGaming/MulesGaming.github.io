// Load message

console.log("Videos.js loaded. This website uses YouTube API.")

// Main

  // Get videos result

  fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCDnNCbnzWhsfgY8A3F7MbiQ&maxResults=3&order=date&key=AIzaSyAMMhkNlgDzRQKmBIr7NKYkxlbd52Vcv-A")

  // Everything else

  .then((result)=>{
    return result.json()
  }).then((id)=>{
    // LET blank = blank
    let videoId = id.items
    for(videoId of videoId){
      var videoID = `${videoId.id.videoId}`
      // Stats
      fetch("https://youtube.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=" + videoID + "&key=AIzaSyAMMhkNlgDzRQKmBIr7NKYkxlbd52Vcv-A")
      .then((result)=>{
        return result.json()
      }).then((videoData)=>{
        let stats = videoData.items[0].statistics
        let videos = videoData.items[0].snippet
        let videoIndividualID = videoData.items[0].id
        let videoContaner = document.querySelector(".videos-container")
        // HTML
        videoContaner.innerHTML += `
        <section class="video">
          <a class="videos-link" href="https://www.youtube.com/watch?v=${videoIndividualID}">
            <img src="https://i.ytimg.com/vi/${videoIndividualID}/hq720.jpg" class="video-thumbnail" title="Thumbnail of ${videos.title}" alt="${videos.title}'s thumbnail">  
            <h3 class="video-title" title="${videos.title}">${videos.title}</h3>
            <div class="video-stats">
              <img class="view-icon" src="/media/images/view-icon.svg" alt="A eye" title="views">
              <p class="view-count">${stats.viewCount}</p>
            </div>
          </a>
        </section>
        `
      })
    }
  }
)
