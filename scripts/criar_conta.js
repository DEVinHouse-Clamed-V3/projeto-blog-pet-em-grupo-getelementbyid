function addUser(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const foto = document.getElementById("url-da-foto").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const senhaConfirmacao = document.getElementById("confirme-a-senha").value;
  const biografia = document.getElementById("biografia").value;

  let senhaValida = true;

  if (senha !== senhaConfirmacao) {
    document.getElementById("senha-erro").innerText = "As senhas não são iguais";
    document.getElementById("senha").style.border = "2px solid #ff0000";
    document.getElementById("confirme-a-senha").style.border = "2px solid #ff0000";

    senhaValida = false;
  } else {
    document.getElementById("senha-erro").innerText = "";
    document.getElementById("senha").style.border = "1px solid #b3d1ff";
    document.getElementById("confirme-a-senha").style.border = "1px solid #b3d1ff";
  }

  if (senha.length < 8 || senha.length > 16) {
    document.getElementById("senha-erro").innerText = "O campo de senha deve ter entre 8 e 16 caracteres.";
    document.getElementById("senha").style.border = "2px solid #ff0000";
    document.getElementById("confirme-a-senha").style.border = "2px solid #ff0000";

    senhaValida = false;
  } else if (senhaValida) {
    document.getElementById("senha-erro").innerText = "";
    document.getElementById("senha").style.border = "1px solid #b3d1ff";
    document.getElementById("confirme-a-senha").style.border = "1px solid #b3d1ff";
  }

  const biografiaValida = biografia.length <= 300;
  if (!biografiaValida) {
    document.getElementById("biografia-erro").innerText = "O campo de biografia deve ter no máximo 300 caracteres.";
    document.getElementById("biografia").style.border = "2px solid #ff0000";
  } else {
    document.getElementById("biografia-erro").innerText = "";
    document.getElementById("biografia").style.border = "1px solid #b3d1ff";
  }

  if (nome && foto && email && senha && senhaConfirmacao && biografia && senhaValida && biografiaValida) {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = {
      id: users.length + 1,
      nome,
      foto,
      email,
      senha,
      biografia,
    };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("register-container-form").reset();

    alert("Usuário criado com sucesso!");
    window.location.href = "login.html";
  }
}

document.getElementById("register-container-form").addEventListener("submit", addUser);

document.getElementById("url-da-foto").addEventListener("input", () => {
  document.getElementById("user-image").src = document.getElementById("url-da-foto").value;
});
