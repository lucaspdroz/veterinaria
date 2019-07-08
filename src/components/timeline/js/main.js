    const appointmentForm = document.querySelector('#appointment_form');
    let appointmentInfo;
    let url = "https://cantinho-dos-travessos.firebaseio.com/cliente.json";
    // POST

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


      //Update
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
     //delete
     function remove(id){
        fetch(apiUrl + "/" + id, {
          method: 'DELETE'
        }).then(() => {
           console.log('removed');
        }).catch(err => {
          console.error(err)
        });
    }
    
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
    getForm();

    const popUp = document.querySelector('#pop-up');
    const timelineContainer = document.querySelector('.container');
    // let isShowing  = false;
    const showPopUp = ()=>{
        popUp.style.display = 'flex';
        // timelineContainer.style.filter = 'blur(10px)';
    }
    const closePopUp = ()=>{
        popUp.style.display = 'none';
        
    }
    
    document.getElementById('appointment_date').value = getToday();
