const getTask = async () => {
  try {
   
    const test=localStorage.getItem("userID")
    console.log(userID);
    const response = await fetch(`http://localhost:5000/api/tasks/addtasks/${userID}`, {
      method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
    });

    const task = await response.json();
    displayTask(task);
  } catch (error) {
    console.error(error);
  }
};