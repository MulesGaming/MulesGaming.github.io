// Console message

console.log("Main java script loaded")

// Get API

fetch("https://api.github.com/repos/mulesgaming/The-mystery-of-the-9-wands/releases")

.then((result)=>{
  return result.json()
}).then((data)=>{
  // Get main data
  let apiUrl = data[0].url
  fetch(apiUrl)
  // Result of main data
  .then((result)=>{
    return result.json()
  }).then((data)=>{

    // LET blank = blank
    let outputDiv = document.getElementById("releasesSection")
    let latestRelease = data      // Write HTML
      outputDiv.innerHTML += `
      <a>
        <div class="info">
          <span class="release-name">${latestRelease.name}</span>
          <div class="releases-desc-container">
            <span class="releases-desc-title">Version description:</span>
            <span class="release-desc"><md-block>${latestRelease.body}</md-block></span>
          </div>
        </div>
      </a>
      <div class="downloads">
        <span class="downloads-header">Downloads/assets:</span>
        <ul class="download-links-list">
          <li><a class="download-link" href="${latestRelease.assets[0].browser_download_url}">${latestRelease.assets[0].name}</a></li>
          <li><a class="download-link" href="${latestRelease.assets[1].browser_download_url}">${latestRelease.assets[0].name}</a></li>
        </ul>
      </div>
      `
  })
})
