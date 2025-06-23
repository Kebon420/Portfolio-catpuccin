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

cerchio = document.querySelector("#cerchio")

var cerc = cerchio.getBoundingClientRect();
let lunghezzaCerchio = cerc.right - cerc.left
let altezzaCerchio = cerc.bottom - cerc.top

function apriMenu(nome) {

  let bottonePremuto = document.querySelector(`.${nome}`) 

  let divGradiente = document.querySelector(`.strato`) 

  document.querySelector("body").style.setProperty("background-size","100% 100%");

  let coloreBottone;
  let gradiente;

  coloreBottone = getComputedStyle(bottonePremuto).getPropertyValue( "background-color" );
  coloreCerchio = ottieniColoreCerchio(nome)
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
  //
  document.querySelectorAll(".cerchino").forEach(frammentoCerchio => {
    frammentoCerchio.style.setProperty("stroke",coloreCerchio)
  });


  if(nome == "a"|| nome == "b"){
    posY = -rect.top
  }else{
    posY = window.innerHeight - rect.bottom 
  }
  
  if(nome == "a"|| nome == "c"){
    
    if(window.innerWidth > 500){
      posX = -lunghezzaBottone/2
    }else{
      posX = -rect.left
    }

  }else{
    if(window.innerWidth > 500){
      posX = lunghezzaBottone/2
    }else{
      posX = window.innerWidth - rect.right
    }
  }

  cerchio.style.setProperty("left",`${(lunghezzaBottone/2 + rect.left)-(lunghezzaCerchio/2) + posX}px`)
  cerchio.style.setProperty("top",`${(altezzaBottone/2 + rect.top)-(altezzaCerchio/2) + posY}px`)

  bottonePremuto.style.setProperty("transform", `translate(${posX}px, ${posY}px)`)

  
  cerchio.style.setProperty("animation", "rotazione 5s infinite linear")

  bottonePremuto.addEventListener("click", () => chiudiMenu(nome), {once: true})
}

function chiudiMenu(nome){
  let bottonePremuto = document.querySelector(`.${nome}`) 


  bottonePremuto.style.setProperty("transform", `translate(0px, 0px)`)

  let divGradiente = document.querySelector(`.strato`) 
  divGradiente.style.setProperty("background-size","0% 0%")

  document.querySelectorAll(".cerchino").forEach(frammentoCerchio => {
    frammentoCerchio.style.setProperty("stroke","#00000000")
  });
  
  var rect = bottonePremuto.getBoundingClientRect();
  let lunghezzaBottone = rect.right - rect.left
  let altezzaBottone = rect.bottom - rect.top

  posizioneBottone = `${(lunghezzaBottone)/2 + rect.left}px ${(altezzaBottone)/2 + rect.top}px`

  setTimeout(()=>{
    bottoni.forEach(bottoneSingolo => {
      bottoneSingolo.style.setProperty("z-index","1")
      })
    
    bottonePremuto.addEventListener("click", () => apriMenu(nome), {once: true})
    },200)
}



function ottieniColoreCerchio(nome){
  if(nome=="a"){
    return "#91d7e3"
  }else if(nome=="b"){
    return "#f5bde6" 
  }else if(nome=="c"){
    return "#ee99a0" 
  }else if(nome=="d"){
    return "#f5a97f"
  }
}

