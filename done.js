// Get table body element
const tableBody = document.querySelector('tbody');

// Function to render done tasks
function renderDoneTasks() {
    const tasks = JSON.parse(localStorage.getItem('done-list')) || [];
    tableBody.innerHTML = '';

    tasks.forEach(task => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${task.name}</td>
            <td>${task.desc}</td>
            <td>${task.startDate}</td>
            <td>${task.endDate}</td>
            <td>${task.priority}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Initial render
renderDoneTasks();