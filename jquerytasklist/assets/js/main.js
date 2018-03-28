$("#saveButton").click(function() {
    let div = $('<div></div>', {
        class: 'delete',
        text: $("#taskContent").val()
    }).appendTo($(".tasks")[0])

    $('<input />', {
        type: 'checkbox'
    }).appendTo(div).click(function() {
        this.parentElement.remove()
    })
})
