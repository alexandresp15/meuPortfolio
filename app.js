// "Rotas" da nossa SPA
    const paginas = {
      home: "<h2>🏠 Bem-vindo à Home</h2><p>Este é o início do nosso site SPA.</p>",
      sobre: "<h2>ℹ️ Sobre</h2><p>Este site é um exemplo simples de Single Page Application.</p>",
      contato: "<h2>📞 Contato</h2><p>Fale conosco pelo e-mail: exemplo@email.com</p>"
    };

    // Função para trocar conteúdo sem recarregar
    function navegar(pagina) {
      document.getElementById("content").innerHTML = paginas[pagina];
      window.history.pushState({pagina}, "", "#" + pagina); // atualiza a URL com hash
    }

    // Mantém a página ao usar "voltar" ou "avançar" no navegador
    window.onpopstate = function(event) {
      if (event.state && event.state.pagina) {
        document.getElementById("content").innerHTML = paginas[event.state.pagina];
      }
    };

    // Carrega "Home" por padrão
    navegar("home");