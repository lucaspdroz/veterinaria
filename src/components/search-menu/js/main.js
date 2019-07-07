// console.log("JS funcionando");
const searchBar = document.querySelector('#search-bar');
const list = document.querySelector("#ul-search");
searchBar.addEventListener('keyup', e => {

    const term = e.target.value.toLowerCase();
    const users = list.getElementsByTagName('li');
    Array.from(users).forEach((user) => {

        const name = user.firstElementChild.textContent;
        console.log(name);

        if (name.toLowerCase().indexOf(term) != -1) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    })
})

// GET()
let url = "https://cantinho-dos-travessos.firebaseio.com/cliente.json";

fetch(url)
    .then(response => {
        return response.json();
    })
    .then(myJson => {
        //   após myJson (cursosEmDestaque) é o nome do objeto Pai
        let clientes = myJson;
        // console.log(clientes);
        for (let i in clientes) {

            console.log(clientes[i]);
            let li = document.createElement("li");
            // li.classList.add('lista');
            li.innerHTML =
                `
          
          <a href="#" onClick ='bodyContent("${clientes[i].name_pet}","${clientes[i].description_pet}","${clientes[i].nome_cliente}","${clientes[i].telefone}","${clientes[i].celular}","${clientes[i].email}","${clientes[i].whatsapp}")'>${clientes[i].nome_cliente}</a>
         
          
        `;
            list.appendChild(li);
        }
    });
const petBox = document.querySelector('#pet-box');
const ownerBox = document.querySelector('#owner-box');
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const h4 = document.createElement("h4");
const span1 = document.createElement("span");
const span2 = document.createElement("span");
const span3 = document.createElement("span");
const span4 = document.createElement("span");
const bodyContent = (namePet,descriptionPet,nameOwner, phone1, phone2, email, zap) => {
    h1.innerHTML = ` `;
    h2.innerHTML = ` `;
    h4.innerHTML = ` `;
    span1.innerHTML = ` `;
    span2.innerHTML = ` `;
    span3.innerHTML = ` `;
    span4.innerHTML = ` `;


    h1.innerHTML = `Pet: ${namePet}`;
    h2.innerHTML = `Dono: ${nameOwner}`;
    h4.innerHTML = `Descrição: ${descriptionPet}`;
    span1.innerHTML = `Telefone: ${phone1}`;
    span2.innerHTML = `Celular: ${phone2}`;
    span3.innerHTML = `Email: ${email} `;
    span4.innerHTML = `Whatspp: ${zap}`;

    petBox.appendChild(h1);
    petBox.appendChild(h4);
    ownerBox.appendChild(h2);
    ownerBox.appendChild(span1);
    ownerBox.appendChild(span2);
    ownerBox.appendChild(span3);
    ownerBox.appendChild(span4);
}














