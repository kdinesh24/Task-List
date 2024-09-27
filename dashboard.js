// // Get tasks from localStorage
// const tasklist = JSON.parse(localStorage.getItem('task-list')) || []


// // Get necessary DOM elements
// const tableBody = document.querySelector('tbody')
// const filter = document.getElementById('filter')
// const taskCount = document.getElementById('task-count')

// // Function to display tasks
// function displayTasks() {
//     const selectedPriority = filter.value
//     tableBody.innerHTML = ''

//     let displayedTasks = selectedPriority 
//         ? tasklist.filter(task => task.priority === selectedPriority)
//         : tasklist

//     displayedTasks.forEach((task) => {
//         const row = document.createElement('tr')
//         row.innerHTML = `
            // <td>${task.name}</td>
            // <td>${task.desc}</td>
            // <td>${task.startDate}</td>
            // <td>${task.endDate}</td>
            // <td>${task.priority}</td>
            // <td><button onclick="addToProgress('${task.name}')">Add</button></td>
//         `
//         tableBody.appendChild(row)
//     })

//     taskCount.textContent = displayedTasks.length
// }

// // Function to add task to In-Progress
// function addToProgress(taskName) {
    // let priorityList = JSON.parse(localStorage.getItem('priority-list')) || []
    
//     const task = tasklist.find(task => task.name === taskName)
//     if (task) {
//         priorityList.push(task)
//         localStorage.setItem('priority-list', JSON.stringify(priorityList))
//         alert("Task added to In-Progress!")
//     }
// }

// // Add event listener for priority filter
// filter.addEventListener('change', displayTasks)

// // Initial display of tasks
// displayTasks()


const tasklist = JSON.parse(localStorage.getItem("task-list")) || []
const filter = document.getElementById("filter")
const taskCount = document.getElementById("task-count")
const tablebody = document.querySelector("tbody")

function displayTasks() {
    const selectedPriority = filter.value
    tablebody.innerHTML = ''

    let displayedTasks = selectedPriority ? tasklist.filter(task => task.priority === selectedPriority)
      : tasklist

      displayedTasks.forEach((task) => {
        const row = document.createElement("tr")

        row.innerHTML = `<td>${task.name}</td>
            <td>${task.desc}</td>
            <td>${task.startDate}</td>
            <td>${task.endDate}</td>
            <td>${task.priority}</td>
            <td><button onclick="addToProgress('${task.name}')">Add</button></td>`

            tablebody.append(row)
      })

      taskCount.textContent = displayedTasks.length
} 

function addToProgress(taskName) {
    let priorityList = JSON.parse(localStorage.getItem("priority-list")) || []

    const task = tasklist.find(task => task.name === taskName )
    if (task) {
        priorityList.push(task)
        localStorage.setItem("priority-list",JSON.stringify(priorityList))
        alert("Task added to Progress")

    }
    
}
filter.addEventListener("change",displayTasks)

displayTasks()