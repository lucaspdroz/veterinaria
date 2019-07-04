
// GET()
let url = "https://cantinho-dos-travessos.firebaseio.com/cliente.json";
fetch(url)
  .then(response =>{
    return response.json();
  })
  .then(myJson =>{
    //   após myJson (cursosEmDestaque) é o nome do objeto Pai
    let clientes = myJson;
    console.log(clientes);
    
    for(let i in clientes){
        console.log(clientes[i]);
        let li = document.createElement("li");
        // li.classList.add('lista');
        li.innerHTML =
        `
          <a href="#">${clientes[i].nome_cliente}</a>
        `;
        list.appendChild(li);
    }
  });