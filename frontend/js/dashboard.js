const token = sessionStorage.getItem("token");
if (!token) {
  window.location.href = "/authenticate";
}

const displayTask = (task) => {
  const todo = document.getElementById("to-do");
  const inprogress = document.getElementById("in-progress");
  const finish = document.getElementById("finish");

  [toDoEl, inProgressEl, finishEl].forEach(
    (col) => (col.nextElementSibling.innerHTML = ""),
  );

  task.forEach((task) => {
    const p = document.createElement("p");
    p.className("task");
    p.textContent = task.name;
    switch (task.status) {
      case 0:
        todo.nextElementSibling.appendChild(p);
        break;
      case 1:
        inprogress.nextElementSibling.appendChild(p);
        break;
      case 2:
        finish.nextElementSibling.appendChild(p);
        break;
    }
  });
};

const getTask = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/tasks/tasks", {
      header: { Authorization: `Bearer ${token}` },
    });

    const task = await response.json();
    displayTask(task);
  } catch (error) {
    console.error(error);
  }
};

getTask();
