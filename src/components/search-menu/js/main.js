// console.log("JS funcionando");
const searchBar = document.querySelector('#search-bar');
const list = document.querySelector("#ul-search");
searchBar.addEventListener('keyup',e=>{
    console.log(e);
    
    const term = e.target.value.toLowerCase();
    const users = list.getElementsByTagName('li');
    Array.from(users).forEach((user)=>{
        
        const name = user.firstElementChild.textContent;
        console.log(name);
        
        if(name.toLowerCase().indexOf(term)!= -1){
            user.style.display = 'block';
        }else{
            user.style.display = 'none';
        }
    })
})


















  
  