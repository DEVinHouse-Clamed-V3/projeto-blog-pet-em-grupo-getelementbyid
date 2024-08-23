function loadPosts() {
    const containerPosts = document.querySelector('#lista-posts');
    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    if (posts.length === 0) {
        const aviso = document.createElement('h1')
        aviso.classList.add('aviso')
        aviso.innerText = "Esta página está sem conteúdo. Cadastre um Post!"
        containerPosts.append(aviso)
        
    } else {
        posts.forEach(post => {

        const div = document.createElement('div')
        div.classList.add('div-post-home')

        const foto = document.createElement('img')
        foto.setAttribute('src', post.foto)
        foto.classList.add('foto-post-home')
        div.append(foto)

        const tipo = document.createElement('h4')
        tipo.innerText = post.categoria
        tipo.classList.add('tipo-post-home')
        div.append(tipo)

        const titulo = document.createElement('h1')
        titulo.innerText = post.titulo
        titulo.classList.add('titulo-post-home')
        div.append(titulo)

        const divTempo = document.createElement('div')
        divTempo.classList.add('tempos')

        const data = document.createElement('span')
        data.classList.add('data')
        data.innerText = post.dataCriacao
        divTempo.append(data)

        const tempoLeitura = document.createElement('span')
        tempoLeitura.innerText = Math.round(post.descricao.length/200) + " - minutos de leitura"
        divTempo.append(tempoLeitura)

        div.append(divTempo)
        
        containerPosts.append(div)

        containerPosts.ondblclick = () => {
            window.location = "post.html?id=" + post.id
        }
        
    })
    }
}

document.addEventListener('DOMContentLoaded', loadPosts)
