// Console.log

console.log('JS loaded')

// Get URL

function getURL () {
    return window.location.href
}

const url = getURL()

const projectURLPath = url.split('/').splice(4)

// Write to html

let urlContaner = document.getElementById("url")

urlContaner.innerHTML += `<a href="` + url + `">` + projectURLPath + `</a>`
