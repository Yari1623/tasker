const displayTask = (tasks) => {
  const todo = document.getElementById("to-do");
  const inprogress = document.getElementById("in-progress");
  const finish = document.getElementById("finish");

  [todo, inprogress, finish].forEach(
    (col) => (col.nextElementSibling.innerHTML = "")
  );

  tasks.forEach((task, index) => {
    const div = document.createElement("div");
    div.className = "task";

    // texte + boutons
    div.innerHTML = `
      <span>${task.name}</span>
      <div class="actions">
        <button onclick="editTask(${index})">Modif</button>
        <button onclick="deleteTask(${index})">Suppr</button>
      </div>
    `;

    switch (task.status) {
      case 0:
        todo.nextElementSibling.appendChild(div);
        break;
      case 1:
        inprogress.nextElementSibling.appendChild(div);
        break;
      case 2:
        finish.nextElementSibling.appendChild(div);
        break;
    }
  });
};
;

const getTask = async () => {
  try {
   
    const test=localStorage.getItem("userID")
    console.log(test);
    const response = await fetch(`http://localhost:5000/api/tasks/tasks/${test}`, {
      
    });

    const task = await response.json();
    displayTask(task);
  } catch (error) {
    console.error(error);
  }
};

getTask();
