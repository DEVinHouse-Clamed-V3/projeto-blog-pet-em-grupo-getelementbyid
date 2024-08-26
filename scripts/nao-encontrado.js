document.addEventListener('DOMContentLoaded', naoencontrado())

function naoencontrado()
{
    const post_content = document.getElementById('post-conteudo-texto')

    const post_image = document.getElementById('post-img')

    const post_titulo = document.getElementById('post-titulo')

    post_titulo.innerText = 'Post não encontrado'
    post_image.setAttribute('src','sadpet.jpg')
    post_content.innerText = 'O post não foi encontrado'
            

}