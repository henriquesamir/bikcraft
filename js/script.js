const links = document.querySelectorAll(".header-menu a")

function ativarLink(link) {
  if (link.href.includes(link) === location.href.includes(link)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink)