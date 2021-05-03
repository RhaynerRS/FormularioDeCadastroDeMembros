var people = []
if (JSON.parse(localStorage.getItem("membro")) === null) {
    people = []
} else {
    people = JSON.parse(localStorage.getItem("membro"));
}
console.log(people)

//cria um novo objeto
function Person(nome, sub, cep, city, phone, endereco,job,bairro,birth,num) {
    return {
        nome, sub, cep, city, phone, endereco,job,bairro,birth,num
    }
}
//adiciona um novo item ao array
function adicionar() {
    let nomeQuery = document.getElementById("nome")
    let subQuery = document.getElementById("sub-name")
    let phoneQuery = document.getElementById("phone")
    let cityQuery = document.getElementById("city")
    let enderecoQuery = document.getElementById("endereco")
    let cepQuery = document.getElementById("cep")
    let numQuery=document.getElementById("num")
    let jobQuery=document.getElementById("job")
    let birthQuery=document.getElementById("nas")
    let bairroQuery=document.getElementById("bairro")


    let nome = nomeQuery.value
    let sub = subQuery.value
    let phone = phoneQuery.value
    let city = cityQuery.value
    let endereco = enderecoQuery.value
    let cep=cepQuery.value
    let num=numQuery.value
    let job=jobQuery.value
    let birth=birthQuery.value
    let bairro=bairroQuery.value

    let newPerson = new Person(nome, sub, cep, city, phone, endereco,job,bairro,birth,num)
    if ((nome || phone || city || endereco) == "") {

    }
    else {
        people.push(newPerson)
        console.log(people)
        localStorage.setItem("membro", JSON.stringify(people))

        console.log(people)
        console.log(JSON.parse(localStorage.getItem("membro")))
        nomeQuery.value = ''
        subQuery.value = ''
        phoneQuery.value = ''
        cepQuery.value = ''
        cityQuery.value = ''
        jobQuery.value=""
        bairroQuery.value=""
        birthQuery.value=""
        numQuery.value=""
        enderecoQuery.value=""
    }

}

function load() {
    let elemento
    a = 0
    let lista = document.querySelector("#container")
    for (var i = 0; i < people.length; i++) {
        elemento = `<div class="item" onclick="modalButton()"><div id="delete"><i onclick="excluir()" class="fas fa-times-circle"></i></div><div onclick="modalButton()"><h1 id="teste">${people[i].nome}</h1><h3>${people[i].sub}</h3><hr><div class="subItens"><p>Cargo: ${people[i].job}</p><p>Aniversario: ${people[i].birth}</p><p>Tel: ${people[i].phone}</p></div><div id="id"><small>${people.indexOf(people[i])}</small></div></div></div>`
        lista.innerHTML += elemento
    }
}
//mostar todos os items do array
function mostrar() {
    console.log(people.length)
    i = people.length - 1
    let elemento
    let lista = document.querySelector("#container")
    elemento = `<div class="item" ><div id="delete"><i onclick="excluir()  " class="fas fa-times-circle"></i></div><div ><h1 id="teste">${people[i].nome}</h1><h3>${people[i].sub}</h3><hr><div class="subItens"><p>Cargo: ${people[i].job}</p><p>Aniversario: ${people[i].birth}</p><p>Tel: ${people[i].phone}</p></div><div id="id"><small>${people.indexOf(people[i])}</small></div></div></div>`
    lista.innerHTML = elemento
}
//excluir um item do array
function excluir() {
    let button = document.querySelectorAll('.item');
    for (var i = 0; i < button.length; i++) {    
        button[i].addEventListener('click', ((j) => {    	  
        return function() {
            people.splice(j, 1)
            localStorage.setItem("membro", JSON.stringify(people))
            window.location.reload()
        }
    })(i)
    )
    }


}
//modal
var modal=document.getElementById("myModal")


const modalButton=()=>{
        let button = document.querySelectorAll('.item');
        for (var i = 0; i < button.length; i++) {    
            button[i].addEventListener('click', ((j) => {    	  
            return function() {
                modal.style.display="block"
                let lista = document.querySelector("#content")
                conteudo=`<div id="delModal"><i onclick="fecharModal() "class="fas fa-times-circle"></i><i onclick="printDiv('content')"class="fas fa-times-circle"></i></div><div style="color:black;"onclick="modalButton()"><h1>${people[j].nome}</h1><h3>${people[j].sub}</h3><hr><div class="subContent"><p>Cargo: ${people[j].job}</p><p>Aniversario: ${people[j].birth}</p><p>Tel: ${people[j].phone}</p><p>Bairro: ${people[j].bairro}</p><p>Rua: ${people[j].endereco}</p><p>№: ${people[j].num}</p></div><div id="id"></div></div>`
                lista.innerHTML=conteudo
            }
        })(i)
        )
        }
   /* modal.style.display="block"
    let lista = document.querySelector("#content")
    conteudo=`<div id="delete"><i onclick="excluir()  "class="fas fa-times-circle"></i></div><div style="color:black;"onclick="modalButton()"><h1>${people[i].nome}</h1><h3>${people[i].sub}</h3><hr><div class="subContent"><p>Cargo: ${people[i].job}</p><p>Aniversario: ${people[i].birth}</p><p>Tel: ${people[i].phone}</p><p>Bairro: ${people[i].bairro}</p><p>Rua: ${people[i].endereco}</p><p>№: ${people[i].num}</p></div><div id="id"></div></div>`
    lista.innerHTML=conteudo*/

}
$(document).click(function(event) {
    var text = $(event.target).text();
});
window.onclick=function(event){
    if (event.target==modal){
        modal.style.display="none"
    }
}
function fecharModal(){
    modal.style.display="none"
}
function printDiv(div){
    var printContent=document.getElementById(div)
    printContent=printContent.innerHTML
    console.log(printContent)
    var originalContents=document.body.innerHTML;
    document.body.innerHTML=printContent
    window.print()
    document.body.innerHTML=originalContents
}
//<i onclick="fecharModal() "class="fas fa-times-circle"></i>
/*function index(g=document.getElementById("#item")){
    for (var i = 0, len = g.children.length; i < len; i++)
    {

        (function(index){
            g.children[i].onclick = function(){
                alert(index)  ;
            }    
        })(i);t
    }
}*/