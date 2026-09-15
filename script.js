const taskInput = document.querySelector("input");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");

addTaskBtn.addEventListener("click", function () {

    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.textContent = taskText;

    li.addEventListener("click", function () {
    li.classList.toggle("completed");

    if (li.classList.contains("completed")) {
        taskList.appendChild(li);
    }
    });

    // li.addEventListener("click", function () {
    // li.classList.toggle("completed");
    // });

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    li.remove();
 });

    // deleteBtn.addEventListener("click", function () {
    //     li.remove();
    // });

    taskList.appendChild(li);

    taskInput.value = "";
});