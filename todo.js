// ------------------------todoList-------------------------

let todoList = [{
    name: "Go to gym",
    date: "2025-01-04"
},
{
    name: "Go to Running",
    date: "2025-01-04"
}
];
renderTodo()
function addTodo() {
    const inputName = document.querySelector(".input-name")
    const inputDate = document.querySelector(".input-date")
    if (inputName.value === "" && inputDate.value === "") {
        alert("Enter todo with dates");
    } else if (inputName.value === "" && inputDate.value !== "") {
        alert("Enter todo name");
    } else if (inputName.value !== "" && inputDate.value=== "") {
        alert("Enter dates")
    }

    else {
        let name = inputName.value;

        let date = inputDate.value;
        inputName.value = " ";

        todoList.push({ name: name, date: date })
        renderTodo()
    }
}
function renderTodo() {
    let todoListHtml = "";
    for (let i = 0; i < todoList.length; i++) {
        let todoObj = todoList[i]
        let nameList = todoObj.name;
        let dateList = todoObj.date;
        let html = `<div class="name-list">${nameList}</div>
                  <div class="date-list"> ${dateList}</div>
                  <button 
                  class="del-btn"
                   onclick="todoList.splice(${i},1); renderTodo();"
                  
                  >Delete</button>                     `
        todoListHtml += html
    }
    lists = document.querySelector(".lists")
    lists.innerHTML = todoListHtml;
}