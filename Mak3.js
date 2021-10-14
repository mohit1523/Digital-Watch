
function watch() {
    // Declaring variables 
    hour = document.getElementById('num1');
    minute = document.getElementById('num2');
    second = document.getElementById('num3') ;
    dateNtime = new Date();
    // Updating Hour
    if (dateNtime.getHours() > 12) {
        hour.innerText = dateNtime.getHours() - 12 ;
    } else {
        hour.innerText = dateNtime.getHours();
    }
    // Updating Minute
    minute.innerText = dateNtime.getMinutes();
    // Updating Second
    second.innerText = dateNtime.getSeconds();
}

setInterval(watch, 1000);

console.log(outerWidth)