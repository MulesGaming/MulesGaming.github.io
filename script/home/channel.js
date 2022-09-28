// Channel

// Get channel data

fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&id=UCDnNCbnzWhsfgY8A3F7MbiQ&maxResults=1&key=AIzaSyCxIG9tnDHYuVctoJ1hlvsTQIcK6j7Wsc8")

  // Subscribe area

  .then((result)=>{
    return result.json()
  }).then((data)=>{

    // Info Log 
    console.log(data)

    // LET blank = blank
    let channelContaner = document.querySelector(".yt-channel-holder")
    let channel = data.items
    
    for(channel of channel){
      // HTML
      channelContaner.innerHTML += `
      <div class="channel-info">
        <img src="${channel.snippet.thumbnails.default.url}" class="channel-icon" title="Mules's Channel picture" alt="ERROR: Channel picture failed to load">
        <h3 class="channel-name">${channel.snippet.title}</h3>
      </div>
      <div class="buttons">
        <a href="https://www.youtube.com/channel/UCdTs7rNvX-FLa7hsOjBvm4g/"><button class="yt-channel-button">Youtube channel</button></a><br>
        <a href="https://www.youtube.com/channel/UCdTs7rNvX-FLa7hsOjBvm4g?sub_confirmation=1"><button class="subscribers">${channel.statistics.subscriberCount} Subscribers</button></a><br>
      </div>
      `
    }

  })

