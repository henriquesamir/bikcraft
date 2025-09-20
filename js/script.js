// Ativar links do menu
const links = document.querySelectorAll(".header-menu a")

function ativarLink(link) {
  if (link.href.includes(link) === location.href.includes(link)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink)

//Ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);