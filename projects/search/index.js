// Loaded

console.log("Java script loaded")

// Main

// On enter

var input = document.getElementById("searchInput");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    Search()
  }
});

// Do results

// Search by views

function SearchView() {
  var search = document.getElementById("searchInput").value;

  // Get Results

  fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCDnNCbnzWhsfgY8A3F7MbiQ&maxResults=5&order=viewCount&q=" + search + "&type=video&key=AIzaSyDf2oUhB7s4n8HLJFaBTgg7I5HPbwbld1o")

  .then((result)=>{
    return result.json()
  }).then((data)=>{
    // LET blank = blank
    let results = data.items
    let resultContaner = document.querySelector(".results")
    
    for(results of results){
      // HTML
      resultContaner.innerHTML += `
      <div class="video">
        <a class="video-link" href="https://www.youtube.com/watch?v=${results.id.videoId}">
          <img class="video-thumbnail" src="https://i.ytimg.com/vi/${results.id.videoId}/hq720.jpg" alt="Result thumbnail" title="${results.snippet.title}">
          <h2 class="video-title">${results.snippet.title}</h2>
        </a>
      </div>
      `
    }
  })

}

// Search by date

function SearchDate() {
  var search = document.getElementById("searchInput").value;

  // Get Results

  fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCDnNCbnzWhsfgY8A3F7MbiQ&maxResults=5&order=date&q=" + search + "&type=video&key=AIzaSyDf2oUhB7s4n8HLJFaBTgg7I5HPbwbld1o")

  .then((result)=>{
    return result.json()
  }).then((data)=>{
    // LET blank = blank
    let results = data.items
    let resultContaner = document.querySelector(".results")
    
    for(results of results){
      // HTML
      resultContaner.innerHTML += `
      <div class="video">
        <a class="video-link" href="https://www.youtube.com/watch?v=${results.id.videoId}">
          <img class="video-thumbnail" src="https://i.ytimg.com/vi/${results.id.videoId}/hq720.jpg" alt="Result thumbnail" title="${results.snippet.title}">
          <h2 class="video-title">${results.snippet.title}</h2>
        </a>
      </div>
      `
    }
  })

}
