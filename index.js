const form = document.querySelector("form")

form.addEventListener('submit', function(event) {
    event.preventDefault()


    const name = document.getElementById("name").value
    const desc = document.getElementById("desc").value
    const startDate = document.getElementById("start").value
    const endDate  = document.getElementById("end").value
    const priority = document.getElementById("priority").value

    const tasklist = JSON.parse(localStorage.getItem('task-list')) || []

    tasklist.push({name, desc, startDate, endDate, priority})
    localStorage.setItem("task-list",JSON.stringify(tasklist))
    alert("Your Task has been successfully saved To Dashboard")
    form.reset()
    



})