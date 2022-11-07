// Console.log

console.log("JS loaded")

// Popout window function
function openPopout(url) {
  popupWindow = window.open(url,'popUpWindow','height=500,width=750,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
    }

// Popup

function togglePopup() {
  var popup = document.getElementById("thePopup");
  popup.classList.toggle("show");}


