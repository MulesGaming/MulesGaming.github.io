// Message

console.log("Dropdown menu.js loaded!");

// Open/close menu

function dropdownMenuVisible (visibility) {
  const dropdownMenu = document.getElementById("dropdownMenuMain");
  const dropdownMenuButton = document.getElementById("dropdownIcon");
  const main = document.querySelector("main");
  if (visibility === "open") {
    dropdownMenu.style.visibility = "visible";
    dropdownMenuButton.innerHTML = null;
  }else if (visibility === "close") {
    dropdownMenu.style.visibility = "hidden";
    dropdownMenuButton.innerHTML = '<img class="dropdown-icon-image" src="/media/images/hamburger-menu-icon.svg">';
  }else{
    console.error("Given visibility is not open or close.");
  }
}