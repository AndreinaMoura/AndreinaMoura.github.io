var itemFilme = document.querySelector(".corpo")
var titulo = document.querySelector("#titulo")
var lancamento = document.querySelector("#lancamento")
var categoria = document.querySelector("#categoria")
var cartaz = document.querySelector("#cartaz")
var cadastrar = document.querySelector("#cadastrar")

function carregar() {
    fetch("http://localhost:3000/pirateflix")
        .then(response => {
            return response.json();
        })
        .then((data) => {
            data.forEach(cada => {

                let novoItem = itemFilme.cloneNode(true)

                novoItem.classList.remove("modelo")

                let nome = novoItem.querySelector("#nome")
                let imagem = novoItem.querySelector(".imagem")

                nome.innerHTML = cada.titulo;
                imagem.src = cada.imagem;

                document.querySelector("main").appendChild(novoItem);

            })
        })

}

cadastrar.addEventListener('click', () => {
    let cad = {
        "titulo": titulo.value,
        "lancamento": lancamento.value,
        "cartaz": categoria.value,
        "imagem": cartaz.value
    }
    fetch("http://localhost:3000/pirateflix", {
        "method": 'POST',
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(cad)
    })
        .then(response => {
            return response.json();
        })
        .then(resp => {
            if (resp.titulo !== undefined) {
                alert("Filme cadastrado com sucesso!");
                // window.location.reload();
            } else {
                alert("Falha ao cadastrar filme!")
            }
        })
})

let modal = document.querySelector("dialog")

function abrirModal() {
    modal.style.visibility = 'visible'
    modal.showModal()
    location.reload();
}

function fecharModal() {
    modal.style.visibility = 'hidden'
    modal.close()
}

