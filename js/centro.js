const sectionCodigo = document.getElementById("codigo-section");
const sectionConteudo = document.getElementById("conteudo-section");
const btn = document.getElementById("codigo-btn");
const input = document.getElementById("codigo-input");
const erro = document.getElementById("codigo-erro");

const CODIGO_VALIDO = "1234"; // para testes

// Se já colocou um código antes → vai direto ao conteúdo
if (localStorage.getItem("centroCodigo") === CODIGO_VALIDO) {
  sectionCodigo.classList.add("hidden");
  sectionConteudo.classList.remove("hidden");
}

btn.addEventListener("click", () => {
  if (input.value.trim() === CODIGO_VALIDO) {
    localStorage.setItem("centroCodigo", CODIGO_VALIDO);
    sectionCodigo.classList.add("hidden");
    sectionConteudo.classList.remove("hidden");
  } else {
    erro.textContent = "Código inválido.";
  }
});
