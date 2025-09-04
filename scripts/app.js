// Quando o site abrir, mostra a Home primeiro
navegar("home.html");

// Função para trocar o conteúdo da página
function navegar(pagina) {
  fetch(pagina)
    .then(resposta => resposta.text())
    .then(html => {
      document.querySelector('#content').innerHTML = html;
    });
}