const input = document.getElementById("todoinput");
const addButton = document.getElementById("addbutton");
const todoList = document.getElementById("todolistid");

addButton.addEventListener("click", function () {

    const text = input.value;
    if (text === "") {
        alert("Please enter a task");
        return;
    }

    const list = document.createElement("li");

    list.classList.add("todoitem");

    const span = document.createElement("span");
    span.textContent = text;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
        list.remove();
    });

    list.appendChild(span);
    list.appendChild(deleteButton);

    todoList.appendChild(list);

    input.value = "";
});