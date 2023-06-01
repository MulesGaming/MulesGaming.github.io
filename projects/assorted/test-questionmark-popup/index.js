// Console.log

console.log("JS loaded")

// Popout window function
function openPopout(url) {
  popupWindow = window.open(url,'popUpWindow','height=500,width=750,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
    }

// Popup

function togglePopup() {
  var popup = document.getElementById("thePopup");
  popup.style.visibility = 'visible';
}

// ?

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const popup = urlParams.get('showpopup')

// If ?showpopup=true

if (popup === "true") {
  togglePopup ()
}

// Cookie

document.cookie = "we-test=test; SameSite=None; Secure";
