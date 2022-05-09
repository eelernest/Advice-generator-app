//HTML
let first = document.getElementById("first");
let welcome = document.getElementById("welcome");
first.innerHTML= "This is advice for you...<br>¡Good luck!";
welcome.innerHTML= "YOUR WELCOME!";

//API
let identif = document.getElementById("identif");
let mensaje = document.getElementById("message");
const url = "https://api.adviceslip.com/advice";

function random(){
    fetch(url)
    .then(response => response.json())
    .then(info => {
        const unic = info.slip.id;
        const consejo = info.slip.advice;
        
    
        identif.innerHTML="Advice # " + unic;
        mensaje.innerHTML= "''" + consejo + "''";
    
        console.log(unic +" "+consejo);
        
    }
        )
    .catch(err => console.log(err))
}


