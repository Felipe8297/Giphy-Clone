console.log("entrando no js!");

function buscaGif() {
  const espera = document.querySelector(".espera");
  const gif = document.querySelector(".gif");
  const erro = document.querySelector(".erro");
  const nomeBusca = document.querySelector(".nome-busca");

  espera.classList.remove("esconder");
  console.log("passei");

  if (nomeBusca.value == "") {
    console.log("entrou no if");
    erro.classList.remove("esconder");
    espera.classList.add("esconder");
    gif.classList.add("esconder");
  } else {
    let url = `https://api.giphy.com/v1/gifs/random?tag=${nomeBusca.value}&api_key=kWAit38VfEla0znlVLPxYLAVRrNSeGCX`;
    gif.classList.remove("esconder");

    fetch(url, { method: "get" }).then(function (resposta) {
      resposta.json().then(function (dados) {
        gif.src = dados.data.image_original_url;
        erro.classList.add("esconder");
        espera.classList.add("esconder");
      });
    });
  }
}
