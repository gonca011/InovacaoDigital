function configurarNavegacaoSidebar() {
    const links = document.querySelectorAll(".sidebar nav a");
  
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const destino = this.getAttribute("data-page");
        if (destino) {
          window.location.href = destino;
        }
      });
    });
  }
  