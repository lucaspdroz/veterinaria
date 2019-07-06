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
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
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
    document.getElementById("login-form").submit();
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



let url = "https://cantinho-dos-travessos.firebaseio.com/cliente.json";
let customerInfo;
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        //   após myJson (cursosEmDestaque) é o nome do objeto Pai
        let clientes = myJson;
        console.log(clientes);

        for (let i in clientes) {
            console.log(clientes[i]);
            // console.log(clientes[i].email);
        }
    });

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

document.getElementById('theDate').value = getToday();

let myFullForm = document.getElementById('login-form');


myFullForm.addEventListener('submit', function (e) {
    e.preventDefault();
    getForm();
    console.log(JSON.stringify(customerInfo));
    fetch(url, {
        method: 'post',
        body: JSON.stringify(customerInfo),
        headers:{
            'content-type': 'application/json'
        }
    }).then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log(text);
    }).catch(console.error());
});




function getForm() {
    myForm = [myFullForm.nome_cliente.value, myFullForm.celular.value, myFullForm.email.value, myFullForm.theDate.value];

    let nome_cliente = myFullForm.nome_cliente.value;
    let celular = myFullForm.celular.value;
    let email = myFullForm.email.value;
    let theDate = myFullForm.theDate.value;

    customerInfo = {
        "nome_cliente": nome_cliente,
        "celular": celular,
        "email": email,
        "theDate": theDate
    }

    return customerInfo;
}