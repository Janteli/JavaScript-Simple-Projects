const clock = document.getElementById('clock');


let date = new Date()
setInterval(function(){
    clock.innerHTML = date.toLocaleDateString();
},1000)