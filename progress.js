// Get in-progress tasks from localStorage
const priorityList = JSON.parse(localStorage.getItem('priority-list')) || []

// Get table body element
const tableBody = document.querySelector('tbody')

// Function to display in-progress tasks
function displayProgressTasks() {
    tableBody.innerHTML = ''
    
    priorityList.forEach((task) => {
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${task.name}</td>
            <td>${task.desc}</td>
            <td>${task.startDate}</td>
            <td>${task.endDate}</td>
            <td>${task.priority}</td>
            <td><button onclick="addToDone('${task.name}')">Add</button></td>
        `
        tableBody.appendChild(row)
    })
}

// Simplified function to move task to Done
function addToDone(taskName) {
    let doneList = JSON.parse(localStorage.getItem('done-list')) || []
    
    const task = priorityList.find(task => task.name === taskName)
    if (task) {
        doneList.push(task)
        localStorage.setItem('done-list', JSON.stringify(doneList))
        alert("Task added to Done!")
    }
}

// Initial display of in-progress tasks
displayProgressTasks()