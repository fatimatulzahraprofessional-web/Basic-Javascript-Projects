const todoList = document.getElementById("todoList");
const newToDoInput = document.getElementById("newToDoInput");
const addTodoBtn = document.getElementById("addToDoBtn");

addTodoBtn.addEventListener("click", () => {
   const newToDoText = newToDoInput.value.trim(); // use .value and trim whitespace
   if (newToDoText !== "") {
      const newToDoItem = document.createElement("li");
      newToDoItem.innerText = newToDoText;

      const deleteTodoBtn = document.createElement("button");
      deleteTodoBtn.innerText = "X";
      deleteTodoBtn.classList.add("delete-todo-btn");

      deleteTodoBtn.addEventListener("click", function () {
         newToDoItem.remove();
      });

      newToDoItem.appendChild(deleteTodoBtn);
      todoList.appendChild(newToDoItem);
      newToDoInput.value = "";
   }
});
