var p = document.querySelector('#p')
var p2 = document.querySelector('#p2')
var p3 = document.querySelector('#p3')
var p4 = document.querySelector('#p4')
var p5 = document.querySelector('#p5')
var p6 = document.querySelector('#p6')
var p7 = document.querySelector('#p7')
var p8 = document.querySelector('#p8')
var p9 = document.querySelector('#p9')
var p10 = document.querySelector('#p10')
var p11 = document.querySelector('#p11')
var p12 = document.querySelector('#p12')
var p13 = document.querySelector('#p13')
var p14 = document.querySelector('#p14')
var p15 = document.querySelector('#p15')
var p16 = document.querySelector('#p16')
var p17 = document.querySelector('#p17')
var p18 = document.querySelector('#p18')
var p19 = document.querySelector('#p19')
var p20 = document.querySelector('#p20')


document.querySelector('#mat').addEventListener('mouseover', () => {
    p.innerHTML = ""
    p.innerHTML = "Linguagem de programação: Java";
    document.querySelector('#c').append(p)
})
document.querySelector('#mat').addEventListener('mouseout', () => {
    p.innerHTML = "";
    document.querySelector('#c').append(p)
})
document.querySelector('#mat2').addEventListener('mouseover', () => {
     p2.innerHTML = "";
    p2.innerHTML = "HTML, CSS";
    document.querySelector('#c2').append(p2)
})
document.querySelector('#mat2').addEventListener('mouseout', () => {
    p2.innerHTML = "";
    document.querySelector('#c2').append(p2)
})
document.querySelector('#mat3').addEventListener('mouseover', () => {
    // p3.innerHTML = "";
    p3.innerHTML = "Formatação";
    document.querySelector('#c3').append(p3)
})
document.querySelector('#mat3').addEventListener('mouseout', () => {
    p3.innerHTML = "";
    document.querySelector('#c3').append(p3)
})
document.querySelector('#mat4').addEventListener('mouseover', () => {
    // p4.innerHTML = "";
    p4.innerHTML = "Conceitos básicos";
    document.querySelector('#c4').append(p4)
})
document.querySelector('#mat4').addEventListener('mouseout', () => {
    p4.innerHTML = "";
    document.querySelector('#c4').append(p4)

})
document.querySelector('#mat5').addEventListener('mouseover', () => {
    p5.innerHTML = "Linguagens"
    p6.innerHTML = "JavaScript(Framework NodeJS)"
    p7.innerHTML = "PHP"
    p8.innerHTML = "Java(JSP) Servlet(FrameWork Spring)"
    document.querySelector('#c5').append(p5,p6,p7,p8)
})
document.querySelector('#mat5').addEventListener('mouseout', () => {
    p5.innerHTML = ""
    p6.innerHTML = ""
    p7.innerHTML = ""
    p8.innerHTML = ""
    document.querySelector('#c5').append(p5,p6,p7,p8)
})
document.querySelector('#mat6').addEventListener('mouseover', () => {
    p9.innerHTML = "Linguagens"
    p10.innerHTML = "JavaScript"
    p11.innerHTML = "Marcação HTML, CSS"
    p12.innerHTML = "Framework(React), (JQuery), (BootStrap)"
    document.querySelector('#c6').append(p9,p10,p11,p12)
})
document.querySelector('#mat6').addEventListener('mouseout', () => {
    p9.innerHTML = "";
    p10.innerHTML = "";
    p11.innerHTML = "";
    p12.innerHTML = "";
    document.querySelector('#c6').append(p9,p10,p11,p12)
})
document.querySelector('#mat7').addEventListener('mouseover', () => {
    p13.innerHTML = "Linguagens"
    p14.innerHTML = "SQL, DDL, DML, DCL, DQL, DTL"
    p15.innerHTML = "Importação e exportação de dados"
    p16.innerHTML = "CSV, XML, JSON"
    document.querySelector('#c7').append(p13,p14,p15,p16)
})
document.querySelector('#mat7').addEventListener('mouseout', () => {
    p13.innerHTML = ""
    p14.innerHTML = ""
    p15.innerHTML = ""
    p16.innerHTML = ""
    document.querySelector('#c7').append(p13,p14,p15,p16)
})
document.querySelector('#mat8').addEventListener('mouseover', () => {
    p17.innerHTML = "Linguagens"
    p18.innerHTML = "JavaScript"
    p19.innerHTML = "Framework(React Native, Expo)"
    p20.innerHTML = "Programação em Bloco MIT AppInventor"
    document.querySelector('#c8').append(p17,p18,p19,p20)
})
document.querySelector('#mat8').addEventListener('mouseout', () => {
    p17.innerHTML = ""
    p18.innerHTML = ""
    p19.innerHTML = ""
    p20.innerHTML = ""
    document.querySelector('#c8').append(p17,p18,p19,p20)
})
var md = document.querySelector('model')


function projeto1() {

    md.style.display = 'flex'
    let img = document.createElement('img')
    img.src = `"../img/img.png"`
    img.src = `"../img/img.png"`


}
function projeto2() {

}
function projeto3() {

}
function projeto4() {

}