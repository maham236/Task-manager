function addTask() {
  const input = document.getElementById("taskInput");
  const priority = document.getElementById("priority").value;
  const taskList = document.getElementById("taskList");

  if (input.value.trim() === "") return;

  const task = document.createElement("div");
  task.style.padding = "20px";
  task.style.background = "white";
  task.style.borderRadius = "10px";
  task.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
  task.innerHTML = `
    <h3>${input.value}</h3>
    <p>Priority: <strong>${priority}</strong></p>
    <button onclick="this.parentElement.remove()">Delete</button>
  `;

  taskList.appendChild(task);
  input.value = "";
}

