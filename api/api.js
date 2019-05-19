let request = new XMLHttpRequest()

request.open('GET', 'https://gameofthrones-df07d.firebaseio.com/personagens/-Lf2eQXFOcv0D8eqQbyn.json', true)

request.onload = function () {
    let data = JSON.parse(this.response)
    let personagens = data.personagens;

    for(let a in personagens){
        console.log(personagens[a].nome);
        console.log(personagens[a].tipo);
    }
}
// Send request
request.send()