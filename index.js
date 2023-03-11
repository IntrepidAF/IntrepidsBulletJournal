const addTaskButton = document.getElementById('add-task-button');
const taskContainer = document.getElementById('task-container');

addTaskButton.addEventListener('click', () => {
  const newTask = document.createElement('div');
  newTask.setAttribute('contenteditable', 'true');
  newTask.innerText = 'This is a new task';
  
  const dropdown = document.createElement('select');
  const option1 = document.createElement('option');
  option1.value = 'option1';
  option1.text = 'Option 1';
  const option2 = document.createElement('option');
  option2.value = 'option2';
  option2.text = 'Option 2';
  dropdown.appendChild(option1);
  dropdown.appendChild(option2);
  
  // Add event listener to the dropdown
  dropdown.addEventListener('change', () => {
    console.log('Dropdown clicked');
    console.log(dropdown.value); // Replace with desired action
  });
  
  const radio = document.createElement('input');
  radio.setAttribute('type', 'radio');
  radio.setAttribute('name', 'selected-tasks');
  
  // Add event listener to the radio button
  radio.addEventListener('click', () => {
    if (radio.checked) {
      newTask.classList.add('selected-task');
    } else {
      newTask.classList.remove('selected-task');
    }
  });
  
  newTask.appendChild(dropdown);
  newTask.appendChild(radio);
  
  taskContainer.appendChild(newTask);
});

// Add event listener to the task container to handle moving tasks
taskContainer.addEventListener('click', () => {
  const selectedTasks = taskContainer.querySelectorAll('.selected-task');
  console.log(`Moving ${selectedTasks.length} tasks`);
  // Replace with desired action
});

async function sendMessageToBackground(message) {
  return new Promise(resolve => {
    chrome.runtime.sendMessage(message, response => {
      resolve(response);
    });
  });
}

async function myFunction() {
  const response = await sendMessageToBackground({ key: 'value' });
  console.log(response);
}
