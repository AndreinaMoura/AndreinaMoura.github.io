var itemFilme = document.querySelector(".corpo")

function carregar() {
    fetch("http://localhost:5500/pirateflix")
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

let modal = document.querySelector("dialog")

function abrirModal(){
    modal.style.visibility = 'visible'
    modal.showModal()
}

function fecharModal(){
    modal.style.visibility = 'hidden'
    modal.close()
}