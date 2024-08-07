// All projects

projects = [
  {name:"Minecraft Wordle",desc:"The Wordle, but Minecraft!",link:"https://minecraftwordle.fun",img:"https://minecraftwordle.fun/media/img/logo.png"},
  {name:"Minecraft Wordle API",desc:"The API that allows to to access info from my Minecraft Wordle!",link:"https://minecraftwordle.fun/api",img:"/media/images/minecraft-wordle/API.png"},
  {name:"Brave debullshitinator",desc:"Removes unessasary bloat from Brave Browser.",link:"https://github.com/MulesGaming/brave-debullshitinator",img:"/media/images/brave-logo.png"},
  {name:"My Minecraft skins",desc:"My Minecraft skins!",link:"/projects/skins",img:""},
  {name:"My Datapacks for Minecraft",desc:"Datapacks I've made!",link:"/projects/datapacks",img:""},
  {name:"Search for videos",desc:"Search for videos across my channel!",link:"/projects/search",img:""}
];

const mainElement = document.getElementById("mainBoxes")

function write_boxes() {

  for (let i = 0; i < projects.length; i++) {

  // Image overide

  let projectImage;

  if (projects[i].img == "") {
    projectImage = "/media/images/mules-icon.jpg";
  }
  else if (typeof projects[i].img == "string") {
    projectImage = projects[i].img;
  }

  // Write
    mainElement.innerHTML += `
  <section class="project" title="${projects[i].name}">
    <a class="project-link" href="${projects[i].link}">
      <img class="project-img" src="${projectImage}" alt="${projects[i].name} Logo" title="${projects[i].name}">
      <div class="text">
        <span class="project-title">${projects[i].name}</span>
        <span class="project-desc">${projects[i].desc}</span>
      </div>
    </a>
  </section>
  `
  }
}

write_boxes();
