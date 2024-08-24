document.getElementById('loginFormulario').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('senha').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Encontrar o usuário que tenha o email fornecido
    const usuario = users.find(usuario => usuario.email === email);

    if (usuario) {
        // Verificar se a senha corresponde
        if (usuario.password === password) {

                     
            // Redirecionar para a página de index se o login for bem-sucedido
            window.location.href = 'index.html';
        } else {

            // Senha incorreta
            document.getElementById('loginError').textContent = 'Senha incorreta.';
        }
    } else {
        // Email não encontrado
        document.getElementById('loginError').textContent = 'E-mail não cadastrado.';
    }
});

// colar duplicado no campo de senha
document.getElementById('senha').addEventListener('paste', function(e) {
    const pastedText = (e.clipboardData || window.clipboardData).getData('text');
    const currentLength = e.target.value.length;

    setTimeout(() => {
        const newLength = e.target.value.length;
        if (newLength > currentLength) {
            
            // Duplicar o número de caracteres após o conteúdo colado
            const duplicatedPassword = e.target.value + pastedText;
            e.target.value = duplicatedPassword;
        }
    }, 0);
});

// Redirecionar para criar_conta.html ao clicar no link
document.getElementById('criarContaLink').addEventListener('click', function () {
    window.location.href = 'criar_conta.html';
});

