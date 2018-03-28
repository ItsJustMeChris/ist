//Our taskID, used for removing and adding elements
var taskID = 0
//Use ternary operator to setup an empty array or an array with our previous session data
var taskList = localStorage.getItem('taskList') ? JSON.parse(localStorage.getItem('taskList')) : []
//Use jquery's each function to go over our array to rebuild the task list from cache
$(taskList).each(function(i, val) {
  //Call our create task function
  createTask(val)
})
//Listen to the click event on the save button to create a task
$("#saveButton").click(function() {
    //Create a task when save button is clicked
    createTask($("#taskContent").val())
})

$('#clearButton').click(function() {
  $(".tasks")[0].innerHTML = ''
  localStorage.clear()
})
//createTask() function
function createTask(taskContent) {
  //Catch empty task content
  if (taskContent == null || taskContent == undefined || taskContent == '') { return false }
  //Add our task to our taskList array at [taskID] with value of taskContent
  taskList[taskID] = taskContent
  //Create a div element with the id of our task to make removing it from our cache easier
  let div = $('<div></div>', {
      //Class delete, to style the div
      class: 'delete',
      //ID, we will use taskID
      id: taskID,
      //Task content will be the text inside the div
      text: taskContent
      //Append the div to our task list
  }).appendTo($(".tasks")[0])
  //Create an input, which will be a checkbox to delete our task
  $('<input />', {
      //Make our input a checkbox
      type: 'checkbox'
      //Append our checkbox to our div, to associate them together
                  //register the on click event for our checkbox to remove the task
  }).appendTo(div).click(function() {
      //Remove the task from our taskList array with the ID, this is where the id of the div comes in handy
      taskList.splice(this.parentElement.id, 1)
      //remove the task element from the DOM
      this.parentElement.remove()
      //Update our local storage cache
      localStorage.setItem('taskList', JSON.stringify(taskList))
  })
  //Update our local storage cache from adding a task
  localStorage.setItem('taskList', JSON.stringify(taskList))
  //Increase our taskID by 1, old IDs are irrelevant and we don't decrease
  taskID++
  //Clear our task content value
  $('#taskContent').val('');
}
