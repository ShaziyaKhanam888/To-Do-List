// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Access the required DOM elements
  const addBtn = document.getElementById("add-btn");
  const inputEl = document.querySelector(".todo-input");
  const setDate = document.getElementById("set-date");
  const todosContainer = document.querySelector(".todos");

  // Add event listener to the "Add" button
  addBtn.addEventListener("click", () => {
    // Get input values
    const taskText = inputEl.value.trim();
    const dueDate = setDate.value;

    // Validate inputs
    if (taskText && dueDate) {
      // Create a new todo item
      const todoItem = document.createElement("li");
      todoItem.classList.add("todo-item");

      // Create a radio button
      const radioBtn = document.createElement("input");
      radioBtn.type = "radio";
      radioBtn.classList.add("complete-radio");
      radioBtn.style.accentColor = "green";

      // Add functionality to toggle "completed" state
      radioBtn.addEventListener("click", () => {
        todoItem.classList.toggle("completed");
      });

      // Create a task span
      const taskSpan = document.createElement("span");
      taskSpan.classList.add("task");
      taskSpan.innerText = `${taskText} (Due: ${dueDate})`;

      // Create a delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = '<i class="fa fa-times"></i>';
      deleteBtn.classList.add("delete-btn");

      // Add functionality to delete the todo item
      deleteBtn.addEventListener("click", () => {
        todosContainer.removeChild(todoItem);
      });

      // Append all elements to the todo item
      todoItem.appendChild(radioBtn);
      todoItem.appendChild(taskSpan);
      todoItem.appendChild(deleteBtn);

      // Add the todo item to the list
      todosContainer.appendChild(todoItem);

      // Clear the input fields
      inputEl.value = "";
      setDate.value = "";
    } else {
      // Show an alert if inputs are empty
      alert("Please enter a task and set a due date.");
    }
  });
});
