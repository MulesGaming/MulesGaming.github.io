// Get website

function getURL () {
  return window.location.href
}

const url = getURL()

// Write to html

let videoContaner = document.querySelector(".url")

videoContaner.innerHTML += `<a href="` + url + `">` + url + `</a>`

