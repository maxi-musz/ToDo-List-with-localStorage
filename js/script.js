const date = new Date();
const year = date.getFullYear();

document.getElementById("year").innerHTML = year;

// /////////////////////////// local Storage
window.onload = loadTasks;

function loadTasks() {
    let tasks = Array.from(JSON.parse(localStorage.getItem("task")))
}

window.addEventListener("load", () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_element = document.querySelector("#tasks");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert("Please fill out a task");
        } else {
            console.log("Success");
        }

        const task_element = document.createElement("div");
        task_element.classList.add("task");

        const task_content_element = document.createElement("div");
        task_content_element.classList.add("content");
        // task_content_element.innerText = task;

        task_element.appendChild(task_content_element);

        // Input 
        const task_input_element = document.createElement("input");
        task_input_element.classList.add("text");
        task_input_element.type = "text";
        task_input_element.value = task;
        task_input_element.setAttribute("readonly", "readonly");

        task_content_element.appendChild(task_input_element);

        const task_actions_element = document.createElement("div");
        task_actions_element.classList.add("actions");

         // edit element
        const task_edit_element = document.createElement("button");
        task_edit_element.classList.add("edit");
        task_edit_element.innerHTML = "Edit";


        // Deleting element
        const task_delete_element = document.createElement("button");
        task_delete_element.classList.add("delete");
        task_delete_element.innerHTML = "Delete";

        task_actions_element.appendChild(task_edit_element);
        task_actions_element.appendChild(task_delete_element);

        task_element.appendChild(task_actions_element);


        list_element.appendChild(task_element);

        input.value = "";

        task_edit_element.addEventListener("click", (e) => {
            if (task_edit_element.innerHTML.toLowerCase() == "edit") {
                task_input_element.removeAttribute("readonly");
                task_input_element.focus();
                task_edit_element.innerHTML = "Save";
            } else {
                task_input_element.setAttribute("readonly", "readonly");
                task_edit_element.innerHTML = "Edit";
            }
        });

        // Deleting Element
        task_delete_element.addEventListener("click", (e) => {
            list_element.removeChild(task_element);
        });
    })
})

// localStorage.setItem("forms", task);
// document.getElementById("demo").innerHTML = localStorage.getItem("forms");

windown.localStorage.setItem("forms", task);