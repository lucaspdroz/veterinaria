
// GET()
let url = "https://cantinho-dos-travessos.firebaseio.com/cliente.json";
fetch(url)
  .then(response =>{
    return response.json();
  })
  .then(myJson =>{
    //   após myJson (cursosEmDestaque) é o nome do objeto Pai
    let clientes = myJson;
    // console.log(clientes);
    
    for(let i in clientes){
        
        console.log(clientes[i]);
        let li = document.createElement("li");
        // li.classList.add('lista');
        li.innerHTML =
        `
          <div onClick ='bodyContent("${clientes[i].nome_cliente}","${clientes[i].telefone}","${clientes[i].celular}","${clientes[i].email}","${clientes[i].whatsapp}")'>
          <a href="#" >${clientes[i].nome_cliente}</a>
          </div>
          
        `;
        list.appendChild(li);
    }


    
  });
  const ownerContainer = document.querySelector('#owner-container');
  const ownerBox = document.querySelector('#owner-box');
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const h4 = document.createElement("h4");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  const span3 = document.createElement("span");
  const span4 = document.createElement("span");
  const bodyContent =(name,phone1,phone2,email,zap)=>{
      h2.innerHTML=` `;
      span1.innerHTML=` `;
      span2.innerHTML=` `;
      span3.innerHTML=` `;
      span4.innerHTML=` `;

      h2.innerHTML=`${name}`;
      span1.innerHTML=` ${phone1}`;
      span2.innerHTML=`${phone2}`;
      span3.innerHTML=`${email} `;
      span4.innerHTML=`${zap}`;

      ownerBox.appendChild(h2);
      ownerBox.appendChild(span1);
      ownerBox.appendChild(span2);
      ownerBox.appendChild(span3);
      ownerBox.appendChild(span4);
      
  }
