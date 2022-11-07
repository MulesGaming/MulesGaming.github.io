// Get website

function getURL () {
  return window.location.href
}

const url = getURL()

// Write to html

let urlContaner = document.querySelector(".url")

urlContaner.innerHTML += `<a href="` + url + `">` + url + `</a>`

