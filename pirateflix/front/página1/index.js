function carregar(){
    fetch("http://localhoast:5500/pirateflix")
    .then(response => {
        return response.json();
    })
    .then((data) => {
        data.forEach(cada => {

            var divizinha = document.querySelector('header').cloneNode(true)
            var novo = document.querySelector('.corpinho')

            novo.classList.remove("modelo");

            document.querySelector('.corpo').appendChild(novo)

            // document.querySelector('#quaseCorpinho').appendChild(divizinha)
        })
    })

}