class TaskManager {
  constructor() {
    this.addTaskInput = document.getElementById("addTaskInput");
    this.addTaskBtn = document.getElementById("addTaskBtn");
    this.resetBtn = document.getElementById("resetBtn");
    this.errorMessages = document.getElementById("errorMessages");
    this.addTaskList = document.getElementById("addTaskList");
    this.completedTaskList = document.getElementById("completedTaskList");

    this.addTaskBtn.addEventListener("click", () => this.addTask());
    this.resetBtn.addEventListener("click", () => this.resetTasks());
    this.addTaskInput.addEventListener("keyup", (event) =>
      this.handleKeyUp(event)
    );

    this.errorMessages.style.color = "red";
  }

  addTask() {
    const taskValue = this.addTaskInput.value.trim();

    if (taskValue === "") {
      this.showError("Får ej skapa tomma sysslor");
    } else {
      this.clearError();
      const taskItem = this.createTaskItem(taskValue);
      this.addTaskList.appendChild(taskItem);
      this.addTaskInput.value = "";
    }
  }

  createTaskItem(taskValue) {
    const taskItem = document.createElement("li");
    taskItem.textContent = taskValue;

    const changeTaskBtn = this.createButton("Change✏️", () =>
      this.changeTask(taskItem)
    );
    const completeTaskBtn = this.createButton("Complete✅", () =>
      this.completeTask(taskItem)
    );
    const removeTaskBtn = this.createButton("Remove❌", () =>
      this.removeTask(taskItem)
    );

    taskItem.appendChild(changeTaskBtn);
    taskItem.appendChild(completeTaskBtn);
    taskItem.appendChild(removeTaskBtn);

    taskItem.changeTaskBtn = changeTaskBtn;
    taskItem.completeTaskBtn = completeTaskBtn;
    taskItem.removeTaskBtn = removeTaskBtn;

    return taskItem;
  }

  createButton(text, clickHandler) {
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", clickHandler);
    return button;
  }

  removeTask(taskItem) {
    this.addTaskList.removeChild(taskItem);
  }

  changeTask(taskItem) {
    const newTaskValue = this.addTaskInput.value.trim();

    if (newTaskValue === "") {
      this.showError("Får ej ändra till en tom syssla");
    } else {
      this.clearError();
      taskItem.firstChild.textContent = newTaskValue;
      this.addTaskInput.value = "";
    }
  }

  completeTask(taskItem) {
    taskItem.removeChild(taskItem.completeTaskBtn);
    taskItem.removeChild(taskItem.removeTaskBtn);
    const removeCompletedTaskBtn = this.createButton("Remove❌", () =>
      this.removeCompletedTask(taskItem)
    );
    taskItem.appendChild(removeCompletedTaskBtn);
    this.completedTaskList.appendChild(taskItem);
  }

  removeCompletedTask(taskItem) {
    this.completedTaskList.removeChild(taskItem);
  }

  resetTasks() {
    if (this.addTaskList.innerHTML === "") {
      this.showError("Får ej återställa en tom lista");
    } else {
      this.addTaskList.innerHTML = "";
      this.completedTaskList.innerHTML = "";
    }
  }

  showError(message) {
    this.errorMessages.innerHTML = message;
  }

  clearError() {
    this.errorMessages.innerHTML = "";
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      this.addTaskBtn.click();
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new TaskManager();
});
