let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for(list of lists){
    list.addEventListner("dragstart", function(e){
        let seleted = e.target;

        rightBox.addEventListener("dragover", function(e){
            e.preventDefault()
        });
        leftBox.addEventListener("drop", function(e){
            leftBox.appendChild(seleted);
            seleted = null;
        });
        leftBox.addEventListener("dragover", function(e){
            e.preventDefault()
        });
        leftBox.addEventListener("drop", function(e){
            rightBox.appendChild(seleted);
            seleted = null;
        });
    })
}
