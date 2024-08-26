document.addEventListener('DOMContentLoaded', Displayposts(1724633782673) )





function storeshit()
{
let lista = JSON.parse(localStorage.getItem('Posts'))
if (lista === null)
    {
        console.log('Cheguei aqui ó')
        lista = []
        
    }



let pet =
{
    
    id: '1',
    content: 'algo',
    image: 'Untitled.jpg',
    titulo: 'titulo post',
    data: '2024',
    type: 'gatodadadada'

}


lista.push(pet)

localStorage.setItem("Posts", JSON.stringify(lista))
}


// função burrao

function burrao()
{
    window.location.href = 'nao-encontrado.html'
}


/***  função display posts pega o parametro id e compara com cada valor armazenado no local storage, caso encontre, carrega os dados acessando
 * elementos do verpost atribuindo informações em seus locais respectivos
 * caso não encontre um item com id procurado redireciona para a pagina burrao.html
 **/
function Displayposts(id)
{


let lista = JSON.parse(localStorage.getItem('posts'))
    
lista.forEach(element => {
    if(element.id == id)
        {
            const post_content = document.getElementById('post-conteudo')

            const post_image = document.getElementById('post-img')

            const post_titulo = document.getElementById('post-titulo')

            const post_footer_date = document.getElementById('date-footer')

            const post_footer_type = document.getElementById('type-footer')

            post_image.setAttribute('src',  element.image)
            post_content.innerText = element.content
            post_titulo .innerText = element.titulo
            post_footer_date.innerText = element.data
            post_footer_type.innerText = element.type

        }  
    
    });





}