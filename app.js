// "Rotas" da nossa SPA (pegamos o conteúdo direto do HTML)
    const paginas = {
      home: document.getElementById("home").innerHTML,
      sobre: document.getElementById("sobre").innerHTML,
      contato: document.getElementById("contato").innerHTML
    };

    // Função para trocar conteúdo sem recarregar
    function navegar(pagina) {
      document.getElementById("content").innerHTML = paginas[pagina];
    }

    // Carrega "Home" por padrão
    navegar("home");