const form = document.getElementById("loginForm");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita o recarregamento da página

  if (usuario.value === "" || senha.value === "") {
    mensagem.style.color = "#ff5252";
    mensagem.textContent = "Preencha todos os campos!";
  } else if (usuario.value === "adm" && senha.value === "123") {
    mensagem.style.color = "#03dac6";
    mensagem.textContent = "Login realizado com sucesso!";
    setTimeout(() => {
      window.location.href = "dashboard.html"; // vai para o painel
    }, 1000); // espera 1 segundo antes de redirecionar
  } else {
    mensagem.style.color = "#ff5252";
    mensagem.textContent = "Usuário ou senha incorretos.";
  }
});
