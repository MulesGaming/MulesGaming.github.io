// All projects

projects = [
  {name:"Minecraft Wordle",desc:"The Wordle, but Minecraft!",link:"https://www.minecraftwordle.fun",img:"https://minecraftwordle.mulesgaming.com/media/img/logo.png"},
  {name:"The Mystery of the 9 Wands",desc:"A Minecraft adventure map",link:"/projects/mystery-9-wands/",img:"https://camo.githubusercontent.com/facef823ffb2e8d96c8c7e7fc91f247fbf2dd6c13aab410a83df6fbe8dbd454c/68747470733a2f2f7777772e6d756c657367616d696e672e636f6d2f6d656469612f696d616765732f395f77616e64735f69636f6e2e706e67"},
  {name:"My Minecraft skins",desc:"My skins for Minecraft!",link:"/projects/skins",img:""},
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
  <section class="project">
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