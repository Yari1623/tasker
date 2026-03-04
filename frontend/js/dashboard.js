const displayTask = (tasks) => {
  const todo = document.getElementById("to-do");
  const inprogress = document.getElementById("in-progress");
  const finish = document.getElementById("finish");

  [todo, inprogress, finish].forEach(
    (col) => (col.nextElementSibling.innerHTML = "")
  );

  tasks.forEach((task) => {
    const div = document.createElement("div");
    div.className = "task";

    // texte + boutons
    div.innerHTML = `
      <p>${task.name}</p>
      <div class="btn_action">
      <button onclick="deleteTask(${task.id})">Supprimer</button>
      <button onclick="editTask">--></button>
        
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
    console.log(userID);
    const response = await fetch(`http://localhost:5000/api/tasks/tasks/${userID}`, {
      
    });

    const task = await response.json();
    displayTask(task);
  } catch (error) {
    console.error(error);
  }
};


const deleteTask = async(id)=> {

   try {
    console.log(id);
    const response = await fetch(`http://localhost:5000/api/tasks/deletetasks/${id}`, {
      method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',

    });
    const task = await response.json();
    
     } catch (error) {
    console.error(error);
  }
};


getTask();
