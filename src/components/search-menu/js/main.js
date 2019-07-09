    // SearchBar
    const searchBar = document.querySelector('#search-bar');
    const list = document.querySelector("#ul-search");
    searchBar.addEventListener('keyup', e => {

        const term = e.target.value.toLowerCase();
        const users = list.getElementsByTagName('li');
        Array.from(users).forEach((user) => {

            const name = user.firstElementChild.textContent;
            // console.log(name);

            if (name.toLowerCase().indexOf(term) != -1) {
                user.style.display = 'flex';
            } else {
                user.style.display = 'none';
            }
        })
    })

    // GET() SearchBar
    let url = "https://cantinho-dos-travessos.firebaseio.com/cliente.json";

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(myJson => {
            let clientes = myJson;
            for (let i in clientes) {
                let li = document.createElement("li");
                li.innerHTML =
                    `
            
            <a href="#" onClick ='bodyContent("${clientes[i].name_pet}","${clientes[i].pet_description}","${clientes[i].nome_cliente}","${clientes[i].telefone}","${clientes[i].celular}","${clientes[i].email}","${clientes[i].whatsapp}")'>${clientes[i].nome_cliente}</a>
            
            
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


        h1.innerHTML = `${namePet}`;
        h2.innerHTML = `${nameOwner}`;
        h4.innerHTML = `${descriptionPet}`;
        span1.innerHTML = `Telefone:&nbsp; ${phone1}`;
        span2.innerHTML = `Celular:&nbsp; ${phone2}`;
        span3.innerHTML = `Email:&nbsp; ${email} `;
        span4.innerHTML = `Whatspp:&nbsp; ${zap}`;

        petBox.appendChild(h1);
        petBox.appendChild(h4);
        ownerBox.appendChild(h2);
        ownerBox.appendChild(span1);
        ownerBox.appendChild(span2);
        ownerBox.appendChild(span3);
        ownerBox.appendChild(span4);
    }





    //TIMELINE
        //SHOW POPUP FORM
        const popUp = document.querySelector('#pop-up');
        const timelineContainer = document.querySelector('.container');
        const showPopUp = ()=>{
            popUp.style.display = 'flex';
        }
        const closePopUp = ()=>{
            popUp.style.display = 'none';
        }

        const appointmentForm = document.querySelector('#appointment_form');
        let appointmentInfo;

        //POST POPUP FORM
        function getForm() {
            let dateAppoinment = appointmentForm.appointment_date.value;
            
            let appointment = appointmentForm.appointment.value;
    
            let description = appointmentForm.description.value;
            appointmentInfo = {
                "data_consulta": dateAppoinment,
                "consulta": appointment,
                "descricao_consulta": description
            }
            console.log(appointmentInfo);
            return appointmentInfo;
        }

        //GET ACTUAL DATE
        function getToday() {
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
          
            if (month < 10) month = "0" + month;
            if (day < 10) day = "0" + day;
          
            let today = year + "-" + month + "-" + day;
            return today;
          }
          appointmentForm.appointment_date.value = getToday();
          document.getElementById('theDate').value = getToday();


        appointmentForm.addEventListener('submit', function (e) {
            e.preventDefault();
            getForm();
            // console.log(JSON.stringify(customerInfo));
            fetch(url, {
                method: 'post',
                body: JSON.stringify(customerInfo),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(function (response) {
                return response.text();
            }).then(function (text) {
                console.log(text);
            }).catch(console.error());
        });



    //UPDATE
    function update(id, data){
        fetch(apiUrl + "/" + id, {
          method: 'PATCH',
          body: JSON.stringify({
           data
          })
        }).then((response) => {
          response.json().then((response) => {
            console.log(response);
          })
        }).catch(err => {
          console.error(err)
        })
        
     }
     //DELETE
     function remove(id){
        fetch(apiUrl + "/" + id, {
          method: 'DELETE'
        }).then(() => {
           console.log('removed');
        }).catch(err => {
          console.error(err)
        });
    }


    //MULTI-STEP COMPONENT
    let myFullForm = document.getElementById('login-form');
    let customerInfo;
    var currentTab = 0; // Current tab is set to be the first tab (0)
    showTab(currentTab); // Display the current tab
    
    function showTab(n) {
        // This function will display the specified tab of the form...
        var x = document.getElementsByClassName("tab");
        x[n].style.display = "block";
        //... and fix the Previous/Next buttons:
        if (n == 0) {
          document.getElementById("prevBtn").style.display = "none";
        } else {
          document.getElementById("prevBtn").style.display = "inline";
        }
        if (n == (x.length - 1)) {
          let mySendButton = document.getElementById("nextBtn");
          mySendButton.innerHTML = "Enviar";
          
        } else {
          document.getElementById("nextBtn").innerHTML = "Próximo";
        }
        //... and run a function that will display the correct step indicator:
        fixStepIndicator(n)
      }
      
      function nextPrev(n) {
        // This function will figure out which tab to display
        var x = document.getElementsByClassName("tab");
        // Exit the function if any field in the current tab is invalid:
        if (n == 1 && !validateForm()) return false;
        // Hide the current tab:
        x[currentTab].style.display = "none";
        // Increase or decrease the current tab by 1:
        currentTab = currentTab + n;
        // if you have reached the end of the form...
        if (currentTab >= x.length) {
          // ... the form gets submitted:
          let mySendButton = document.getElementById("nextBtn");
          mySendButton.setAttribute('type', 'submit')
          // document.getElementById("login-form").submit();
          return false;
        }
        // Otherwise, display the correct tab:
        showTab(currentTab);
      }
      
      function validateForm() {
        // This function deals with validation of the form fields
        var x, y, i, valid = true;
        x = document.getElementsByClassName("tab");
        y = x[currentTab].getElementsByTagName("input");
        // A loop that checks every input field in the current tab:
        for (i = 0; i < y.length; i++) {
          // If a field is empty...
          if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false
            valid = false;
          }
        }
        // If the valid status is true, mark the step as finished and valid:
        if (valid) {
          document.getElementsByClassName("step")[currentTab].className += " finish";
        }
        return valid; // return the valid status
      }
      
      function fixStepIndicator(n) {
        // This function removes the "active" class of all steps...
        var i, x = document.getElementsByClassName("step");
        for (i = 0; i < x.length; i++) {
          x[i].className = x[i].className.replace(" active", "");
        }
        //... and adds the "active" class on the current step:
        x[n].className += " active";
      }

        const showForm = ()=>{
            myFullForm.style.display = 'block';
        }
        const closeForm = ()=>{
            myFullForm.style.display = 'none';
        }

      myFullForm.addEventListener('submit', function (e) {
        e.preventDefault();
        getForm();
        // console.log(JSON.stringify(customerInfo));
        fetch(url, {
          method: 'post',
          body: JSON.stringify(customerInfo),
          headers: {
            'content-type': 'application/json'
          }
        }).then(function (response) {
          return response.text();
        }).then(function (text) {
          console.log(text);
        }).catch(console.error());
      });
      
      function getForm() {
        myForm = [myFullForm.namePet.value, myFullForm.description.value, myFullForm.owner.value, myFullForm.mailOwner.value, myFullForm.address.value, myFullForm.phone.value, myFullForm.celphone.value, myFullForm.whatsapp.value, myFullForm.theDate.value];
      
        let petName = myFullForm.namePet.value;
        let petDescription = myFullForm.description.value;
        let nome_cliente = myFullForm.owner.value;
        let address = myFullForm.address.value;
        let phone = myFullForm.phone.value;
        let whatsapp = myFullForm.whatsapp.value;
        let email = myFullForm.mailOwner.value;
        let celular = myFullForm.celphone.value;
        let theDate = myFullForm.theDate.value;
      
        customerInfo = {
          "name_pet": petName,
          "pet_description": petDescription,
          "address": address,
          "nome_cliente": nome_cliente,
          "email": email,
          "telefone": phone,
          "celular": celular,
          "whatsapp": whatsapp,
          "theDateRegister": theDate
        }
        console.log(customerInfo);
        return customerInfo;
      }



