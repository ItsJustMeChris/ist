$("#saveButton").click(function() {
    let div = $('<div></div>', {
        class: 'delete',
        text: $("#taskContent").val()
    }).appendTo($(".tasks")[0])

    let checkbox = $('<input />', {
        type: 'checkbox'
    }).appendTo(div).click(function() {
        this.parentElement.remove()
    })
})
