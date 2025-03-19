let tasks = document.getElementById('tasks')
let addBtn = document.getElementById('addTask')
let display = document.getElementById('displayTask')
addBtn.addEventListener('click', addTask)

//1ST SEND THE ADDED TASK TO A SERVER->

function addTask() {
  let task = tasks.value
  if (task) {
    addTaskToServer(task)
  } else {
    alert('Please enter a task!!!!')
  }
}
//function to add task to the server using post method and fetch api
function addTaskToServer(task) {
  fetch('http://localhost:2025/add-task', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: task,
  })
    .then((response) => response.json()) //this then to convert the response into json format
    .then((data) => {
      displayTask(task) //this then to display the task on browser
    })
    .catch((err) => {
      console.log('Error', err)
    })
}

function displayNewTask(task) {
  const taskDiv = document.createElement('div')
  taskDiv.textContent = task

  // Add "Delete" button
  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'Delete'
  deleteButton.addEventListener('click', () => {
    deleteTask(task) //function to delete task from server and browser
  })

  taskDiv.appendChild(deleteButton)
  taskList.appendChild(taskDiv)

  taskInput.value = '' // Clear the input field after adding
}

function deleteTask(task) {
  fetch('http://localhost:2025/add-task', {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message == 'Item deleted successfuly') {
        const taskDiv = document.querySelector(`div:contains("${task}")`)
        taskDiv.remove()
      }
    })
    .catch((err) => {
      console.log('Error', err)
    })
}
