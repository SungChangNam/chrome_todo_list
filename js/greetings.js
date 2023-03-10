const loinForm =document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input")
const greeting =document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLogingSubmit(event) {
    event.preventDefault();
    loinForm.classList.add(HIDDEN_CLASSNAME); 
    const username =loginInput.value;
    localStorage.setItem(USERNAME_KEY,username)
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loinForm.classList.remove(HIDDEN_CLASSNAME);
    loinForm.addEventListener("submit",onLogingSubmit);
}else {
    paintGreetings(savedUsername)
}
