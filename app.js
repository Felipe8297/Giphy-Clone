console.log("entrando no js!");

function buscaGif() {
  console.log("CLIQUEI!");

  const espera = document.querySelector(".espera");
  const gif = document.querySelector(".gif");
  const erro = document.querySelector(".erro");
  const nomeBusca = document.querySelector(".nome-busca");

  espera.classList.remove("esconder");
  
  
  console.log(nomeBusca.value)

  if (nomeBusca == '') {
    espera.classList.add("remover");
    gif.classList.add("esconder");
  }

  else {
    gif.classList.remove("esconder");
    erro.classList.add("esconder");
  }

  let url =
    `https://api.giphy.com/v1/gifs/random?tag=${nomeBusca.value}&api_key=kWAit38VfEla0znlVLPxYLAVRrNSeGCX`;

  console.log(url)
  
  fetch(url, { method: "get" }).then(function(resposta) {
    
    resposta.json().then(function(dados){
    
      console.log(dados.data.image_original_url);
      
      gif.src = dados.data.image_original_url;
      gif.classList.remove("esconder");
      gif.classList.add("esconder");
      erro.classList.add("esconder")
      erro.classList.remove("esconder");
      espera.classList.add("esconder");
    })

  })
}