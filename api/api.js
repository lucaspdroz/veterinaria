function getGot() {
    let request = new XMLHttpRequest()
    request.open('GET', 'https://gameofthrones-df07d.firebaseio.com/personagens/-Lf2eQXFOcv0D8eqQbyn.json', true)
    request.onload = function () {
        let data = JSON.parse(this.response)
        let personagens = data.personagens;

        for (let ind in personagens) {
            let li = document.createElement("li");
            li.classList.add("course-wraper-item");

            let linha =
            `   <p>${personagens[ind].nome} </p>
                <p>${personagens[ind].tipo} <br> </p>
            `;
            li.innerHTML = linha;
            document.querySelector('.course-wraper').appendChild(li);
        }

        for (let a in personagens) {
            document.querySelector('.body').innerHTML += personagens[a].nome + "&nbsp;";
            document.querySelector('.body').innerHTML += personagens[a].tipo + "<br>";
        }
    }

    request.send()
}

async function getPersonage() {
    let request = new XMLHttpRequest()
    request.open('GET', 'https://gameofthrones-df07d.firebaseio.com/personagens/-Lf2eQXFOcv0D8eqQbyn/personagens.json', true)

    request.onload = function () {
        let data = JSON.parse(this.response)
        console.log(data);
        let course = data.cursosEmDestaque;

        for (let ind in course) {
            let li = document.createElement("li");
            li.classList.add("course-wraper-item");

            let linha =
            `   <p>${course[ind].nome}</p>
                <p>${course[ind].tipo}</p>
            `;
            
            li.innerHTML = linha;
            document.querySelector('.course-wraper').appendChild(li);
        }
    }
    request.send()
}
getGot()

getPersonage()