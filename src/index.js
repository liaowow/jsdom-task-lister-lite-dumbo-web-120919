document.addEventListener("DOMContentLoaded", () => {
  // 1. elements we are listening for
  const newTaskForm = document.querySelector("#create-task-form");
  const newTaskContent = document.querySelector("#new-task-description");

  
  // 2. listen to the 'submit' event
  newTaskForm.addEventListener("submit", handleFormSubmit);

  // 3. do something about the 'submit' event
  function handleFormSubmit(event) {
    event.preventDefault();
    // create new to-do item
    const newToDo = document.createElement('li');
    // grab the task content and assign it as the innertext of the to-do item
    newToDo.innerText = newTaskContent.value;

    // add the item to MyToDo
    function addMyToDo(newToDo) {
      document.querySelector('#tasks').appendChild(newToDo);
    }

    addMyToDo(newToDo);
    event.target.reset();
  }

});

