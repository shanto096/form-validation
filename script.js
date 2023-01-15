
function btnSingUP() {
    window.location.href ="singUp.html";
}
function btnLogin() {
    window.location.href ="login.html";
}




const submit = document.getElementById("submit");
 submit.addEventListener("click",function() {
    singUp();
 })
 


function singUp() {
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const total =(name + email +password +age +gender)
    localStorage.setItem("name",name);
    localStorage.setItem("email",email)
    localStorage.setItem("password",password)
    localStorage.setItem("age",age)
    localStorage.setItem("gender",gender)
    if (total) {
        window.location.href = "home.html"   
    }
    
}
const loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", login) 

function login() {
    const loginEmail = document.getElementById("loginE").value;
    const loginPassword = document.getElementById("loginP").value;


    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    const name = localStorage.getItem("name")

    if (loginEmail === email && loginPassword === password ) {
         window.location.href = "home.html"
        alert('welcome'+ " " + name)
       }
       
    else if (loginEmail === '' && loginPassword ==="") {
        alert('inter your email');
    }
   
    else{
        window.location.href ="singUp.html";
    }


}
