// Message

console.log("datapacks.js loaded")

// Datapacks

const datapackList = [
  {name:"Blockcraft Season 3 Datapack",version:"1.19.x",desc:'The custom datapack used in the Minecraft lets play, <a href="/projects/blockcraft/blockcraft.html">Blockcraft!</a> This datapack adds 5 spells to the game that can be found if various structures in the game. To cast the spells, hold a wand in your main hand and the spell you want to cast in your off hand. You can get the wand by tossing a stick on-to a enchanting table.',download:"/media/folders/datapacks/blockcraft-s3/blockcraft-s3-datapackUNZIP-ME.zip"},
  {name:"Example datapack",version:"1.19.x",desc:`The example datapack used in <a href="/yt.html">Mules Gaming's</a> YouTube <a href="https://youtu.be/EVuN0rXdsLg">tutorial on making datapacks.</a>`,download:"/media/folders/datapacks/example-datapack/example-datapackUNZIPME.zip"},
  {name:"Charging knights",version:"1.19.4",desc:`The datapack used in <a href="/yt.html">Mules Gaming's</a> YouTube <a href="https://youtu.be/PV8j-MqyWNg">charging knights/haunted knights video</a>`,download:"/media/folders/datapacks/Charging-knights.zip"},
  {name:"Gold Run",version:"1.20.2",desc:`Parkor based Minecraft minigame!`,download:"https://github.com/MulesGaming/Gold-Run/releases"}
]

// Write to page

const mainElement = document.getElementById('datapackList')

for (let i = 0; i < datapackList.length; i++) {
  mainElement.innerHTML += `
  <!---->
  <section class="datapack-backround">
    <h3 class="datapack-name">${datapackList[i].name}</h3>
    <div class="datapack-info-container">
      <p class="datapack-info">Minecraft version: ${datapackList[i].version}</p>
      <p class="desc">${datapackList[i].desc}</p>
    </div>
    <ul class="downloads">
      <a href="${datapackList[i].download}" download="${datapackList[i].name}" class="download-link">
        <button class="download-button">Download latest</button>
      </a>
    </ul>
  </section>
  <br>
  `
}

