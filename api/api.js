// function getGot() {
//     let request = new XMLHttpRequest()
//     request.open('GET', 'https://gameofthrones-df07d.firebaseio.com/personagens/-Lf2eQXFOcv0D8eqQbyn.json', true)
//     request.onload = function () {
//         let data = JSON.parse(this.response)
//         let personagens = data.personagens;

//         for (let ind in personagens) {
//             let li = document.createElement("li");
//             li.classList.add("clientes-wraper-item");

//             let linha =
//             `   <p>${personagens[ind].nome} </p>
//                 <p>${personagens[ind].tipo} <br> </p>
//             `;
//             li.innerHTML = linha;
//             document.querySelector('.clientes-wraper').appendChild(li);
//         }

//         for (let a in personagens) {
//             document.querySelector('.body').innerHTML += personagens[a].nome + "&nbsp;";
//             document.querySelector('.body').innerHTML += personagens[a].tipo + "<br>";
//         }
//     }

//     request.send()
// }

// async function getPersonage() {
//     let request = new XMLHttpRequest()
//     request.open('GET', 'https://gameofthrones-df07d.firebaseio.com/personagens/-Lf2eQXFOcv0D8eqQbyn/personagens.json', true)

//     request.onload = function () {
//         let data = JSON.parse(this.response)
//         console.log(data);
//         let clientes = data.cursosEmDestaque;

//         for (let ind in clientes) {
//             let li = document.createElement("li");
//             li.classList.add("clientes-wraper-item");

//             let linha =
//             `   <p>${clientes[ind].nome}</p>
//                 <p>${clientes[ind].tipo}</p>
//             `;
            
//             li.innerHTML = linha;
//             document.querySelector('.clientes-wraper').appendChild(li);
//         }
//     }
//     request.send()
// }
// getGot()

// getPersonage()



let url = "https://cantinho-dos-travessos.firebaseio.com/cliente.json?nome";

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    //   após myJson (cursosEmDestaque) é o nome do objeto Pai
    let clientes = myJson;
    console.log(clientes);
    
    for(let i in clientes){
        console.log(clientes[i]);
        console.log(i);
        // console.log(clientes[i].email);
    }

    // for (let ind in clientes) {
      // cria uma <li>
    //   let li = document.createElement("li");
      // cria dentro da <li> 
    //   li.classList.add("clientes-wraper-item");
  
      //   Definição do elemento
    //   Objeto dinâmico apartir do "campo_do_obejo[indice].nome_do_campo"
    //   let linha =
    //     ` <img class="icones" src="${clientes[ind].Whatsapp}" alt="logo para ${clientes[ind].name_dono}"/>
    //       <p>${clientes[ind].nome}</p>
    //       <a class="link-button" href="${clientes[ind].url}">Acesse já</a>
    //     `;
        // adiciona linha dentro da <li>
    //   li.innerHTML = linha;
        //  adiciona tudo dentro da classe "clientes-wraper" apendendo na última <li>
    //   document.querySelector('.clientes-wraper').appendChild(li);
  });