// Load message

console.log("Channel.js loaded. This website uses YouTube API.")

// Channel

// Get channel data

fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&id=UCDnNCbnzWhsfgY8A3F7MbiQ&key=AIzaSyCxIG9tnDHYuVctoJ1hlvsTQIcK6j7Wsc8")

  // Rest of code

  .then((result)=>{
    return result.json()
  }).then((data)=>{

    // LET blank = blank
    let channelContaner = document.querySelector(".channel-contaner")
    let channel = data.items
    
    for(channel of channel){
      // HTML
      channelContaner.innerHTML += `
      <a class="channel-link" href="https://www.youtube.com/channel/${channel.id}">
          <img src="${channel.snippet.thumbnails.default.url}" class="channel-icon" title="Mules Gaming's Channel picture" alt="Mules channel picture">
      </a>
          <a class="channel-link" href="https://www.youtube.com/channel/${channel.id}">
            <h1 class="channel-name">${channel.snippet.title}</h1>
      </a><br>
      <a class="subscribers-link" href="https://www.youtube.com/channel/${channel.id}?sub_confirmation=1">
        <p class="subscribers">${channel.statistics.subscriberCount} subscribers</p>
      </a>
        `
    }
  })

