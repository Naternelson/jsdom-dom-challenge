let counter;
let countDisplay;
document.addEventListener("DOMContentLoaded", function(){
  countDisplay = document.getElementById("counter");
  counter = setInterval(addCount, 1000);


})

function addCount(){
    countDisplay.innerText = parseInt(countDisplay.innerText, 10) + 1;
}

function minusCount(){
    counter.innerText = parseInt(counter.innerText, 10) + 1;
}