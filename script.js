// import { Marquee } from "@/components/magicui/marquee"nome;
window.addEventListener('resize', () => {

  if(window.innerWidth < 700){
    cerchio.style.width = "40vw"
  }else{
    cerchio.style.width = "20vw"
  }

  if(bottonePremuto == NaN || !bottonePremuto){
    return
  }

  let nomeBottone = bottonePremuto.classList.value
  nomeBottone = nomeBottone.replace("bottone ", "")
  sistemaTutto(nomeBottone)
});



let bottoni = document.querySelectorAll(".bottone") 
bottoni.forEach(bottoneSingolo => {
  let nomeBottone = bottoneSingolo.classList.value
  nomeBottone = nomeBottone.replace("bottone ", "")

  bottoneSingolo.addEventListener("click", () => apriMenu(nomeBottone), {once: true})
});

cerchio = document.querySelector("#cerchio")

if(window.innerWidth < 700){
  cerchio.style.width = "40vw"
}else{
  cerchio.style.width = "20vw"
}

let cerc = cerchio.getBoundingClientRect();
let lunghezzaCerchio = cerc.right - cerc.left
let altezzaCerchio = cerc.bottom - cerc.top

let rect
let lunghezzaBottone
let altezzaBottone


let bottonePremuto
let posizioneBottone

let divGradiente = document.querySelector(`.strato`) 

let coloreBottone;
let gradiente;

let divTesto; 

function apriMenu(nome) {

  bottonePremuto = document.querySelector(`.${nome}`) 

  bottonePremuto.style.setProperty("transition","left 200ms ease-out, top 200ms ease-out")

  coloreBottone = getComputedStyle(bottonePremuto).getPropertyValue( "background-color" );

  sistemaTutto(nome)

  cerchio.style.setProperty("opacity","1")
  coloreCerchio = ottieniColoreCerchio(nome)
  
  bottoni.forEach(bottoneSingolo => {
    bottoneSingolo.style.setProperty("z-index","-1")
  });
  bottonePremuto.style.setProperty("z-index","100")

  //
  document.querySelectorAll(".cerchino").forEach(frammentoCerchio => {
    frammentoCerchio.style.setProperty("stroke",coloreCerchio)
  });



  cerchio.style.setProperty("animation", "rotazione 5s infinite linear")

  divTesto = document.querySelector(`.div-${nome}`)
  divTesto.style.setProperty("color","#24273aFF")
  divTesto.style.setProperty("pointer-events","auto")
  divTesto.style.setProperty("z-index","9999")

  setTimeout(()=>{
    bottonePremuto.style.setProperty("background-color","#00000000")
    divTesto.style.setProperty("z-index","30")
    bottonePremuto.addEventListener("click", () => chiudiMenu(nome), {once: true})
  },200)
}

function chiudiMenu(nome){

  divTesto.style.setProperty("z-index","9999")
  bottonePremuto.style.setProperty("background-color",`${coloreBottone}`)
  divTesto.style.setProperty("color","rgba(0,0,0,0)")
  bottonePremuto = document.querySelector(`.${nome}`) 
  cerchio.style.setProperty("opacity","0")

  bottonePremuto.style.setProperty("transition","border-radius 200ms ease-in-out, left 200ms ease-out, top 200ms ease-out")

  bottonePremuto.style.setProperty("left",`${0}px`)
  bottonePremuto.style.setProperty("top",`${0}px`)

  let divGradiente = document.querySelector(`.strato`) 
  divGradiente.style.setProperty("background-size","0% 0%")
 
  rect = bottonePremuto.getBoundingClientRect();
  lunghezzaBottone = rect.right - rect.left
  altezzaBottone = rect.bottom - rect.top

  posizioneBottone = `${(lunghezzaBottone)/2 + rect.left}px ${(altezzaBottone)/2 + rect.top}px`

  setTimeout(()=>{
    bottoni.forEach(bottoneSingolo => {
      bottoneSingolo.style.setProperty("z-index","1")
      })

    divTesto.style.setProperty("z-index","-1")
    bottonePremuto.addEventListener("click", () => apriMenu(nome), {once: true})
    bottonePremuto = NaN
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

function sistemaTutto(nome){
  document.querySelector("body").style.setProperty("background-size","100% 100%");
  sistemaPosizioni(nome)
  sistemaStrato()
}

function sistemaPosizioni(nome){
  if(bottonePremuto == NaN){
    return
  }


  cerchio.style.setProperty("animation", "none")

  cerc = cerchio.getBoundingClientRect();
  lunghezzaCerchio = cerc.right - cerc.left
  altezzaCerchio = cerc.bottom - cerc.top    
 
  bottonePremuto.style.setProperty("left",`${0}px`)
  bottonePremuto.style.setProperty("top",`${0}px`)

  rect = bottonePremuto.getBoundingClientRect();
  lunghezzaBottone = rect.right - rect.left
  altezzaBottone = rect.bottom - rect.top

  posizioneBottone = `${(lunghezzaBottone)/2 + rect.left}px ${(altezzaBottone)/2 + rect.top}px`

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

    
  bottonePremuto.style.setProperty("left",`${posX}px`)
  bottonePremuto.style.setProperty("top",`${posY}px`)
  cerchio.style.setProperty("animation", "rotazione 5s infinite linear")

  setTimeout(()=>{
    bottonePremuto.style.setProperty("transition","border-radius 200ms ease-in-out")
    },200)
}

function sistemaStrato(){
  gradiente = `radial-gradient(circle at ${posizioneBottone}, ${coloreBottone} 5%, rgba(0,0,0,0) 5%)`  

  divGradiente.style.setProperty("background-image",`${gradiente}`)
  divGradiente.style.setProperty("background-position",`0% 0%`)
  divGradiente.style.setProperty("background-size","2000% 2000%")
}
