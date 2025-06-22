// import { Marquee } from "@/components/magicui/marquee"nome;
window.addEventListener('resize', () => {
  window.location.reload()
});
let bottoni = document.querySelectorAll(".bottone") 
bottoni.forEach(bottoneSingolo => {
  let nomeBottone = bottoneSingolo.classList.value
  nomeBottone = nomeBottone.replace("bottone ", "")

  bottoneSingolo.addEventListener("click", () => apriMenu(nomeBottone), {once: true})
});

function apriMenu(nome) {

  let bottonePremuto = document.querySelector(`.${nome}`) 

  let divGradiente = document.querySelector(`.strato`) 

  document.querySelector("body").style.setProperty("background-size","100% 100%");

  let coloreBottone;
  let gradiente;

  coloreBottone = getComputedStyle(bottonePremuto).getPropertyValue( "background-color" );
  // coloreBottone = "#000000"

  var rect = bottonePremuto.getBoundingClientRect();
  let lunghezzaBottone = rect.right - rect.left
  let altezzaBottone = rect.bottom - rect.top

  posizioneBottone = `${(lunghezzaBottone)/2 + rect.left}px ${(altezzaBottone)/2 + rect.top}px`
  gradiente = `radial-gradient(circle at ${posizioneBottone}, ${coloreBottone} 5%, rgba(0,0,0,0) 5%)`  
  
  bottoni.forEach(bottoneSingolo => {
    bottoneSingolo.style.setProperty("z-index","-1")
  });
  bottonePremuto.style.setProperty("z-index","1")

  divGradiente.style.setProperty("background-image",`${gradiente}`)
  divGradiente.style.setProperty("background-position",`0% 0%`)
  divGradiente.style.setProperty("background-size","2000% 2000%")


//bottonePremuto.style.setProperty("position","fixed")

  if(nome == "a"|| nome == "b"){
    posY = -rect.top
  }else{
    posY = window.innerHeight - rect.bottom 
  }
  
  if(nome == "a"|| nome == "c"){
    posX = -lunghezzaBottone/2
  }else{
    posX = lunghezzaBottone/2
  }

  console.log(rect.top, altezzaBottone)
  bottonePremuto.style.setProperty("transform", `translate(${posX}px, ${posY}px)`)


  bottonePremuto.addEventListener("click", () => chiudiMenu(nome), {once: true})
}

function chiudiMenu(nome){
  let bottonePremuto = document.querySelector(`.${nome}`) 


  bottonePremuto.style.setProperty("transform", `translate(0px, 0px)`)

  let divGradiente = document.querySelector(`.strato`) 
  divGradiente.style.setProperty("background-size","0% 0%")


  setTimeout(()=>{
    bottoni.forEach(bottoneSingolo => {
      bottoneSingolo.style.setProperty("z-index","1")
      })
    
    bottonePremuto.addEventListener("click", () => apriMenu(nome), {once: true})
    },200)



}
