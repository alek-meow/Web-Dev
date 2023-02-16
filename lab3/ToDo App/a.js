'use strict'

function addTask(){
    let newTask = document.getElementById("input-new-task").value;
    if(newTask.length == 0){
        alert('Enter text, please!')
        return;
    }
    // document.querySelector('#tasks').innerHTML +=
    //     `<div class="task">
    //         <input type="checkbox">
    //         <label class="text"> ${newTask} </label>
    //         <button class="delete"> <img src="https://cdn-icons-png.flaticon.com/512/1906/1906791.png"></button>
    //     </div>`;
    let table = document.querySelector("#tasks");
    let row = table.insertRow(-1);
    let cell = row.insertCell(0);
    cell.className = 'task';
    cell.innerHTML =
        `<input type="checkbox">
        <label class="text"> ${newTask} </label>
        <button onclick="deleteTask()" class="delete">
            <img src="https://cdn-icons-png.flaticon.com/512/1906/1906791.png">
        </button>`;
    document.getElementById("input-new-task").value = '';
}
function deleteTask() {
    let current_tasks = document.querySelectorAll(".delete");
    for (let i = 0; i < current_tasks.length; ++i) {
        current_tasks[i].onclick = function () {
            this.parentNode.remove();
        }
    }
}