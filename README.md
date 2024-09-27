#Task Manager





## Folder structure

- index.html
- dashboard.html
- Progress.html
- Done.html
- Scripts/index.js
- Scripts/dashboard.js
- Scripts/progress.js
- Scripts/done.js
- Please ignore all the other files except the above-mentioned ones.





### Problem Statement:-

- Build an application where you can store all the tasks that you have.
- Your application had a Navbar that contains 4 tabs (this is already in the template no need to build).
  1. Home
  2. Dashboard
  3. In-Progress
  4. Done

### Home Page:-

- This page contains a form with 4 input boxes and one select tag having the following fields (this is already in the template no need to build).

1. Task Name
2. Description
3. Start Date (Input-Type-date)
4. End Date (Input-Type-date)
5. Priority

- On clicking on form submit (form submit event) you should store student's data in your local storage with key `task-list`.

`Hint : localStorage.setItem("task-list",JSON.stringify)`


- Refer to this doc to understand how to take input values from date - [Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date)

### Dashboard Page:-

- On this page all the data from the `task-list` will be shown in a table format.
- The table will have the following columns:-
  1. Name
  2. Description
  3. Start Date
  4. End Date
  5. Priority
  6. Add To Progress
- Here the values will come from the LacalStorage Except for the last column.
- On all the rows of the last column will have this value `Add`. This word is case sensitive. Please note that.
- When You click on the last cell of that row(Add) that row should be deleted both from DOM and from localStorage and should be added in a new localStorage with the key `priority-list`.

`Hint : localStorage.setItem("priority-list",JSON.stringify) `.



### Priority Page:-

- On this page all the data from the `priority-list` will be shown in a table format.
- The table will have the following columns:-
  1. Name
  2. Description
  3. Start Date
  4. End Date
  5. Priority
  6. Add To Done
- Here the values will come from the LacalStorage Except for the last column.
- All the rows of the last column will have this value `Add`. This word is case-sensitive. Please note that.
- When You click on the last cell of that row(Add) that row should be deleted both from DOM and from localStorage and should be added in a new localStorage with the key `done-list`.

`Hint : localStorage.setItem("done-list",JSON.stringify)`



### Done Page:-

- On this page all the data from the `done-list` will be shown in a table format.
- The table will have the following columns:-
  1. Name
  2. Description
  3. Start Date
  4. End Date
  5. Priority
- All the values on this page will come from the localStorage only.


### Bonus Features:-

- In the Dashboard page you will have a select field. You can filter tasks by priority with that.
- When you chose the default value in the select tag(Select Priority) all the tasks in the localstorage should be shown.
- On the Dashboard page there will also be a heading tag. You have to show the total number of tasks on that particular page.
- In the template you will have the heading like this

`<h1>Total Task:- <span id="task-count">0</span></h1>`.

- You have to catch this span tag and append the text there.


