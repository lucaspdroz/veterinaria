// console.log("JS funcionando");
const searchBar = document.querySelector('#searchBar');
const list = document.querySelector("#ul-search");
searchBar.addEventListener('keyup',e=>{

    const term = e.target.value.toLowerCase();
    const langs = list.getElementsByTagName('li');
    Array.from(langs).forEach((lang)=>{
        const name = lang.firstElementChild.textContent;
        if(name.toLowerCase().indexOf(term)!= -1){
            lang.style.display = 'block';
        }else{
            lang.style.display = 'none';
        }
    })
})

















  
  