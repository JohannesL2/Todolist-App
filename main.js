const addTaskInput = document.getElementById("addTaskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const resetBtn = document.getElementById("resetBtn");
const ErrorMessages = (document.getElementById("errorMessages").style.color =
  "red");

addTaskBtn.addEventListener("click", () => {
  if (addTaskInput.value === "") {
    errorMessages.innerHTML = "Får ej skapa tomma sysslor";
  } else {
    errorMessages.innerHTML = "";
    var addTaskList = document.getElementById("addTaskList");
    var addTaskListItem = document.createElement("li");
    addTaskListItem.appendChild(
      document.createTextNode(`${addTaskInput.value}`)
    );
    addTaskList.appendChild(addTaskListItem);
    addTaskInput.value = "";
  }

  var changeTaskBtn = document.createElement("button");
  var completeTaskBtn = document.createElement("button");
  var removeTaskBtn = document.createElement("button");
  var removeCompletedTaskBtn = document.createElement("button");
  var completedTaskList = document.getElementById("completedTaskList");

  changeTaskBtn.textContent = "Change✏️";
  completeTaskBtn.textContent = "Complete✅";
  removeTaskBtn.textContent = "Remove❌";
  removeCompletedTaskBtn.textContent = "Remove❌";
  addTaskListItem.appendChild(changeTaskBtn);
  addTaskListItem.appendChild(completeTaskBtn);
  addTaskListItem.appendChild(removeTaskBtn);

  removeTaskBtn.addEventListener("click", () => {
    addTaskList.removeChild(addTaskListItem);
  });

  changeTaskBtn.addEventListener("click", () => {
    if (addTaskInput.value === "") {
      errorMessages.innerHTML = "Får ej ändra till en tom syssla";
      errorMessages.style;
    } else {
      errorMessages.innerHTML = "";
      addTaskListItem.textContent = addTaskInput.value;
      addTaskListItem.appendChild(changeTaskBtn);
      addTaskListItem.appendChild(completeTaskBtn);
      addTaskListItem.appendChild(removeTaskBtn);
      addTaskInput.value = "";
    }
  });

  completeTaskBtn.addEventListener("click", () => {
    addTaskListItem.removeChild(completeTaskBtn);
    addTaskListItem.removeChild(removeTaskBtn);
    addTaskListItem.appendChild(removeCompletedTaskBtn);
    completedTaskList.appendChild(addTaskListItem);
  });
  removeCompletedTaskBtn.addEventListener("click", () => {
    completedTaskList.removeChild(addTaskListItem);
  });

  resetBtn.addEventListener("click", () => {
    addTaskList.removeChild(addTaskListItem);
    completedTaskList.innerHTML = "";
  });
});

document
  .getElementById("addTaskInput")
  .addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      document.getElementById("addTaskBtn").click();
    }
  });
