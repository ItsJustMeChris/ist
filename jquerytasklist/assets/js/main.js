$("#saveButton").click(function() {
    let div = $('<div></div>', {
        class: 'delete',
        id: taskID,
        text: $("#taskContent").val()
    }).appendTo($(".tasks")[0]);

    let checkbox = $('<input />', {
        type: 'checkbox'
    }).appendTo(div);

    checkbox.click(function() {
        this.parentElement.remove()
    })
})
