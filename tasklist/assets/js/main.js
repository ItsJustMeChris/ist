//The task list div, I used class for an example of how to use class when fetching, but this is not a super good example
var taskList = document.getElementsByClassName('tasks')[0]
//Get our save button, to listen when its clicked
var saveButton = document.getElementById('saveButton')
//Get our task content (input box)
var taskContent = document.getElementById('taskContent')
//Using array, would be used to make a JSON.stringify and use cookies to store the tasks multi session
var currentTasks = []
//Current task ID, a way to track specific task, would mainly have been used for cookies, I dont think I even used it for anything here
var taskID = 0

//Listen to the save button for a click.
saveButton.addEventListener('click', function() {
    //Create a new div element for our task
    let div = document.createElement('div')
    //A new input which we will give a type checkbox for task removal
    let checkBox = document.createElement('input')
    //Giving the checkbox the attribute for checkbox
    checkBox.setAttribute('type', 'checkbox')
    //Give our divs content our task from our input checkBox
    div.textContent = taskContent.value
    //Give our checkbox a class, this could be used for styling in the future
    div.setAttribute('class', 'delete')
    //Give our div an ID of our taskID so that we can find it, this isn't really used in this example tho..
    div.setAttribute('id', taskID)
    //Append our task to our task list
    taskList.appendChild(div)
    //Append our checkbox to our task div
    div.appendChild(checkBox)
    //Add an event listener for our checkbox to remove the element
    checkBox.addEventListener('click', function() {
        //Remove our parent element of our clicked text box, this should be our task div
        this.parentElement.remove()
        //Remove our task from our task array, this is not needed in this example but for cookies would be helpful, same with the ID of the div
        currentTasks.splice(this.parentElement.id, 1)
    })
    //Add our task to our array with ID as it's index, again not needed for this example because its not using cookies..
    currentTasks[taskID] = {content:taskContent.value, id:taskID}
    //Increment our taskID
    taskID++
})
