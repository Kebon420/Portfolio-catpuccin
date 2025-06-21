// import { Marquee } from "@/components/magicui/marquee";

document.querySelector(".a").addEventListener("click", () => bottonePremuto("a"))
document.querySelector(".b").addEventListener("click", () => bottonePremuto("b"))
document.querySelector(".c").addEventListener("click", () => bottonePremuto("c"))
document.querySelector(".d").addEventListener("click", () => bottonePremuto("d"))

let coloreSfondo = "#24273a" 

function bottonePremuto(nome) {

  document.querySelector("body").style.setProperty("background-size","100% 100%");

  let coloreBottone;
  let gradiente;
  let posizioneBottone= "29.25% 42.75%";

  if(nome=="a"){
    coloreBottone = "#8aadf4"
    posizioneBottone= "29.25% 42.75%";
  }else if(nome=="b"){
    coloreBottone = "#c6a0f6"
    posizioneBottone= "70.75% 42.75%";
  }else if(nome=="c"){
    coloreBottone = "#ed8796"
    posizioneBottone= "29.25% 75.75%";
  }else if(nome=="d"){
    coloreBottone = "#eed49f"
    posizioneBottone= "70.75% 75.75%";
  }

  gradiente = `radial-gradient(circle at ${posizioneBottone}, ${coloreBottone} 5%, rgba(0,0,0,0) 6%)`  
  
  document.querySelectorAll(".bottone").forEach(bottone => {
    bottone.style.setProperty("z-index","-1")
  });

  document.querySelector(".strato").style.setProperty("background-image",`${gradiente}`)

  document.querySelector(".strato").style.setProperty("background-position",`${posizioneBottone}`)

  document.querySelector(".strato").style.setProperty("background-size","2000% 2000%")
}
