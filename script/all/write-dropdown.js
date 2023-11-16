// Message

console.log("Write dropdown menu loaded!");

// Define section element

const dropdownMenuContainer = document.getElementById("dropdown");

// Defince menu ellement vars

const dropdownMenuMainIcon = `
<div class="dropdown-icon" id="dropdownIcon" onclick="dropdownMenuVisible ('open')"><img class="dropdown-icon-image" title="Dropdown menu" alt="menu" src="/media/images/hamburger-menu-icon.svg"></div>
`;

const dropdownMenuMainItems = `
<div id="dropdownMenuMain" class="dropdown-menu-main">
  <!-- x -->
  <span class="dropdown-close" onclick="dropdownMenuVisible ('close')">X</span>
  <!-- Items -->
  <a href="/"><div class="dropdown-menu-item" title="Home"><img class="dropdown-menu-img" src="/media/images/home-icon.svg" width="50">Home</div></a>
  <a href="/projects/"><div class="dropdown-menu-item" title="Projects"><img class="dropdown-menu-img" src="/media/images/wrench-icon.svg" width="50">Projects</div></a>
  <a href="/yt.html"><div class="dropdown-menu-item" title="YouTube - @mulesgamingmc"><img class="dropdown-menu-img" src="/media/images/yt_icon_mono_dark.png" width="50">YouTube</div></a>
  <a href="/twt"><div class="dropdown-menu-item" title="Twitter - @mulesgaming"><img class="dropdown-menu-img" src="/media/images/twitter_logo.png" width="50">Twitter</div></a>
  <a href="/mastodon"><div class="dropdown-menu-item" title="Mastodon - @mulesgaming@mastodon.social"><img class="dropdown-menu-img" src="/media/images/mastodon_logo.svg" width="50">Mastodon</div></a>
  <a href="/github"><div class="dropdown-menu-item" title="Github - MulesGaming"><img class="dropdown-menu-img" src="/media/images/github-logo-white.svg" width="50">GitHub</div></a>
</div>
`;

const dropdownMenuBackground = `
<div class="dropdown-background" id="dropdownBackground"></div>
`;

const dropdownMenuExternal = `
<!-- Styles -->
<link rel="stylesheet" href="/styles/dropdown-menu.css">
`;

// Write to container

dropdownMenuContainer.innerHTML += dropdownMenuMainIcon
dropdownMenuContainer.innerHTML += dropdownMenuMainItems
dropdownMenuContainer.innerHTML += dropdownMenuBackground
dropdownMenuContainer.innerHTML += dropdownMenuExternal

