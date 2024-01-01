const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // to display li created in list-container class
        // to add cross icon- by adding span tag
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    // to empty input field after adding
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

// to store our input even page is refreshed stored as name data
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
};
// to display on opening site
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();

