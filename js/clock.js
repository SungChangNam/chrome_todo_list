const clock = document.querySelector("h2#clock");



function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minites = String(date.getMinutes()).padStart(2,"0");
    const seconeds = String(date.getSeconds()).padStart(2,'0');

    clock.innerText=`${hours}:${minites}:${seconeds}`;
    
}

getClock(); 
setInterval(getClock, 1000);
